import styled from "styled-components";
import ButtonLink from "../linkButton/button";
import {useAppSelector} from "../../hooks/useAppSelector";
import {selectUserAuthFlag, selectUserData} from "../../redux/reducers/user/selector";
import LoginCase from "./LoginCase";
import NotLoginCase from "./notLoginCase";

interface Props{

}


function Header(props:Props){
    const userAuthFlag:boolean = useAppSelector(selectUserAuthFlag);

    return(
        <Root>
            <LogoWrapper>
                <LogoText>
                    <LogoTextLink href={"/workspace"}>Росреестр</LogoTextLink>
                </LogoText>
            </LogoWrapper>
            {
                userAuthFlag ?
                    <LoginCase/>
                    :
                    <NotLoginCase/>
            }
        </Root>
    )
}
const Root = styled.div`
    background-color: #24292f;
    padding: 40px 70px 50px 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: 'Gilroy';
`

const LogoWrapper = styled.div`

`
const LogoText = styled.h1`
    
`
const LogoTextLink = styled.a`
    text-decoration: none;
    color: white;
`



export default Header;