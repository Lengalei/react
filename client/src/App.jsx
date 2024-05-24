import {BrowserRouter, Routes, Route} from "react-router-dom";
import Viky from "./components/Viky";
import Ruth from "./components/Ruth";
import Home from "./components/Home";
function App() {
  

  return (
    
      <div className="app">
       <BrowserRouter>
       <Routes>
        <Route path="/" element={<Viky/>}/> 
        <Route path="/food" element={<Ruth/>}/> 
        <Route path="/home" element={<Home/>}/> 
       </Routes>
       </BrowserRouter>      
       
       </div>
  
  )
}

export default App
