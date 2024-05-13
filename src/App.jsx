// import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Sidebar from './Components/UiComponents/Sidebar';
import Alerts from "./Pages/Alerts";
function App() {


  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Alerts />} />
      {/* <Route path="/Alerts" element={<Alerts />} /> */}
      {/* <Route path="/contact" element={<Contact />} /> */}
    </Routes>
    </BrowserRouter>
  )
}

export default App
