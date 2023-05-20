import styled from 'styled-components';
import PopularContainerElemWrapper from "./popularContainerElemWrapper";
import {useAppSelector} from "../../../../../hooks/useAppSelector";
import {selectContains} from "../../../../../redux/reducers/contain/selector";
import {selectUserData} from "../../../../../redux/reducers/user/selector";
import {useAppDispatch} from "../../../../../hooks/useAppDispatch";
import {useEffect} from "react";
import {getSelfContains} from "../../../../../utils/fetchMethod";
import {addContain} from "../../../../../redux/reducers/contain/reducer";
import {getBooleanFromTextBoolean} from "../../../../../utils/usefullMethods";

interface Props{

}

interface IContainsList{
    title: string;
    contain_link: string;
    private: string;
    user_id: string;
    edited: string;
    created: string;
    contain_id: string;
    description: string;
    contain_author_login: string;
}



function PopularRepositioriesBlock(props:Props){


    const containList = useAppSelector(selectContains);
    const userData = useAppSelector(selectUserData);
    const dispatch = useAppDispatch();

    useEffect(()=>{
        const objectData = {
            user_id: userData.user_id,
            user_password: userData.password,
        }
        getSelfContains("POST", objectData, "https://rosreestr/api/container/get_self_contains.php", dispatch, addContain);
    }, [])
    console.log(containList);

    return(
        <>
            <ExternalWrapper>
                <WrapperTitle>
                    Популярные контейнеры
                </WrapperTitle>
                <PopularContainersWrapper>
                    {containList.map((elem: IContainsList)=>{
                        return <PopularContainerElemWrapper key={elem.title} title={elem.title} language={"TypeScript"} closed={getBooleanFromTextBoolean(elem.private)}/>
                    })}
                </PopularContainersWrapper>
            </ExternalWrapper>
        </>
    )
}

const ExternalWrapper = styled.div`
    margin-bottom: 50px;
`
const WrapperTitle = styled.h3`
    margin-bottom: 30px;
`

const PopularContainersWrapper = styled.div`
    display: flex;
    width: 900px;
    flex-wrap: wrap;
`



export default PopularRepositioriesBlock;