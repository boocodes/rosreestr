import styled from "styled-components";
import {useAppSelector} from "../../hooks/useAppSelector";
import {selectUserData} from "../../redux/reducers/user/selector";


interface Props{

}


function PopupUserCabinetLinkMenu(props:Props){

    const userData = useAppSelector(selectUserData);


    return(
        <ExternalWrapper>
            <Title>
                <TitleText>Вы вошли как {userData.login}</TitleText>
            </Title>
            <AdditionalMenu>
                <AdditionalMenuItem href={"/profile"}>Ваш аккаунт</AdditionalMenuItem>
            </AdditionalMenu>

        </ExternalWrapper>
    )
}

const ExternalWrapper = styled.div`
    font-family: 'Gilroy';
    padding: 15px 30px;
    z-index: 10;
    position: absolute;
    background-color: white;
    border-radius: 5px;
    right: 70px;
    top: 90px;
    border: 1px solid gray;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    
`
const Title = styled.div`
    
`
const TitleText = styled.p`

`
const AdditionalMenu = styled.div`
    margin-top: 15px;
`

const AdditionalMenuItem = styled.a`

`

export default PopupUserCabinetLinkMenu;