import styled from "styled-components";

interface Props{

}

function ContainersFindHeader(props:Props){


    return(
        <>
            <ExternalWrapper>
                <SearchForm>
                    <SearchInput placeholder={"Искать контейнер по имени..."}/>
                    <ChoiceTypeButton>Тип</ChoiceTypeButton>
                    <ChoiceLanguageButton>Язык</ChoiceLanguageButton>
                    <CreateNewContainerButton>Новый</CreateNewContainerButton>
                </SearchForm>
            </ExternalWrapper>

        </>
    )
}


const ExternalWrapper = styled.div`
    margin-bottom: 40px;
    width: 1000px;
`

const SearchForm = styled.form`
    position: relative;
`
const SearchInput = styled.input`
    font-size: 17px;
    font-family: 'Gilroy';
    width: 60%;
    padding: 10px 0px 10px 15px;
    outline: none;
    border-radius: 5px;
    border: 1px solid #d0d7de;
    margin-right: 20px;
`
const ChoiceTypeButton = styled.button`
    border: 1px solid #d5d8db;
    background-color: #f6f8fa;
    padding: 12px 15px;
    margin-right: 10px;
    cursor: pointer;
    :hover{
        opacity: 0.5;
        transition: 0.5s;
    }   
    border-radius: 5px;
`
const ChoiceLanguageButton = styled.button`
    border: 1px solid #d5d8db;
    background-color: #f6f8fa;
    padding: 12px 15px;
    margin-right: 10px;
    cursor: pointer;
    border-radius: 5px;
    :hover{
        opacity: 0.5;
        transition: 0.5s;
    }
`
const CreateNewContainerButton = styled.button`
    border: 1px solid #1e793a;
    background-color: #1f883d;
    padding: 12px 15px;
    cursor: pointer;
    color: white;
    border-radius: 5px;
    :hover{
        opacity: 0.5;
        transition: 0.5s;
    }
`






export default ContainersFindHeader;