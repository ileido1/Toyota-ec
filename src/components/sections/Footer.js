function Footer({ logotoyota, toyotago, toyotasiempre }) {
    return (
        <footer>
            <div id="footer" className="container-fluid">
                <div className="row footersup">
                    <div className="col">
                        <img src={logotoyota}></img>
                    </div>
                    <div className="col">
                        <img src={toyotago}></img>
                    </div>
                    <div className="col">
                        <img src={toyotasiempre}></img>
                    </div>
                    <div className="col"></div>
                </div>
                <div className="row footerdown" >
                    <div className="col">
                        <h3 className="tfooter">Modelos</h3>
                        <ul className="lifooter">
                            <li>Yaris sport</li>
                        </ul>
                    </div>
                    <div className="col">
                        <h3 className="tfooter">Modelos</h3>
                        <ul className="lifooter">
                            <li>Yaris sport</li>
                        </ul>
                    </div>
                    <div className="col">
                        <h3 className="tfooter">Modelos</h3>
                        <ul className="lifooter">
                            <li>Yaris sport</li>
                        </ul>
                    </div>
                    <div className="col">
                        <h3 className="tfooter">Modelos</h3>
                        <ul className="lifooter">
                            <li>Yaris sport</li>
                        </ul>
                    </div>
                    <div className="col">
                        <h3 className="tfooter">Modelos</h3>
                        <ul className="lifooter">
                            <li>Yaris sport</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

