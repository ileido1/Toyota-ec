import Bannerhome from "../Banner";
import Slider from "../slider"
import { useEffect, useState } from 'react';
import useFetch from "../../hooks/useFetch";
import Tab from "../tabs/tab"
import Sliderscars from "../slidercars";
import MundoToyota from "../mundotoyota";
import Noticias from "../noticias";


const Home = () => {


    return (
        <>
            <Bannerhome></Bannerhome>
            <Sliderscars></Sliderscars>
            <Slider></Slider>
            <MundoToyota></MundoToyota>
            <Noticias></Noticias>

        </>

    )
}



export default Home;