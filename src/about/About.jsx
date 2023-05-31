import styles from "./about.module.css";
import avatar from "../assets/img_profile.png";


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

                        </div>

                    </div>

                </div>

            </div>

        </section>
    )

}