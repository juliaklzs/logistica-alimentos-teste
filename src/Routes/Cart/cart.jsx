import React from "react";
import Header from "../../Components/header";
import Footer from "../../Components/footer";
import Card from "../../Components/Cards/index"
import Card2 from "../../Components/Cards/Card2";
import styles from "./Cart.module.css"
import { CartBtn } from '../../Components/styled';
import ShoppingCart from './img/shopingcart.png';
import { BtnAction } from "../../Components/styled";

function Cart () {
    return(
        <section>
            <Header></Header>

                <section style={{display: "flex", alignItems: "center", marginBottom:"18vh", marginLeft:"35rem", marginTop:"16.3rem"}}>
                    <div style={{position: "absolute"}} className={styles.cartbtn}>
                    <CartBtn><a href="/home"><img style={{width:30}} src={ShoppingCart} alt="Imagem carrinho de compras"/></a></CartBtn>
                    </div>
                    <div style={{display: "flex", alignItems: "center",}} className={styles.border}>
                    <Card />
                    <Card2 />
                    </div>
                    <div style={{position: "absolute"}} className={styles.btn}>
                    <BtnAction type="submit">Reservar</BtnAction>
                    </div>
                </section>

            <Footer></Footer>
        </section>

    )

}

export default Cart;