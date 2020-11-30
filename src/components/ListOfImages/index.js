import React, { useEffect, useState } from "react";

import './style.css';


export const ListOfImages = ({ setIsOpen }) => {
  const [image, setImage] = useState([]);

 

   const GetImage = async()=> {
     const url = `https://rickandmortyapi.com/api/character/`
     const resp = await fetch(url);
     const data = await resp.json();
     setImage(data.results);
     console.log (data.results);


   }
   useEffect(() => {
    GetImage();
   
  }, []);

  const handleClick = () => {
    setIsOpen(open => open = true)
  }

   

  return (
    <div className="container">

      <h1 className="title animate__animated animate__bounce">Lista de Imagenes</h1>
      <div className="row">
        {
          image.map(img => (
            <div className="col-4 mb-4">
              <img 
                className="rounded-circle border border-danger"
                key = {img.id} 
                src={img.image}
              />

            </div>

          ))
        }
     </div>

      <button
        className="btn btn-lg btn-block btn-primary mb-3 "
        onClick={ handleClick }
      >
        Ir Atras
      </button>
    </div>
  );
};
