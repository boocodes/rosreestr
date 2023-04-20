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
                    <a href={"/welcome"}>Росреестр</a>
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
    padding: 40px 70px 50px 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #DDDDDD;
`

const LogoWrapper = styled.div`

`
const LogoText = styled.h1`

`



export default Header;