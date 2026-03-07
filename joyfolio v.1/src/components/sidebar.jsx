import { faHouse, faUser, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./sidebar.module.css";
import { useNavigate } from "react-router-dom"; // Import navigation hook
import { useLocation } from "react-router-dom";

function Sidebar() {
    const navigate = useNavigate(); // Hook for navigation
    const location = useLocation();
    return (
        <div className={styles.sidebar}> 

            <div className={styles.iconparent}>
                <FontAwesomeIcon
                    className={`${styles.fonts} ${location.pathname === "/" ? styles.active : ""}`}
                    size="2x"
                    icon={faHouse}
                    onClick={() => navigate("/")}
                    style={{ cursor: "pointer" }}
                />
                <span className={styles.spans} onClick={() => navigate("/")}> HOME </span>
            </div>

            <div className={styles.iconparent}>
                <FontAwesomeIcon 
                    className={`${styles.fonts} ${location.pathname === "/about" ? styles.active : ""}`}
                    icon={faUser} 
                    size="2x"
                    onClick={() => navigate("/about")}
                />
                <span className={styles.spans} onClick={() => navigate("/about")}> ABOUT </span>
            </div>

            <div className={styles.iconparent}>
                <FontAwesomeIcon
                    className={`${styles.fonts} ${location.pathname === "/contact" ? styles.active : ""}`}
                    icon={faEnvelope} 
                    size="2x"          
                    onClick={() => navigate("/contact")}
                />
                <span className={styles.spans} onClick={() => navigate("/contact")}> CONTACT </span>
            </div>

            </div>

        );
    }
            
export default Sidebar;