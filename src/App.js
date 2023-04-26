import "./App.css";

import Main from "./components/Main";
import Footer from "./components/Footer";
import NavbarApp from "./components/NavbarApp";
import { Route, Routes } from "react-router-dom";
import FormUsuario from "./components/FormUsuario";
import Login from "./components/Login";
import Card from "./components/Card";
import Cards from "./components/Cards";
import ListaUsuarios from "./components/ListaUsuarios";
import FormNoticia from "./components/FormNoticia";

function App() {
  return (
    <div className="App">
      <NavbarApp />
      <Main />
      <Routes>
        <Route path="/" element={<Cards />} />
        <Route path="/form-usuario" element={<FormUsuario />} />
        <Route path="/form-noticia" element={<FormNoticia />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/usuarios" element={<ListaUsuarios />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
