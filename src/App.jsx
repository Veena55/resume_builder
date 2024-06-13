import { Route, BrowserRouter, Routes } from 'react-router-dom';
import '../src/assets/css/style.css';
import LoginRegister from "./Components/LoginRegister";
import Resume from './Components/Resumes/Resume';
import Template1 from './Components/Resumes/Template1';
import Template2 from './Components/Resumes/Template2';
import Template3 from './Components/Resumes/Template3';
import AddDetails from './Components/Forms/AddDetails';
import Navbar from './Components/Navbar/Navbar';
import Sidebar from './Components/Navbar/Sidebar';
import Main from './Components/Main/Main';
import { GoogleOAuthProvider } from '@react-oauth/google';


function App() {

  const clientId = "745276498734-9aod2ug3nq6d6261uh1j64cba6cv1ogl.apps.googleusercontent.com";

  return (
    <>
      {/* <GoogleOAuthProvider clientId={clientId}> */}
      {/* <LoginRegister /> */}
      {/* </GoogleOAuthProvider> */}
      <Main />
    </>
  )
}

export default App
