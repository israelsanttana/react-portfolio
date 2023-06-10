import styles from "./about.module.css";
import avatar from "../assets/img_profile.png";
import iconHtml from "../assets/html.png"
import iconCss from "../assets/css.png"
import iconJavascript from "../assets/javascript.png"
import iconTypescript from "../assets/typescript.png"
import iconNode from "../assets/nodejs.png"
import iconReact from "../assets/react.png"


export function About() {

    return (
        <section className={styles.about}>
            <div className="container">
                <div className={styles.about_content}>

                    <div className={styles.about_img}>
                        <div className={styles.about_img_container}>

                            <img src={avatar} alt="" />

                        </div>
                        <div className={styles.icons}>

                            <img src={iconHtml} alt="" />
                            <img src={iconCss} alt="" />
                            <img src={iconJavascript} alt="" />
                            <img src={iconTypescript} alt="" />
                            <img src={iconNode} alt="" />
                            <img src={iconReact} alt="" />

                        </div>

                    </div>

                    <div className={styles.about_info}>
                        <div>

                            <span>
                                Sou apaixonado por resolver problemas e criar soluções inovadoras. Com uma sólida experiência em tecnologias como HTML, CSS, JavaScript, TypeScript, React, Next.js e Node.js, estou pronto para enfrentar qualquer desafio que envolva o desenvolvimento de interfaces e aplicativos web.
                                <br />
                                <br />
                                Durante a minha trajetória, tenho trabalhado tanto como freelancer quanto em projetos pessoais. Essas oportunidades me permitiram aprimorar minhas habilidades e me destacar na construção de websites elegantes, intuitivos e responsivos. Tenho um olhar atento aos detalhes e estou sempre em busca da melhor experiência do usuário.
                                <br />
                                <br />

                                Além disso, sou capaz de trabalhar em pojetos com consumo de APIs e manipulação de bancos de dados.
                                <br />
                                <br />

                                Minha paixão por resolver problemas impulsiona meu trabalho. Adoro mergulhar em desafios complexos e encontrar soluções elegantes.
                                <br />
                                <br />

                                Através da minha experiência com React e Next.js, tenho construído aplicações de alta qualidade, aproveitando ao máximo as vantagens dessas tecnologias modernas. Sou capaz de criar interfaces dinâmicas e interativas, com recursos como roteamento e validações de formularios.

                            </span>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    )

}