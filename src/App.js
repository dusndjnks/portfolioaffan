import { Route , Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <div>
      <Routes className="App">
        <Route path="/" element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="experience" element={<Experience/>}/>
        <Route path="project" element={<Projects/>}/>
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
