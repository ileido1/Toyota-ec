import { useState, useEffect, ChangeEvent } from 'react';
import { get } from 'axios';
import BlogPost from '../posts';
import Buscador from '../buscador';
import useFetch from '../../../../hooks/useFetch';
import { Routes, Route, useParams, NavLink, Link } from 'react-router-dom';
import bannerpromo from '../../../../images/blog/blog.png'




export default function DetalleNoticias() {
    const endpoint = 'v1/blog'
    const [post, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [categories, setCategories] = useState('');
    const [search, setSearch] = useState("");
    let { slug } = useParams();
    const postdetail = "\/blog\/" + slug;
    useEffect(() => {
        const getPosts = async () => {
            setLoading(true);
            const result = await get(`${process.env.REACT_APP_URL_API}${endpoint}`);
            const allItems = result.data;
            const categoryItems = allItems.filter(item => item.blog_url === postdetail);
            setPosts(categoryItems)

            setLoading(false)
        }
        getPosts()
    }, [])

    return (
        <>
            <div className='container-fluid bg-post'>

                <div className='row'>
                    {post.map(c => (
                        <>
                            <div className='col-9  p-40'>
                                <Link className='volverpost' to={"/blog"} >

                                    <p >Todas las entradas | {c.blog_category} </p>


                                </Link>

                                <h1 className='tbannerpost'>{c.blog_title}</h1>
                                <p className='ppost'>{c.blog_created}</p>
                                <img src={'https://www.toyota.com.ec/' + c.blog_image} className="imagenpost"></img>
                                <p className='ppost'>{c.blog_body}</p>
                            </div>
                            <div className='col-3  p-40'>
                                <img src={bannerpromo} className="w-100 bannerpost2"></img>

                                {c.tags_blog.split(',').map(c => (<button className="btn-post">{c}</button>))}

                            </div>



                        </>


                    ))}
                </div>
            </div>
        </>
    );
}