import { Outlet, Navigate } from "react-router-dom";
import {Header} from "../components";
import {navItems} from "../data/data";

const PrivateRoute = () => {
    const auth = sessionStorage.getItem('token');

    return auth ? <><Header links={navItems} /><Outlet /></> : <Navigate to="/" />
}

export default PrivateRoute;