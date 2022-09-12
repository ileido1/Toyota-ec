import { useState, useEffect, ChangeEvent } from 'react';
import { get } from 'axios';
import BlogPost from './posts';
import Pagination from './paginador';
import Buscador from './buscador';
import BannerNoticias from './banner';



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
            const result = await get('https://www.toyota.com.ec/admin/api/v1/blog');
            setPosts(result.data);
            setLoading(false);
        }
        getPosts();

    }, [])

    const onSearchChange = (event) => {
        setCurrentPage(1);
        console.log(event);
        setSearch(event.currentTarget.value)
    }

    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const currentPosts = () => {
        if (search.length === 0) {
            return post
        }
        else {
            return (post.filter(c => c.blog_title.includes(search)))
        }
    }


    //cambiar pagina
    const paginate = (pagenumber) => setCurrentPage(pagenumber);
    return (
        <>
            <BannerNoticias></BannerNoticias>
            <BlogPost post={currentPosts().slice(indexOfFirstPost, indexOfLastPost)} loading={loading} search={search} onSearchChange={onSearchChange} ></BlogPost>
            <Pagination postPerPage={postPerPage} totalPages={currentPosts().length} paginate={paginate}></Pagination>
        </>
    );
}