import styles from "./about.module.css";
import avatar from "../assets/img_profile.png";
import { FileJs, FileHtml, FileCss, FileTs } from "@phosphor-icons/react"
import { FaNode, FaReact, FaBootstrap } from "react-icons/fa"


export function About() {

    return (
        <section className={styles.about}>
            <div className="container">
                <div className={styles.about_content}>

                    <div className={styles.about_img}>
                        <div className={styles.about_img_container}>

                            <img src={avatar} alt="" />

                        </div>

                    </div>

                    <div className={styles.about_info}>
                        <div>

                            <h2>Skills</h2>

                            <p>
                                Desenvolvimento de websites e SPA's (Single Page Application) com Javascript, HTML, CSS, React.js, Bootstrap 5, tailwind CSS e styled-components.
                            </p>
                            <p>
                                Desenvolvimento de sistemas com Typescript, NextJS e banco de dados
                            </p>
                            <p>
                                Consumo de APIs REST/RESTful
                            </p>
                            <p>
                                Melhorias de UI/UX dos produtos digitais da empresa.
                            </p>
                            <p>
                                Versionamento de código com GIT
                            </p>
                            <p>
                                Desenvolvimento de e-commerce através de CMS com experiência em Wordpress

                            </p>
                        </div>

                        <div>

                            <h2>Tecnologias</h2>

                            <span><FileHtml size={32} /></span>
                            <span><FileCss size={32} /></span>
                            <span><FileJs size={32} /></span>
                            <span><FileTs size={32} /></span>
                            <span><FaNode size={32} /></span>

                        </div>



                    </div>

                </div>

            </div>

        </section>
    )

}