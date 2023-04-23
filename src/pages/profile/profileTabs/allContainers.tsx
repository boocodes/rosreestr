import styled from "styled-components";
import {Link, useLocation} from "react-router-dom";
import {getLastElemOfPath} from "../../../utils/paramsMethods";



interface Props{

}

function AllContainersProfileTab(props:Props){
    return(
        <WorkspaceWrapper>
            <RecentContainsWrapper>
                <RecentContainsWrapperTitle>Все контейнеры</RecentContainsWrapperTitle>
                <RecentContainsListWrapper>
                    <RecentContainsListElem></RecentContainsListElem>
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