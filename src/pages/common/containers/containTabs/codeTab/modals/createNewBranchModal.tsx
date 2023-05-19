import styled from "styled-components";
import {useRef, useState} from "react";
import {createNewBranch} from "../../../../../../utils/fetchMethod";
import {useAppSelector} from "../../../../../../hooks/useAppSelector";
import {selectContainViewPage} from "../../../../../../redux/reducers/contain/selector";
import {selectUserData} from "../../../../../../redux/reducers/user/selector";


interface Props{
    changeCreateNewBranchModalFlag: (flag: boolean) => void;
}


function CreateNewBranchModal(props:Props) {

    const createNewBranchFormRef = useRef<HTMLFormElement>(null);
    const containViewPage = useAppSelector(selectContainViewPage);
    const userData = useAppSelector(selectUserData);

    function createNewFormSubmit(event: any){
        event.preventDefault();
        const data = {
            //@ts-ignore
            new_branch_title: createNewBranchFormRef.current[0].value,
            contain_id: containViewPage.contain_id,
            login: userData.login,
            password: userData.password,

        };
        createNewBranch("POST", data, "https://rosreestr/api/branch/add_new_branch.php")
            .then((response:any)=>{
                if(response.ok){
                    props.changeCreateNewBranchModalFlag(false);
                }
                else{
                    return;
                }
            })


    }

    return(
        <>

            <Overlay onClick={()=>props.changeCreateNewBranchModalFlag(false)}/>
            <ExternalWrapper>
                <Title>Создать новую ветку</Title>
                <CreateNewBranchForm onSubmit={createNewFormSubmit} ref={createNewBranchFormRef}>
                    <CreateNewBranchInput type={"text"} placeholder={"Название ветки"}/>
                    <br/>
                    <CreateNewBranchButtonsWrapper>
                        <CreateNewBranchSubmit type={"submit"} value={"Создать ветку"}/>
                        <ExitCreateNewBranchModalButton onClick={()=>props.changeCreateNewBranchModalFlag(false)}>Выйти</ExitCreateNewBranchModalButton>
                    </CreateNewBranchButtonsWrapper>

                </CreateNewBranchForm>
            </ExternalWrapper>
        </>
    )
}


const ExternalWrapper = styled.div`
    position: absolute;
    top:50%;
    left:50%;
    transform:translate(-50%, -50%); 
   
    background-color: #ffffff;
    border: 1px solid #d0d7de;
    padding: 30px 50px;
    z-index: 10;
`

const Overlay = styled.div`
    position: absolute;
    
    height: 100vh;
    width: 100vw;
    left: 0;
    top: 0;
    z-index: 10;
    opacity: 0.6;
    background-color: black;
`


const Title = styled.h3`
    margin-bottom: 20px;
    text-align: center;
`

const CreateNewBranchForm = styled.form`
   
`

const CreateNewBranchInput = styled.input`
    margin-bottom: 20px;
    font-size: 18px;
    outline: none;
    font-family: 'Gilroy';
    width: 250px;
    padding: 5px 0px 5px 10px;

`


const CreateNewBranchButtonsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    
`

const ExitCreateNewBranchModalButton = styled.button`
    background-color: #cf222e;
    color: white;
    padding: 10px 5px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    :hover{
        opacity: 0.5;
        transition: 0.5s;
    }
    font-family: 'Gilroy';
    font-size: 18px;
`

const CreateNewBranchSubmit = styled.input`
    background-color: #1f883d;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 10px 15px;
    cursor: pointer;
    :hover{
        opacity: 0.5;
        transition: 0.5s;
    }
    font-family: 'Gilroy';
    font-size: 18px;
`




export default CreateNewBranchModal;