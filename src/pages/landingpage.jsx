import styles from "../styles/landingpage.module.css";  // Correct import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faUser, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom"; // Import navigation hook


function LandingPage() {
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

            <div className={styles.profilecontent}>
                <div className={styles.firsthalf}>
                    {/*Rectangle*/}
                    <div>

                    </div>
                    <div className={styles.firstbox}>
                        <h3 className={styles.latex}>{"\\documentclass{article}"}</h3>
                    </div>

                    <div className={styles.wrap}>

                    <h1 className={styles.first}>
                        {Array.from("Hi,").map((char, index) => (
                        <span key={index}>{char}</span>
                        ))}
                    </h1>

                    <h1 className={styles.second}>
                        {Array.from("I'm Joy Arenas").map((char, index) => (
                        <span key={index}>{char === " " ? "\u00A0" : char}</span>
                        ))}
                    </h1>

                    <h1 className={styles.second}>
                        {Array.from("a Mathematician").map((char, index) => (
                        <span key={index} className={char === " " ? "" : styles.fourth}>
                        {char === " " ? "\u00A0" : char}</span>
                        ))}
                    </h1>
                    
                    <h3 className={styles.third}>
                        {Array.from("BS Math / DOST Scholar / UP Graduate").map((char, index) => (
                        <span key={index}>{char === " " ? "\u00A0" : char}</span>
                        ))}
                    </h3>

                        <button className={styles.contactmebutton}>CONTACT ME</button>

                        <h3 className={styles.latexx}>{"\\end{document}"}</h3>
                    </div>
                </div>
                
                <div className={styles.secondhalf}>
                    <div className={styles.secondbox}></div>
                    <div className={styles.imagewrapper}>
                        <img className={styles.image} src="/Joy_Arenas_uyab-removebg-preview.png" alt="Joy Arenas" />
                    </div>
                    <div className={styles.thirdbox}></div>
                </div>
            </div>
        </div>
        
    );
}

export default LandingPage;