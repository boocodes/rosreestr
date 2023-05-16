import styled from "styled-components";
import ContributionTable from "./contributionTable";


interface Props{
    contributionCount: number;
}

function ContributionBlock(props:Props){


    return(
        <>
            <ExternalWrapper>
                <Title>{props.contributionCount} внесений изменений в этом году</Title>
                <ContributionTable/>
            </ExternalWrapper>
        </>
    )
}

const ExternalWrapper = styled.div`

`

const Title = styled.h3`

`


export default ContributionBlock;