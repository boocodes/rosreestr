import styled from "styled-components";
import {Link, useLocation} from "react-router-dom";
import {getLastElemOfPath} from "../../../../utils/paramsMethods";
import {getSelfContains} from "../../../../utils/fetchMethod";
import {useEffect} from "react";
import {useAppSelector} from "../../../../hooks/useAppSelector";
import {selectContains} from "../../../../redux/reducers/contain/selector";
import {useDispatch} from "react-redux";
import {addContain} from "../../../../redux/reducers/contain/reducer";
import {selectUserData} from "../../../../redux/reducers/user/selector";
import {useAppDispatch} from "../../../../hooks/useAppDispatch";
import {isArrayEmpty} from "../../../../utils/usefullMethods";
import ContainersFindHeader from "./containersFindHeader/containersFindHeader";
import ContainerDisplayingElem from "./ContainerDisplayingElem";

interface Props{

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
        getSelfContains("POST", objectData, "https://rosreestr/api/container/get_self_contains.php", dispatch, addContain);
    }, [])



    return(
        <WorkspaceWrapper>
            <RecentContainsWrapper>
                <ContainersFindHeader/>
                <RecentContainsListWrapper>
                    {isArrayEmpty(containList) ? <RecentContainsListElemTitle>Контейнеров нет</RecentContainsListElemTitle> : <ContainerDisplayingElem containList={containList}/> }
                </RecentContainsListWrapper>
            </RecentContainsWrapper>

        </WorkspaceWrapper>
    )
}

const RecentContainsWrapper = styled.div`
    margin-top: 50px;
`

const RecentContainsListWrapper = styled.div`

`


const RecentContainsListElemTitle = styled.p`
    font-size: 20px;
    margin-right: 100px;
`


const WorkspaceWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    font-family: 'Gilroy';
`

export default AllContainersProfileTab;