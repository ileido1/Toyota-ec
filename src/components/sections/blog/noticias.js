import { useState, useEffect, ChangeEvent } from 'react';
import { get } from 'axios';
import BlogPost from './posts';
import Pagination from './paginador';
import Buscador from './buscador';



export default function BlogNoticias() {

    const [post, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage, setPostPerPage] = useState(10);
    const [search, setSearch] = useState("");
    const [totalPages, setTotalpages] = useState(post);
    useEffect(() => {
        const getPosts = async () => {
            setLoading(true);
            let endpoint = 'v2/concesionarios/toyota/?q=';
            const result = await get('https://jsonplaceholder.typicode.com/posts');
            setPosts(result.data);
            setLoading(false);
        }
        getPosts();

    }, [])

    const onSearchChange = ({ target }) => {
        setCurrentPage(1);
        setSearch(target.value)
    }

    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const currentPosts = () => {
        if (search.length === 0) {
            return post
        }
        else {
            return (post.filter(c => c.title.includes(search)))
        }
    }


    //cambiar pagina
    const paginate = (pagenumber) => setCurrentPage(pagenumber);
    return (
        <>
            <input type="text" className="form-control" placeholder="buscar" value={search} onChange={onSearchChange}></input>
            <BlogPost post={currentPosts().slice(indexOfFirstPost, indexOfLastPost)} loading={loading} ></BlogPost>
            <Pagination postPerPage={postPerPage} totalPages={currentPosts().length} paginate={paginate}></Pagination>
        </>
    );
}