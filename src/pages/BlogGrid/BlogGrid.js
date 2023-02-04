import {useContext, useState} from "react";
import AppContext from "../../AppContext";
import {Card, Pagination} from "../../components";
import Styles from "./BlogGrid.module.scss";

const BlogGrid = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [blogsPerPage] = useState(3);

    const {
        blogs
    } = useContext(AppContext);

    const indexOfLastPost = currentPage * blogsPerPage;
    const indexOfFirstPost = indexOfLastPost - blogsPerPage;
    const currentPosts = blogs.slice(indexOfFirstPost, indexOfLastPost);

    const getTotalPages = () => {
        return Math.ceil(blogs.length / blogsPerPage);
    }

    const paginate = (pageNumber) => {
    	setCurrentPage(pageNumber);
    };

    const previousPage = () => {
    	if (currentPage !== 1)
    		setCurrentPage(currentPage - 1);
    };

    const nextPage = () => {
    	if (currentPage !== getTotalPages())
    		setCurrentPage(currentPage + 1);
    };

    return (
        <div className="container">
            <div className={Styles.grid}>
                {currentPosts.map(blog => (
                    <Card blog={blog} key={blog.id}/>
                ))}
            </div>
            <Pagination
                getTotalPages={getTotalPages}
                currentPage={currentPage}
                previousPage={previousPage}
                nextPage={nextPage}
                paginate={paginate}/>
        </div>
    );
}

export default BlogGrid;