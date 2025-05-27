import { Link } from "react-router-dom";
import styles from "./Style/Narbars.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
        <div className={styles.logo}>KANOKWAN</div>
        <div className={styles.Links}>
            <Link className={styles.title} to="/">Home</Link>
            <Link className={styles.title} to="/about">About</Link>
            <Link className={styles.title} to="/contact">Contact</Link>
        </div>
    </nav>
  );
};

export default Navbar;
