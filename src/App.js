import { Modal } from "./components/Modal";
import { ListOfImages } from "./components/ListOfImages";

import "./App.css";
import { useState } from "react";

function App() {

  const [isOpen, setIsOpen] = useState({
    open:true
  })

  return (
    <div className="App">
      {
        isOpen ? <Modal setIsOpen={ setIsOpen } /> : <ListOfImages setIsOpen={ setIsOpen } />
      }
    </div>
  );
}

export default App;
 