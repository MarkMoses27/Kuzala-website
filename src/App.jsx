import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Postpartum from "./components/postpaturm/Postpartum";
import BirthClasses from './components/birthclasses/BirthClasses';
import MakeupStudio from './components/makeupstudio/MakeupStudio';
import Salon from './components/salon/Salon';
import './App.css';
const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/postpartum-care" element={<Postpartum />} />
        <Route path="/spa" element={<Postpartum />} />
        <Route path="/salon" element={<Salon />} />
        <Route path="/Birth-classes" element={<BirthClasses />} />
        <Route path="/makeupstudio" element={<MakeupStudio />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;