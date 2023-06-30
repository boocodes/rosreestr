import styled from "styled-components";
import {
    NavgiationWrapper,
    NavigationWrapperDisplaying,
}   from '../../../../../';

interface Props{


}

function ContainSettingsTab(props:Props){
    return(
        <ExternalWrapper>
            <NavgiationWrapper/>
            <NavigationWrapperDisplaying settingsNavigationType={"general"}/>
        </ExternalWrapper>
    )
}

const ExternalWrapper = styled.div`
    width: 1400px;
    margin: 40px auto;  
    display: flex;
`

export default ContainSettingsTab;