import styles from "../styles/landingpage.module.css";  // Correct import

function LandingPage() {
    return (
        <div className={styles.container}>
            {/*Top bar*/}
            <div className={styles.sidebar}> 

            </div>

            <div className={styles.profilecontent}>
                <div className={styles.firsthalf}>
                    <div className={styles.wrap}>
                        <h1 className={styles.first}>Hi,</h1>
                        <h1 className={styles.second}>I'm Joy Arenas</h1>
                        <h1 className={styles.second}>a <span className={styles.fourth}>Mathematician</span></h1>
                        <h3 className={styles.third}>BS MATH / DOST SCHOLAR / UP GRADUATE</h3>
                        
                    </div>
                </div>
                <div className={styles.secondhalf}>
                    
                </div>
            </div>
        </div>
        
    );
}

export default LandingPage;