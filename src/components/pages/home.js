import Bannerhome from "../Banner";
import Slider from "../slider"
import { useEffect, useState } from 'react';
import useFetch from "../../hooks/useFetch";
import Tab from "../tabs/tab"
import Sliderscars from "../slidercars";


const Home = () => {


    return (
        <>
            <Bannerhome></Bannerhome>
            <Sliderscars></Sliderscars>
            <Slider></Slider>
            <Tab></Tab>

        </>

    )
}



export default Home;