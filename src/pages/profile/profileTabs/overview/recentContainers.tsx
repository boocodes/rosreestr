import styled from "styled-components";
import {Link} from "react-router-dom";
import PopularRepositioriesBlock from "./popularSection/popularRepositoriesBlock";
import ContributionBlock from "./contributionSection/contributionBlock";



interface Props{

}

function RecentContainersProfileTab(props:Props){

    return(
        <WorkspaceWrapper>
            <RecentContainsWrapper>
                <PopularRepositioriesBlock/>
                <ContributionBlock contributionCount={300}/>
            </RecentContainsWrapper>

        </WorkspaceWrapper>
    )
}

const RecentContainsWrapper = styled.div`
    margin-top: 50px;
`


const WorkspaceWrapper = styled.div`
    display: flex;
    flex-direction: column;
    font-family: 'Gilroy';
`

export default RecentContainersProfileTab;