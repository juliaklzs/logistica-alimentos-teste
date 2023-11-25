import React from "react";
import Header from "../../Components/header";
import { Form, Input } from "../Login/styled";
import { BtnSend } from "../../Components/styled";
import { Titulo } from "../Home/styled";

function Register() {
    return(
        <div>
            <Header></Header>
            <section style={{display: "flex", flexDirection: "column", alignItems: "center", marginTop: "10vh", gap: "3vh"}} >
                <Titulo>Preencha os campos abaixo</Titulo>
                <Input placeholder="E-mail"></Input>
                <Input placeholder="Senha"></Input>
                <Form style={{display: "flex", alignItems: "center", margin: "0vh", gap: "2vh"}}>
                    <div>                        
                        <Input type="radio" name="grupo1" style={{width: "2vw", height: "2vh"}}></Input>
                        <label htmlFor="">Empresa</label>
                    </div>
                    <div>                        
                        <Input type="radio" name="grupo1" style={{width: "2vw", height: "2vh"}}></Input>
                        <label htmlFor="">ONG</label>
                    </div>
                    <div>                          
                        <Input type="radio" name="grupo1" style={{width: "2vw", height: "2vh"}}></Input>
                        <label htmlFor="">Pessoa física</label>
                    </div>
                </Form>

                <Input placeholder="Nome | Razão social"></Input>
                <Input placeholder="CPF | CNPJ"></Input>

                <BtnSend><a href="/home" style={{textDecoration: "none", color: "white"}}>Cadastrar</a></BtnSend>

            </section>
            


        </div>

    )

}

export default Register;