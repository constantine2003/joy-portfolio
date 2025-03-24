import styles from "../styles/about.module.css";  // Correct import
import { useNavigate } from "react-router-dom"; // Import navigation hook
import Sidebar from "../components/sidebar";
function About() {
    const navigate = useNavigate(); // Hook for navigation
    return (
        <div className={styles.container}>
            {/*Top bar*/}
            <Sidebar/>
            <div className={styles.content}>

            </div>      
        </div>
    );
}

export default About;