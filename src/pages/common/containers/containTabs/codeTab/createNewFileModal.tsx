import styled from "styled-components";
import {useNavigate} from "react-router-dom";
import React, {useRef} from "react";


interface Props{
    changeModalFlag: (flag: boolean)=>void;
    repositoryName: string;
    branchName: string;
}


function CreateNewFileModal(props:Props){


    const formRef = useRef<HTMLFormElement>(null);
    function onFormCreateFileSubmit(event:React.FormEvent<HTMLFormElement>){
        event.preventDefault();
        console.log(formRef);

    }


    const navigate = useNavigate();
    return(
        <>
            <ExternalWrapperForm onSubmit={onFormCreateFileSubmit} ref={formRef}>
                <HeaderWrapper>
                    <FileNameWrapper>
                        <RepositoryName>{props.repositoryName}</RepositoryName>
                        <AfterRepositorySlash>/</AfterRepositorySlash>
                        <FileInputForm>
                            <FileNameInput placeholder={"Название файла"} defaultValue={""}/>
                        </FileInputForm>
                        <InText>in</InText>
                        <BranchName>{props.branchName}</BranchName>
                    </FileNameWrapper>
                    <CancelChangesWrapper>
                        <CancelChangesButton onClick={()=>{
                            props.changeModalFlag(false);
                        }}>Отменить изменения</CancelChangesButton>
                    </CancelChangesWrapper>
                </HeaderWrapper>
                <CodeSectionWrapper>
                  <CodeTextArea defaultValue={"Введите код здесь"}/>
                </CodeSectionWrapper>

                <CommentInputWrapper>
                    <CommentInputLabel>Текст комментария</CommentInputLabel>
                    <CommentInput defaultValue={"Ваш текст"}/>
                </CommentInputWrapper>
                <SubmitFormButton value={"Создать файл"} type={"submit"}/>
            </ExternalWrapperForm>
            <Overlay onClick={()=>props.changeModalFlag(false)}/>
        </>
    )
}

const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
`

const ExternalWrapperForm = styled.form`
    position: absolute;
    top: 10%;
    left: 50%;
    transform:translate(-50%, -4%);
    width: 90vw;
    background-color: #ffffff;
    border: 1px solid #d0d7de;
    z-index: 6;
    padding: 30px 30px 100px 30px;
    
`

const HeaderWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const FileNameWrapper = styled.div`
    display: flex;
    align-items: center;
`
const RepositoryName = styled.p`
    color: #0969da;
    font-size: 19px;
`
const AfterRepositorySlash = styled.p`
    margin: 0px 4px;
`
const FileNameInput = styled.input`
    outline: none;
    color: #6e7781;
    background: none;
    border: 1px solid #d0d7de;
    padding: 5px 0px 5px 10px;
    border-radius: 5px;
`
const FileInputForm = styled.form`
    
`
const InText = styled.p`
   margin-left: 5px;
`
const BranchName = styled.p`
    margin-left: 5px;
    background-color: #ddf4ff;
    color: #0969da;
    font-size: 15px;
    padding: 5px 7px;
    border-radius: 10px;
`

const CancelChangesWrapper = styled.div`

`
const CancelChangesButton = styled.button`
    border: 1px solid #d5d8db;
    font-size: 16px;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
`


const CodeSectionWrapper = styled.div`
    width: 85vw;
    margin-top: 50px;
    height: 75vh;
    border: 1px solid #d0d7de;
    position: relative;
`

const CodeTextArea = styled.textarea`
    position: relative;
    width: 100%;
    height: 100%;
    outline: none;
    border: none;   
    resize: none;
    padding: 15px;
`

const CommentInputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 40px;
`
const CommentInputLabel = styled.label`
    font-size: 18px;
    margin-bottom: 20px;
`
const CommentInput = styled.input`
    width: 400px;
    padding: 5px 0px 5px 10px;
    border-radius: 5px;
    border: 1px solid #d0d7de;
    outline: none;
`



const SubmitFormButton = styled.input`
    margin-top: 40px;
    font-size: 18px;
    font-family: 'Gilroy';
    padding: 10px 15px;
    background: none;
    border: 1px solid #d0d7de;
    cursor: pointer;
    border-radius: 5px;
    :hover{
        opacity: 0.5;
    }
`



export default CreateNewFileModal;