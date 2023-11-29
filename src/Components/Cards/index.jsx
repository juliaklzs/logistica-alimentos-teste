import styles from './Card.module.css'
import image from "./img/laranja.png"

function Card(){
    return(
        <section className={styles.card}>
            <div className={styles.card_header}>
                <br />
                <h3>Sacolão do Zé</h3>
            </div>
            <div className={styles.card_body}>
                <img src={image} alt="" />
                <h4>3 caixotes</h4>
            </div>

        </section>

    )
}

export default Card


