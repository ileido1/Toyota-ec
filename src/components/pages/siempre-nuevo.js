import { useEffect, useState } from 'react';
import useFetch from "../../hooks/useFetch";
import Banner from '../sections/siempre-nuevo/banner';
import Comofunciona from '../sections/siempre-nuevo/comofunciona';
import Estrenalo from '../sections/siempre-nuevo/estrenalo';
import Video from '../sections/siempre-nuevo/video';
import Form from '../sections/siempre-nuevo/form';
const SiempreNuevo = () => {


    return (
        <>
            <Banner></Banner>
            <Estrenalo></Estrenalo>
            <Comofunciona></Comofunciona>
            <Video></Video>
            <Form></Form>
        </>

    )
}



export default SiempreNuevo;