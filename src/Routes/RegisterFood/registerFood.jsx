import React, { useState } from 'react';
import Header from "../../Components/header";
import { Form, Input } from "../Login/styled";
import { BtnSend } from "../../Components/styled";

function RegisterFood() {
    const [selectedImage, setSelectedImage] = useState(null);
   
    const handleImageUpload = (e) => {
       setSelectedImage(URL.createObjectURL(e.target.files[0]));
    };
   
    return (
       <div className='registerFood' style={{alignItems: "center", fontFamily: 'Poppins', justifyContent: "center", height: "100vh"}}>
        <Header></Header>
        <Form>
            <p>Nome do Produto:</p>
            <Input></Input>
            <p>Unidade (em caixote):</p>
            <Input></Input>
            <p>Imagem da mercadoria</p>
            <input type="file" onChange={handleImageUpload} />
            {selectedImage && <img src={selectedImage} alt="Imagem do produto" style={{maxWidth: '300px', alignContent: 'center'}}/>}
            
            <p>Tempo estimado para consumo:</p>
            <Input placeholder='dia/mês/ano'></Input>
            <BtnSend><a href="/productEnterprise" style={{textDecoration: "none", color: "white"}}>Cadastrar</a></BtnSend>
        </Form>

       </div>
    );
   }
   
   export default RegisterFood;
