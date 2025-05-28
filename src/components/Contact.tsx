import { useState } from 'react';
import styles from './Style/Contact.module.css'
import ContactImge from '../imge/Bg.jpg';
import { Link } from 'react-router-dom';

const Contact = () => {
    const [showPhoneNumber, setShowPhoneNumber] = useState(false);
    const [showEmail, setShowEmail] = useState(false); // เพิ่ม state สำหรับอีเมล

    const togglePhoneNumber = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        setShowPhoneNumber(!showPhoneNumber);
    };

    const toggleEmail = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        setShowEmail(!showEmail);
    };

    return (
        <div className={styles.body} style={{
            backgroundImage: `url(${ContactImge})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
        }}>
            <div>
                <div className={styles.iconGrid}>
                    {/* Instagram */}
                    <div className={styles.iconItem}>
                        <a href="https://www.instagram.com/12fxng._?igsh=dWZienMxYTVtc2tj&utm_source=qr" className={styles.iconLink}>
                            <img src="https://i.pinimg.com/736x/7e/76/7f/7e767fe360fe2a528c8feb3cd6a7ed19.jpg"
                                alt="Instagram"
                                className={styles.iconImage} />
                        </a>
                    </div>

                    {/* Facebook */}
                    <div className={styles.iconItem}>
                        <a href="https://m.facebook.com/kanokwan.waetaudom.2024?" className={styles.iconLink}>
                            <img src="https://i.pinimg.com/736x/83/43/46/83434653023e0dc7d667b7f3aececfca.jpg"
                                alt="Facebook"
                                className={styles.iconImage} />
                        </a>
                    </div>

                    {/* Call */}
                    <div className={styles.iconItem}>
                        {showPhoneNumber ? (
                            <div className={styles.phoneNumberDisplay} onClick={() => setShowPhoneNumber(false)}>
                                <p>099-0XX-XXXX</p>
                                <small>(คลิกเพื่อกลับ)</small>
                            </div>
                        ) : (
                            <a href="tel:0990293644" className={styles.iconLink} onClick={togglePhoneNumber}>
                                <img src="https://i.pinimg.com/736x/4f/af/a5/4fafa5c22e85cdb86e78968c2834f407.jpg"
                                    alt="Call"
                                    className={styles.iconImage} />
                            </a>
                        )}
                    </div>

                    {/* Line */}
                    <div className={styles.iconItem}>
                        <a href="https://line.me/ti/p/wF2cmpEYIv" className={styles.iconLink}>
                            <img src="https://i.pinimg.com/736x/b2/22/db/b222dbc287cbf2b0100bddb6e5991a08.jpg"
                                alt="Line"
                                className={styles.iconImage} />
                        </a>
                    </div>

                    {/* Gmail */}
                    <div className={styles.iconItem}>
                        {showEmail ? (
                            <div className={styles.emailDisplay} onClick={() => setShowEmail(false)}>
                                <p>Kanokwankkn12@gmail.com</p>
                                <small>(คลิกเพื่อกลับ)</small>
                            </div>
                        ) : (
                            <a href="mailto:Kanokwankkn12.email@gmail.com" className={styles.iconLink} onClick={toggleEmail}>
                                <img src="https://i.pinimg.com/736x/0b/8d/1e/0b8d1e3a89cd24b2baff391e59f2718b.jpg"
                                    alt="Gmail"
                                    className={styles.iconImage} />
                            </a>
                        )}
                    </div>

                    {/* Anime Icon - เพิ่ม Link เพื่อกลับไปหน้าแรก*/}
                    <div className={styles.iconItem}>
                        <Link to="/" className={styles.iconLink}>
                            <img src="https://i.pinimg.com/736x/ff/9f/ea/ff9fea89eb4be5db9c2cdbef9d425e7d.jpg"
                                alt="Anime Icon"
                                className={styles.iconImage} />
                            <div className={styles.iconTooltip}>กลับหน้าหลัก</div>
                        </Link>
                    </div>
                </div>
            </div>
        </div >
    )
};

export default Contact;