import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";

import MyNavbar from './components/MyNavbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Teacher from './pages/Teacher';
import CourseCard from './pages/CourseCard';
import ContactForm from './pages/ContactForm';
import CardDetails from './pages/CardDetails';
import NotFound from './pages/NotFound';
import TeacherDetails from './pages/TeacherDetails';

// * her sey analmina getOverlayDirection. asagidaki pathlerin disinda eger browsere farkli bir sey yazilirsa hata mesaji ver demek istedik


const App = () => {
  return (
    <div> 
    <BrowserRouter>
        <MyNavbar /> 
        <Routes>
         {/* / (ana yol) tüm yollara dahil edilmiştir, bu nedenle onu
         / başlayan diğer yollardan ayırt etmek için exact anahtar kelimesine sahip olması gerekir . */}
       <Route exact path="/" element={<Home/>}/>
       <Route path="/teacher" element={<Teacher/>}/>
       <Route path="/teacher/:id" element={<TeacherDetails/>} />
       <Route path="/courses" element={<CourseCard/>}/>
       {/* normalde  courscardda baktickle gönderdik name ${name} seklinde yazildi. Onu buraya yazarken bactickle yazmiyoruz name'in önüne : koyuyoruz. cünkü name bir degiskendir. mesela name=HTML gibi. */}
       <Route path="/courses/:name" element={<CardDetails/>}/>
       <Route path="/contact" element={<ContactForm/>}/>
       <Route path="*" element={<NotFound/>}/>
      </Routes>
        <Footer /> 
        </BrowserRouter>
    </div>
  );
}

export default App