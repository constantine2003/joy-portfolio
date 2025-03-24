import { faHouse, faUser, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./sidebar.module.css";
import { useNavigate } from "react-router-dom"; // Import navigation hook

function Sidebar() {
    const navigate = useNavigate(); // Hook for navigation
    return (
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
            onClick={() => navigate("/about")}
             />      

            <FontAwesomeIcon
            className={styles.fonts} 
            icon={faEnvelope} 
            size="2x"          
            onClick={() => navigate("/contact")}
            />
            </div>

        );
    }
            
export default Sidebar;