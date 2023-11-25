import React from "react";
import Header from "../../Components/header";
import { BtnSend } from "../../Components/styled";
import { Titulo } from "../Home/styled";
import { Form, Input } from "./styled";





    const enviarForm = (e) => {
        e.preventDefault();
        const email = document.getElementById("email");
        const senha = document.getElementById("senha");

        if (email.value === "" || senha.value === "") {
          alert("Favor preencher os campos obrigatórios.");
        
          if (email.value === "") {
            email.style.border = "2px solid red";
          } else {
            email.style.border = "2px solid initial"; 
          }

          if (senha.value === "") {
            senha.style.border = "2px solid red";
          } else {
            senha.style.border = "2px solid initial"; 
          }
        } else {
            window.location.href = '/';
        }
    }
function Login() {
    return(
        <div>
            <Header></Header> 
            <section style={{display: "flex", flexDirection: "column", alignItems: "center", marginTop: "10vh"}}>
                <Titulo>Portal Tech Food</Titulo>
                <p style={{margin: "1vw 0vw 3vw 0vw"}}>Acesse e faça a diferença</p>
                <Form>
                    <Input placeholder="E-mail" id="email"></Input>
                    <Input placeholder="Senha" id="senha"></Input>
                    <a href="/forgotpassword" style={{color: "red", textDecoration: "none", fontWeight: "bold"}}>Eita, esqueci minha senha</a>
                </Form>

                <BtnSend type="submit"  onClick={enviarForm} >Entrar</BtnSend>
                <a href="/register" style={{color: "red", textDecoration: "none"}}>Cadastrar</a>
           
            </section>

        </div>

        
    )

}
export default Login