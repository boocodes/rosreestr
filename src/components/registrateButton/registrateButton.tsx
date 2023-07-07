import styled from "styled-components";


interface Props{

}


function RegistrateButton({}:Props){
    return(
        <Root>
            Sign up
        </Root>
    )
}


const Root = styled.button`
    background: none;
    border: 1px solid #fca326;
    padding: 5px 10px;
    font-family: 'Muller';
    color: #fca326;
    font-size: 20px;
    font-weight: 500;
    cursor: pointer;
    &:hover{
        transition: 0.5s;
        background-color: #fc6d26;
        color: white;
    }
`


export default RegistrateButton;