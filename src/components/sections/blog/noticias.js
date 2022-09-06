import { useState, useEffect } from 'react';
import { get } from 'axios';
import BlogPost from './posts';
import Pagination from './paginador';



export default function BlogNoticias() {

    const [post, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage, setPostPerPage] = useState(10);

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

    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const currentPosts = post.slice(indexOfFirstPost, indexOfLastPost)

    //cambiar pagina
    const paginate = (pagenumber) => setCurrentPage(pagenumber);
    return (
        <>
            <BlogPost post={currentPosts} loading={loading} ></BlogPost>
            <Pagination postPerPage={postPerPage} totalPages={post.length} paginate={paginate}></Pagination>
        </>
    );
}