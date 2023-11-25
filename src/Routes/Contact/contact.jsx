import React from "react";
import Header from "../../Components/header";
import { Form, Input } from "../Login/styled";
import { BtnSend } from "../../Components/styled";
import { Titulo } from "../Home/styled";
import Wpp from "../../assets/contact/wpp-img.png"


function Contact() {
    function enviarFrom(event) {
        alert("Sua dúvida foi enviada, logo menos entraremos em contato para te responder!")
        event.preventDefault();
        window.location.href = "/home";
    }

    return(
        <section>
            <Header></Header>

            <Form>
                <Titulo>Fale conosco</Titulo>
                <Input placeholder="Coloque seu e-mail"></Input>
                <h1>Nos conte como podemos te ajudar?</h1>
                <Input placeholder="Digite aqui sua dúvida"></Input>
                <p>Entraremos em contato o mais rápido possível</p>
                <BtnSend style={{marginTop: "0vh"}} onClick={enviarFrom}>Enviar</BtnSend>
                <div style={{display: "flex", alignItems: "center", gap: "10px"}}>
                    <img src={Wpp} alt="" style={{ width: "3vw"}}/>
                    <a href="https://web.whatsapp.com/" target="blank" style={{ textDecoration: "none", color: "black"}}>Nos contate através do WhatsApp, clique aqui!</a>
                </div>
                    
            </Form>
        </section>
    )

}

export default Contact;