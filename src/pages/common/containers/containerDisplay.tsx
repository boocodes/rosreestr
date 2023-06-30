import styled from "styled-components";
import {useEffect} from "react";
import {useLocation} from "react-router-dom";



import {
    Header,
    Footer,
    getContainByUsernameAndContainName,
    useAppDispatch,
    changeContainNotFoundFlag,
    changeContainClosedFlag,
    changeContainerViewPage,
    getLastElemOfPath,
    getPreLastElemOfPath,
    useAppSelector,
    selectContainViewPage,
    selectContainNotFoundFlag,
    selectContainClosedFlag,
    isObjectEmpty,
    selectUserData,
    ContainerDisplayInner
}   from '../../../';

interface Props{


}

interface IContainViewPage{
    title: string;
    edited: string;
    created: string;
    description: string;
}


function ContainerDisplayPage(props:Props){
    const dispatch = useAppDispatch();
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
                                Ничего не найдено
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