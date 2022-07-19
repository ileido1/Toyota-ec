import Bannerhome from "../Banner";
import Slider from "../slider"
import { useEffect, useState } from 'react';
import useFetch from "../../hooks/useFetch";
import Sliderscars from "../slidercars";
import MundoToyota from "../mundotoyota";
import Noticias from "../noticias";
import Sliderscars2 from "../slidercarsmobile";


const Home = () => {


    return (
        <>
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