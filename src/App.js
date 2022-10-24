import Footer from "./components/Footer/footer";
import Header from "./components/Header/header";
import Main from "./components/HomeMain/main.jsx";
import NoodleMain from "./components/HomeMain/noodleMain";
import PizzaMain from "./components/HomeMain/pizzaMain";
import SaladMain from "./components/HomeMain/saladMain";
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
              <Route path="main" element={<Main/>}/>
              <Route path="pizzaMain" element={<PizzaMain/>}/>
              <Route path="saladMain" element={<SaladMain/>}/>
              <Route path="noodleMain" element={<NoodleMain/>}/>
              <Route path="aboutMain" element={<AboutMain/>}/> 
              <Route path="contactPage" element={<ContactPage/>}/>
            </Routes> 
            <Footer/>
         </div>
    </BrowserRouter>
  );
}

export default App;
 