import Styles from "./Home.module.scss";
import HeroCover from "../../assets/image/coding.jpg";
import {Link} from "react-router-dom";

const Home = () => (
        <div className="hero">
            <div className={Styles.hero_container}>
                <div className={Styles.hero_container_content}>
                        <div>
                            <h2>Create, Publish and Share your Knowledge with Others!</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <Link className="router-link" to="/blog">Read all blogs</Link>
                        </div>
                </div>
                <div className={Styles.hero_container_photo}>
                     <img src={HeroCover} alt="hero"/>
                </div>
            </div>
        </div>
    );

export default Home;