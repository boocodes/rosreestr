import styled from "styled-components";
import {useRef} from "react";
import {useState} from "react";

interface Props{

}

function NewContainerForm(props:Props){

    const [buttonActiveFlag, setButtonActiveFlag] = useState(false);
    const chpek = useRef<HTMLInputElement>(null);
    const [openPrivacyFlag, setOpenPrivacyFlag] = useState(true);
    const [closePrivacyFlag, setClosePrivacyFlag] = useState(false);
    const formRef = useRef<HTMLFormElement>(null)

    function handleOnChange(event:React.FormEvent<HTMLFormElement>){
        //@ts-ignore
        if(!!formRef.current?.children[0].children[1].value.trim()){
            setButtonActiveFlag(true)
            console.log("fdsfs")
        }
        else{
            setButtonActiveFlag(false);
        }
    }
    function handleChangePrivacySettings(type:string){
        if(type === "open"){
            setOpenPrivacyFlag(true);
            setClosePrivacyFlag(false);
        }
        else{
            setOpenPrivacyFlag(false);
            setClosePrivacyFlag(true);
        }
    }

    function handleSubmit(event:React.FormEvent<HTMLFormElement>){
        event.preventDefault();
        console.log(formRef)
        if(buttonActiveFlag){

        }
        else{
            return
        }
    }

    return(
        <Root ref={formRef} onSubmit={handleSubmit} onChange={handleOnChange}>
            <ContainerNameInputWrapper>
                <ContainerNameLabel>Название контейнера</ContainerNameLabel>
                <ContainerNameInput type={"text"}/>
            </ContainerNameInputWrapper>
            <ContainerDescriptionInputWrapper>
                <ContainerDescriptionLabel>Описание</ContainerDescriptionLabel>
                <ContainerDescriptionInput type={"text"}/>
            </ContainerDescriptionInputWrapper>
            <ContainerPrivacyWrapper>
                <ContainerPrivacyOpenInputWrapper>
                    <ContainerPrivacyOpenInput checked={openPrivacyFlag} onChange={()=>{}} onClick={()=>handleChangePrivacySettings("open")} type={"checkbox"}/>
                    <ContainerPrivacyOpenLabelWrapper>
                        <ContainerPrivacyOpenLabel>Открытый контейнер</ContainerPrivacyOpenLabel>
                        <ContainerPrivacyOpenSubLabel>Каждый в интернете может увидеть этот контейнер. Вы выбираете кто делает изменения</ContainerPrivacyOpenSubLabel>
                    </ContainerPrivacyOpenLabelWrapper>
                </ContainerPrivacyOpenInputWrapper>
                <ContainerPrivacyCloseInputWrapper>
                    <ContainerPrivacyCloseInput checked={closePrivacyFlag} onChange={()=>{}} onClick={()=>handleChangePrivacySettings("close")} type={"checkbox"}/>
                    <ContainerPrivacyCloseLabelWrapper>
                        <ContainerPrivacyCloseLabel>Закрытый контейнер</ContainerPrivacyCloseLabel>
                        <ContainerPrivacyCloseSubLabel>Вы выбираете тех, кто может смотреть контейнер и делать изменения</ContainerPrivacyCloseSubLabel>
                    </ContainerPrivacyCloseLabelWrapper>
                </ContainerPrivacyCloseInputWrapper>
            </ContainerPrivacyWrapper>
            <ContainerFormSubmitButton disabledFlag={buttonActiveFlag} type={"submit"} value={"Создать контейнер"}/>

        </Root>
    )

}

const Root = styled.form`
    position: relative;
    font-family: 'Gilroy';
`

const ContainerNameInputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
`

const ContainerNameLabel = styled.label`
    margin-bottom: 10px;
    font-weight: 700;    
`


const ContainerNameInput = styled.input`
    position: relative;
    width: 40%;
    padding: 10px 15px;
    border-radius: 5px;
    border: 1px solid #d0d7de;
    background-color: #f6f8fa;
    outline: none;
    
`

const ContainerDescriptionInputWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

const ContainerDescriptionLabel = styled.label`
    margin-bottom: 10px;
    font-weight: 700;   
`

const ContainerDescriptionInput = styled.input`
    position: relative;
    width: 40%;
    padding: 10px 15px;
    border-radius: 5px;
    border: 1px solid #d0d7de;
    background-color: #f6f8fa;
    outline: none;
`
const ContainerPrivacyCloseInputWrapper = styled.div`
    display: flex;
    align-items: center;
`

const ContainerPrivacyCloseLabelWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 20px;
`

const ContainerPrivacyCloseLabel = styled.label`
    font-weight: 700;
    margin-bottom: 5px;
`

const ContainerPrivacyCloseSubLabel = styled.label`
    font-size: 14px;
`

const ContainerPrivacyCloseInput = styled.input`
    width: 20px;
    height: 20px;
`
const ContainerPrivacyWrapper = styled.div`
    margin-top: 30px;
    margin-bottom: 40px;
`

const ContainerPrivacyOpenInputWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 30px;
`

const ContainerPrivacyOpenLabelWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    
`

const ContainerPrivacyOpenLabel = styled.label`
    font-weight: 700;
    margin-bottom: 5px;
`

const ContainerPrivacyOpenSubLabel = styled.label`

`

const ContainerPrivacyOpenInput = styled.input`
    width: 20px;
    height: 20px;
`

interface IContainerFormSubmitButton {
    disabledFlag: boolean
}

const ContainerFormSubmitButton = styled.input<IContainerFormSubmitButton>`
    font-family: 'Gilroy';
    font-size: 19px;
    background-color: ${props=>props.disabledFlag ? "#1f883d" : "#94d3a2"};
    color: white;
    border: none;
    padding: 10px 15px;
    border-radius: 5px;
    font-weight: 600;
    cursor: pointer;
`

export default NewContainerForm;