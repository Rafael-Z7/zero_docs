import Home  from "./pages/Home/Home";
import Content  from "./pages/Content/Content";
import Cad from './pages/Cad/Cad';
import Test from './pages/Test';
import './App.css'
import { Routes, Route, BrowserRouter,Switch } from "react-router-dom";


function App() {


  return (
    <div className="App">
        
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/content" element={<Content />} />
              <Route path="/teste" element={<Test/>} />
            </Routes>
        </BrowserRouter>
       
    </div>
  );
}

export default App;
