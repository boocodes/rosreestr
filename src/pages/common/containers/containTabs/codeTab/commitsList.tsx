import styled from "styled-components";
import {useState} from "react";





interface IBranchElem {
    contain_id: string;
    branch_link: string;
    id: string;
    branch_title: string;
    commits_links: string;
    branch_size: string;
    main_language: string;
}

interface Props{
    // bracnhes_list: IBranchElem[];
}


function DisplayingBranchesList(props:Props){



    return(
        <>
            {

            }
        </>
    )
}





const ExternalWrapper = styled.div`

`



export default DisplayingBranchesList;