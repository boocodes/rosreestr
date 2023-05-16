import styled from "styled-components";
import {Link} from "react-router-dom";



interface Props{

}

function ProjectsProfileTab(props:Props){

    return(
        <WorkspaceWrapper>
            <Title>Создайте свой первый проект</Title>
            <Subtitle>Проекты это изменяемые, самонастраивающийся инструмент для планирования и отслеживания Вашей работы</Subtitle>
            <SubmitButton>Новый проект</SubmitButton>
        </WorkspaceWrapper>
    )
}


const WorkspaceWrapper = styled.div`
    font-family: 'Gilroy';
    border: 1px solid #d0d7de;
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px;
    border-radius: 10px;
`

const Title = styled.h3`
    font-size: 23px;
    margin-bottom: 20px;
`

const Subtitle = styled.p`
    font-size: 14px;
    width: 350px;
    text-align: center;
    margin-bottom: 20px;
`
const SubmitButton = styled.button`
    color: #1f883d;
    border: 1px solid #1e793a;
    background-color: #1f883d;
    border-radius: 5px;
    color: white;
    padding: 5px;
`



export default ProjectsProfileTab;