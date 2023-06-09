import styles from "./hero.module.css"
import { FaGithub, FaLinkedin, FaFileAlt } from "react-icons/fa"

export function Hero() {
    return (
        <main className={styles.hero}>
            <div className="container">
                <div className={styles.hero_content}>
                    <p>Oi, eu sou o Israel</p>
                    <h2>REACT</h2>
                    <h2>DEVELOPER</h2>
                    <p>Tenho 28 anos sou desenvolvedor frontend com 1 ano de <br /> experiência trabalhando como freelancer</p>
                    <div className={styles.content_links}>

                        <a href=""><FaLinkedin size={46} /></a>
                        <a href=""><FaGithub size={46} /></a>
                        <a href=""><FaFileAlt size={45} /></a>

                    </div>
                </div>
            </div>
        </main>
    )
}