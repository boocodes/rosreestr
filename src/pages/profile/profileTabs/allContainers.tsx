import styled from "styled-components";
import {Link} from "react-router-dom";



interface Props{

}

function AllContainersProfileTab(props:Props){

    return(
        <WorkspaceWrapper>
            <WorkspaceWrapperHeader>
                <WorkspaceWrapperHeaderElement to={"/profile"}>Предпросмотр</WorkspaceWrapperHeaderElement>
                <WorkspaceWrapperHeaderElement to={"./contains"}>Контейнеры</WorkspaceWrapperHeaderElement>
            </WorkspaceWrapperHeader>
            <RecentContainsWrapper>
                <RecentContainsWrapperTitle>Все контейнеры</RecentContainsWrapperTitle>
                <RecentContainsListWrapper>
                    <RecentContainsListElem></RecentContainsListElem>
                </RecentContainsListWrapper>
            </RecentContainsWrapper>

        </WorkspaceWrapper>
    )
}

const WorkspaceWrapperHeader = styled.div`
    display: flex;
    align-items: center;
    margin-top: 50px;
`

const WorkspaceWrapperHeaderElement = styled(Link)`
    text-decoration: none; 
    color: black;
    margin-right: 10px;
    font-size: 20px;
    :first-child{
        border-bottom: 2px solid #fd8c73;
    }
    padding: 10px;
`

const RecentContainsWrapper = styled.div`
    margin-top: 50px;
`
const RecentContainsWrapperTitle = styled.p`
    font-size: 22px;
    
`
const RecentContainsListWrapper = styled.div`

`
const RecentContainsListElem = styled.p`

`


const WorkspaceWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 70px;
    font-family: 'Gilroy';
`

export default AllContainersProfileTab;