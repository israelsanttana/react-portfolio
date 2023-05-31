import { useState } from "react"
import styles from "./navbar.module.css"
import { List, X } from "@phosphor-icons/react"


export function Navbar() {

    const [active, setActive] = useState(false);

    const toggleMenu = () => {
        setActive(!active);

    };


    return (
        <section className={styles.navbar}>

            <div className="container">

                <div className={styles.nav_content}>

                    <div className={`${styles.nav} ${active ? styles.activeMenu : styles.hidden}`}>

                        <button
                            className={styles.iconCloseMenu}
                            onClick={() => toggleMenu()}
                        >
                            <X size={40} />
                        </button>



                        <nav>
                            <ul>
                                <li>Home</li>
                                <li>Projetos</li>
                                <li>About</li>
                            </ul>
                        </nav>
                    </div>


                    <button
                        className={styles.iconOpenMeunu}
                        onClick={() => toggleMenu()}
                    >
                        <List size={40} />
                    </button>

                </div>

            </div>

        </section>
    )
}