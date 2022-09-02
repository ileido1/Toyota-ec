function Navlinkfooter({ title, url }) {
    return (
        <>
        { title == "Resoluciones y avisos legales" ? (

            <li><a target="_blank" href={url.replace("https://wwww.toyota.com.ec/","")} >{title}</a></li>
        ):(
            <li><a className="aaaaa" href={url.replace("https://wwww.toyota.com.ec/","")} >{title}</a></li>
        )    

        }
         </>
    );
}

export default Navlinkfooter;

