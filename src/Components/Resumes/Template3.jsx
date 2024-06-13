import { FaDotCircle } from "react-icons/fa";
import Model from '../../assets/images/model.jpg';
import { IoIosCall, IoMdMailOpen } from "react-icons/io";
import { MdComputer } from "react-icons/md";
import { LiaLinkedin } from "react-icons/lia";
import { BiGlobe } from "react-icons/bi";

const Template3 = () => {
    return (
        <>
            <div className="row mx-0 my-3">
                <div className="col-12 mx-auto p-5 border border-2 border-dark">
                    <div className="row mx-0 justify-content-between">
                        <div className="col-3">
                            <div className="rounded-circle template_profile_img_cover bg-light shadow">
                                <img src={Model} className="object-contain rounded-circle" width="150" height="150" alt="model_photo" />
                            </div>
                        </div>
                        <div className="col-9">
                            <div>
                                <h1 className="fw-bold">OLIVIA WILSOM</h1>
                                <p className="fs-4">Graphics Designer</p>
                            </div>
                            <div className="d-flex flex-wrap gap-3 pt-3">
                                <div>
                                    <p><IoIosCall className="rounded-2 text-white bg-dark  p-1 fs-4" /> 9562317858</p>
                                </div>
                                <div>
                                    <p><IoMdMailOpen className="rounded-2 text-white bg-dark p-1  fs-4" /> hello12345@hello.com</p>
                                </div>
                            </div>
                            <div className="d-flex gap-3 py-3 flex-wrap">
                                <div>
                                    <p><BiGlobe className="rounded-2 text-white bg-dark p-1  fs-4" /> www.hello12345hello.com</p>
                                </div>
                                <div>
                                    <p><LiaLinkedin className="rounded-2 text-white bg-dark  p-1 fs-4" /> https://www.linkedin.com/feed/?trk=guest_homepage-basic_nav-header-signin</p>
                                </div>
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
                                    <h4 className="fw-bold text-uppercase py-1 bg-dark text-white text-center shadow mb-32">Expertise</h4>
                                    <div className="ms-2">
                                        <li className="pt-2">Management Skills</li>
                                        <li className="pt-2">Management Skills</li>
                                        <li className="pt-2">Management Skills</li>
                                        <li className="pt-2">Management Skills</li>
                                        <li className="pt-2">Management Skills</li>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="fw-bold text-uppercase py-1 bg-dark text-white text-center shadow my-3">Languages</h4>
                                    <div className="ms-2">
                                        <li className="pt-2">Management Skills</li>
                                        <li className="pt-2">Management Skills</li>
                                        <li className="pt-2">Management Skills</li>
                                        <li className="pt-2">Management Skills</li>
                                        <li className="pt-2">Management Skills</li>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-8 ms-5">
                            <div>
                                <h4 className="fw-bold text-uppercase py-1 bg-dark text-white text-center shadow mb-3">Profile</h4>
                                <p className="text-justify">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio voluptatem minima dolorum accusamus culpa ea laboriosam quas cum expedita aliquid amet maxime recusandae est, illum facilis et earum non sit beatae fugit mollitia ut fugiat deleniti. Ducimus voluptates nam tenetur fugit, beatae quod cupiditate! Facere debitis voluptatibus quis. Neque, optio?</p>
                            </div>
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
                            <div className="mt-5">
                                <h4 className="fw-bold text-uppercase py-1 bg-dark text-white text-center shadow mb-3">Projects</h4>
                                <li className="pt-2">Management Skills</li>
                                <li className="pt-2">Management Skills</li>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Template3;