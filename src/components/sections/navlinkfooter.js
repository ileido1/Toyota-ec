function Navlinkfooter({ title, url }) {
    return (
        <li><a href={url.replace("https://wwww.toyota.com.ec/","")} >{title}</a></li>
    );
}

export default Navlinkfooter;

