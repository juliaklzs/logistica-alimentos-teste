import styles from './Card3.module.css'
import image from "./img/banana.png"

function Card3(){
    return(
        <section className={styles.card}>
            <div className={styles.card_header}>
                <br />
                <h3>Sacolão do Zé</h3>
            </div>
            <div className={styles.card_body}>
                <img src={image} alt="" />
                <h4>4 caixotes</h4>
            </div>

        </section>

    )
}

export default Card3