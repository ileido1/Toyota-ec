import { useEffect, useState } from 'react';
import { get } from 'axios';
const useFetch2 = (endpoint) => {
    const [data, setData] = useState()
    const [error, setError] = useState();
    useEffect(() => {
        get(`https://www.toyota.com.ec/api/${endpoint}`)
            .then(({ data }) => setData(data))
            .catch(e => setError(e));
    }, [endpoint])
    return [data, error];
}
export default useFetch2;