import React from "react";
import {Container, Btn, GroupBtn } from "./styled";
import Logo from "../assets/Logos/logo.png"
import { MdOutlineExitToApp } from "react-icons/md";


function Header() {
    return(
      <Container>
        <div>
            <img src={Logo} alt="" style={{ height: '40px', width: 'auto', borderRight: '1px solid #FFF', paddingRight: '10vw' }} />
        </div>

        <GroupBtn>
            <Btn><a href="/home" style={{textDecoration: "none", color: "white"}}>Sobre</a></Btn>
            <Btn>Produtos</Btn>
            <Btn><a href="/contact" style={{textDecoration: "none", color: "white"}}>Fale conosco</a></Btn>
            <a href="/" style={{textDecoration: "none", color: "white"}}><MdOutlineExitToApp /></a>
        </GroupBtn>
        
      </Container>
         
         
    )
        
}
export default Header;

