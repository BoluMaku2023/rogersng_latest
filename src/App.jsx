import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";

import Home from "./components/pages/Home";
import Footer from "./components/OtherComponents/Footer";
import AboutUs from "./components/pages/AboutUs";
import Projects from "./components/pages/Projects";
import Software from "./components/pages/Software";
import Hardware from "./components/pages/Hardware";
import Blog from "./components/pages/Blog";
import Contact from "./components/pages/Contact";
import Renewable from "./components/pages/Renewable";
import Wireless from "./components/pages/Wireless";
import Security from "./components/pages/Security";
import Design from "./components/pages/Design";
import Product from "./components/pages/Product";
import SoftwareDev from "./components/pages/SoftwareDev";

import Navbar from "./components/OtherComponents/Navbar";
import ScrollToTop from "./components/OtherComponents/ScrollToTop";
import Swish from "./components/pages/cases/Swish";
import MDataSolutions from "./components/pages/cases/MDataSolutions";
import MDocScan from "./components/pages/cases/MDocScan";
import Profitable from "./components/pages/cases/Profitable";
import AfijioPHC from "./components/pages/cases/AfijioPHC";
import Yato from "./components/pages/cases/Yato";
import Nycil from "./components/pages/cases/Nycil";
import Jaybion from "./components/pages/cases/Jaybion";
import BUAApapa from "./components/pages/cases/BUAApapa";
import BUAph from "./components/pages/cases/BUAph";
import NDH from "./components/pages/cases/NDH";
import Osborne from "./components/pages/cases/Osborne";
import Grange from "./components/pages/cases/Grange";
import Saki from "./components/pages/cases/Saki";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <ScrollToTop />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/software" element={<Software />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/hardware" element={<Hardware />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/hardware-renewable-energy" element={<Renewable />} />
        <Route path="/hardware-wireless-lan" element={<Wireless />} />
        <Route path="/hardware-security" element={<Security />} />
        <Route path="/software-design" element={<Design />} />
        <Route path="/software-product" element={<Product />} />
        <Route path="/software-softwaredev" element={<SoftwareDev />} />
        <Route path="/case-swish" element={<Swish />} />
        <Route path="/case-mdatasolutions" element={<MDataSolutions />} />
        <Route path="/case-mdocscan" element={<MDocScan />} />
        <Route path="/case-profitable" element={<Profitable />} />
        <Route path="/case-afijiophc" element={<AfijioPHC />} />
        <Route path="/case-yato" element={<Yato />} />
        <Route path="/case-nycil" element={<Nycil />} />
        <Route path="/case-jaybion" element={<Jaybion />} />
        <Route path="/case-buaapapa" element={<BUAApapa />} />
        <Route path="/case-buaph" element={<BUAph />} />
        <Route path="/case-ndh" element={<NDH />} />
        <Route path="/case-osborne" element={<Osborne />} />
        <Route path="/case-grange" element={<Grange />} />
        <Route path="/case-saki" element={<Saki />} />
        <Route path="/test" element={<Navbar />} />
      </Routes>
    </>
  );
}

export default App;
