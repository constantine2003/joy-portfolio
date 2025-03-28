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
                    
                </div>

                <div className={styles.secondhalf}>
                </div>
            </div>
        </div>
    );
}

export default Contact;