import { useEffect, useState } from 'react';
import useFetch from "../../hooks/useFetch";
import Portada from '../sections/mantenimiento/portada-mantenimiento';
import Elige from '../sections/mantenimiento/elige-mantenimiento';
import Repuestos from '../sections/mantenimiento/repuestos-mantenimiento';
import Genuinos from '../sections/mantenimiento/genuinos-mantenimiento';
import Tranquilidad from '../sections/mantenimiento/tranquilidad-mantenimiento';

const Mantenimiento = () => {

    return (
        <>
            <Portada />
            <Elige />
            <Repuestos />
            <Genuinos />
            <Tranquilidad />

        </>

    )
}

export default Mantenimiento;