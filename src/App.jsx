import { Route, Routes } from "react-router-dom";
import Home from "./components/Pages/Home";
import Contacts from './components/Pages/Contacts';
import About from './components/Pages/About';
import Tips from './components/Pages/Tips';
import ResourcesKor from './components/Pages/ResourcesKor'; 
import ResourcesJap from './components/Pages/ResourcesJap'; 
import Nav from "./components/Layout/Nav";
import Footer from './components/Layout/Footer';


function App() {

  return (
    <>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/korean-resources" element={<ResourcesKor />} />
        <Route path="/japanese-resources" element={<ResourcesJap />} />
        <Route path="/tips" element={<Tips />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>

      <Footer />

    </>
  )
}

export default App
