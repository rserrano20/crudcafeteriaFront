import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebook} from "@fortawesome/free-brands-svg-icons";
import {faInstagram} from "@fortawesome/free-brands-svg-icons";


const Footer = () => {
    return (
       <footer className="text-center bg-primary text-light py-4"  variant="dark">
      <p className="lead mt-3">Serrano Rosario</p>
         <p>&copy; Todos los derechos reservados</p> 
         <div className="  "><a  href="https://www.facebook.com">
        <FontAwesomeIcon  icon={faFacebook }style={{fontSize:"30px"}} color="white"/> {""}</a>
        <a href="https://instagram.com"> <FontAwesomeIcon  icon={faInstagram} color="white" style={{fontSize:"30px"}} /> </a>
        
       </div>
   </footer>
       
    );
};

export default Footer;