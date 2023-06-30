import styled from "styled-components";
import {useEffect, useState} from "react";
import {
    useAppSelector,
    selectUserData,
    selectViewPageUserData,
    selectContainViewPage,
    CreateNewBranchModal,
}   from '../../../../../../';


interface IBranchesList {
    contain_id: string;
    branch_link: string;
    id: string;
    branch_title: string;
    commits_links: string;
    branch_size: string;
    main_language: string;
}

interface Props{
    turnSwitchBranchFlag: (flag:boolean) => void;
    branchesList: IBranchesList[] | undefined;
}


function SwitchBranchWrapper(props:Props){



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
    const containViewPageData = useAppSelector(selectContainViewPage);
    const [createNewBranchModalFlag, setCreateNewBranchModalFlag] = useState(false);

    useEffect(()=>{
        fetch("https://rosreestr/api/branch/get_branches_by_contain_id.php", {
            method: 'POST',
            body: JSON.stringify({
                "contain_id": containViewPageData.contain_id,
            })
        })
            .then((response)=>{
                return response.json();
            })
            .then((data)=>{
                setBranchesList(data.message);
            })
    }, [])




    function changeContainDefaultBranch(branch_title: string){
        fetch("https://rosreestr/api/container/change_default_branch.php", {
            method: "POST",
            body: JSON.stringify({
                contain_id: containViewPageData.contain_id,
                contain_title: containViewPageData.title,
                old_default_branch: containViewPageData.default_branch,
                new_default_branch: branch_title,
            })
        })
        props.turnSwitchBranchFlag(false);
    }



    return(
        <>
            {
                createNewBranchModalFlag ?
                    <CreateNewBranchModal turnSwitchBranchFlag={props.turnSwitchBranchFlag} changeCreateNewBranchModalFlag={setCreateNewBranchModalFlag}/>
                    :
                    null
            }
            <ExternalWrapper>
                <BranchElemsListWrapper>
                    {props.branchesList?.map((elem: IBranchesList)=>{
                        return <BranchElemWrapper onClick={()=>changeContainDefaultBranch(elem.branch_title)}>
                                    <BranchElemText>{elem.branch_title}</BranchElemText>
                               </BranchElemWrapper>
                    })}
                    <AddBranch onClick={()=>setCreateNewBranchModalFlag(!createNewBranchModalFlag)}>Создать</AddBranch>
                </BranchElemsListWrapper>
            </ExternalWrapper>

        </>
    )
}

const ExternalWrapper = styled.div`
    position: absolute;
    top: 320px;
    border-radius: 5px;
    width: 145px;
    border: 1px solid #d0d7de;
    background-color: white;
    z-index: 9;
`



const BranchElemsListWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

const BranchElemWrapper = styled.div`
    cursor: pointer;
    :hover{
        opacity: 0.5;
    }
    display: flex;
    
    padding: 15px 10px 15px 30px;
    border-bottom: 1px solid #d0d7de;
    :last-child{
        border-bottom: none;
    }
`
const BranchElemText = styled.p`

`
const AddBranch = styled.p`
    background-color: #1f883d;  
    color: white;
    padding-left: 30px;
    padding: 10px 0px 10px 0px;
    text-align: center;
    cursor: pointer;
    :hover{
        opacity: 0.5;
        transition: 0.5s;
    }
    
`


export default SwitchBranchWrapper;