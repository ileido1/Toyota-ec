import LoadingSpinner from '../loading';



export default function Pagination({ postPerPage, totalPages, paginate }) {
    const pageNumbers = [];
    console.log(totalPages)
    for (let i = 1; i <= Math.ceil(totalPages / postPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <>

            <nav aria-label="Page navigation example">
                <ul class="pagination">
                    {pageNumbers.map(c => (
                        <li class="page-item" onClick={() => paginate(c)} key={c}><a class="page-link" >{c}</a></li>
                    ))}

                </ul>
            </nav>

        </>
    );
}