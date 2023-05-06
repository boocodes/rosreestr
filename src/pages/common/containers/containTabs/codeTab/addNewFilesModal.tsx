import styled from "styled-components";


interface Props{
    changeModalFlag: (flag: boolean)=>void;

}


function AddNewFilesModal(props:Props){


    return(
        <>
            <ExternalWrapper>
                <HeaderWrapper>
                    <Title>
                        Добавить файлы
                    </Title>
                </HeaderWrapper>
            </ExternalWrapper>
            <Overlay onClick={()=>props.changeModalFlag(false)}/>
        </>
    )
}


const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
`
const ExternalWrapper = styled.div`
    position: absolute;
    top:50%;
    left:50%;
    transform:translate(-50%, -50%); 
    width: 600px;
    height: 600px;
    background-color: #ffffff;
    border: 1px solid #d0d7de;
    z-index: 6;
`

const HeaderWrapper = styled.div`

`
const Title = styled.p`

`


export default AddNewFilesModal;