import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Provider from "./layouts/Provider";
import About from "./pages/About";
import Exprienece from "./pages/Exprienece";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Provider />}>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/exprience" element={<Exprienece />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<p>404</p>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;
