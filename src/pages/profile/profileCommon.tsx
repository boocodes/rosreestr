import styled from "styled-components";
import {useAppSelector} from "../../hooks/useAppSelector";
import {selectUserData, selectViewPageUserData} from "../../redux/reducers/user/selector";
import Header from "../../ui/header/header";
import Footer from "../../ui/footer/footer";
import noAvatarIcon from "../../images/no-image-avatar.svg";
import {Link, useLocation, useParams} from "react-router-dom";
import {useEffect, useRef, useState} from "react";
import {getViewPageByLogin} from "../../utils/fetchMethod";
import {getLastElemOfPath} from "../../utils/paramsMethods";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {changeViewPageUserData} from "../../redux/reducers/user/reducer";
import internal from "stream";


interface Props{

}


function ProfileCommonPage(props:Props){

    const locaction = useLocation();

    const dispatch = useAppDispatch();



    useEffect(()=>{
        const login = getLastElemOfPath(locaction.pathname);
        const objectData = {
            login,
        }
        getViewPageByLogin("POST", objectData, "https://rosreestr/vendor/api/user/get_user_page_by_login.php", dispatch, changeViewPageUserData);
    }, [])


    const userData = useAppSelector(selectUserData)
    const file = useRef<HTMLInputElement>(null);

    const [selectedFile, setSelectedFile] = useState("");

    function cnag(event:any){
        console.log(event.target.file);
        event.preventDefault();
        const userObjectData = {
            password: userData.password,
            login: userData.login,
        }
        let objectData = event.target.files[0];
        objectData.user_password = userData.password;
        objectData.user_login = userData.login;
        setSelectedFile(objectData);
        console.log(selectedFile);

    }

    useEffect(()=>{
        if(selectedFile === "" || selectedFile === undefined){
            return;
        }
        else{
            let formData = new FormData();
            //@ts-ignore
            formData.append("filename", selectedFile);

            interface IUserRequestData {
                password: string;
                login: string;
            }

            const userRequestData:IUserRequestData = {
                password: userData.password,
                login: userData.login,
            }

            // @ts-ignore
            formData.append("userdata", userRequestData);
            fetch("https://rosreestr/vendor/api/user/update_user_avatar.php", {
                method: "POST",
                // @ts-ignore
                body: formData,

            });
        }
    },[selectedFile])

    function sendFile(event:any){
        event.preventDefault();



    }


    const userViewPageData = useAppSelector(selectViewPageUserData);
    return(
        <>
                <AboutUserWrapper>
                    <form method={"POST"} action={"update_user_avatar.php"} onSubmit={sendFile}>
                        <input name={"filename"} onChange={cnag} ref={file} onSubmit={sendFile} type={"file"}/>
                    </form>

                    <UserImage src={userViewPageData.avatar_src} alt={"Картинка пользователя"}></UserImage>
                    <UserDataTextFieldWrapper>
                        <UserFirstname>{userViewPageData.firstname}</UserFirstname>
                        <UserLogin>{userViewPageData.login}</UserLogin>
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


const UserImage = styled.img`
    width: 200px;
    height: 200px;
    border-radius: 15px; 
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