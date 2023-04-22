import styled from "styled-components";
import Header from "../../ui/header/header";
import Footer from "../../ui/footer/footer";
import {useRef} from "react";
import {registrateUserMethod} from "../../utils/fetchMethod";
import {useNavigate} from "react-router-dom";
import {Link} from "react-router-dom";

interface Props{

}

function RegistrationPage(props:Props){
    const navigate = useNavigate();
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
            created: regForm.current?.children[3].value,
            // @ts-ignore
            updated: regForm.current?.children[4].value,
            // @ts-ignore
            workspace_id: regForm.current?.children[5].value,
            // @ts-ignore
            user_id: regForm.current?.children[6].value,
            // @ts-ignore
            password: regForm.current?.children[7].value,
        }
        //@ts-ignore
        console.log(object);
        registrateUserMethod("POST", object, "https://rosreestr/vendor/api/user/registration.php", navigate);
    }


    return(
        <ExternalWrapper>
            <GoBackWrapper>
                <GoBackButton><Link to={"/welcome"}>Вернуться</Link></GoBackButton>
            </GoBackWrapper>
            <LoginFormWrapper>
                <LoginForm ref={regForm} method={"POST"} onSubmit={submitForm} >
                    <LastNameAndFirstNameInputWrapper>
                        <input placeholder={"Имя"} type={"text"} />
                        <input placeholder={"Фамилия"} type={"text"} />
                    </LastNameAndFirstNameInputWrapper>
                    <input placeholder={"Имя пользователя"} type={"text"} />
                    <input placeholder={"Электронная почта"} type={"email"} />
                    <input placeholder={"Создан (дата)"} type={"text"} />
                    <input placeholder={"Обновлен (дата)"} type={"text"} />
                    <input placeholder={"Номер рабочего пространства"} type={"text"} />
                    <input placeholder={"Номер пользователя"} type={"text"}/>
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

export default RegistrationPage;
