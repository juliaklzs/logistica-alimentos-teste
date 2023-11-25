import React from "react";
import { Titulo } from "../Home/styled";
import Header from "../../Components/header";
import { Input } from "../Login/styled";
import { BtnSend } from "../../Components/styled";

function Pass() {
    return(

        <div>
            <Header></Header>
            <section style={{display: "flex", flexDirection: "column", alignItems: "center", marginTop: "10vh"}}>

                <Titulo>Esqueci minha senha</Titulo>
                <p style={{margin: "3vw 0vw 3vw 0vw", width: "35vw", textAlign: "center"}}>Para que você possa recuperar sua senha, nos informe o email cadastrado para que enviemos a mensagem de redefinição!</p>
                <Input placeholder="Insira seu e-mail"></Input>
                <BtnSend>Redefinir senha</BtnSend>
            </section>

        </div>

    )


}

export default Pass;