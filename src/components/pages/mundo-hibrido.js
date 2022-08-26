import { useEffect, useState } from 'react';
import useFetch from "../../hooks/useFetch";
import Portada from '../sections/mundohibrido/portada-mundohibrido';
import Tecnologia from '../sections/mundohibrido/tecnologia-mundohibrido';
import Videoslider from '../sections/mundohibrido/videoslider-mundohibrido';
import Ambiental from '../sections/mundohibrido/ambiental-mundohibrido';
import Vehiculos from '../sections/mundohibrido/vehiculos-mundohibrido';
import Cta from '../sections/mundohibrido/cta-mundohibrido';
import Faqs from '../sections/mundohibrido/faqs-mundohibrido';

const SiempreNuevo = () => {

    return (
        <>
            <Portada />
            <Tecnologia />
            <Videoslider />
            <Ambiental />
            <Vehiculos />
            <Cta />
            <Faqs />
        </>

    )
}

export default SiempreNuevo;