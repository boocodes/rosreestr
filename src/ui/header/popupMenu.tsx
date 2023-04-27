import styled from "styled-components";
import {useAppSelector} from "../../hooks/useAppSelector";
import {selectUserData} from "../../redux/reducers/user/selector";
import {Link} from "react-router-dom";


interface Props{
    setPopularUserCabinetFlag: (flag: boolean)=>void;
}


function PopupUserCabinetLinkMenu(props:Props){

    const userData = useAppSelector(selectUserData);


    return(
        <ExternalWrapper>
            <Title>
                <TitleText>Вы вошли как {userData.login}</TitleText>
            </Title>
            <UndertitleLine/>
            <AdditionalMenu>
                <AdditionalMenuItem onClick={()=>props.setPopularUserCabinetFlag(false)} to={"/profile/" + userData.login}>Ваш аккаунт</AdditionalMenuItem>
                <AdditionalMenuItem onClick={()=>props.setPopularUserCabinetFlag(false)} to={"/settings/common"}>Настройки</AdditionalMenuItem>
                <AdditionalMenuItem onClick={()=>props.setPopularUserCabinetFlag(false)} to={"/logout"}>Выйти</AdditionalMenuItem>
            </AdditionalMenu>

        </ExternalWrapper>
    )
}

const ExternalWrapper = styled.div`
    font-family: 'Gilroy';
    padding: 15px 0px;
    z-index: 10;
    position: absolute;
    background-color: white;
    border-radius: 5px;
    right: 70px;
    top: 80px;
    border: 1px solid gray;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    
`
const Title = styled.div`
    padding: 0px 30px;
`
const TitleText = styled.p`
   margin-bottom: 15px;
`
const UndertitleLine = styled.div`
    position: relative;
    width: 100%;
    height: 1px;
    background-color: #d0d7de;
    
`

const AdditionalMenu = styled.div`
    margin-top: 15px;
    padding: 0px 30px;
    display: flex;
    flex-direction: column;
`

const AdditionalMenuItem = styled(Link)`
    text-decoration: none;
    color: black;
    :hover{
        opacity: 0.5;
        transition: 0.5s;
    }
    margin-bottom: 25px;
    :last-child{
        margin-bottom: 0px;
    }
`

export default PopupUserCabinetLinkMenu;