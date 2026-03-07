import styles from "../styles/contact.module.css";  // Correct import
import { useNavigate } from "react-router-dom"; // Import navigation hook
import Sidebar from "../components/sidebar";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare, faLinkedin, faTwitterSquare, faGoogle} from "@fortawesome/free-brands-svg-icons";
import { faPhoneSquare } from "@fortawesome/free-solid-svg-icons";
import "leaflet/dist/leaflet.css";
function Contact() {
    const navigate = useNavigate(); // Hook for navigation

    return (
        <div className={styles.container}>
            {/*Top bar*/}
            <Sidebar/>
            <div className={styles.content}>
                <div className={styles.firsthalf}>
                    <div className={styles.middlecontainer}>                  
                        <h1 className={styles.contactme}>
                            {Array.from("Contact me").map((char, index) => (
                            <span key={index} className={char === " " ? "" : styles.fourth}>
                            {char === " " ? "\u00A0" : char}
                            </span>
                            ))}
                        </h1>
                            <div className={styles.logos}>
                                <FontAwesomeIcon icon={faFacebookSquare} className={styles.icon} />
                                <h3 className={styles.text}>
                                    <a 
                                    href="https://www.facebook.com/rjoy.arenas" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className={styles.text}
                                    >
                                    https://www.facebook.com/rjoy.arenas
                                    </a>
                                </h3>
                            </div>
                            <div className={styles.logos}>
                                <FontAwesomeIcon icon={faLinkedin} className={styles.icon} />
                                <h3 className={styles.text}>
                                    <a 
                                    href="https://www.linkedin.com/in/really-joy-arenas-4451a8240/" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className={styles.text}
                                    >
                                    https://www.linkedin.com/in/really-joy-arenas-4451a8240/
                                    </a>
                                </h3>
                            </div>
                            <div className={styles.logos}>
                                <FontAwesomeIcon icon={faGoogle} className={styles.icon} />
                                <h3 className={styles.text}>reallyjoyarenas@gmail.com</h3>
                            </div>
                            <div className={styles.logos}>
                                <FontAwesomeIcon icon={faTwitterSquare} className={styles.icon} />
                                <h3 className={styles.text}> @real_ly_ </h3>
                            </div>
                            <div className={styles.logos}>
                                <FontAwesomeIcon icon={faPhoneSquare} className={styles.icon} />
                                <h3 className={styles.text}>09219664505 / 0929448902</h3>
                            </div>
                    </div>
                </div>

                <div className={styles.secondhalf}>
                    <div className={styles.mapcontainer}>
                        <MapContainer 
                        center={[10.32236457616312, 123.8982167518375]} 
                        zoom={50} 
                        style={{ width: "100%", height: "100%", borderRadius: "5px" }} >
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker position={[10.32236457616312, 123.8982167518375]}>
                        <Popup>Hello! This is a marker.</Popup>
                        </Marker>
                        </MapContainer> 
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;