import axios from "axios";
import { useEffect, useState } from "react";
import { FaClosedCaptioning, FaCross, FaDownload, FaEye, FaTrash } from "react-icons/fa";
import Template1 from "./Template1";
import { IoMdClose } from "react-icons/io";
import Template2 from "./Template2";
import Template3 from "./Template3";

const MyResume = () => {
    const token = localStorage.getItem('token');
    const [resume, setResume] = useState([]);
    const [showTemplate, setShowTemplate] = useState(false);
    const [templateNo, setTemplateNo] = useState(0);
    useEffect(() => {
        async function getResume() {
            const myResumes = await axios.get(`http://localhost:5000/resume/my_resume`, {
                headers: {
                    'authorization': `Bearer ${token}`
                }
            });
            if (myResumes) {
                setResume(myResumes.data.result);
            }
        }
        getResume();
    }, [token]);

    console.log(resume);

    const showResume = (template) => {
        setShowTemplate(true);
        setTemplateNo(template);
    }

    const deleteResume = async (templateId) => {
        console.log(templateId);
        const result = await axios.post(`http://localhost:5000/resume/delete`, { tempId: templateId }, {
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        });
        console.log(result);
    }

    return (
        <div className="">{
            showTemplate ? <div className="overlow-scroll position-relative">
                <div className="position-absolute end-0 z-3">
                    <button className="btn btn-danger" onClick={() => setShowTemplate(false)}><IoMdClose size={20} /></button>
                </div>
                <div className="position-absolute left-0 right-0 bg-white" style={{ top: "5%", right: 0, left: 0, overflow: scroll }}>
                    {templateNo === 'template1' ? <Template1 resume={resume} /> : templateNo === 'template2' ? <Template2 resume={resume} /> : <Template3 resume={resume} />}
                </div>
            </div> :
                <div className="row mx-0" style={{ height: "100vh" }}>
                    <div className="col-10 mx-auto">
                        <h2 className="text-center py-5">My Resume</h2>
                        <div className="row mx-0">
                            {resume && resume.map((ele, index) => {
                                return (<div className="col-3 bg-white p-2 rounded-2 mx-3 shadow-sm" key={index}>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <img src={`./src/assets/images/${ele.template}.png`} className="p-1 shadow-sm" width={100} height={100} />
                                        <div>
                                            <FaEye className="mx-2 text-dark-theme" onClick={() => showResume(ele.template)} />
                                            <FaDownload className="mx-2 text-dark-theme" onClick={() => showResume(ele.template)} />
                                            <FaTrash className="mx-2 text-danger" onClick={() => deleteResume(ele._id)} />
                                        </div>
                                    </div>
                                </div>)
                            })}

                        </div>
                    </div>
                </div>
        }
        </div>
    )
}

export default MyResume;