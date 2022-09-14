import { useState, useEffect, ChangeEvent } from 'react';
import { get } from 'axios';
import BlogPost from './posts';
import Pagination from './paginador';
import Buscador from './buscador';
import BannerNoticias from './banner';
import useFetch from '../../../hooks/useFetch';



export default function BlogNoticias() {
    const endpoint = 'v1/blog'
    const [post, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage, setPostPerPage] = useState(2);
    const [search, setSearch] = useState("");
    const [totalPages, setTotalpages] = useState(post);
    const [categories, error2] = useFetch(endpoint);
    const [defecto, setDefault] = useState('');


    const [selectedCategory, setSelectedCategory] = useState('');

    function handleCategoryChange(event) {
        setSelectedCategory(event.currentTarget.textContent);
    }


    useEffect(() => {
        const getPosts = async () => {
            setLoading(true);
            const result = await get(`${process.env.REACT_APP_URL_API}${endpoint}`);
            const allItems = result.data;
            setDefault('');
            if (!selectedCategory) {
                setDefault(allItems[0].blog_category);
                const categoryItems = allItems.filter(item => item.blog_category === allItems[0].blog_category);
                setPosts(categoryItems)
                setLoading(false);
            } else {
                const categoryItems = allItems.filter(item => item.blog_category === selectedCategory);
                setPosts(categoryItems)
                setLoading(false);
            }
        }
        getPosts()
    }, [selectedCategory])

    function ordenarAsc(p_array_json, p_key) {
        p_array_json.sort(function (a, b) {
            return a[p_key] > b[p_key];
        });
        p_array_json.reverse();
    }

    const onSearchChange = (event) => {
        setCurrentPage(1);

        setSearch(event.currentTarget.value)
    }

    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const currentPosts = () => {
        if (search.length === 0) {
            ordenarAsc(post, 'blog_destacado');
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
            <div className='container-fluid bg-post'>
                <ul className="nav nav-tabs tabsnoticias ">
                    <>
                        {

                            categories ? (
                                <>
                                    {


                                        [...new Set(categories.map((Val) => Val.blog_category))].map(c => (

                                            <li className="nav-item">
                                                <a className={selectedCategory == c || defecto == c ? "nav-link active" : "nav-link"} aria-current="page" onClick={handleCategoryChange}  >{c}</a>
                                            </li>
                                        )
                                        )
                                    }
                                </>
                            ) : (
                                <span> </span>
                            )
                        }
                    </>

                </ul>
                <BlogPost post={currentPosts().slice(indexOfFirstPost, indexOfLastPost)} loading={loading} search={search} onSearchChange={onSearchChange} ></BlogPost>
                <Pagination postPerPage={postPerPage} currentPage={currentPage} totalPages={currentPosts().length} paginate={paginate}></Pagination>
            </div>
        </>
    );
}