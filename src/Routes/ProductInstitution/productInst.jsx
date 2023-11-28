import React from 'react'
import Header from '../../Components/header'
import Footer from '../../Components/footer'
import { RoundBtn } from '../../Components/styled';
import { BtnSend } from '../../Components/styled';
import ShoppingCart from '../../assets/productInst/shoppingCart.png';

function ProductInst() {
    return (
       <div className="productInst">
        <Header></Header>
        <RoundBtn><a href="/home"><img src={ShoppingCart} alt="Imagem carrinho de compras"/></a></RoundBtn>
        <BtnSend>Reservar Alimentos +</BtnSend>
        <Footer></Footer>
       </div>
    );
   }
   
   export default ProductInst;