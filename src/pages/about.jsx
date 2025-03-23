import styles from "../styles/landingpage.module.css";  // Correct import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faUser, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom"; // Import navigation hook

function About() {
    const navigate = useNavigate(); // Hook for navigation
    return (
        <div className={styles.container}>
                    {/*Top bar*/}
                    <div className={styles.sidebar}> 

            <FontAwesomeIcon
            className={styles.fonts}
            size="2x"
            icon={faHouse}
            onClick={() => navigate("/")} // Navigate to home page
            style={{ cursor: "pointer" }} // Make it look clickable
            />

            <FontAwesomeIcon 
            className={styles.fonts} 
            icon={faUser} 
            size="2x"
            onClick={() => navigate("/contact")}
             />    
               
            <FontAwesomeIcon
            className={styles.fonts} 
            icon={faEnvelope} 
            size="2x"
            onClick={() => navigate("/about")}
            />
            </div>
        </div>
    );
}

export default About;