import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutPage from "./component/AboutPage";
import BlogPage from "./component/BlogPage";
import ContactUsPage from "./component/ContactUsPage";
import GalleryPage from "./component/GalleryPage";
import Home from "./component/Home";
import Footer from "./component/partials/Footer";
import Navbar from "./component/partials/Navbar";
import RoomsPage from "./component/RoomsPage";

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
     <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/about" element={<AboutPage/>}/>
       <Route path="/room" element={<RoomsPage/>}/>
       <Route path="/gallery" element={<GalleryPage/>}/>
       <Route path="/contact" element={<ContactUsPage/>}/>
       {/* <Route path="/blog" element={<BlogPage/>}/> */}
     </Routes>
     <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
