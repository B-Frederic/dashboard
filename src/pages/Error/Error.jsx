// React
import React, { useEffect } from "react";
// Style
import css from "./Error.module.css";

const Error = () => {

   useEffect(() => {
       setTimeout(() => window.location.href = "https://frederic-b-dashboard.netlify.app/", 5000)
   }, [])

    return (
        <div>
            <div className={css.container}>
                <p><span className="container-error--span">Oups !!</span> cette page n'existe pas.<br/> Ne vous inquiétez pas, vous êtes redirigé vers la page d'accueil du Dashboard.</p>
            </div>
        </div>
    );
};

export default Error;