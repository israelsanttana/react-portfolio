import styles from "./navbar.module.css"

export function Navbar() {
    return (
        <section className={styles.navbar}>
            <div className="container">
                <div className={styles.nav}>
                    <nav>
                        <ul>
                            <li>Home</li>
                            <li>Projetos</li>
                            <li>About</li>
                        </ul>
                    </nav>
                </div>


            </div>
        </section>
    )
}