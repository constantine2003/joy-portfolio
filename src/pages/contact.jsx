import styles from "../styles/contact.module.css";  // Correct import
import { useNavigate } from "react-router-dom"; // Import navigation hook
import Sidebar from "../components/sidebar";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
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

                        <div className={styles.contactmecontainer}>
                            <h1 className={styles.contactme}>Contact Me</h1>
                        </div>

                        <div className={styles.namescontainer}>
                            <div className={styles.firstnamecontainer}>
                                <input className={styles.name} type="text" />
                                <p className={styles.text}>First Name</p>
                            </div>
                            <div className={styles.lastnamecontainer}>
                                <input className={styles.name} type="text" />
                                <p className={styles.text}>Last Name</p>
                            </div>
                        </div> 
                        
                        <div className={styles.emailcontainer}>
                            <input className={styles.email} type="text" />
                            <p className={styles.text}>Email Address</p>
                        </div>

                        <div className={styles.messagecontainer}>
                            <textarea  className={styles.message} type="text" />
                            <p className={styles.text}>Message</p>
                        </div>

                        <button className={styles.button}>
                            SUBMIT A MESSAGE
                        </button>

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