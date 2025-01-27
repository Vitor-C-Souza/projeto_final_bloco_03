import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import PaginaBase from "./page/paginaBase/PaginaBase";
import Home from "./page/home/Home";
import ListarCategoria from "./components/categoria/listarcategoria/ListarCategoria";
import FormCategoria from "./components/categoria/formcategoria/FormCategoria";
import DeletarCategoria from "./components/categoria/deletarcategoria/DeletarCategoria";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PaginaBase />}>
            <Route index element={<Home />} />
            <Route path="/categoria" element={<ListarCategoria />} />
            <Route path="/editarcategoria/:id" element={<FormCategoria />} />
            <Route path="/cadastrarcategoria" element={<FormCategoria />} />
            <Route
              path="/deletarcategoria/:id"
              element={<DeletarCategoria />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
