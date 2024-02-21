import React from "react";
import { NavLink } from "react-router-dom";




const Footer = () => {
    return (
        // < !--Remove the container if you want to extend the Footer to full width. -- >
        <>
            <div>
                <footer className="text-center text-lg-start text-white"
                    style={{ backgroundColor: "#1c2331" }}
                >
                    <section
                        className="d-flex justify-content-between p-4 bg-light bg-gradient"
                    >
                        <div className="me-5 text-dark">Get connected with us on social networks
                        </div>

                        <div>
                            <a href="" className="text-dark me-4">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="" className="text-dark me-4">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="" className="text-dark me-4">
                                <i className="fab fa-google"></i>
                            </a>
                            <a href="" className="text-dark me-4">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="" className="text-dark me-4">
                                <i className="fab fa-linkedin"></i>
                            </a>
                            <a href="" className="text-dark me-4">
                                <i className="fab fa-github"></i>
                            </a>
                        </div>
                    </section>

                    <section className="">
                        <div className="container text-center text-md-start mt-5">
                            <div className="row mt-3">
                                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                    <h6 className="text-uppercase fw-bold">Company name</h6>
                                    <hr
                                        className="mb-4 mt-0 d-inline-block mx-auto"
                                        style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }}
                                    />
                                    <p className="display-4">
                                        CineFlex
                                    </p>
                                </div>

                               

                                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                    <h6 className="text-uppercase fw-bold">Useful links</h6>
                                    <hr
                                        className="mb-4 mt-0 d-inline-block mx-auto"
                                        style={{width: "60px", backgroundColor: "#7c4dff", height: "2px"}}  
                                    />
                                    <p>
                                        <a href="#!" className="text-white">Home</a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-white">Contact</a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-white">About us</a>
                                    </p>
                                </div>

                                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                    <h6 className="text-uppercase fw-bold">Contact</h6>
                                    <hr
                                        className="mb-4 mt-0 d-inline-block mx-auto"
                                        style={{width: "60px", backgroundColor: "#7c4dff", height: "2px"}}  
                                    />
                                    <p><i className="fas fa-home mr-3"></i> Sunbeam</p>
                                    <p><i className="fas fa-envelope mr-3"></i> sunbeaminfo.com</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div
                        className="text-center p-3"
                        style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}
                    >
                        <a className="text-white" >@copyrighted by cineflex</a>
                    </div>
                </footer>

            </div>

        </>)
};

export default Footer;