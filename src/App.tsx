import React from "react";
import "./App.scss";
import FilesContextProvider from "./contexts/FilesContext";
import Main from "./components/Main";

function App() {
  return (
    <FilesContextProvider>
      <Main />
    </FilesContextProvider>
  )
}

export default App;
