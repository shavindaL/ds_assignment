import Link from "next/link";
import styles from '../styles/Footer.module.css';

const Footer = () => {
    return (
        <>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                <div className={styles.row}>
                    <div className={styles.footerCol}>
                        <h1>Logo</h1>
                        <ul>

                            <li><a href="#"> your health is our wealth </a></li>
                            <li><a href="#"> @copyright </a></li>

                        </ul>
                    </div>
                    <div className={styles.footerCol}>
                        <h4>About us</h4>
                        <ul>

                            <li><a href="#"> Rewards Program </a></li>
                            <li><a href="#"> Affiliates Program </a></li>
                            <li><a href="#"> We Give Back </a></li>

                        </ul>
                    </div>
                    <div className={styles.footerCol}>
                        <h4>Resources</h4>
                        <ul>
                                
                            <li><a href="#"> Blog </a></li>
                            <li><a href="#"> Community </a></li>
                            <li><a href="#"> Sales & offers </a></li>

                        </ul>
                    </div>
                    <div className={styles.footerCol}>
                        <h4>Contacts</h4>
                        <ul>
                                
                            <li><a href="#"> Blog </a></li>
                            <li><a href="#"> Community </a></li>
                            <li><a href="#"> Sales & offers </a></li>

                        </ul>
                    </div>
                </div>
                
                <div className={styles.row2}>

                    <form action="/action_page.php">
                        <input className={styles.email} type="text" id="email" name="email" placeholder="elinasantosh@gmail.com" required ></input>
                        <input type="submit" className={styles.button} value="Subscribe" ></input>

                        <a href="#"> <i className="fab  fa-facebook-f"></i> </a>
                        <a href="#"> <i className="fab fa-twitter"></i> </a>
                        <a href="#"> <i className="fab fa-instagram"></i> </a>
                        <a href="#"> <i className="fab fa-linkedin-in"></i> </a>
                    </form>
                </div>

            </div>
        </footer> 
       </>
     );
}
 
export default Footer;