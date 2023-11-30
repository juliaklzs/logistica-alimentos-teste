import React from "react";
import Header from "../../Components/header";
import Footer from "../../Components/footer";
import { BtnAction } from "../../Components/styled";
import Card from "../../Components/Cards/index"
import Card2 from "../../Components/Cards/Card2";
import Card3 from "../../Components/Cards/Card3";
import Card4 from "../../Components/Cards/Card4";
import { RoundBtn } from "../../Components/styled";
import ShoppingCart from "../../assets/productInst/shoppingCart.png"

function ProductInst () {
    return(
        <section>
            <Header></Header>

                <RoundBtn style={{float: "right"}}><a href="/home"><img src={ShoppingCart} alt="Carrinho de Compras" /></a></RoundBtn>
                <section style={{display: "flex", flexDirection: "column", alignItems: "center", marginTop: "10vh", marginLeft: "90rem"}}>
                    <BtnAction type="submit">Cadastrar alimentos +</BtnAction>
                </section>

                <section style={{display: "flex", alignItems: "center", marginTop:"5vh", marginBottom:"27.6vh", marginLeft:"15rem"}}>
                    <Card />
                    <Card2 />
                    <Card3 />
                    <Card4 />
                </section>

                <section>
                <RoundBtn style={{bottom: "200px", left: "460px"}}><a href="/home"><img src={ShoppingCart} alt="Carrinho de Compras" /></a></RoundBtn>
                <RoundBtn style={{bottom: "200px", left: "720px"}}><a href="/home"><img src={ShoppingCart} alt="Carrinho de Compras" /></a></RoundBtn>
                <RoundBtn style={{bottom: "200px", left: "988px"}}><a href="/home"><img src={ShoppingCart} alt="Carrinho de Compras" /></a></RoundBtn>
                <RoundBtn style={{bottom: "200px", left: "1250px"}}><a href="/home"><img src={ShoppingCart} alt="Carrinho de Compras" /></a></RoundBtn>
                </section>

            <Footer></Footer>
        </section>

    )

}

export default ProductInst;