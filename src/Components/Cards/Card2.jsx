import styles from './Card2.module.css'
import image from "./img/uva.png"

function Card2(){
    return(
        <section className={styles.card}>
            <div className={styles.card_header}>
                <br />
                <h3>Sacolão do Zé</h3>
            </div>
            <div className={styles.card_body}>
                <img src={image} alt="" />
                <h4>2 caixotes</h4>
            </div>

        </section>

    )
}

export default Card2