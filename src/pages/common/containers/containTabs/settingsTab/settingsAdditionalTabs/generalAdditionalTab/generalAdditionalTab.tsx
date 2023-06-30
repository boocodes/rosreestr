import styled from "styled-components";
import SwitchDefaultBranch from "../../../../../../../images/switchDefaultBranch.png";
import {useRef} from "react";
import {
    useAppSelector,
    selectContainViewPage,
    useAppDispatch,
    getContainByUsernameAndContainName,
    getViewPageByLogin,
    renameContain,
    selectUserData,
    changeContainNotFoundFlag,
    changeContainerViewPage,
    changeContainClosedFlag,
    changeViewPageUserData,
    getLastElemOfPath,
    getPreLastElemOfPath,
}   from '../../../../../../../';

interface Props{

}


function GeneralAdditionalTab(props:Props){

    const dispatch = useAppDispatch();
    const userData = useAppSelector(selectUserData);
    const renameContainFormRef = useRef<HTMLFormElement>(null);
    const containViewPage = useAppSelector(selectContainViewPage);
    function renameContainSubmit(event: any){
        event.preventDefault();
        console.log(renameContainFormRef);
        //@ts-ignore
        if(!renameContainFormRef.current[0].value.trim()) return;
        //@ts-ignore
        console.log(renameContainFormRef.current[0].value);
        //@ts-ignore
        renameContain("POST", {login: userData.login, password: userData.password, new_contain_title: renameContainFormRef.current[0].value, contain_title: containViewPage.title}, "https://rosreestr/api/container/rename_contain.php", dispatch, changeContainerViewPage);
    }


    return(
        <>
            <ExternalWrapper>
                <RepositoryTitleSection>
                    <Title>Основные</Title>
                    <ChangeRepositoryForm ref={renameContainFormRef} onSubmit={renameContainSubmit}>
                        <ChangeRepositoryInputWrapper>
                            <ChangeRepositoryInputLabel>Имя контейнера</ChangeRepositoryInputLabel>
                            <ChangeRepositoryInput defaultValue={containViewPage.title}/>
                        </ChangeRepositoryInputWrapper>
                        <ChangeRepositorySubmitButton value={"Переименовать"} type={"submit"}/>
                    </ChangeRepositoryForm>
                </RepositoryTitleSection>
                <DefaultBranchSection>
                    <Title>Главная ветка</Title>
                    <Subtitle>Основная ветка является главным содержанием вашего контейнера</Subtitle>
                    <DefaultBranchSectionSwitchBranchImage src={SwitchDefaultBranch}/>
                </DefaultBranchSection>
                <DangerZoneSection>
                    <DangerZoneSectionTitle>Опасная зона</DangerZoneSectionTitle>
                    <DangerZoneSectionInnerWrapper>
                        <DangerZoneSectionElemWrapper>
                            <DangerZoneSectionElemTextDataWrapper>
                                <DangerZoneSectionElemTitle>Изменить приватность контейнера</DangerZoneSectionElemTitle>
                                <DangerZoneSectionElemSubtitle>Этот контейнер сейчас открыт</DangerZoneSectionElemSubtitle>
                            </DangerZoneSectionElemTextDataWrapper>
                            <DangerZoneSectionElemButton>
                                Сменить приватность
                            </DangerZoneSectionElemButton>
                        </DangerZoneSectionElemWrapper>
                        <DangerZoneSectionElemWrapper>
                            <DangerZoneSectionElemTextDataWrapper>
                                <DangerZoneSectionElemTitle>Удалить этот контейнер</DangerZoneSectionElemTitle>
                                <DangerZoneSectionElemSubtitle>После удаления контейнера его нельзя будет восстановить</DangerZoneSectionElemSubtitle>
                            </DangerZoneSectionElemTextDataWrapper>
                            <DangerZoneSectionElemButton>
                                Удалить этот контейнер
                            </DangerZoneSectionElemButton>
                        </DangerZoneSectionElemWrapper>
                    </DangerZoneSectionInnerWrapper>
                </DangerZoneSection>
            </ExternalWrapper>
        </>
    )
}

const ExternalWrapper = styled.div`
    margin-left: 30px;
    width: 1000px;
    font-family: 'Gilroy';
`

const RepositoryTitleSection = styled.div`
    margin-bottom: 40px;
`


const Title = styled.h2`
    border-bottom: 1px solid #d8dee4;
    padding-bottom: 40px;
    margin-bottom: 30px;
`
const Subtitle = styled.p`

`

const ChangeRepositoryForm = styled.form`
    position: relative;
    width: 100%;
    display: flex;
    align-items: flex-end;
`
const ChangeRepositoryInput = styled.input`
    font-size: 15px;
    font-family: 'Gilroy';
    padding: 5px 0px 5px 10px;
    border-radius: 5px;
    border: 1px solid #d0d7de;
    outline: none;
    background-color: #f6f8fa;
    color: #1f2328;
    width: 300px;
`

const ChangeRepositoryInputWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    align-items: flex-start;
    
`
const ChangeRepositoryInputLabel = styled.label`
   margin-bottom: 10px;
`

const ChangeRepositorySubmitButton = styled.input`
    background-color: #f6f8fa;
    border: 1px solid #d5d8db;
    font-size: 17px;
    font-family: 'Gilroy';
    cursor: pointer;
    padding: 4px 10px;
    border-radius: 5px;
    margin-left: 10px;
`

const DefaultBranchSection = styled.div`
    margin-bottom: 40px;
`

const DefaultBranchSectionSwitchBranchImage = styled.img`
    margin-top: 20px;
`

const DangerZoneSection = styled.div`

`

const DangerZoneSectionTitle = styled.h3`

`

const DangerZoneSectionInnerWrapper = styled.div`
    border: 1px solid red;
    width: 700px;
    margin-top: 20px;
`

const DangerZoneSectionElemWrapper = styled.div`
    padding: 30px 20px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #d8dee4;
    :last-child{
        border-bottom: none;
    }
    align-items: center;
`
const DangerZoneSectionElemTextDataWrapper = styled.div`

`

const DangerZoneSectionElemTitle = styled.p`
    font-weight: bold;
    margin-bottom: 10px;
`
const DangerZoneSectionElemSubtitle = styled.p`

`

const DangerZoneSectionElemButton = styled.button`
    height: 40px;
    padding: 10px 15px;
    color: #cf222e;
    background-color: #f6f8fa;
    border: 1px solid #d5d8db;
    cursor: pointer;
    :hover{
        opacity: 0.5;
    }
`




export default GeneralAdditionalTab;