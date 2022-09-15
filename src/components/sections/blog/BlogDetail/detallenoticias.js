import React, { useEffect, useRef, useState } from "react";

import { get } from 'axios';
import BlogPost from '../posts';
import Buscador from '../buscador';
import useFetch from '../../../../hooks/useFetch';
import { Routes, Route, useParams, NavLink, Link } from 'react-router-dom';

import bannerpromo from '../../../../images/blog/blog.png'




export default function DetalleNoticias() {
    const endpoint = 'v1/blog'
    const [post, setPosts] = useState([]);
    const [postrelations, SetPostRelationals] = useState([]);
    const [loading, setLoading] = useState(false);
    let { slug } = useParams();
    const postdetail = "\/blog\/" + slug;
    const ref2 = useRef(null);
    const btn2 = useRef(null);
    const [Datos, SetDatos] = useState({ email: '', terms: 'si' })
    const [Respuesta, SetRespuesta] = useState('')

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

    const enviaremail = (e) => {
        e.preventDefault();
        const el2 = ref2.current;

        const getproceso = async () => {
            const resultexo = await get(`${'https://www.toyota.com.ec/api/v2/blog/boletin/?email=' + el2.value + '&terms=' + "si"}`);
            const procesos = resultexo.data;
            SetRespuesta(procesos);
            alert(Respuesta.msj)
        }

        getproceso()
    };
    const handlecheck = (e) => {
        const enviar = btn2.current;
        if (e.target.checked === true)
            enviar.disabled = false;
        else enviar.disabled = true;
    }
    useEffect(() => {
        const getPostsR = async () => {
            const result = await get(`${process.env.REACT_APP_URL_API}${endpoint}`);
            const allItems = result.data;
            const categoryItems = allItems.filter(item => item.blog_category === post[0].blog_category);
            SetPostRelationals(categoryItems)
        }
        getPostsR()
    }, [post])

    return (
        <>
            <div className='container-fluid bg-post'>

                <div className='row'>
                    {post.map(c => (
                        <>
                            <div className='col-md-9 col-12  p-40'>
                                <Link className='volverpost' to={"/blog"} >

                                    <p > <i class="fa-solid fa-caret-left iconoatras"></i>Todas las entradas | {c.blog_category} </p>


                                </Link>

                                <h1 className='tbannerpost'>{c.blog_title}</h1>
                                <p className='ppost pfecha'>{c.blog_created}</p>
                                <img src={'https://www.toyota.com.ec/' + c.blog_image} className="imagenpost"></img>
                                <div className='ppost' dangerouslySetInnerHTML={{ __html: c.blog_body }}></div>

                            </div>
                            <div className='col-md-3 col-12  p-40'>
                                <img src={bannerpromo} className="w-100 bannerpost2"></img>

                                {c.tags_blog.split(',').map(c => (<a href={"tag/" + c} className="ntd"> <button className="btn-post" >{c}</button></a>))}

                                <div className='inputpost'>
                                    <p className='suscribete'>Recibe más noticias</p>
                                    <div className="input-wrapper">
                                        <input type="text" className="inputemail" placeholder="E-mail" ref={ref2} />

                                    </div>

                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" onClick={handlecheck} />
                                        <label className="form-check-label" htmlFor="flexCheckDefault">
                                            Acepto <span className="spanckeck">aviso de privacidad</span>
                                        </label>
                                    </div>
                                    <button className="btn-post" ref={btn2} onClick={enviaremail}> Enviar </button>
                                </div>
                            </div>




                        </>


                    ))}
                </div>
                <div className='row'>
                    <div className='col-md-9 col-12  p-40'>
                        <div className='row'>
                            {postrelations.slice(0, 3).map(c => (
                                <>

                                    <div className='col-12 col-md-4 '>
                                        <div className='box-post'>
                                            <img src={'https://www.toyota.com.ec/' + c.blog_image} className="imagenpost"></img>
                                            <div className='box-post-content'>
                                                <h1 className='tbannerpost'>{c.blog_title}</h1>
                                                <div className="box-re">
                                                    <div className='ppost' dangerouslySetInnerHTML={{ __html: c.blog_body }}></div>


                                                </div>
                                                <a href={c.blog_url} ><p className='ppost moreinfo'>Más informacion...</p></a>
                                            </div>

                                        </div>


                                    </div>

                                </>
                            ))}
                        </div>
                    </div>


                </div>
            </div>
        </>
    );
}