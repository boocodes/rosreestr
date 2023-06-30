import styled from "styled-components";
import {useEffect, useState} from "react";
import {
    selectContainViewPage,
    selectUserData,
    useAppSelector,
}   from '../../../../../';



interface Props{

}


function DisplayingCommitsList(){


    interface ICommitsList {
        title: string;
        id: string;
        branch_id: string;
        link: string;
    }

    const containViewPage = useAppSelector(selectContainViewPage);
    const userData = useAppSelector(selectUserData);

    useEffect(()=>{
        fetch("https://rosreestr/api/branch/get_commits_by_branch_id.php", {
            method: "POST",
            body: JSON.stringify({
                branch_title: containViewPage.default_branch,
                contain_id: containViewPage.contain_id,
                contain_title: containViewPage.title,
            })
        })
            .then((response)=>{
                return response.json();
            })
            .then((data)=>{
                setCommitsList(data.message)
            })
    }, [])

    const [commitsList, setCommitsList] = useState<ICommitsList[]>([]);

    console.log(commitsList);


    return(
        <ExternalWrapper>
            {
                commitsList === null || commitsList === undefined ?
                    <>Пусто</>
                    :
                    commitsList?.map((elem:ICommitsList)=>{
                        return(
                            <CommitElemWrapper>
                                <CommitsText>{elem.title}</CommitsText>
                            </CommitElemWrapper>
                        )
                    })
            }

        </ExternalWrapper>
    )
}



const ExternalWrapper = styled.div`

`

const CommitElemWrapper = styled.div`
    border-bottom: 1px solid #d8dee4;
    :last-child{
        border-bottom: none;
    }
    padding: 20px 0px;
    cursor: pointer;
    :hover{
        opacity: 0.5;
    }
`
const CommitsText = styled.p`
    font-family: 'Gilroy';
    font-size: 18px;
`





export default DisplayingCommitsList;