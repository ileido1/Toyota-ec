import { useState, useEffect } from 'react';
import { get } from 'axios';
import LoadingSpinner from '../loading';



export default function Postsingle({ blog_image, blog_title, blog_created }) {
    return (
        <>


            <img src={'https://www.toyota.com.ec/' + blog_image} className="imagenpost"></img>

            <p className='ppost'>{blog_title}</p>
            <p className='ppost'>{blog_created}</p>



        </>
    );
}