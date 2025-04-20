import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Provider from "./layouts/Provider";
import About from "./pages/About";
import Experience from "./pages/Exprienece";
import Projects from "./pages/Projects";
import "./App.css";
import ContactSphere3D from "./pages/Contact";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Provider />}>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<ContactSphere3D />} />
          <Route path="*" element={<p>404 - Page Not Found</p>} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;
