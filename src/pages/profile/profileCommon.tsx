import styled from "styled-components";
import noAvatarIcon from "../../images/no-image-avatar.svg";
import {Link, useLocation, useParams} from "react-router-dom";
import {useEffect, useRef, useState} from "react";
import {
    useAppDispatch,
    useAppSelector,
    Header,
    Footer,
    getViewPageByLogin,
    getLastElemOfPath,
    changeViewPageUserData,
    selectViewPageUserData,
    selectUserData,
}   from '../../';




interface Props{

}


function ProfileCommonPage(props:Props){

    const location = useLocation();

    const dispatch = useAppDispatch();
    const [selectedFile, setSelectedFile] = useState("");



    const userData = useAppSelector(selectUserData)
    const file = useRef<HTMLInputElement>(null);



    function send(event:any){
        event.preventDefault();
        const userObjectData = {
            password: userData.password,
            login: userData.login,
        }
        let objectData = event.target.files[0];
        objectData.user_password = userData.password;
        objectData.user_login = userData.login;
        setSelectedFile(objectData);

    }

    useEffect(()=>{
        console.log(userData);
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
            fetch("https://rosreestr/api/user/update_user_avatar.php", {
                method: "POST",
                body: formData,
                headers: {
                        "Authorization": userData.login + " " + userData.password,
                },

            })
                .then(()=>{
                    const login = getLastElemOfPath(location.pathname);
                    const objectData = {
                        login,
                    }
                    getViewPageByLogin("POST", objectData, "https://rosreestr/api/user/get_user_page_by_login.php", dispatch, changeViewPageUserData);
                })
        }
    },[selectedFile])


    const userViewPageData = useAppSelector(selectViewPageUserData);

    console.log(userViewPageData);

    return(
        <>
                <AboutUserWrapper>
                    <FormAvatar method={"POST"} action={"update_user_avatar.php"} onSubmit={(event:any)=>event.preventDefault()}>
                        <input name={"filename"} onChange={send} ref={file} accept={".jpg, .jpeg, .png"} type={"file"}/>
                    </FormAvatar>

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
const FormAvatar = styled.form`
    margin-bottom: 20px;
`


export default ProfileCommonPage;