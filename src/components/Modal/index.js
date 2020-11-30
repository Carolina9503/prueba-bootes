import React from "react";
import { ModalContainer, Content } from "./styles";

export const Modal = ({ setIsOpen }) => {

  const handleClick = () => {
    setIsOpen(open => open = false);

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
 