import styled from "styled-components";


interface Props{


}

function ContainPullRequestsTab(props:Props){
    return(
        <ExternalWrapper>
            Запросы на вытягивание (в разработке)
        </ExternalWrapper>
    )
}

const ExternalWrapper = styled.div`
    margin: 30px 70px;
    font-size: 20px;
`

export default ContainPullRequestsTab;