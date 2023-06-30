import styled from "styled-components";
import {Link, useLocation} from "react-router-dom";
import {useEffect} from "react";
import {
    getLastElemOfPath,
    getSelfContains,
    useAppDispatch,
    useAppSelector,
    selectContains,
    addContain,
    selectUserData,
    isArrayEmpty,
    ContainersFindHeader,
    ContainerDisplayingElem,
}   from '../../../../';


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