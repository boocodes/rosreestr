import styled from "styled-components";
import {selectModalWindowsFlags} from "../../../redux/reducers/modalWindows/selector";
import {useAppSelector} from "../../../hooks/useAppSelector";
import {changeWrongPasswordOrLoginFlag} from "../../../redux/reducers/modalWindows/reducer";
import {useAppDispatch} from "../../../hooks/useAppDispatch";
import {useState} from "react";


interface Props{


}


function WrongPasswordModal(props:Props){
    const dispatch = useAppDispatch();
    const wrongPasswordModalWindowFlag:boolean = useAppSelector(selectModalWindowsFlags);
    let timerTime = 2000;
    const timer = setInterval(()=>{
        if(timerTime === 0){
            dispatch(changeWrongPasswordOrLoginFlag(false));
            clearInterval(timer);
        }
        console.log(timerTime);
        timerTime = timerTime - 100;
    }, 100);

    return (
       <>
            <ExternalWrapper leftPos={100}>
                <ModalTitle>
                    Неверные данные
                </ModalTitle>

            </ExternalWrapper>
       </>
    )
}

interface IExternalWrapper{
    leftPos: number;
}

const ExternalWrapper = styled.div<IExternalWrapper>`
    position: absolute;
    left: ${props=>props.leftPos}px;
    top: 30px;
    padding: 10px 15px;
    border-radius: 5px;
    background-color: #d03812;
    
`

const ModalTitle = styled.p`
    font-family: 'Gilroy';
    color: white;
    font-size: 18px;
`


export default WrongPasswordModal;