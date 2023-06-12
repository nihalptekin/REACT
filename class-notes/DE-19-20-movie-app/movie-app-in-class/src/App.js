import React from "react";
import AppRouter from "./router/AppRouter";
import AuthContextProvider from "./context/AuthContext";
import { ToastContainer } from "react-toastify";
import MovieContextProvider from "./context/MovieContext";


const App = () => {
  return (
    <div className="darg:bg-[#23242a] min-h-screen">
    <AuthContextProvider> 
    <MovieContextProvider/>
    <AppRouter/>
    <ToastContainer/>
    
    </AuthContextProvider>

    </div>
  );
};

export default App;
