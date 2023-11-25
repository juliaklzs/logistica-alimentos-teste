import React from "react";
import { Container } from "./styled";
import Newton from "../assets/Logos/logo-newton 1.png"
import Outlook from "../assets/Logos/logo-outlook.png"

function Footer() {
    return(
        <Container style={{display: "flex", justifyContent: "space-around"}}>
            <div>
                <img src={Outlook} alt="" style={{height: "80px"}}/>
            </div>
            <div>
                <img src={Newton} alt="" style={{height: "30px"}}/>
            </div>
        </Container>
    )

}

export default Footer;