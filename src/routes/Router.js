import {Route, Routes, Navigate} from "react-router-dom";
import {Login, BlogGrid, CreateBlog, Home} from "../pages"
import PrivateRoute from "./PrivateRoute";

const Router = () => (
        <Routes>
            <Route exact path="/" element={<Login/>}/>
            <Route path="*" element={<Navigate to="/" replace/>}/>
            <Route path="*" element={<PrivateRoute />}>
                <Route exact path="home" element={<Home/>}/>
                <Route exact path="create" element={<CreateBlog/>}/>
                <Route exact path="blog" element={<BlogGrid/>}/>
            </Route>
        </Routes>
    );

export default Router;