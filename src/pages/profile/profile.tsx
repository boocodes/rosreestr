import styled from "styled-components";
import {useAppSelector} from "../../hooks/useAppSelector";
import {selectUserData} from "../../redux/reducers/user/selector";
import Header from "../../ui/header/header";

interface Props{

}


function ProfilePage(props:Props){

    const userData = useAppSelector(selectUserData)

    return(
        <>
            <Header/>
            <div>
                <h4>Имя - {userData.firstname}</h4>
            </div>
            <div>
                <h4>Фамилия - {userData.lastname}</h4>
            </div>
            <div>
                <h4>Почта - {userData.mail}</h4>
            </div>
            <div>
                <h4>Логин - {userData.login}</h4>
            </div>

        </>
    )
}


export default ProfilePage;