import styled from "styled-components";

interface Props{

}


function Footer(props:Props){
    return(
        <Root>
            Подвал сайта
        </Root>
    )
}

const Root = styled.div`
    font-family: 'Gilroy';
    border-top: 1px solid #DDDDDD;
    padding: 70px;
`

export default Footer;