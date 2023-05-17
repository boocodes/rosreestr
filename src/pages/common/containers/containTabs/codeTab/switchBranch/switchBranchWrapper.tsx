import styled from "styled-components";
import {useEffect, useState} from "react";
import {useAppSelector} from "../../../../../../hooks/useAppSelector";
import {selectUserData, selectViewPageUserData} from "../../../../../../redux/reducers/user/selector";
import {selectContainViewPage} from "../../../../../../redux/reducers/contain/selector";

interface Props{
    turnSwitchBranchFlag: (flag:boolean) => void;
}


function SwitchBranchWrapper(props:Props){

    const [branchesList, setBranchesList] = useState([]);
    const containViewPageData = useAppSelector(selectContainViewPage);
    useEffect(()=>{
        fetch("https://rosreestr/api/container/get_branches_list.php", {
            method: 'POST',
            body: JSON.stringify({
                "login": 'f',
            })
        })
    }, [])
    console.log(containViewPageData);
    return(
        <>

            <ExternalWrapper>
                <BranchElemsListWrapper>
                    {JSON.parse(containViewPageData.branches_list).map((elem:string)=>{
                        return  <BranchElemWrapper>
                                    <BranchElemText>{elem}</BranchElemText>
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