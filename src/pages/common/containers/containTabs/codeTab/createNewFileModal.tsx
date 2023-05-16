import styled from "styled-components";
import {useNavigate} from "react-router-dom";


interface Props{
    changeModalFlag: (flag: boolean)=>void;
    repositoryName: string;
    branchName: string;
}


function CreateNewFileModal(props:Props){
    const navigate = useNavigate();
    return(
        <>
            <ExternalWrapper>
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

                </CodeSectionWrapper>
            </ExternalWrapper>
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

const ExternalWrapper = styled.div`
    position: absolute;
    top:50%;
    left:50%;
    transform:translate(-50%, -50%);
    width: 90vw;
    height: 90vh;
    background-color: #ffffff;
    border: 1px solid #d0d7de;
    z-index: 6;
    padding: 30px;
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
`




export default CreateNewFileModal;