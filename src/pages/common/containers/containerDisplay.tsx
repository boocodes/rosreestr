import styled from "styled-components";
import Header from "../../../ui/header/header";
import Footer from "../../../ui/footer/footer";
import {getContainByUsernameAndContainName} from "../../../utils/fetchMethod";
import {useDispatch} from "react-redux";
import {
    changeContainClosedFlag,
    changeContainerViewPage,
    changeContainNotFoundFlag
} from "../../../redux/reducers/contain/reducer";
import {useEffect} from "react";
import {getLastElemOfPath, getPreLastElemOfPath} from "../../../utils/paramsMethods";
import {useLocation} from "react-router-dom";
import {useAppSelector} from "../../../hooks/useAppSelector";
import {
    selectContainClosedFlag,
    selectContainNotFoundFlag,
    selectContainViewPage
} from "../../../redux/reducers/contain/selector";
import {isObjectEmpty} from "../../../utils/usefullMethods";
import {selectUserData} from "../../../redux/reducers/user/selector";
import ContainerDisplayInner from "./containerDisplayInner";


interface Props{


}

interface IContainViewPage{
    title: string;
    edited: string;
    created: string;
    description: string;
}


function ContainerDisplayPage(props:Props){
    const dispatch = useDispatch();
    const location = useLocation();
    const userData = useAppSelector(selectUserData);
    const containViewPage = useAppSelector(selectContainViewPage);
    const containClosedFlag = useAppSelector(selectContainClosedFlag);
    const containNotFoundFlag = useAppSelector(selectContainNotFoundFlag);
    useEffect(()=>{
       const objectData = {
           login: getPreLastElemOfPath(location.pathname),
           contain_title: getLastElemOfPath(location.pathname),
           master_user_id: userData.user_id,
       }
       getContainByUsernameAndContainName("POST", objectData, "https://rosreestr/api/container/get_contain_by_login.php", dispatch, changeContainerViewPage, changeContainClosedFlag, changeContainNotFoundFlag);
    }, [])
    return (
            <>
                {
                    containNotFoundFlag ?
                        <>
                            <Header/>
                            <ContainerTitle>
                                Ничего не найден
                            </ContainerTitle>
                            <Footer/>
                        </>
                        :
                        containClosedFlag ?
                            <>
                                <Header/>
                                <ContainerTitle>
                                    Контейнер приватен, запросите разрешение у владельца
                                </ContainerTitle>
                                <Footer/>
                            </>

                            :
                            isObjectEmpty(containViewPage) ?
                                <>
                                    <Header/>
                                    <ContainerTitle>
                                        Ничего не найдено
                                    </ContainerTitle>
                                    <Footer/>
                                </>
                                :
                                <ContainerDisplayInner/>
                }
            </>
    )
}



const ContainerTitle = styled.p`
    font-size: 24px;
    font-family: 'Gilroy';
    margin-bottom: 10px;
    margin: 50px 0px 70px 70px;
`


export default ContainerDisplayPage;