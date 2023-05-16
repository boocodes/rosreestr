
import styled from "styled-components";
import Header from "../../ui/header/header";
import Footer from "../../ui/footer/footer";
import {useState, useRef} from "react";
import {useNavigate} from "react-router-dom";
import {fetchMethod, loginUserMethod} from "../../utils/fetchMethod";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {changeUserAuthFlag, changeUserData} from "../../redux/reducers/user/reducer";
import {Link} from "react-router-dom";
import wrongPasswordModal from "../../ui/modal/wrongPassword/wrongPasswordModal";
import {changeWrongPasswordOrLoginFlag} from "../../redux/reducers/modalWindows/reducer";
import {useAppSelector} from "../../hooks/useAppSelector";
import {selectModalWindowsFlags} from "../../redux/reducers/modalWindows/selector";
import WrongPasswordModal from "../../ui/modal/wrongPassword/wrongPasswordModal";

interface Props{

}

interface ILoginResponseSuccess{
    "message": {
        firstname: string;
        lastname: string;
        mail: string;
        password: string;
        created: string;
        updated: string;
        login: string;
        workspace_id: string;
        user_id: string;
    }
}


function LoginPage(props:Props) {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const regForm = useRef<HTMLFormElement>(null);

    async function submitForm(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const object = {
            // @ts-ignore
            login: regForm.current?.children[0].children[1].value,
            // @ts-ignore
            password: regForm.current?.children[1].children[1].value,
        }
        console.log(object);
        loginUserMethod("POST", object, "https://rosreestr/api/user/login.php", navigate, dispatch, changeUserAuthFlag, changeUserData, changeWrongPasswordOrLoginFlag);
    }

        const modalWindowsFlag = useAppSelector(selectModalWindowsFlags);

        return (
            <>
                <ExternalWrapper>
                    <GoBackWrapper>
                        <GoBackButtonLink to={"/welcome"}>Вернуться</GoBackButtonLink>
                    </GoBackWrapper>
                    <LoginFormWrapper>
                        <LoginForm ref={regForm} onSubmit={submitForm}>
                            <LoginInputWrapper>
                                <LoginInputLabel>Имя пользователя</LoginInputLabel>
                                <LoginInput placeholder={"код01"} type={"text"}/>
                            </LoginInputWrapper>
                            <PasswordInputWrapper>
                                <PasswordInputLabel>Пароль</PasswordInputLabel>
                                <PasswordInput placeholder={"13ao4"} type={"password"}/>
                            </PasswordInputWrapper>
                            <SubmitButtonWrapper>
                                <SubmitButton type={"submit"} value={"Отправить"}/>
                            </SubmitButtonWrapper>
                        </LoginForm>
                    </LoginFormWrapper>
                </ExternalWrapper>
                {
                    modalWindowsFlag.wrongPasswordOrLogin ?
                        <WrongPasswordModal/>
                        :
                        null
                }
            </>
        )
}

const ExternalWrapper = styled.div`
    width: 400px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 200px;
    font-family: 'Gilroy';
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const GoBackWrapper = styled.div`
    width: 300px;
`
const GoBackButtonLink = styled(Link)`
    border: none;
    font-size: 18px;
    font-weight: 700;
    text-decoration: none;
    padding: 10px 15px;
    border-radius: 5px;
    font-family: 'Gilroy';
    background-color: #d0d7de;
    color: white;
    cursor: pointer;
`
const LoginFormWrapper = styled.div`
    margin-top: 40px;
`

const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
`
const SubmitButtonWrapper = styled.div`
    margin-top: 30px;
`
const SubmitButton = styled.input`
    border: none;
    padding: 15px 20px;
    border-radius: 5px;
    background-color: #FBE308;
    cursor: pointer;
    :hover{
        transition: 0.5s;
        opacity: 0.5;
    }
    color: white;
    font-size: 18px;
`

const LoginInputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 50px;
`
const LoginInputLabel = styled.label`
    font-size: 20px;
    margin-bottom: 10px;
`
const LoginInput = styled.input`
    width: 300px;
    font-size: 17px;
    padding: 5px 10px;
    border-radius: 5px;
    border: 1px solid #d0d7de;
    color: #1f2328;
`

const PasswordInputWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

const PasswordInputLabel = styled.label`
    font-size: 20px;
    margin-bottom: 10px;
`

const PasswordInput = styled.input`
    width: 300px;
    font-size: 17px;
    padding: 5px 10px;
    border-radius: 5px;
    border: 1px solid #d0d7de;
    color: #1f2328;
`

export default LoginPage;