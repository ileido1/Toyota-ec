import Bannerhome from "../Banner";
import Slider from "../slider"
import { useEffect, useState } from 'react';
import useFetch from "../../hooks/useFetch";
import Sliderscars from "../slidercars";
import MundoToyota from "../mundotoyota";
import Noticias from "../noticias";
import Sliderscars2 from "../slidercarsmobile";
import SeoHome from "../seo/home";

const Home = () => {


    return (
        <>
            <SeoHome></SeoHome>
            <Bannerhome></Bannerhome>
            <Sliderscars></Sliderscars>
            <Sliderscars2></Sliderscars2>
            <Slider></Slider>

            <MundoToyota></MundoToyota>
            <Noticias></Noticias>

        </>

    )
}



export default Home;