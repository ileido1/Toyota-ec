import { useState, useEffect } from 'react';
import { get } from 'axios';
import LoadingSpinner from '../loading';



export default function BlogPost({ post, loading }) {
    if (loading) {
        return <LoadingSpinner></LoadingSpinner>;
    }

    return (
        <>
            <div className='row'>
                {post.map(c => (
                    <div className='col-6'>
                        <p>{c.title}</p>
                    </div>

                ))}

            </div>
        </>
    );
}