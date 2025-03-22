import styles from "../styles/landingpage.module.css";  // Correct import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faUser, faEnvelope } from "@fortawesome/free-solid-svg-icons";

function LandingPage() {
    return (
        <div className={styles.container}>
            {/*Top bar*/}
            <div className={styles.sidebar}> 
            <FontAwesomeIcon className={styles.fonts} size="2x" icon={faHouse} />
            <FontAwesomeIcon className={styles.fonts} icon={faUser} size="2x" />      
            <FontAwesomeIcon className={styles.fonts} icon={faEnvelope} size="2x" />
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
                        <h1 className={styles.first}>Hi,</h1>
                        <h1 className={styles.second}>I'm Joy Arenas</h1>
                        <h1 className={styles.second}>a <span className={styles.fourth}>Mathematician</span></h1>
                        <h3 className={styles.third}>BS Math / DOST Scholar / UP Graduate</h3>
                        <button className={styles.contactmebutton}>CONTACT ME</button>

                        <h3 className={styles.latexx}>{"\\end{document}"}</h3>
                    </div>
                </div>
                
                <div className={styles.secondhalf}>
                    <div className={styles.secondbox}></div>
                    <div className={styles.imagewrapper}>
                        <img src="/Joy_Arenas_uyab-removebg-preview.png" alt="Joy Arenas" />
                    </div>
                    <div className={styles.thirdbox}></div>
                </div>
            </div>
        </div>
        
    );
}

export default LandingPage;