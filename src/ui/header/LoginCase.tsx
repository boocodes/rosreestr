import styled from "styled-components";
import {useAppSelector} from "../../hooks/useAppSelector";
import {selectUserData} from "../../redux/reducers/user/selector";
import PopupUserCabinetLinkMenu from "./popupMenu";
import {useState} from "react";

interface Props{

}


function LoginCase(props:Props){
    const [popupUserCabinetFlag, setPopupUserCabinetFlag] = useState<boolean>(false);
    const userData = useAppSelector(selectUserData);
    return(
        <>
            <UserCabinetLinkWrapper onClick={()=>setPopupUserCabinetFlag(!popupUserCabinetFlag)}>
                <UserLoginText>{userData.login}</UserLoginText>
            </UserCabinetLinkWrapper>
            {
                popupUserCabinetFlag ?
                    <>
                        <Overlay onClick={()=>setPopupUserCabinetFlag(!popupUserCabinetFlag)}/>
                        <PopupUserCabinetLinkMenu/>
                    </>
                    :
                    null
            }
        </>
    )
}

const UserCabinetLinkWrapper = styled.div`
    cursor: pointer;
    padding: 10px 15px;
`
const UserLoginText = styled.p`
   font-size: 20px;
   color: white;
   font-family: 'Gilroy';
`
const Overlay = styled.div`
    position: absolute;
    width: 100vw;
    height: 100vh;
    left: 0;
    top: 0;
    cursor: pointer;
`

export default LoginCase;