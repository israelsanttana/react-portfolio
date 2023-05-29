import styles from "./hero.module.css"

export function Hero() {
    return (
        <main className={styles.hero}>
            <div className="container">
                <div className={styles.hero_content}>
                    <p>Oi, eu sou o Israel </p>
                    <h2>REACT</h2>
                    <h2>DEVELOPER</h2>
                    <p>Tenho 28 anos sou desenvolvedor frontend com 1 ano de <br /> experiência trabalhando como freelancer</p>
                </div>
            </div>
        </main>
    )
}