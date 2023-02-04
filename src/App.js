import Router from "./routes/Router";
import AppContext from "./AppContext";
import {useState} from "react";
import {initialBlogs} from "./data/data";

const App = () => {
    const [blogs, setBlogs] = useState(initialBlogs);

    const updateBlogs = data => {
        setBlogs(prev => ([...prev, data]));
    }

    const driver = {
        updateBlogs,
        blogs
    }

    return (
        <AppContext.Provider value={{...driver}}>
            <Router />
        </AppContext.Provider>
    );
}

export default App;