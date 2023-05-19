import styled from "styled-components";
import {useEffect, useState} from "react";
import {useAppSelector} from "../../../../../../hooks/useAppSelector";
import {selectUserData, selectViewPageUserData} from "../../../../../../redux/reducers/user/selector";
import {selectContainViewPage} from "../../../../../../redux/reducers/contain/selector";


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



    return(
        <>

            <ExternalWrapper>
                <BranchElemsListWrapper>
                    {/*{JSON.parse(containViewPageData.branches_list).map((elem:string)=>{*/}
                    {/*    return  <BranchElemWrapper>*/}
                    {/*                <BranchElemText>{elem}</BranchElemText>*/}
                    {/*            </BranchElemWrapper>*/}
                    {/*})}*/}
                    {props.branchesList?.map((elem: IBranchesList)=>{
                        return <BranchElemWrapper>
                                    <BranchElemText>{elem.branch_title}</BranchElemText>
                               </BranchElemWrapper>
                    })}
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


export default SwitchBranchWrapper;