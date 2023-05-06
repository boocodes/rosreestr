import styled from "styled-components";
import {Link} from "react-router-dom";
import {useAppSelector} from "../../../../hooks/useAppSelector";
import {selectUserData} from "../../../../redux/reducers/user/selector";
import {useRef} from "react";
import {updateUserFields} from "../../../../utils/fetchMethod";
import {useAppDispatch} from "../../../../hooks/useAppDispatch";
import {changeUserData} from "../../../../redux/reducers/user/reducer";


interface Props{

}


function CommonSettingsTab(props:Props){
    const dispatch = useAppDispatch();
    const userData = useAppSelector(selectUserData);

    const settingsForm = useRef<HTMLFormElement>(null);

    function handleSumbit(event:React.FormEvent<HTMLFormElement>){
        event.preventDefault();
        if(
            //@ts-ignore
            !settingsForm.current?.elements[0].value?.trim() ||
            //@ts-ignore
            !settingsForm.current?.elements[0].value?.trim() ||
            //@ts-ignore
            !settingsForm.current?.elements[2].value?.trim() ||
            //@ts-ignore
            !settingsForm.current?.elements[3].value?.trim() ||
            //@ts-ignore
            !settingsForm.current?.elements[4].value?.trim() ||
            //@ts-ignore
            !settingsForm.current?.elements[5].value?.trim()
        ) return;

        const objectData = {
            password: userData.password,
            login: userData.login,
            // @ts-ignore
            firstname: settingsForm.current?.elements[0].value,
            // @ts-ignore
            mail: settingsForm.current?.elements[1].value,
            // @ts-ignore
            about: settingsForm.current?.elements[2].value,
            // @ts-ignore
            url_link_social: settingsForm.current?.elements[3].value,
            // @ts-ignore
            organisation: settingsForm.current?.elements[4].value,
            // @ts-ignore
            location: settingsForm.current?.elements[5].value,

        }
        updateUserFields("POST", objectData, "https://rosreestr/api/user/update_user_fields.php", dispatch, changeUserData);
    }

    return(
        <DataSettingsWrapper>
            <DataSettingsTitleWrapper>
                <DataSettingsTitleText>Открытые данные</DataSettingsTitleText>
                <DataSettingsUnderTitleLine/>
            </DataSettingsTitleWrapper>
            <DataSettingsForm ref={settingsForm} onSubmit={handleSumbit}>
                <DataSettingsNameInputWrapper>
                    <DataSettingsNameLabel>Имя</DataSettingsNameLabel>
                    <DataSettingsNameInput defaultValue={userData.firstname}/>
                    <DataSettingsNameSubtext>Ваше имя появится там, где отметят ваш вклад. Вы можете удалить его в любое время</DataSettingsNameSubtext>
                </DataSettingsNameInputWrapper>
                <DataSettingsNameInputWrapper>
                    <DataSettingsNameLabel>Электронная почта</DataSettingsNameLabel>
                    <DataSettingsNameInput defaultValue={userData.mail}/>
                    <DataSettingsNameSubtext></DataSettingsNameSubtext>
                </DataSettingsNameInputWrapper>
                <DataSettingsNameInputWrapper>
                    <DataSettingsNameLabel>О Вас</DataSettingsNameLabel>
                    <DataSettingsNameInput defaultValue={"Данные тут"}/>
                    <DataSettingsNameSubtext>Вы можете @указать других пользователей или организации</DataSettingsNameSubtext>
                </DataSettingsNameInputWrapper>
                <DataSettingsNameInputWrapper>
                    <DataSettingsNameLabel>Ссылка</DataSettingsNameLabel>
                    <DataSettingsNameInput defaultValue={"Соцсети..."}/>
                    <DataSettingsNameSubtext></DataSettingsNameSubtext>
                </DataSettingsNameInputWrapper>
                <DataSettingsNameInputWrapper>
                    <DataSettingsNameLabel>Компания</DataSettingsNameLabel>
                    <DataSettingsNameInput defaultValue={"ОмГТУ"}/>
                    <DataSettingsNameSubtext></DataSettingsNameSubtext>
                </DataSettingsNameInputWrapper>
                <DataSettingsNameInputWrapper>
                    <DataSettingsNameLabel>Расположение</DataSettingsNameLabel>
                    <DataSettingsNameInput defaultValue={"Россия"}/>
                    <DataSettingsNameSubtext></DataSettingsNameSubtext>
                </DataSettingsNameInputWrapper>
                <DataSettingsFormSubmitButton value={"Сохранить изменения"} type={"submit"}/>
            </DataSettingsForm>
        </DataSettingsWrapper>
    )
}

const DataSettingsWrapper = styled.div`
    
`

const DataSettingsTitleWrapper = styled.div`
    margin-top: 10px;
`
const DataSettingsTitleText = styled.h2`
    font-weight: 500;
    margin-bottom: 20px;
`
const DataSettingsUnderTitleLine = styled.div`
    background-color: #d8dee4;
    height: 1px;
    width: 500px;
`

const DataSettingsForm = styled.form`

`

const DataSettingsNameInputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 30px;
`
const DataSettingsNameLabel = styled.label`
    font-size: 20px;
    margin-bottom: 10px;
`
const DataSettingsNameInput = styled.input`
    width: 280px;
    font-size: 17px;
    padding: 5px 10px;
    border-radius: 5px;
    border: 1px solid #d8dee4;
    font-weight: 500;
`
const DataSettingsNameSubtext = styled.p`
    font-size: 13px;
    width: 280px;
    margin-top: 10px;
    color: #656d76;
`

const DataSettingsFormSubmitButton = styled.input`
    background-color: #1f883d;
    border: 1px solid #1e793a;
    padding: 10px 15px;
    border-radius: 5px;
    color: white;
    font-size: 16px;
    cursor: pointer;
    margin-top: 70px;
`



export default CommonSettingsTab;