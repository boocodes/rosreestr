import styled from "styled-components";
import ContributionTableImage from "../../../../../images/contirbutionTable.png";



interface Props{


}


function ContributionTable(props:Props){


    return(
        <>
            <ExternalWrapper>
                <TableImage src={ContributionTableImage}/>
            </ExternalWrapper>
        </>
    )
}

const ExternalWrapper = styled.div`
    margin-top: 30px;
    margin-bottom: 30px;
`

const TableImage = styled.img`
    width: 850px;
`


export default ContributionTable;