import React from "react";
import Header from "../../Components/header";
import Footer from "../../Components/footer";
import { ContainerHome, Section1, Section2, TextsHome1, TextsHome2, Titulo } from "./styled";
import Img1 from "../../assets/ImgHome/img-1.png"
import Img2 from "../../assets/ImgHome/img-2.png"

function Home() {
    return(
        <section>
            <Header/>
            <ContainerHome>
                <Section1>
                    <TextsHome1>
                        <Titulo>Bem vindo a Tech Food!</Titulo>
                        <p>Aqui, você como empresa poderá fazer a diferença com os alimentos que não serão vendidos.</p>
                        <p>Como ONG, você encontra aliementos bons para se tranformar em marmitas para quem precisa do nosso apoio.</p>
                    </TextsHome1>
                    <div>
                        <img src={Img1} alt="" style={{height: "auto", width: "52vw"}}/>
                    </div>
                </Section1>
                <Section2>
                    <div>
                        <img src={Img2} alt="" style={{height: "auto", width: "40vw"}}/>
                    </div>
                    <TextsHome2>
                        <Titulo>Sobre a Tech Food!</Titulo>
                        <p>A criação desse projeto que está em desevolvimento, foi pensado com o foco em ajudar e fazer o bem ao próximo de alguma maneira.</p>
                        <p>Em uma reunião em grupo com o criadores, resolvemos entrar nesse meio do combate à fome com um projeto social usando a tecnologia como principal ferramenta.</p>
                        <p>Com isso, pensamos na Tech Food que é um site que foi criado com a função principal de interligar empresas e ONG’s que pensam em fazer o bem. Aqui na nossa plataforma, empresas como Hortfrutis, sacolões, mercearias e etc podem fazer a doação de alimentos que foram percebidos que possuem uma chance de serem desperdiçados pela validade. Cadastrando eles aqui, ONG’s que trabalham ajudando o próximo com alimentos</p>
                    </TextsHome2>

                </Section2>

            </ContainerHome>
            <Footer/>
            
        </section>
        
    )
        
}

export default Home;