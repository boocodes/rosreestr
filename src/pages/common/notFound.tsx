import styled from "styled-components";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import {
    Header,
    Footer,
}   from '../../';


interface Props{

}


function NotFoundPage(props:Props){
   const navigate = useNavigate();
    function handleClick(){
        navigate(-1);
    }

    return(
        <>
            <Header/>
                <MainContent>
                    <Title>Страница не найдена.</Title>
                    <GoBackButton onClick={handleClick}>Вернуться назад</GoBackButton>
                </MainContent>
            <Footer/>
        </>
    )
}

const MainContent = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    height: 60vh;
`
const Title = styled.h1`
    margin-top: 100px;
    font-family: 'Gilroy';
    margin-bottom: 30px;
`
const GoBackButton = styled.button`
    font-family: 'Gilroy';
    font-size: 18px;
    padding: 10px 15px;
    cursor: pointer;
`

export default NotFoundPage;