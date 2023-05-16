import styled from "styled-components";


interface Props{


}

function ContainIssuesTab(props:Props){
    return(
        <ExternalWrapper>
            Проблемы (в разработке)
        </ExternalWrapper>
    )
}

const ExternalWrapper = styled.div`
    margin: 30px 70px;
    font-size: 20px;
`

export default ContainIssuesTab;