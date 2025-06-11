import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout/'
import Home from './pages/Home/'
import QuienesSomos from './pages/QuienesSomos/'
import Productos from './pages/Productos/'
import Contacto from './pages/Contacto/'



function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="/quienes-somos" element={<QuienesSomos />}></Route>
          <Route path="/productos" element={<Productos />}></Route>
          <Route path="/contacto" element={<Contacto />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
