import { useState } from "react";
import { Modal } from "./components/Modal";
import { ListOfImages } from "./components/ListOfImages";
import { ImageContext } from "./image/ImageContext";


import "./App.css";

function App() {

  const [state, setState] = useState({})

  return (
    <ImageContext.Provider value={{
      setState,
    }}>

      <div className="App">
        {
          state ? <Modal /> : <ListOfImages />
        }
      </div>
    </ImageContext.Provider>
  );
}

export default App;
 