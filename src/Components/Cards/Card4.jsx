import styles from './Card4.module.css'
import image from "./img/alface.png"

function Card4(){
    return(
        <section className={styles.card}>
            <div className={styles.card_header}>
                <br />
                <h3>Sacolão do Zé</h3>
            </div>
            <div className={styles.card_body}>
                <img src={image} alt="" />
                <h4>1 caixotes</h4>
            </div>

        </section>

    )
}

export default Card4