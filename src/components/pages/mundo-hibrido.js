import { useEffect, useState } from 'react';
import useFetch from "../../hooks/useFetch";
import Portada from '../sections/mundohibrido/portada-mundohibrido';
import Tecnologia from '../sections/mundohibrido/tecnologia-mundohibrido';
import Videoslider from '../sections/mundohibrido/videoslider-mundohibrido';
import Ambiental from '../sections/mundohibrido/ambiental-mundohibrido';

const SiempreNuevo = () => {

    return (
        <>
            <Portada />
            <Tecnologia />
            <Videoslider />
            <Ambiental />

        </>

    )
}

export default SiempreNuevo;