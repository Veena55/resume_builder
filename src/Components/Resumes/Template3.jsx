import { FaDotCircle } from "react-icons/fa";
import Model from '../../assets/images/model.jpg';
import { IoIosCall, IoMdMailOpen } from "react-icons/io";
import { MdComputer } from "react-icons/md";
import { LiaLinkedin } from "react-icons/lia";
import { BiGlobe } from "react-icons/bi";
import { useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const Template3 = ({ tempId }) => {
    const printRef = useRef();
    const [resume, setResume] = useState({});
    let token = localStorage.getItem('token');
    let temp_id = '';

    if (tempId) {
        temp_id = tempId;
    } else {
        temp_id = useParams().temp_id;
    }
    console.log(tempId, "hi");

    const handlePrint = async () => {
        const element = printRef.current;
        const canvas = await html2canvas(element);
        const data = canvas.toDataURL("image/png");
        const pdf = new jsPDF("p", "mm", "a4");
        const imgProperties = pdf.getImageProperties(data);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;
        pdf.addImage(data, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save('download.pdf');
    }

    const getData = async () => {
        try {
            const template = await axios.get(`http://localhost:5000/resume/resume_details/${temp_id}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            const { result } = template.data;
            setResume(result);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
    console.log(resume);
    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            <div className="row mx-0 my-3" ref={printRef}>
                <div className="col-12 mx-auto p-5 border border-2 border-dark">
                    <div className="row mx-0 justify-content-between align-items-center">
                        <div className="col-3">
                            <div className="rounded-circle template_profile_img_cover bg-light shadow">
                                <img src={Model} className="object-contain rounded-circle" width="150" height="150" alt="model_photo" />
                            </div>
                        </div>
                        <div className="col-9">
                            <div>
                                {resume.fname && <h1 className="fw-bold">{resume.fname}</h1>}

                                {/* <p className="fs-4">Graphics Designer</p> */}
                            </div>
                            <div className="d-flex flex-wrap gap-3 pt-3">
                                {resume.mobile && <div>
                                    <p><IoIosCall className="rounded-2 text-white bg-dark  p-1 fs-4" /> {resume.mobile}</p>
                                </div>}

                                <div>
                                    <p><IoMdMailOpen className="rounded-2 text-white bg-dark p-1  fs-4" /> {resume.email}</p>
                                </div>
                            </div>
                            <div className="d-flex gap-3 py-3 flex-wrap">
                                {resume.portfolio && (<>
                                    <div>
                                        <p><BiGlobe className="rounded-2 text-white bg-dark p-1  fs-4" /> {resume.portfolio}</p>
                                    </div>
                                </>)}
                                {resume.linkedin && <><div>
                                    <p className="d-flex gap-2 align-items-center"><LiaLinkedin className="rounded-2 text-white bg-dark text-justify  p-1 fs-4" /> <span>{resume.linkedin}</span></p>
                                </div></>}
                            </div>
                        </div>
                    </div>
                    <div className="border border-1 border-black mt-4"></div>
                    <div className="row mx-0 pt-5">
                        <div className="col-3 pe-5 border-end border-3 border-dark">
                            <div>
                                <h4 className="fw-bold text-uppercase py-1 bg-dark text-white text-center shadow mb-3">Education</h4>
                                <div className="pt-1">
                                    <h6 className="fw-bold mb-0">HSBC University</h6>
                                    <p>2005-2006</p>
                                </div>
                                <div className="pt-1">
                                    <h6 className="fw-bold mb-0">HSBC University</h6>
                                    <p>2005-2006</p>
                                </div>
                                <div className="pt-1">
                                    <h6 className="fw-bold mb-0">HSBC University</h6>
                                    <p>2005-2006</p>
                                </div>
                                <div>
                                    {resume.skills && <>
                                        <h4 className="fw-bold text-uppercase py-1 bg-dark text-white text-center shadow mb-32">Skills</h4>
                                        <div className="ms-2">
                                            {(resume.skills).map((element, index) => {
                                                return <li key={index} className="my-0">{element}</li>
                                            })}
                                        </div>
                                    </>
                                    }
                                </div>
                                {resume.achievements &&
                                    <div>
                                        <h4 className="fw-bold text-uppercase py-1 bg-dark text-white text-center shadow my-3">Achievement</h4>
                                        <div className="ms-2">
                                            <div className="ms-2">
                                                {(resume.achievements).map((achievement, index) => <li key={index} className="pt-2">{achievement.a_name}</li>)}
                                            </div>
                                        </div>
                                    </div>}

                            </div>
                        </div>
                        <div className="col-8 ms-5">
                            <div>
                                <h4 className="fw-bold text-uppercase py-1 bg-dark text-white text-center shadow mb-3">Bio</h4>
                                <p className="text-justify">{resume.bio}</p>
                            </div>
                            {resume.isExperienced &&
                                <div>
                                    <h4 className="fw-bold text-uppercase py-1 bg-dark text-white text-center shadow mb-3">Work Experience</h4>
                                    <div className="d-flex justify-content-between pt-4">
                                        <div>
                                            <h6 className="fw-bold">Ginyard Internation.co</h6>
                                            <p className="mb-1">Product Design Manager</p>
                                            <li>Working with the wider development team.</li>
                                            <li>Working with the wider development team.</li>
                                        </div>
                                        <div>
                                            <h6 className="fw-bold">2022 - 2023</h6>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-between pt-4">
                                        <div>
                                            <h6 className="fw-bold">Ginyard Internation.co</h6>
                                            <p className="mb-1">Product Design Manager</p>
                                            <li>Working with the wider development team.</li>
                                            <li>Working with the wider development team.</li>
                                        </div>
                                        <div>
                                            <h6 className="fw-bold">2022 - 2023</h6>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-between pt-4">
                                        <div>
                                            <h6 className="fw-bold">Ginyard Internation.co</h6>
                                            <p className="mb-1">Product Design Manager</p>
                                            <li>Working with the wider development team.</li>
                                            <li>Working with the wider development team.</li>
                                        </div>
                                        <div>
                                            <h6 className="fw-bold">2022 - 2023</h6>
                                        </div>
                                    </div>
                                </div>
                            }
                            {resume.projects &&
                                <div className="mt-5">
                                    <h4 className="fw-bold text-uppercase py-1 bg-dark text-white text-center shadow mb-3">Projects</h4>
                                    {(resume.projects).map((project, index) => <li key={index} className="pt-2">{project.p_name}</li>)}
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center">
                <button onClick={handlePrint} className="btn bg-theme shadow my-3">Download</button>
            </div>
        </>
    )
}

export default Template3;