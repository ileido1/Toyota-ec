import { useState, useEffect } from 'react';
import { get } from 'axios';
import useFetch from '../../../hooks/useFetch';





export default function CategoriesBlog() {
    let endpoint = 'home/post'

    const [categories, error2] = useFetch(endpoint);
    const [defecto, setDefault] = useState('');
    const [items, setItems] = useState('');


    const [selectedCategory, setSelectedCategory] = useState('');

    function handleCategoryChange(event) {
        setSelectedCategory(event.currentTarget.textContent);
    }

    useEffect(() => {
        const getItems = async () => {

            const result = await get(`${process.env.REACT_APP_URL_API}${endpoint}`);
            const allItems = result.data;
            setDefault('');
            if (!selectedCategory) {
                setDefault(allItems[0].tag);
                const categoryItems = allItems.filter(item => item.tag === allItems[0].tag);
                setItems(categoryItems)
            } else {
                const categoryItems = allItems.filter(item => item.tag === selectedCategory);
                setItems(categoryItems)
            }
        }
        getItems()
    }, [selectedCategory])



    return (
        <>

            <ul className="nav nav-tabs tabsnoticias ">
                <>
                    {

                        categories ? (
                            <>
                                {


                                    [...new Set(categories.map((Val) => Val.tag))].map(c => (

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

        </>
    );
}