import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddDetails from "../Forms/AddDetails";
import Sidebar from "../Navbar/Sidebar";
import Template1 from "../Resumes/Template1";
import Template2 from "../Resumes/Template2";
import Template3 from "../Resumes/Template3";
import Navbar from "../Navbar/Navbar";
import Resume from "../Resumes/Resume";
import LoginRegister from "../LoginRegister";
import useVerifyJWT from "../../utilities/useVerifyJWT";

const Main = () => {
    const ProctectedRoute = ({ element }) => {
        useVerifyJWT();
        return element
    }
    return (
        <BrowserRouter>
            <div className="row bg-light mx-0 justify-content-between">
                <Navbar></Navbar>
                <div className="col-2 px-0">
                    <Sidebar />
                </div>
                <div className="col-10 mx-auto">
                    <Routes>
                        <Route path='/' element={<LoginRegister />}></Route>
                        <Route path='/resume' element={<ProctectedRoute element={<Resume />} />}></Route>
                        <Route path='/temp1/:temp_id' element={<ProctectedRoute element={<Template1 />} />}></Route>
                        <Route path='/temp2' element={<ProctectedRoute element={<Template2 />} />}></Route>
                        <Route path='/temp3' element={<ProctectedRoute element={<Template3 />} />}></Route>
                        <Route path='/add/:template' element={<ProctectedRoute element={<AddDetails />} />}></Route>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default Main;