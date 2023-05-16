import styled from "styled-components";


interface Props{


}

function ContainSettingsTab(props:Props){
    return(
        <ExternalWrapper>
            Настройки (в разработке)
        </ExternalWrapper>
    )
}

const ExternalWrapper = styled.div`
    margin: 30px 70px;
    font-size: 20px;
`

export default ContainSettingsTab;