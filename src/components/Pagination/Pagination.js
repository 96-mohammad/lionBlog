import Styles from "./Pagination.module.scss";

const Pagination = props => {
    const {
        getTotalPages,
        currentPage,
        paginate,
        previousPage,
        nextPage
    } = props;

    const pageNumbers = [];

    for (let i = 1; i <= getTotalPages(); i++) {
        pageNumbers.push(i);
    }

    return (
        <div>
            <ul className={Styles.pagination}>
                <li
                    onClick={previousPage}
                    className={Styles.pagination_page_number}>
                    Prev
                </li>
                {pageNumbers.map((number) => (
                    <li
                        key={number}
                        onClick={() => paginate(number)}
                        className={
                            Styles.pagination_page_number + (number === currentPage ? 'active' : '')
                        }
                    >
                        {number}
                    </li>
                ))}
                <li
                    onClick={nextPage}
                    className={Styles.pagination_page_number}>
                    Next
                </li>
            </ul>
        </div>
    );
}

export default Pagination;