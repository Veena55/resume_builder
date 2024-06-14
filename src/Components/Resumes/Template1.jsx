import axios from "axios";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useEffect, useRef, useState } from "react";
import { FaDotCircle } from "react-icons/fa";
import { useParams } from "react-router-dom";

const Template1 = () => {
    const printRef = useRef();
    const { temp_id } = useParams();
    const [resume, setResume] = useState({});
    let token = localStorage.getItem('token');
    // console.log(token);
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
    // console.log(temp_id);
    const getData = async () => {
        try {
            const template = await axios.get(`http://localhost:5000/resume/resume_details/${temp_id}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            const { result } = template.data;
            setResume(result);
            // console.log(result);
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

                    <div>
                        <h1>{resume.fname + " " + resume.lname}</h1>
                        <div className="row mx-0">
                            <ul className="d-flex align-items-center gap-3 mb-0">
                                <p className="mb-1"><FaDotCircle size={6} /> {resume.mobile}</p>
                                <p className="mb-1"><FaDotCircle size={6} /> {resume.email}</p>
                                {resume.linkedin_url && <p className="mb-1"><FaDotCircle size={6} /> {resume.linkedin_url}</p>}
                            </ul>
                            {resume.address && <p>{resume.address}</p>}
                        </div>
                    </div>
                    <div className="border border-1 border-black"></div>
                    {resume.bio && (<>
                        <div className="col-12 my-2">
                            <div>

                                <h4 className="text-uppercase pt-3">Objective</h4>
                                <p className="text-justify">{resume.bio}</p>


                            </div>
                        </div>
                        <div className="border border-1 border-black mt-4"></div>
                    </>
                    )}
                    {resume.skills && (<>
                        <div className="col-12 my-2">
                            <div>
                                <h4 className="text-uppercase pt-3">Skills</h4>
                                <div className="d-flex justify-content-between py-2 flex-wrap">
                                    <div>
                                        {(resume.skills).map((element, index) => {
                                            return <li className="my-0">{element}</li>
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="border border-1 border-black mt-4"></div>
                    </>)}
                    {resume.isExperienced && (<>
                        <div className="col-12">
                            <h4 className="text-uppercase pt-3">Professional Experience</h4>
                            <div className="row mx-0 mt-3">
                                <div className="col-6">
                                    <h6>Experience1</h6>
                                </div>
                                <div className="col-6 text-end">
                                    <h6>Oct 2023 - Present</h6>
                                </div>
                            </div>
                            <div className="row mx-0">
                                <div className="col-12">
                                    <h6>Business Analyst Intern</h6>
                                    <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae in inventore accusamus corporis porro quibusdam ea. Eveniet corporis qui aliquam ab amet accusantium voluptate suscipit. Necessitatibus provident pariatur recusandae eos, similique, placeat laudantium voluptas odit nulla sapiente officia eum nemo impedit maxime labore veniam voluptatum sed porro, autem dolorem assumenda ullam natus! Assumenda doloribus excepturi, neque recusandae exercitationem accusamus at.</p>
                                </div>
                            </div>
                            <div className="row mx-0 mt-3">
                                <div className="col-6">
                                    <h6>Experience2</h6>
                                </div>
                                <div className="col-6 text-end">
                                    <h6>Oct 2023 - Present</h6>
                                </div>
                            </div>
                            <div className="row mx-0">
                                <div className="col-12">
                                    <h6>Business Analyst Intern</h6>
                                    <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae in inventore accusamus corporis porro quibusdam ea. Eveniet corporis qui aliquam ab amet accusantium voluptate suscipit. Necessitatibus provident pariatur recusandae eos, similique, placeat laudantium voluptas odit nulla sapiente officia eum nemo impedit maxime labore veniam voluptatum sed porro, autem dolorem assumenda ullam natus! Assumenda doloribus excepturi, neque recusandae exercitationem accusamus at.</p>
                                </div>
                            </div>
                        </div>
                        <div className="border border-1 border-black mt-4"></div>
                    </>)}
                    {resume.projects && (<>
                        <div className="col-12 my-2">
                            <div>
                                <h4 className="text-uppercase pt-3">Projects</h4>
                                <div className="d-flex justify-content-between py-2 flex-wrap">
                                    <div>
                                        {(resume.projects).map((element, index) => {
                                            return (<div className="pt-1">
                                                <p className="fw-medium mb-0">{element.p_name}</p>
                                                <p className="mt-1">{element.p_descp}</p>
                                            </div>)
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="border border-1 border-black mt-4"></div>
                    </>)}
                    <div className="col-12">
                        <div className="row mx-0 py-2">
                            <div className="col-6 border-end border-3 border-dark">
                                <div className="pt-2">
                                    <h5 className="text-uppercase">Education</h5>
                                    <div className="pt-2">
                                        <p className="fw-medium mb-0">Bachelor Of Science</p>
                                        <p className="mt-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate ab, maxime quibusdam tenetur ullam libero deserunt similique accusamus error a.</p>
                                    </div>
                                </div>
                                <div className="pt-2">
                                    <p className="fw-medium mb-0">Bachelor Of Science</p>
                                    <p className="mt-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate ab, maxime quibusdam tenetur ullam libero deserunt similique accusamus error a.</p>
                                </div>
                                <div className="pt-2">
                                    <p className="fw-medium mb-0">Bachelor Of Science</p>
                                    <p className="mt-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate ab, maxime quibusdam tenetur ullam libero deserunt similique accusamus error a.</p>
                                </div>
                            </div>
                            {resume.achievements && (<>
                                <div className="col-6">
                                    <div className="pt-2">
                                        <h5 className="text-uppercase">Achievements & Certifications</h5>
                                        {(resume.achievements).map((element, index) => {
                                            return (
                                                <div className="pt-2">
                                                    <p className="fw-medium mb-0">{element.a_name}</p>
                                                    <p className="mt-1">{element.a_descp}</p>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </>)}
                        </div>
                    </div>
                </div>
            </div>
            <button onClick={handlePrint}>Download</button>
        </>
    )
}

export default Template1;