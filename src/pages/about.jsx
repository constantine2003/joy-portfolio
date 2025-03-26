import styles from "../styles/about.module.css";  // Correct import
import { useNavigate } from "react-router-dom"; // Import navigation hook
import Sidebar from "../components/sidebar";
import { faCuttlefish, faPython } from "@fortawesome/free-brands-svg-icons";
import { faHashtag } from "@fortawesome/free-solid-svg-icons"; 
function About() {
    //const navigate = useNavigate(); // Hook for navigation
    return (
        <div className={styles.container}>
            {/*Top bar*/}
            <Sidebar/>
            <div className={styles.content}>
                <div className={styles.firsthalf}>
                    <div className={styles.topbox}>                        
                        <h3 className={styles.topboxtext}> 
                            {`#include <stdio.h>`}
                            <br></br>
                            {`int main() {`}
                            <br></br>
                            {`printf("`}
                        </h3>
                    </div>

                    <div className={styles.middlebox}>
                        <div className={styles.aboutmeparent}>
                            <h1 className={styles.aboutme}>
                                About me
                            </h1>
                        </div>
                        <div className={styles.aboutdetailsparent}>
                            <h3 className={styles.aboutdetails}>
                                A Bachelor of Science in Mathematics student
                                at the University of the Philippines Cebu, 
                                recognized as a College and University Scholar.
                                Experienced in programming (C, C++, Python, LaTeX),
                                mathematical problem-solving, and research.
                                Held leadership roles in student organizations,
                                managing logistics, marketing, and finance.
                                Engaged in community service through educational
                                workshops and outreach programs. Proficient in 
                                Microsoft Office, Canva, AutoCAD, and RStudio, 
                                demonstrating adaptability and excellence.
                            </h3>
                        </div>
                    </div>

                    <div className={styles.lowerbox}>                       
                        <h3 className={styles.lowerboxtext}> 
                            {`“);`}
                            <br></br>
                            {`return 0;`}
                            <br></br>
                            {`}`}
                        </h3>                   
                    </div>
                </div>

                <div className={styles.secondhalf}>
                    <div className={styles.cube}>
                        <div className={styles.front}>
                        <FontAwesomeIcon icon={faCuttlefish} style={iconsStyle} title="C / C++" />
                        </div>
                        <div className={styles.back}>
                            Back
                        </div>
                        <div className={styles.right}>
                            right
                        </div>
                        <div className={styles.left}>
                            left
                        </div>
                        <div className={styles.top}>
                            top
                        </div>
                        <div className={styles.bottom}>
                            bottom 
                        </div>
                    </div>
                </div>
            </div>      
        </div>
    );
}

export default About;