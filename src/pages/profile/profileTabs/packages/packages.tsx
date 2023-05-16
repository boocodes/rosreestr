import styled from "styled-components";
import {Link} from "react-router-dom";



interface Props{

}

function PackagesProfileTab(props:Props){

    return(
        <WorkspaceWrapper>
            <Title>Начните знакомство с пакетами для разработки</Title>
            <Subtitle>Безопасные публичные пакеты. Храните Ваши пакеты отдельно от Вашего кода и приватно делитесь ими со своей командой</Subtitle>
        </WorkspaceWrapper>
    )
}


const WorkspaceWrapper = styled.div`
    display: flex;
    flex-direction: column;
    font-family: 'Gilroy';
    margin-top: 40px;
`
const Title = styled.h3`
    font-size: 22px;
    margin-bottom: 15px;
`
const Subtitle = styled.p`
    font-size: 15px;
    width: 400px;
`


export default PackagesProfileTab;