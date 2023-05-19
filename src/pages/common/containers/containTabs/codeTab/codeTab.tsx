import styled from "styled-components";
import CodeWindowImg from '../../../../../images/codeContain.png';
import {useAppSelector} from "../../../../../hooks/useAppSelector";
import {selectContainViewPage} from "../../../../../redux/reducers/contain/selector";
import {useEffect, useRef, useState} from "react";
import CodeDisplayingWrapper from "./codeDisplayingWrapper";
import AddNewFilesModal from "./addNewFilesModal";
import CreateNewFileModal from "./createNewFileModal";
import CloseIcon from "../../../../../images/closeIcon.jpg";
import SwitchBranchWrapper from "./switchBranch/switchBranchWrapper";
import CreateNewBranchModal from "./modals/createNewBranchModal";

interface Props{


}


interface IUploadedFiles{
    elemName: string;
    parentFolderName: string;
}

interface IShowUploadedFiles{
    date: IUploadedFiles[];
}

function ShowUploadedFiles(props:IShowUploadedFiles){


    console.log(props);
    return(
        <>
            <UploadedFilesWrapper>
                {props.date.map((elem:IUploadedFiles)=>{
                    return (
                        <UploadedFileElemWrapper key={props.date.indexOf(elem)}>
                           <UploadedFileElemExternalWrapper>
                               <UploadedFileName>
                                   Файл - <b>{elem.elemName}</b>
                               </UploadedFileName>
                               <UploadedFileParent>
                                   Родительский элемент - <b>{elem.parentFolderName}</b>
                               </UploadedFileParent>
                           </UploadedFileElemExternalWrapper>
                           <DeleteUploadedFileIcon src={CloseIcon}/>
                        </UploadedFileElemWrapper>
                    )
                })}
            </UploadedFilesWrapper>
        </>
    )
}


interface IAddNewElemMenu{
    changeModalFlag: (flag:boolean)=>void;
    changeAddNewFilesModalFlag: (flag:boolean)=>void;
    changeCreateNewFileModalFlag: (flag: boolean)=>void;
}

function AddNewElemMenu(props:IAddNewElemMenu){


    return(
       <>
           <AddNewElemMenuRoot>
               <AddNewElemMenuElem>
                   <AddNewElemMenuElemLink onClick={()=>{
                       props.changeModalFlag(false);
                       props.changeCreateNewFileModalFlag(true);
                   }}>Создать файл</AddNewElemMenuElemLink>
               </AddNewElemMenuElem>
               <AddNewElemMenuElem>
                   <AddNewElemMenuElemLink onClick={()=> {
                       props.changeModalFlag(false);
                       props.changeAddNewFilesModalFlag(true);
                   }}>Добавить существующий</AddNewElemMenuElemLink>
               </AddNewElemMenuElem>
           </AddNewElemMenuRoot>
           <AddNewElemMenuOverlay onClick={()=>props.changeModalFlag(false)}/>
       </>
    )
}




function ContainCodeTab(props:Props){

    const containViewPage = useAppSelector(selectContainViewPage);
    const [switchBranchFlag, setSwitchBranchFlag] = useState(false);
    const [createNewFileModalFlag, setCreateNewFileModalFlag] = useState(false);
    const [addNewFilesModalFlag, setAddNewFilesModalFlag] = useState(false);
    const [uploadedFiles, setUploadedFiles] = useState<IUploadedFiles[]>([]);
    const [addNewFileMenuFlag, setAddNewFileMenuFlag] = useState(false);

    const [selectedFile, setSelectedFile] = useState("");
    const refForm = useRef<HTMLFormElement>(null);
    const refInput = useRef<HTMLInputElement>(null);
    function sendContain(event:any){
        event.preventDefault();

        const formData = new FormData();

        for(let i = 0; i < event.target.files.length; i++){
            formData.append("files[]", event.target.files[i]);
            console.log(event.target.files[i].name);
            uploadedFiles[i] = {elemName: event.target.files[i].name, parentFolderName: "hey"};
            setUploadedFiles(uploadedFiles.concat([]));

        }

        formData.set("title", "nick");
        console.log(uploadedFiles);
        console.log(formData, " 111");
        fetch("https://rosreestr/api/container/upload_contains_files.php", {
            // @ts-ignore
            body: formData,
            // headers: {
            //     "Content-Type": "multipart/form-data",
            // },
            method: "POST",
        })
        console.log(formData);
    }


    interface IBranchesList {
        contain_id: string;
        branch_link: string;
        id: string;
        branch_title: string;
        commits_links: string;
        branch_size: string;
        main_language: string;
    }

    const [branchesList, setBranchesList] = useState<IBranchesList[]>();

    useEffect(()=>{
        fetch("https://rosreestr/api/branch/get_branches_by_contain_id.php", {
            method: 'POST',
            body: JSON.stringify({
                "contain_id": containViewPage.contain_id,
            })
        })
            .then((response)=>{
                return response.json();
            })
            .then((data)=>{
                setBranchesList(data.message);
            })
    }, [])


    console.log(containViewPage);
    // @ts-ignore
    return(
        <>
            {createNewFileModalFlag ?
                <CreateNewFileModal repositoryName={containViewPage.title} branchName={containViewPage.default_branch} changeModalFlag={setCreateNewFileModalFlag}/>
                :
                null
            }
            {addNewFilesModalFlag ?
                <AddNewFilesModal repositoryName={containViewPage.default_branch} changeModalFlag={setAddNewFilesModalFlag}/>
                :
                null
            }
            <MainContent>
                <CodeWindowWrapper>
                    <CodeWindowHeaderWrapper>
                        <CodeWindowHeaderDisplayingDataWrapper>
                            <CurrentBranchWrapper onClick={()=>setSwitchBranchFlag(!switchBranchFlag)} >
                                <CurrentBranchTitle>{containViewPage.default_branch}</CurrentBranchTitle>
                            </CurrentBranchWrapper>
                            {switchBranchFlag ?
                                <SwitchBranchWrapper branchesList={branchesList} turnSwitchBranchFlag={setSwitchBranchFlag}/>
                                :
                                null
                            }
                            <BranchCountsWrapper>
                                <BranchCountsTitleBoldSpan>{branchesList?.length}</BranchCountsTitleBoldSpan>
                                <BranchCountsTitle>Веток</BranchCountsTitle>
                            </BranchCountsWrapper>
                        </CodeWindowHeaderDisplayingDataWrapper>

                        <CodeWindowHeaderButtonsWrapper>

                            <AddNewElemButton onClick={()=>setAddNewFileMenuFlag(!addNewFileMenuFlag)}>
                                Добавить
                            </AddNewElemButton>

                        </CodeWindowHeaderButtonsWrapper>
                        {addNewFileMenuFlag ?
                            <AddNewElemMenu changeAddNewFilesModalFlag={setAddNewFilesModalFlag} changeCreateNewFileModalFlag={setCreateNewFileModalFlag} changeModalFlag={setAddNewFileMenuFlag}/>
                            :
                            null
                        }
                    </CodeWindowHeaderWrapper>
                    <form ref={refForm}>
                        {/*//@ts-ignore*/}
                        <input  webkitdirectory="true" mozdirectory="true" multiple ref={refInput} onChange={sendContain} type={"file"}/>
                    </form>
                    <ShowUploadedFiles date={uploadedFiles}/>
                    <CodeDisplayingWrapper actionAuthor={containViewPage.contain_author_login} userAvatarImgSrc={"https://rosreestr/images/myImg.jpg"} commitsCount={"1"} lastAction={"initial commit"}/>
                </CodeWindowWrapper>
                <AboutWrapper>
                    <AboutTitleWrapper>
                        <AboutTitleText>О контейнере</AboutTitleText>
                    </AboutTitleWrapper>
                    <AboutDescriptionWrapper>
                        <AboutDescriptionTitle>{containViewPage.description || "Информации нет"}</AboutDescriptionTitle>
                    </AboutDescriptionWrapper>
                </AboutWrapper>
            </MainContent>
        </>
    )
}

const MainContent = styled.div`
    margin: 30px auto 100px auto;
    width: 1300px;
    display: flex;
    border-radius: 10px;
    overflow: hidden;    
`

const CodeWindowWrapper = styled.div`
    width: 870px;
    margin-right: 30px;
`
const CodeWindowImage = styled.img`
    position: relative;
    width: 100%;
`

const AboutWrapper = styled.div`
    width: 400px;
    height: 100px;
`

const AboutTitleWrapper = styled.div`

`
const AboutTitleText = styled.p`
    font-size: 20px;
    font-weight: 700;
`

const AboutDescriptionWrapper = styled.div`
    margin-top: 20px;
`
const AboutDescriptionTitle = styled.p`
    font-size: 18px;
`

const CodeWindowHeaderWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 30px;
    justify-content: space-between;
`

const CodeWindowHeaderDisplayingDataWrapper = styled.div`
    display: flex;
    padding: 5px 0px 0px 5px;
    align-items: center;
`

const CodeWindowHeaderButtonsWrapper = styled.div`
    display: flex;
    align-items: center;
`

const CurrentBranchWrapper = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid #d5d8db;
    padding: 8px 12px;
    background-color: #f6f8fa;
    border-radius: 5px;
    margin-right: 15px;
    cursor: pointer;
    :hover{
        opacity: 0.5;
    }
`
const AddNewElemButton = styled.button`
    border: none;
    border-radius: 5px;
    border: 1px solid #d5d8db;
    background-color: #f6f8fa;
    font-size: 16px;
    cursor: pointer;
    :hover{
        opacity: 0.5;
        transition: 0.5s;
    }
    font-weight: 400;
    padding: 10px;
`




const AddNewElemMenuRoot = styled.div`
    background-color: #ffffff;
    position: absolute;
    margin-left: 670px;
    margin-top: 140px;
    border-radius: 5px;
    padding: 10px 0px;
    border: 1px solid #d0d7de;
    z-index: 3;
`

const AddNewElemMenuOverlay = styled.div`
    position: absolute;
    height: 100vh;
    width: 100vw;
    top: 0;
    left: 0;
`

const AddNewElemMenuElem = styled.div`
    margin-bottom: 10px;
    
    :last-child{
        margin-bottom: 0px;
    }
`

const AddNewElemMenuElemLink = styled.p`
    cursor: pointer;
    :hover{
        background-color: #0969da;
        color: white;
    }
    padding: 5px 15px;
    
`


const CurrentBranchTitle = styled.p`
    font-size: 19px;
    font-weight: 400;
    opacity: 0.7;
`

const BranchCountsWrapper = styled.div`
    display: flex;
    align-items: center;
`
const BranchCountsTitle = styled.p`
    font-size: 17px;
    font-weight: 400;
    
`

const BranchCountsTitleBoldSpan = styled.span`
    font-size: 17px;
    font-weight: 700;
    margin-right: 5px;
`





const UploadedFilesWrapper = styled.div`
    margin-top: 30px;
   
`

const UploadedFileElemWrapper = styled.div`
    display: flex;
    margin-bottom: 5px;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #d0d7de;
    border-radius: 5px;
    padding: 10px 15px;
   
`
const UploadedFileElemExternalWrapper = styled.div`

`

const UploadedFileName = styled.p`
`
const UploadedFileParent = styled.p`

`
const DeleteUploadedFileIcon = styled.img`
    width: 25px;
    height: 20px;
    cursor: pointer;
`



export default ContainCodeTab;