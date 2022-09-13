import { useState, useEffect } from 'react';
import { get } from 'axios';
import LoadingSpinner from '../loading';
import {
    NavLink
} from "react-router-dom";


export default function Postsingle({ blog_image, blog_title, blog_created, blog_url }) {
    return (
        <>

            <NavLink to={blog_url} >

                <img src={'https://www.toyota.com.ec/' + blog_image} className="imagenpost"></img>

                <p className='ppost'>{blog_title}</p>
                <p className='ppost'>{blog_created}</p>


            </NavLink>

        </>
    );
}