import "./css/App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact.jsx"
import Favorites from "./pages/Favorites";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer.jsx"


function App() {
  return (
    <>
      <div>
        <NavBar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer/>
      </div>
      
    </>
  );
}

export default App;
