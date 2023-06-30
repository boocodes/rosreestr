import styled from "styled-components";
import Header from "../../ui/header/header/header";
import Footer from "../../ui/footer/footer";
import {useRef} from "react";
import {useNavigate} from "react-router-dom";
import {Link} from "react-router-dom";
import {
    registrateUserMethod,
    useAppSelector,
    selectModalWindowsFlags,
    UserAlreadyExistModal,
    useAppDispatch,
    changeUserAlreadyExistFlag
}   from '../../';


interface Props{

}

function RegistrationPage(props:Props){
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const modalWindowsFlag = useAppSelector(selectModalWindowsFlags);
    const regForm = useRef<HTMLFormElement>(null);

    function submitForm(event:React.FormEvent<HTMLFormElement>){
        event.preventDefault();

        const object = {
            // @ts-ignore
            firstname: regForm.current?.children[0].children[0].value,
            //@ts-ignore
            lastname: regForm.current?.children[0].children[1].value,
            // @ts-ignore
            login: regForm.current?.children[1].value,
            // @ts-ignore
            mail: regForm.current?.children[2].value,
            // @ts-ignore
            password: regForm.current?.children[3].value,

        }

        registrateUserMethod("POST", object, dispatch, changeUserAlreadyExistFlag, "https://rosreestr/api/user/registration.php", navigate);
    }


    return(
        <>
            <ExternalWrapper>
                <GoBackWrapper>
                    <GoBackButtonLink to={"/welcome"}>Вернуться</GoBackButtonLink>
                </GoBackWrapper>
                <LoginFormWrapper>
                    <LoginForm ref={regForm} method={"POST"} onSubmit={submitForm} >
                        <LastNameAndFirstNameInputWrapper>
                            <FirstnameInput placeholder={"Имя"} type={"text"} />
                            <LastnameInput placeholder={"Фамилия"} type={"text"} />
                        </LastNameAndFirstNameInputWrapper>
                        <LoginInput placeholder={"Имя пользователя"} type={"text"}/>
                        <EmailInput placeholder={"Электронная почта"} type={"email"}/>
                        <PasswordInput placeholder={"Пароль"} type={"password"}/>
                        <SubmitButtonWrapper>
                            <SubmitButton type={"submit"} value={"Отправить"}/>
                        </SubmitButtonWrapper>
                    </LoginForm>
                </LoginFormWrapper>
            </ExternalWrapper>
            {
                modalWindowsFlag.userAlreadyExist ?
                    <UserAlreadyExistModal/>
                    :
                    null
            }
        </>
    )
}

const ExternalWrapper = styled.div`
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
    margin-right: 320px;
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
const LastNameAndFirstNameInputWrapper = styled.div`
    margin-bottom: 30px;
`
const FirstnameInput = styled.input`
    font-size: 17px;
    padding: 5px 10px;
    border-radius: 5px;
    border: 1px solid #d0d7de;
    color: #1f2328;
    margin-right: 20px;
`
const LastnameInput = styled.input`
    font-size: 17px;
    padding: 5px 10px;
    border-radius: 5px;
    border: 1px solid #d0d7de;
    color: #1f2328;
`
const LoginInput = styled.input`
    margin-bottom: 30px;
    font-size: 17px;
    padding: 5px 10px;
    border-radius: 5px;
    border: 1px solid #d0d7de;
    color: #1f2328;
`

const EmailInput = styled.input`
    margin-bottom: 30px;
    font-size: 17px;
    padding: 5px 10px;
    border-radius: 5px;
    border: 1px solid #d0d7de;
    color: #1f2328;
`
const PasswordInput = styled.input`
    font-size: 17px;
    padding: 5px 10px;
    border-radius: 5px;
    border: 1px solid #d0d7de;
    color: #1f2328;
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

export default RegistrationPage;
