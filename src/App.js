import Home  from "./pages/Home/Home";
import Content  from "./pages/Content/Content";
import './App.css'
import { Routes, Route, BrowserRouter,Switch } from "react-router-dom";


function App() {


  return (
    <div className="App">
        
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/content" element={<Content />} />
            </Routes>
        </BrowserRouter>
       
    </div>
  );
}

export default App;
