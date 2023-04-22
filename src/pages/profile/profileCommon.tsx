import styled from "styled-components";
import {useAppSelector} from "../../hooks/useAppSelector";
import {selectUserData} from "../../redux/reducers/user/selector";
import Header from "../../ui/header/header";
import Footer from "../../ui/footer/footer";
import noAvatarIcon from "../../images/no-image-avatar.svg";
import {Link, useLocation, useParams} from "react-router-dom";


interface Props{

}


function ProfileCommonPage(props:Props){

    const userData = useAppSelector(selectUserData)

    return(
        <>
                <AboutUserWrapper>
                    <UserImage><img src={noAvatarIcon}/></UserImage>
                    <UserDataTextFieldWrapper>
                        <UserFirstname>{userData.firstname}</UserFirstname>
                        <UserLogin>{userData.login}</UserLogin>
                    </UserDataTextFieldWrapper>
                    <EditUserDataButtonWrapper>
                        <EditUserDataButton>Изменить</EditUserDataButton>
                    </EditUserDataButtonWrapper>
                    <AchievmentsWrapper>
                        <AchievmentsTitle>Достижения:</AchievmentsTitle>
                        <AchievmentsListWrapper>
                            <AchievmentsListElem>Список пуст</AchievmentsListElem>
                        </AchievmentsListWrapper>
                    </AchievmentsWrapper>
                </AboutUserWrapper>

        </>
    )
}


const AboutUserWrapper = styled.div`
    font-family: 'Gilroy';
    padding: 30px 0px 30px 40px;
`


const UserImage = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 5px; 
`
const UserDataTextFieldWrapper = styled.div`
  margin-top: 25px;
`
const UserFirstname = styled.p`
    font-size: 32px;
    font-weight: 600;
   
    margin-bottom: 5px;
`
const UserLogin = styled.p`
    font-size: 24px;
    opacity: 0.7;
`

const EditUserDataButtonWrapper = styled.div`
    margin-top: 20px;
`
const EditUserDataButton = styled.button`
    width: 250px;
    border: none;
    font-size: 24px;
    font-family: 'Gilroy';
    padding: 10px 15px;
    border-radius: 5px;
    cursor: pointer;
`
const AchievmentsWrapper = styled.div`
    margin-top: 30px;
`
const AchievmentsTitle = styled.p`
    font-size: 24px;
`
const AchievmentsListWrapper = styled.div`

`
const AchievmentsListElem = styled.div`

`



export default ProfileCommonPage;