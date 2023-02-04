import Styles from "./Header.module.scss";
import {Link} from "react-router-dom";
import Logo from "../../assets/image/logo.png";

const Header = ({ links }) => (
        <nav className={Styles.header}>
            <div className={Styles.header_photo}>
                <Link to="/home">
                    <img src={Logo} alt="logo"/>
                </Link>
            </div>
            <ul>
                {links.map(link => (
                    <li key={link.name}>
                        <Link className="router-link" to={link.href}>
                            {link.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );

export default Header;