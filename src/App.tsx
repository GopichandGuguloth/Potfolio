import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About } from "./pages/about";
import { Home } from "./pages/Home";
import { Navbar } from "./pages/navBar";
import { Projects } from "./pages/projects";
import { Skills } from "./pages/skills";
import { Contact } from "./pages/contact";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact/>}/>

        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
