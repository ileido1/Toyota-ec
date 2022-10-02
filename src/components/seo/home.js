import { Helmet, HelmetProvider } from "react-helmet-async";
import useFetch from "../../hooks/useFetch";

const SeoHome = () => {

    let url_api = 'global/toyota-info'
    const [respuesta, error] = useFetch(url_api)

    let meta_title = ''
    let meta_description = ''
    let meta_keywords = ''
    
    if (respuesta) {

        respuesta.map(c => {

           meta_title = c.meta_title
           meta_description = c.meta_description
           meta_keywords = c.meta_keywords

        }
        )

    }
    
    return (
    <>
   <HelmetProvider>
      
        <Helmet>
          <title>
            {meta_title}
          </title>
          <meta
            name="description"
            content={meta_description}
          />
           <meta name="keywords" content={meta_keywords}></meta>
        </Helmet>

    </HelmetProvider>

    </>

    )
}

export default SeoHome