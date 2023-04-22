import styled from "styled-components";
import {useState} from "react";


interface Props{


}




function AdditionalSearchMenu(){


    return(
        <AdditionalMenu>
            <AdditionalMenuItemList>
                <AdditionalMenuItemElem>boocodes/rosreestr</AdditionalMenuItemElem>
                <AdditionalMenuItemElem>boocodes/resreestr_backend</AdditionalMenuItemElem>
                <AdditionalMenuItemElem>boocodes/sarofanTest</AdditionalMenuItemElem>
                <AdditionalMenuItemElem>boocodes/trelello-without-redux</AdditionalMenuItemElem>
                <AdditionalMenuItemElem>boocodes/trelello-with-redux</AdditionalMenuItemElem>
                <AdditionalMenuItemElem>boocodes/react-init-files</AdditionalMenuItemElem>
            </AdditionalMenuItemList>
        </AdditionalMenu>
    )
}


function HeaderSearchInput(props:Props){

    const [additionalMenuFlag, setAdditionalMenuFlag] = useState(false);

    console.log(additionalMenuFlag);

    return(
        <Root wide={additionalMenuFlag}>
            <SearchForm>
                <SearchInput onFocus={()=>setAdditionalMenuFlag(true)} onBlur={()=>setAdditionalMenuFlag(false)} placeholder={"Нажмите для исследования"} wide={additionalMenuFlag}/>
            </SearchForm>
            {
                additionalMenuFlag ?
                    <AdditionalSearchMenu/>
                    :
                    null
            }
        </Root>
    )
}

interface IRoot {
    wide: boolean;
}

const Root = styled.div<IRoot>`
    width: ${props=>props.wide ? "400px" : "260px"};
    transition: all 0.2s ease-out;
    font-family: 'Gilroy';
`

const SearchForm = styled.form`
    position: relative;
    width: 100%;
`

interface ISearchInput {
    wide: boolean;
}

const SearchInput = styled.input<ISearchInput>`
    position: relative;
    border-radius: ${props=>props.wide ? "5px 5px 0px 0px" : "5px"};
    outline: none;
    width: 100%;
    border: 1px solid #57606a;
    background-color: ${props=>props.wide ? "#f6f8fa": "#24292f"};
    color: ${props=>props.wide ? "black" : "white"};
    font-size: 14px;
    padding: 10px 15px;    
`
const AdditionalMenu = styled.div`
    position: absolute;
    z-index: 10;
    width: 400px;
    padding-bottom: 10px;
    background-color: white;
    border-radius: 0px 0px 5px 5px;
    border: 1px solid #d0d7de;
`
const AdditionalMenuItemList = styled.div`
    display: flex;
    flex-direction: column;
    
`
const AdditionalMenuItemElem = styled.p`
    padding: 15px 10px;
    border-top: 1px solid #d0d7de;
   
`


export default HeaderSearchInput;