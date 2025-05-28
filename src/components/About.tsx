import styles from './Style/About.module.css';
import AboutImge from '../imge/Bg.jpg';
import profileImage from '../imge/proflie.jpg';
import Quote from '../imge/About.jpg';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className={styles.body} style={{
            backgroundImage: `url(${AboutImge})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
        }}>
            <div className={styles.container}>
                <div className={styles.Card1}>
                    <img src={profileImage} alt='About Us' className={styles.Image} />
                    <div className={styles.Name}>Kanokwan Waetaudom</div>

                </div>

                <div className={styles.Card2}>
                    <ul className={styles.List}>
                        <li>ชื่อเล่น : ฟางข้าว</li>
                        <li>เพศ: หญิง</li>
                        <li>อายุ: 22</li>
                        <li>เชื้อชาติ: ไทย</li>
                        <li>สัญชาติ : ไทย</li>
                        <li>มุมมองชีวิต : </li>
                    </ul>

                    <div>
                        <img src={Quote} alt='Quote' className={styles.Quote} />
                        <Link to="/contact" className={styles.contactButton}>Contact Me!</Link>    
                    </div>
                </div>
            </div>

        </div>
    )
};

export default About;