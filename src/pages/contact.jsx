import styles from "../styles/contact.module.css";  // Correct import
import { useNavigate } from "react-router-dom"; // Import navigation hook
import Sidebar from "../components/sidebar";

function Contact() {
    const navigate = useNavigate(); // Hook for navigation

    return (
        <div className={styles.container}>
            {/*Top bar*/}
            <Sidebar/>
            <div className={styles.content}>
                <div className={styles.firsthalf}>
                    <div className={styles.middlecontainer}>

                        <div className={styles.contactmecontainer}>
                            <h1 className={styles.contactme}>Contact Me</h1>
                        </div>

                        <div className={styles.namescontainer}>
                            <div className={styles.firstnamecontainer}>
                                <input className={styles.name} type="text" />
                                <p className={styles.text}>First Name</p>
                            </div>
                            <div className={styles.lastnamecontainer}>
                                <input className={styles.name} type="text" />
                                <p className={styles.text}>Last Name</p>
                            </div>
                        </div> 
                        
                        <div className={styles.emailcontainer}>
                            <input className={styles.email} type="text" />
                            <p className={styles.text}>Email Address</p>
                        </div>

                        <div className={styles.messagecontainer}>
                            <textarea  className={styles.message} type="text" />
                            <p className={styles.text}>Message</p>
                        </div>

                        <button className={styles.button}>
                            SUBMIT A MESSAGE
                        </button>

                    </div>
                </div>

                <div className={styles.secondhalf}>
                    <div className={styles.mapcontainer}>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;