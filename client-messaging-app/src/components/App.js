import React from "react";
import useLocalStorage from "../hooks/useLocalStorage";

import Login from "./Login";
import Dashboard from './Dashboard'

function App() {
  const [id, setId] = useLocalStorage();
  return id ? <Dashboard id={id} /> : <Login onIdSubmit={setId}></Login>;
}

export default App;
