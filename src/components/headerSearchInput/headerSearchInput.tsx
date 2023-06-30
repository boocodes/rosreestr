import styled from "styled-components";
import {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";


import {
    useAppSelector,
    selectContains,
    selectUserData,
    useAppDispatch,
    getSelfContains,
    addContain,
    isArrayEmpty
} from '../../';





interface Props{


}


interface IContainsList{
    title: string;
    contain_link: string;
    private: string;
    user_id: string;
    edited: string;
    created: string;
    contain_id: string;
    description: string;
}

function AdditionalSearchMenu(){

    const containList = useAppSelector(selectContains);
    const userData = useAppSelector(selectUserData);
    const dispatch = useAppDispatch();
    useEffect(()=>{
        const objectData = {
            user_id: userData.user_id,
            user_password: userData.password,
        }
        getSelfContains("POST", objectData, "https://rosreestr/vendor/api/container/get_self_contains.php", dispatch, addContain);
    }, [])
    const navigate = useNavigate();
    return(
        <AdditionalMenu>
                {
                    isArrayEmpty(containList) ? <AdditionalMenuItemElem>Ничего не найдено</AdditionalMenuItemElem> :
                    containList.map((elem:IContainsList)=>{
                        return (
                            <AdditionalMenuItemList key={elem.title}>
                                <AdditionalMenuItemElem onClick={()=>{
                                    navigate("/container/" + userData.login + "/" + elem.title);
                                }}>{userData.login}/{elem.title}</AdditionalMenuItemElem>
                            </AdditionalMenuItemList>
                        )
                    })
                }
        </AdditionalMenu>
    )
}


function HeaderSearchInput(props:Props){

    const [additionalMenuFlag, setAdditionalMenuFlag] = useState(false);


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
    cursor: pointer;
    text-decoration: none;
    color: black;
    border-top: 1px solid #d0d7de;
`



export default HeaderSearchInput;