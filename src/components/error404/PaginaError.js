import React from 'react';
import Button  from 'react-bootstrap/Button';


const PaginaError = () => {
    return (
        <section className="container text-center  label">
        <article className="">
        <img  className="w-100" src={process.env.PUBLIC_URL+"/error404.jpg"} alt="logo"></img>
        <Button  className="w-50 my-5 shadow" variant="outline-warning" href="/"> Volver</Button>
      </article>
      
    </section>
    );
};

export default PaginaError;