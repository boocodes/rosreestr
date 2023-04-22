
import styled from "styled-components";
import Header from "../../ui/header/header";
import Footer from "../../ui/footer/footer";
import {useState, useRef} from "react";
import {useNavigate} from "react-router-dom";
import {fetchMethod, loginUserMethod} from "../../utils/fetchMethod";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {changeUserAuthFlag, changeUserData} from "../../redux/reducers/user/reducer";
import {Link} from "react-router-dom";

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
interface ILoginFail{
    "message": string;
}

function LoginPage(props:Props) {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const regForm = useRef<HTMLFormElement>(null);

    async function submitForm(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const object = {
            // @ts-ignore
            login: regForm.current?.children[0].value,
            // @ts-ignore
            password: regForm.current?.children[1].value,
        }

        loginUserMethod("POST", object, "https://rosreestr/vendor/api/user/login.php", navigate, dispatch, changeUserAuthFlag, changeUserData);
    }


        return (
            <ExternalWrapper>
                <GoBackWrapper>
                    <GoBackButton><Link to={"/welcome"}>Вернуться</Link></GoBackButton>
                </GoBackWrapper>
                <LoginFormWrapper>
                    <LoginForm ref={regForm} onSubmit={submitForm}>
                        <input placeholder={"Имя пользователя"} type={"text"}/>
                        <input placeholder={"Пароль"} type={"text"}/>
                        <SubmitButtonWrapper>
                            <SubmitButton type={"submit"} value={"Отправить"}/>
                        </SubmitButtonWrapper>
                    </LoginForm>
                </LoginFormWrapper>
            </ExternalWrapper>
        )
}

const ExternalWrapper = styled.div`
    border: 1px solid red;
    width: 400px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 100px;
    font-family: 'Gilroy';
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const GoBackWrapper = styled.div`
    width: 400px;
`
const GoBackButton = styled.button`
    border: none;
    font-size: 16px;
    padding: 10px 15px;
    border-radius: 5px;
    font-family: 'Gilroy';
    cursor: pointer;
    :hover{
        transition: 0.5s;
        opacity: 0.5;
    }
`
const LoginFormWrapper = styled.div`
    margin-top: 40px;
`
const LastNameAndFirstNameInputWrapper = styled.div`
    margin-bottom: 30px;
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

export default LoginPage;