import styled from "styled-components";
import {Link} from "react-router-dom";
import {
    ButtonLink,
    useAppSelector,
    selectUserAuthFlag,
    selectUserData,
    LoginCase,
    NotLoginCase,
    HeaderSearchInput,
}   from '../../../';


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
                <HeaderSearchInput/>
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