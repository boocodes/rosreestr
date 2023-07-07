import styled from "styled-components";
import {

}   from '../../';
import {useEffect, useState, useRef} from "react";

interface Props{
    changeRegistrationStep: (step: number) => void;
}



function RegistrationForm({changeRegistrationStep}:Props){

    const [loadRegionListFlag, setLoadRegionFlag] = useState(false);
    const [buttonActiveFlag, setButtonActiveFlag] = useState(false);
    useEffect(function (){
        setLoadRegionFlag(false);
        setButtonActiveFlag(false);
        // fetch("http://127.0.0.1:8000/get-region-list")
        //     .then(resonse=>{
        //         return resonse.json();
        //     })
        //     .then(data=>{
        //         console.log(data);
        //     })
    }, [])

    //input refs
    const firstNameInputRef = useRef<HTMLInputElement>(null);
    const lastNameInputRef = useRef<HTMLInputElement>(null);
    const companyInputRef = useRef<HTMLInputElement>(null);
    const regionInputRef = useRef<HTMLSelectElement>(null);
    //


    function handleSubmit(event:React.FormEvent<HTMLFormElement>){
        event.preventDefault();
        if(!buttonActiveFlag) return;
        const userDataFromFirstStepRegistrationForm = {
            firstname: firstNameInputRef?.current?.value,
            lastname: lastNameInputRef?.current?.value,
            company: companyInputRef?.current?.value,
            region: regionInputRef?.current?.value,
        }
        console.log(userDataFromFirstStepRegistrationForm);

    }
    function handleOnChange(){
        if(
            !!firstNameInputRef?.current?.value?.trim() &&
            !!lastNameInputRef?.current?.value?.trim() &&
            !!regionInputRef?.current?.value?.trim()
        ){
            console.log(!!firstNameInputRef?.current?.value.trim());
            setButtonActiveFlag(true);
        }
        else{
            setButtonActiveFlag(false);
        }
    }



    return(
        <>
            <ExternalWrapper>
                <RootForm onChange={handleOnChange} onSubmit={handleSubmit}>
                    <FirstNameLastNameWrapper>
                        <FirstNameInputWrapper>
                            <FirstNameInputLabel>Firstname</FirstNameInputLabel>
                            <FirstNameInput ref={firstNameInputRef} placeholder="Name" type={"text"}/>
                        </FirstNameInputWrapper>
                        <LastNameInputWrapper>
                            <LastNameInputLabel>Lastname</LastNameInputLabel>
                            <LastNameInput ref={lastNameInputRef} placeholder="Surname" type={"text"}/>
                        </LastNameInputWrapper>
                    </FirstNameLastNameWrapper>
                    <CompanyNameWrapper>
                        <CompanyNameInputLabel>Company</CompanyNameInputLabel>
                        <CompanyNameInput ref={companyInputRef} placeholder="INC" type={"text"}/>
                    </CompanyNameWrapper>
                    <RegionWrapper>
                        <RegionInputLabel>Country / Region</RegionInputLabel>
                        <RegionSelect ref={regionInputRef}>
                            <RegionOption></RegionOption>
                            <RegionOption>Russia</RegionOption>
                            <RegionOption>USA</RegionOption>
                            <RegionOption>UK</RegionOption>
                            {/*{*/}
                            {/*    loadRegionListFlag ?*/}
                            {/*        <RegionOption>Russia</RegionOption>*/}
                            {/*        :*/}
                            {/*        */}
                            {/*}*/}
                        </RegionSelect>

                    </RegionWrapper>
                    <SubmitFormButton buttonActiveFlag={buttonActiveFlag} type={"submit"} value={"Submit"}/>
                </RootForm>
            </ExternalWrapper>
        </>
    )
}


const ExternalWrapper = styled.div`
    margin-top: 100px;
`
const RootForm = styled.form`
    position: relative;
    width: 600px;
    margin: 0 auto;
    font-family: 'Muller';
`

const FirstNameLastNameWrapper = styled.div`
    
`
const FirstNameInputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
`
const FirstNameInputLabel = styled.label`
    margin-bottom: 5px;
`
const FirstNameInput = styled.input`
    outline: none;
    font-size: 16px;
    padding: 10px 0px 10px 15px;
    border-radius: 5px;
    border: 1px solid #fca326;
`
const LastNameInput = styled.input`
    outline: none;
    font-size: 16px;
    padding: 10px 0px 10px 15px;
    border-radius: 5px;
    border: 1px solid #fca326;
`
const LastNameInputLabel = styled.label`
    
`
const LastNameInputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
`
const CompanyNameWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
`
const CompanyNameInputLabel = styled.label`
    
`
const CompanyNameInput = styled.input`
    outline: none;
    font-size: 16px;
    padding: 10px 0px 10px 15px;
    border-radius: 5px;
    border: 1px solid #fca326;
`
const RegionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
`
const RegionSelect = styled.select`
    outline: none;
    outline: none;
    font-size: 16px;
    padding: 10px 0px 10px 15px;
    border-radius: 5px;
    border: 1px solid #fca326;
    background: none;
`

const RegionOption = styled.option`
    
`
const LoadDefaultRegionOption = styled.option`
   background-image: url('./images/small_load_icon.png');
`

const RegionInputLabel = styled.label`
    
`

interface ISubmitFormButton{
    buttonActiveFlag: boolean;
}
const SubmitFormButton = styled.input<ISubmitFormButton>`
    position: relative;
    width: 100%;
    font-size: 18px;
    font-family: 'Muller';
    padding: 15px 0px; 
    color: white;
    background-color: ${props=>props.buttonActiveFlag ? "#fca326" : "#e9e9ed"};
    border: none;
    border-radius: 5px;
    cursor: ${props=>props.buttonActiveFlag ? "pointer" : "auto"};
    &:hover{
        ${props=>props.buttonActiveFlag ?
            `
                transition: 0.5s;
                background-color: white;
                color: #fc6d26;
                border: 1px solid #fc6d26;
            `
            :
            ``
        }
    }
`




export default RegistrationForm;