import React from 'react';
import {Link} from "react-router-dom";

const NotFoundPage = () => {

    return (
        <>
            <div  style={{textAlign: "center"}}>
                <h1>404</h1>
                <h2>Siden du prøver å få tilgang til finnes ikke!</h2>
                <h2>Venligst prøv igjen, eller kontakt oss for hjelp.</h2>
                <div>
                    <p>
                        <Link to="/Arrangementer">Gå tilbake</Link>
                    </p>
                    <p>
                        <Link to="/">Hjem</Link>
                    </p>
                </div>
            </div>
        </>
    );
};

export default NotFoundPage;

