import { Route, Routes } from "react-router-dom"
import Layout from './components/Layout';
import About from "./components/child-comp/about"
import Contact from "./components/child-comp/contact"
import Home from "./components/child-comp/home"
import Products from "./components/child-comp/product"
import ErrorPage from "./components/error"

function App() {
    return (
     
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path="products" element={<Products/>} />
                <Route path="about" element={<About/>}/>
                <Route path="contact" element={<Contact/>}/>
          </Route>
          <Route path="*" element={<ErrorPage/>}/>
        </Routes>  
      

    
    );
}

export default App;