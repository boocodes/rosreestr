import styled from "styled-components";

interface Props{

}


function LoginButton({}:Props){
    return(
        <Root>
            Sign in
        </Root>
    )
}


const Root = styled.button`
    background: none;
    font-family: 'Muller';
    border: none;
    color: #fca326;
    font-size: 20px;
    font-weight: 500;
    cursor: pointer;
    &:hover{
        color: #fc6d26;
        transition: 0.5s;
    }
`


export default LoginButton;