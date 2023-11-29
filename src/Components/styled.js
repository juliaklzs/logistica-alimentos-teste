import styled from "styled-components";

// Header
export const Container = styled.div`
    background-color: red;
    width: auto;
    height: 35px;
    padding: 2vh 6vh;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    
`

export const GroupBtn = styled.div`
    display: flex;
    flex-direction: row;
    gap: 30px;
    align-items: center;
    color: white;
    
`

//Componentes de Botões
export const Btn = styled.button`
    border-radius: 13px;
    border-color: #FFF;
    border-width: 1.5px;
    padding: 10px 1vw;
    color: #FFF;
    background-color: transparent;
`
export const BtnSend = styled.button`
    border-radius: 15px;
    background-color: red;
    border: none;
    font-weight: bold;
    color: white;
    padding: 15px 5vw;
    margin: 8vh 0vh 3vh 0vh; 
`

export const BtnAction = styled.button`
    border-radius: 15px;
    background-color: red;
    border: none;
    font-weight: bold;
    color: white;
    padding: 10px 3vw;
    margin: 8vh 0vh 3vh 0vh; 
`
export const CartBtn = styled.button`
    width: 65px;
    height: 65px;
    border-radius: 50%;
    background-color: #ffffff;
    border: none;
    position: relative;
    overflow: hidden;
    box-shadow: 5px 5px 10px #22222270;

`
export const RoundBtn = styled.button`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #FF0000;
    border: none;
    position: relative;
    overflow: hidden;
    justify-content: space-between;
`
