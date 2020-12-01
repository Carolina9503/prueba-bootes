import React, { useContext } from "react";
import { ImageContext } from "../../image/ImageContext";
import { ModalContainer, Content } from "./styles";

export const Modal = () => {

  const { setState } = useContext(ImageContext);
  

  const handleClick = () => {
    setState(state => state = false );
   
  }

  return (
      <ModalContainer >

        <Content>
          <h1>Contenido</h1>
          <button
            className="btn btn-primary mt-5"
            onClick={ handleClick }
          >
            Ejecutar Consulta
          </button>

        </Content>

      </ModalContainer>
    

  );
};
 