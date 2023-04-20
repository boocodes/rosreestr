import styled from "styled-components";

interface Props{

}


function Footer(props:Props){
    return(
        <Root>
            Автор - Никита Фелькер
        </Root>
    )
}

const Root = styled.div`
    width: 60%;
    position: relative;
    margin: 0 auto;
    font-family: 'Gilroy';
    border-top: 1px solid #DDDDDD;
    padding: 70px;
`

export default Footer;