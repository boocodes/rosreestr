import styled from "styled-components";
import {useAppSelector} from "../../hooks/useAppSelector";
import {selectUserData} from "../../redux/reducers/user/selector";


interface Props{

}


function LoginCase(props:Props){

    const userData = useAppSelector(selectUserData);
    console.log(userData);
    return(
        <>
            <UserCabinetLink href={"/profile"}>
                {userData.login}
            </UserCabinetLink>

        </>
    )
}

const UserCabinetLink = styled.a`

`

export default LoginCase;