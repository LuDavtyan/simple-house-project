import Footer from "./components/Footer/footer";
import Header from "./components/Header/header";
import HomeMain from "./components/HomeMain/HomeMain.jsx";
import AboutMain from "./components/About/aboutMain";
import ContactPage from "./components/Contact/contactPage";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <BrowserRouter> 
       <div >
         <Header/>
            <Routes>
              <Route path="/*" index element={<HomeMain/>}/>
              <Route path="aboutMain" element={<AboutMain/>}/> 
              <Route path="contactPage" element={<ContactPage/>}/>
            </Routes> 
           <Footer/>
         </div>
    </BrowserRouter>
  );
}

export default App;
 