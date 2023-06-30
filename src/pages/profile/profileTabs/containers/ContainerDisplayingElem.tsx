import styled from "styled-components";
import {Link} from "react-router-dom";
import ActivityOfContainerInContainerList from "../../../../images/activityOfContainerInContainerList.png";
import {
    getBooleanFromTextBoolean,
}   from '../../../../';


interface IContainsList{
    title: string;
    contain_link: string;
    private: string;
    user_id: string;
    edited: string;
    created: string;
    contain_id: string;
    description: string;
    contain_author_login: string;
}

interface IDisplayingContainsListProps{
    containList: IContainsList[];
}

//to={"/container/" + elem.contain_author_login + "/" + elem.title} key={elem.title}


function ContainerDisplayingElem(props:IDisplayingContainsListProps){
    return (
        <ExternalWrapper>
            {
                props.containList.map((elem:IContainsList)=>{
                    return(
                       <ContainerWrapper key={elem.title}>
                            <ContainerMainDataWrapper>
                                <ContainerTitleAndClosedFlagWrapper>
                                    <ContainerTitleText>{elem.title}</ContainerTitleText>
                                    <ContainerClosedFlag>{getBooleanFromTextBoolean(elem.private) ? "Закрыт" : "Открытый"}</ContainerClosedFlag>
                                </ContainerTitleAndClosedFlagWrapper>
                                <ContainerAboutText>{elem.description}</ContainerAboutText>
                                <ContainerLanguageAndLastUpdatedWrapper>
                                    <ContainerLanguageWrapper>
                                        <ContainerLanguageIcon/>
                                        <ContainerLanguageText>TypeScript</ContainerLanguageText>
                                    </ContainerLanguageWrapper>
                                    <ContainerLastUpdatedText>
                                        Изменено 1 час назад
                                    </ContainerLastUpdatedText>
                                </ContainerLanguageAndLastUpdatedWrapper>

                            </ContainerMainDataWrapper>
                           <ContainerActivityWrapper>
                               <ContainerLastActivityImage src={ActivityOfContainerInContainerList}/>
                           </ContainerActivityWrapper>
                       </ContainerWrapper>
                    )
                })
            }
        </ExternalWrapper>
    )
}


const ExternalWrapper = styled.div`

`

const ContainerWrapper = styled.div`
    padding: 20px 0px;
    display: flex;
    justify-content: space-between;
    border-top: 1px solid #d0d7de;
    :last-child{
        border-bottom: 1px solid #d0d7de;
    }
`

const ContainerMainDataWrapper = styled.div`

`
const ContainerActivityWrapper = styled.div`

`
const ContainerTitleAndClosedFlagWrapper = styled.div`
    display: flex;
    align-items: center;
`
const ContainerTitleText = styled.h3`
    color: #0969da;
`
const ContainerClosedFlag = styled.p`
    border: 1px solid #d0d7de;
    padding: 5px;
    border-radius: 10px;
    margin-left: 15px;
`

const ContainerAboutText = styled.p`
    font-size: 17px;
    margin-top: 8px;
    margin-bottom: 8px; 
`

const ContainerLanguageAndLastUpdatedWrapper = styled.div`
    display: flex;
    align-items: center;
`
const ContainerLanguageWrapper = styled.div`
    margin-right: 20px;
    display: flex;
    align-items: center;
`
const ContainerLanguageIcon = styled.div`
    background-color: #3178c6;
    height: 10px;
    width: 10px;
    border-radius: 50%;
    margin-right: 5px;
`
const ContainerLanguageText = styled.p`

`

const ContainerLastUpdatedText = styled.p`
    opacity: 0.6;
`

const ContainerLastActivityImage = styled.img`
    width: 150px;
    height: 90px;
`




export default ContainerDisplayingElem;