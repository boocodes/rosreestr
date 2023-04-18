import styled from "styled-components";
import Header from "../../ui/header/header";
import Footer from "../../ui/footer/footer";


interface Props{

}

function LoginPage(props:Props){
    return(
        <ExternalWrapper>
            <GoBackWrapper>
                <GoBackButton><a href={"/welcome"}>Вернуться</a></GoBackButton>
            </GoBackWrapper>
            <LoginFormWrapper>
                <LoginForm method={"POST"} >
                    <input placeholder={"Имя пользователя"} type={"text"} />
                    <input placeholder={"Пароль"} type={"text"} />
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