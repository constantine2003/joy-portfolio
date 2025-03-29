import styles from "../styles/about.module.css";  // Correct import
import { useNavigate } from "react-router-dom"; // Import navigation hook
import Sidebar from "../components/sidebar";
import { useEffect, useRef, useState } from "react";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function About() {
    const containerRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(2);
    const sections = [
        { src: "/c++_logo-removebg-preview.png", alt: "C++" },
        { src: "/python-removebg-preview.png", alt: "Python" },
        { src: "/latexbackground.png", alt: "LaTeX" }, // Centered first
        { src: "/c_png.png", alt: "C" },
        { src: "/autocad_no_backround.png", alt: "AutoCad" },
        { src: "/cancva.png", alt: "Canva" },
        { src: "/vs_logo_empty.png", alt: "Visual Studio 2022" },
        { src: "/rsr.png", alt: "RStudio" },
        { src: "/offremoved.png", alt: "Microsoft Office" }
    ];

    // Duplicate sections for infinite effect
    const infiniteSections = [...sections, ...sections, ...sections];

    useEffect(() => {
        const container = containerRef.current;

        const handleScroll = () => {
            if (!container) return;
            const sections = container.querySelectorAll(`.${styles.section}`);
            let closestIndex = 0;
            let minDiff = Infinity;

            sections.forEach((section, index) => {
                const rect = section.getBoundingClientRect();
                const diff = Math.abs(rect.top + rect.height / 2 - window.innerHeight / 2);
                if (diff < minDiff) {
                    minDiff = diff;
                    closestIndex = index;
                }
            });

            setActiveIndex(closestIndex);

            // Infinite Scroll Logic
            if (container.scrollTop <= 100) {
                // Scroll near the top, reset to the middle
                container.scrollTop = container.scrollHeight / 3;
            } else if (container.scrollTop + container.clientHeight >= container.scrollHeight - 100) {
                // Scroll near the bottom, reset to the middle
                container.scrollTop = container.scrollHeight / 3;
            }
        };

        // Set initial scroll position to the middle batch
        if (container) {
            container.scrollTop = container.scrollHeight / 3;
        }

        container.addEventListener("scroll", handleScroll);
        return () => container.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className={styles.container}>
            {/*Top bar*/}
            <Sidebar/>
            <div className={styles.content}>
                <div className={styles.firsthalf}>
                    
                    

                    <div className={styles.middlebox}>
                        <div className={styles.aboutmeparent}>
                            <h1 className={styles.aboutme}>
                                {Array.from("About me").map((char, index) => (
                                <span key={index}>{char === " " ? "\u00A0" : char}</span>
                                ))}
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
                 s               workshops and outreach programs. Proficient in 
                                Microsoft Office, Canva, AutoCAD, and RStudio, 
                                demonstrating adaptability and excellence.
                            </h3>

                            <a href="/CV.pdf" download="Joy Arenas CV.pdf">
                                <button className={styles.button}>
                                    <FontAwesomeIcon icon={faDownload} className={styles.icon} />
                                    DOWNLOAD CV HERE
                                </button>
                            </a>
                            
                        </div>
                    </div>

                     
                </div>

                <div className={styles.secondhalf} ref={containerRef}>
            {infiniteSections.map((item, index) => (
                <div
                    key={index}
                    className={`${styles.section} ${index === activeIndex ? styles.active : ""}`}
                >
                    <img className={styles.logos} src={item.src} alt={item.alt} />
                </div>
            ))}
        </div>
            </div>      
        </div>
    );
}

export default About;