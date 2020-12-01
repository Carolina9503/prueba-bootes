import React, { useContext, useEffect, useState } from "react";
import { ImageContext } from "../../image/ImageContext";

import './style.css';


export const ListOfImages = () => {
  const [image, setImage] = useState([]);

  const { setState } = useContext(ImageContext)

   const GetImage = async()=> {
     const url = `https://rickandmortyapi.com/api/character/`
     const resp = await fetch(url);
     const data = await resp.json();
     setImage(data.results);


   }
   useEffect(() => {
    GetImage();
   
  }, []); 

  const handleClick = () => {
    setState(state => state = true);
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
