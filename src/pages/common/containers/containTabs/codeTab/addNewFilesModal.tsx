import styled from "styled-components";


interface Props{
    changeModalFlag: (flag: boolean)=>void;
    repositoryName: string;
}


function AddNewFilesModal(props:Props){


    return(
        <>
            <ExternalWrapper>
                <HeaderWrapper>
                    <RepositoryName>{props.repositoryName}</RepositoryName>
                    <AfterRepositoryNameSlash>/</AfterRepositoryNameSlash>
                </HeaderWrapper>
                <DragFilesWrapper>
                    <DragFilesForm>
                        <DragFilesSuggestText>Перенесите файлы сюда чтобы добавить их в контейнер</DragFilesSuggestText>
                        <DragFilesInputElemWrapper>
                            <DragFilesInputElem  type={"file"}/>
                            <DragFilesPickElemText>или выберите файлы с компьютера</DragFilesPickElemText>
                        </DragFilesInputElemWrapper>
                        {/*//@ts-ignore*/}
                        <DragFilesInputFolder onClick={(event)=>{event.preventDefault()}}  webkitdirectory="true" mozdirectory="true" multiple type={"file"}/>
                    </DragFilesForm>
                </DragFilesWrapper>
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
    padding: 30px;
    background-color: #ffffff;
    border: 1px solid #d0d7de;
    z-index: 6;
`

const HeaderWrapper = styled.div`
    display: flex;
    align-items: center;
`
const RepositoryName = styled.p`
    margin-right: 5px;
    color: #0969da;
    font-size: 18px;
`
const AfterRepositoryNameSlash = styled.p`

`

const DragFilesWrapper = styled.div`
    position: relative;
    width: 85vw;
    height: 40vh;
    border: 1px solid #d0d7de;
    border-radius: 5px;
    margin-top: 20px;
`

const DragFilesForm = styled.form`
    position: relative;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const DragFilesInputElemWrapper = styled.div`
    z-index: 4;
`

const DragFilesInputElem = styled.input`
    display: block
    z-index: 4;
    
`
const DragFilesInputFolder = styled.input`
    position: absolute;
    width: 100%;
    height: 100%;
    border: 1px solid red;
    opacity: 0.2;
    z-index: 1;
`
const DragFilesSuggestText = styled.p`
    margin-bottom: 20px;
    font-size: 22px;
    font-weight: bold;
    
`
const DragFilesPickElemText = styled.p`

`

export default AddNewFilesModal;