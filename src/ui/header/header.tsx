import styled from "styled-components";
import ButtonLink from "../linkButton/button";
import {useAppSelector} from "../../hooks/useAppSelector";
import {selectUserAuthFlag, selectUserData} from "../../redux/reducers/user/selector";
import LoginCase from "./LoginCase";
import NotLoginCase from "./notLoginCase";
import {Link} from "react-router-dom";
import HeaderSearchInput from "../../components/headerSearchInput/headerSearchInput";


interface Props{

}


function Header(props:Props){
    const userAuthFlag:boolean = useAppSelector(selectUserAuthFlag);

    return(
        <Root>
            <LogoWrapper>
                <LogoText>
                    <LogoTextLink to={"/workspace"}>Росреестр</LogoTextLink>
                </LogoText>
                <HeaderSearchInput></HeaderSearchInput>
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
    padding: 25px 70px 25px 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: 'Gilroy';
`

const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
`
const LogoText = styled.h1`
    margin-right: 30px;
`
const LogoTextLink = styled(Link)`
    text-decoration: none;
    color: white;
`



export default Header;