import { useState, useEffect } from 'react';
import { get } from 'axios';
import LoadingSpinner from '../loading';
import Postsingle from './postsingle';



export default function BlogPost({ post, loading, search, onSearchChange }) {
    if (loading) {
        return <LoadingSpinner></LoadingSpinner>;
    }

    return (
        <>
            <div className='container-fluid'>
                <input type="text" className="form-control" placeholder="buscar" value={search} onChange={onSearchChange}></input>
                <div className='row'>
                    {post.map(c => (
                        <>
                            {c.blog_destacado === '1' ? <div className='col-12'>
                                <Postsingle blog_image={c.blog_image} blog_title={c.blog_title} blog_created={c.blog_created}  ></Postsingle>    </div> : null}



                        </>


                    ))}
                </div>
                <div className='row'>
                    {post.map(c => (
                        <>
                            <div className='col-6'>
                                <Postsingle blog_image={c.blog_image} blog_title={c.blog_title} blog_created={c.blog_created}  ></Postsingle>
                            </div>



                        </>


                    ))}



                </div>
            </div>
        </>
    );
}