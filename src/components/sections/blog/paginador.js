import LoadingSpinner from '../loading';



export default function Pagination({ postPerPage, currentPage, totalPages, paginate }) {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalPages / postPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <>

            <nav className='paginadordiv'>
                <ul className="pagination">
                    {pageNumbers.map(c => (
                        <li class="page-item" onClick={() => paginate(c)} key={c}><a className={currentPage === c ? "active page-link" : "page-link"}  >{c}</a></li>
                    ))}

                </ul>
            </nav>

        </>
    );
}