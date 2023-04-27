import styled from "styled-components";
import {Link, useLocation} from "react-router-dom";
import {getLastElemOfPath} from "../../../utils/paramsMethods";
import {getSelfContains} from "../../../utils/fetchMethod";
import {useEffect} from "react";
import {useAppSelector} from "../../../hooks/useAppSelector";
import {selectContains} from "../../../redux/reducers/contain/selector";
import {useDispatch} from "react-redux";
import {addContain} from "../../../redux/reducers/contain/reducer";
import {selectUserData} from "../../../redux/reducers/user/selector";
import {useAppDispatch} from "../../../hooks/useAppDispatch";
import {isArrayEmpty} from "../../../utils/usefullMethods";

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
}

interface IDisplayingContainsListProps{
    containList: IContainsList[];
}

function DisplayingContainsList(props:IDisplayingContainsListProps){
    console.log(props)
    return (
        <RecentContainsListWrapper>
            {
                props.containList.map((elem:IContainsList)=>{
                    return(
                        <RecentContainsListElemWrapper key={elem.title}>
                            <RecentContainsListElemTitlePlusDescriptionWrapper>
                                <RecentContainsListElemTitle>
                                    Название: {elem.title}
                                </RecentContainsListElemTitle>
                                <RecentContainsListElemDescription>
                                    Описание: {elem.description}
                                </RecentContainsListElemDescription>
                            </RecentContainsListElemTitlePlusDescriptionWrapper>
                        </RecentContainsListElemWrapper>
                    )
                })
            }
        </RecentContainsListWrapper>
    )
}

function AllContainersProfileTab(props:Props){
    const containList = useAppSelector(selectContains);
    const userData = useAppSelector(selectUserData);
    const dispatch = useAppDispatch();
    console.log(containList);
    useEffect(()=>{
        const objectData = {
            user_id: userData.user_id,
            user_password: userData.password,
        }
        getSelfContains("POST", objectData, "https://rosreestr/vendor/api/container/get_self_contains.php", dispatch, addContain);
    }, [])



    return(
        <WorkspaceWrapper>
            <RecentContainsWrapper>
                <RecentContainsListWrapper>
                    {isArrayEmpty(containList) ? <RecentContainsListElemTitle>Контейнеров нет</RecentContainsListElemTitle> : <DisplayingContainsList containList={containList}/> }
                </RecentContainsListWrapper>
            </RecentContainsWrapper>

        </WorkspaceWrapper>
    )
}

const RecentContainsWrapper = styled.div`
    margin-top: 50px;
`
const RecentContainsWrapperTitle = styled.p`
    font-size: 22px;
    margin-bottom: 50px;
    
`
const RecentContainsListWrapper = styled.div`

`

const RecentContainsListElemWrapper = styled.div`
    margin-top: 40px;
    :first-child{
        margin-top: 0px;
    }
    display: flex;
    border: 1px solid #d8dee4;
    padding: 20px 50px;
    :hover{
        opacity: 0.5;
    }
    cursor: pointer;
`

const RecentContainsListElemTitlePlusDescriptionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    
`

const RecentContainsListElemTitle = styled.p`
    font-size: 20px;
    margin-right: 100px;
`
const RecentContainsListElemCreated = styled.p`

`
const RecentContainsListElemDescription = styled.p`
    margin-top: 10px;
`


const WorkspaceWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    font-family: 'Gilroy';
`

export default AllContainersProfileTab;