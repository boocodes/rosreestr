import styled from "styled-components";
import {Link} from "react-router-dom";


interface Props{
    title: string;
    about?: string;
    language: string;
    closed: boolean;
}


function PopularContainerElemWrapper(props:Props){


    return(

            <ExternalWrapper>
                <PopularRepositoryMainDataWrapper>
                    <PopularRepositoryTitle>{props.title}</PopularRepositoryTitle>
                    <PopularRepositoryAbout>{props.about}</PopularRepositoryAbout>
                    <PopularRepositoryLanguageWrapper>
                        <PopularRepositoryLanguageIcon/>
                        <PopularRepositoryLanguageText>{props.language}</PopularRepositoryLanguageText>
                    </PopularRepositoryLanguageWrapper>
                </PopularRepositoryMainDataWrapper>
                <PopularRepositoryClosedFlagWrapper>
                    <PopularRepositoryClosedFlag>{props.closed ? "Закрытый" : "Открытый"}</PopularRepositoryClosedFlag>
                </PopularRepositoryClosedFlagWrapper>
            </ExternalWrapper>

    )
}

const Root = styled(Link)`

`

const ExternalWrapper = styled.div`
    height: 150px;
    width: 400px;
    margin: 10px;
    border: 1px solid #d0d7de;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
`

const PopularRepositoryMainDataWrapper = styled.div`
    margin: 15px 0px 0px 20px; 
`
const PopularRepositoryClosedFlagWrapper = styled.div`

`

const PopularRepositoryTitle = styled.p`
    color: #0969da;
    font-size: 18px;
    margin-bottom: 20px;
`
const PopularRepositoryAbout = styled.p`
    color: #656d76;
    font-size: 15px;
`
const PopularRepositoryLanguageWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-top: 20px;
`
const PopularRepositoryLanguageIcon = styled.div`
    background-color: #3178c6;
    height: 10px;
    width: 10px;
    border-radius: 50%;
    margin-right: 5px;
`
const PopularRepositoryLanguageText = styled.p`
    
`


const PopularRepositoryClosedFlag = styled.p`
    font-size: 18px;
    border: 1px solid #d0d7de;
    padding: 5px;
    border-radius: 10px;
    margin: 15px 15px 0px 0px;
`






export default PopularContainerElemWrapper;