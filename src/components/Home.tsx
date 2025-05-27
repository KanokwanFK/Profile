import { useState, useEffect } from "react";
import styles from "./Style/Home.module.css"
import homeImage from "../imge/Bg.jpg";
import animeImage from "../imge/Anime.png";
import { Link } from "react-router-dom";


const Home = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        // เพิ่มเอฟเฟกต์แอนิเมชันเมื่อโหลดหน้า
        setTimeout(() => {
            setIsVisible(true);
        }, 500);
    }, []);

    return (
        <div className={styles.body} style={{
            backgroundImage: `url(${homeImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
        }}>
            <div className={styles.text}>
                <div className={styles.content}>
                    <h1 className={styles.title}>HELLO I'M FANG KHAOW</h1>
                    <div className={styles.subtitleWrapper}>
                        <span className={styles.line}></span>
                        <h2 className={styles.sub}> INTERNSHIP</h2>
                    </div>
                    <p className={styles.description}>Kanokwan Waetaudom,
                        a student of the Bachelor of
                        Science Program in Geo-Informatics,
                        College of Computing,
                        Khon Kaen University.
                    </p>

                    <Link to="/about" style={{ textDecoration: 'none' }}>
                        <button
                            className={styles.actionButton}
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            WELCOME!
                        </button>
                    </Link>
                </div>
            </div>
            {/* รูปอนิเมะ ด้านขวาของหน้า */}
            <div className={`${styles.animeContainer} ${isVisible ? styles.visible : ''}`}>
                <img
                    src={animeImage}
                    alt="Anime character"
                    className={`${styles.animeImage} ${isHovered ? styles.animated : ''}`}
                />
            </div>
        </div>
    )
};

export default Home;