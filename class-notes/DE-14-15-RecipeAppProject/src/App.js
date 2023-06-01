import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from "./pages/login/Login"
import Footer from "./components/footer/Footer"
import Home from './pages/home/Home';
import Details from './pages/details/Details';


function App() {
  return (
    <BrowserRouter>

        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/details" element={<Details/>}/>
        </Routes>

      <Footer/>
    </BrowserRouter>
  );
}

export default App;
