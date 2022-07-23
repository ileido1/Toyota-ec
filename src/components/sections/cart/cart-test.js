import React, { useEffect, useRef, useState } from "react";
import axios from 'axios';

export default function Carttest() {
    
    axios.post('https://www.toyota.com.ec/api/v2/cotizar/', {
        nombres: 'Adrian Gil',
        cedula:'1757908163'
      })
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        return error;
      });

    return(
        <div>
           
        </div>
    )
       
}