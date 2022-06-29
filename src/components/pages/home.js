import Bannerhome from "../Banner";
import Tabs from "../tabs";
import Slider from "../slider"
import { useEffect, useState } from 'react';


const Home = () => {
    const [tabs, setTabs] = useState([]);

    useEffect(() => {
        fetch("https://backend-toyota.247.com.ec/api/global/toyota-info")
            .then(response => response.json())
            .then(data => console.log(data));
    }, [])

    return (
        <>    <Bannerhome>
        </Bannerhome>
            {
                tabs ? (
                    <section>
                        {

                            tabs.map(p => <Tabs />)
                        }

                    </section>
                ) : (<span>Cargando</span>)
            }
            <Slider></Slider>

        </>

    )
}



export default Home;