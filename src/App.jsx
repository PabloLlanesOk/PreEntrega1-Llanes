import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import NavBar from "./Components/NavBar";
import Cart from "./Components/Cart/Cart";


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        {/* Ruta principal */}
        <Route path="/" element={<ItemListContainer />} />
        
        {/* Ruta para categorías */}
        <Route path="/categoria/:categoriaSeleccionada" element={<ItemListContainer />} />
        
        {/* Ruta del carrito */}
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
