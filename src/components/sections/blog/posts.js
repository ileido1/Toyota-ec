import { useState, useEffect } from 'react';
import { get } from 'axios';
import LoadingSpinner from '../loading';
import Postsingle from './postsingle';
import CategoriesBlog from './categories';
import bannerpromo from '../../../images/blog/blog.png'



export default function BlogPost({ post, loading, search, onSearchChange }) {
    if (loading) {
        return <LoadingSpinner></LoadingSpinner>;
    }
    return (
        <>

            <div className='row'>


                <div className='col-8 p-40 '>
                    <div className='row m-20'>
                        {post.map(c => (
                            <>
                                {c.blog_destacado === '1' ? <div className='col-12'>
                                    <Postsingle blog_image={c.blog_image} blog_title={c.blog_title} blog_created={c.blog_created} blog_url={c.blog_url} ></Postsingle>    </div> : null}



                            </>


                        ))}
                    </div>
                    <div className='row'>
                        {post.map(c => (
                            <>
                                <div className='col-6'>
                                    <Postsingle blog_image={c.blog_image} blog_title={c.blog_title} blog_created={c.blog_created} blog_url={c.blog_url}  ></Postsingle>
                                </div>



                            </>


                        ))}



                    </div>

                </div>
                <div className='col-4 p-40 '>
                    <p className='ppost'>Buscador</p>
                    <input type="text" className="form-control buscador" value={search} onChange={onSearchChange}></input>
                    <img src={bannerpromo} className="bannerpromo"></img>
                </div>
            </div>

        </>
    );
}