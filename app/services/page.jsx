'use client';

import Link from "next/link";
import React, { useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import heroImage from '../public/assets/hero-bg.jpg';
import aboutImage from '../public/assets/about-img.png';
import p1Image from '../public/assets/p1.jpg';
import p2Image from '../public/assets/p2.jpg';
import p3Image from '../public/assets/p3.jpg';
import s1Image from '../public/assets/s1.png';
import s2Image from '../public/assets/s2.png';
import s3Image from '../public/assets/s3.png';
import s4Image from '../public/assets/s4.png';
import s5Image from '../public/assets/s5.png';
import s6Image from '../public/assets/s6.png';
import clientImage from '../public/assets/client.jpg';


export default function ServicesPage() {

    const router = useRouter();

    const [clientEmail, setClientEmail] = React.useState({
        newsemail: ""
    });

    const [loading, setLoading] = React.useState(false);

    const handleEmailSubmit = async(e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const res = await fetch('/api/emails', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(clientEmail)
            });
            const data = await res.json();
            if(data.success) {
                setClientEmail({
                    newsemail: ""
                });
                setLoading(false);
            } else {
                setLoading(false);
            }
            router.push('/contact');
        } catch (error) {
            console.error(error.message);
        } finally {
            setLoading(false);
        }
    };
    
    return (
        <div className="h-screen w-screen my-3 mx-auto">
            <div className="header_section">
            <div className="flex-col text-center mx-auto py-3 header_top md:hidden">
                    <div className="text-2xl md:ml-16">
                        <Link className="navbar-brand md:pl-20 flex-col" href="/"> 
                            <div className=" text-7xl">OZOH</div> 
                            <span className="text-2xl md:text-4xl">
                                ENGINEERING COMPANY
                            </span> 
                        </Link>
                    </div>
                    
                    <div className="social_box space-x-3 md:ml-28 md:space-x-5 flex justify-center text-center">
                        <Link href="www.facebook.com">
                            <i className="fa fa-facebook" aria-hidden="true"></i>
                        </Link>
                        <Link href="www.whatsapp.com">
                            <i className="fa fa-whatsapp" aria-hidden="true"></i>
                        </Link>
                        <Link href="www.instagram.com">
                            <i className="fa fa-instagram" aria-hidden="true"></i>
                        </Link>
                        <Link href="www.linkedin.com">
                            <i className="fa fa-linkedin" aria-hidden="true"></i>
                        </Link>
                    </div>
                </div>
                <div className="hidden md:flex md:justify-between mx-auto py-3 header_top">
                    <div className="text-2xl md:ml-16">
                        <Link className="navbar-brand md:pl-20 flex-col" href="/"> 
                            <div className=" text-7xl">OZOH</div> 
                            <span className="text-2xl md:text-4xl">
                                ENGINEERING COMPANY
                            </span> 
                        </Link>
                    </div>
                    
                    <div className="social_box space-x-3 md:mr-20 md:space-x-5 flex justify-center text-center">
                        <Link href="www.facebook.com">
                            <i className="fa fa-facebook" aria-hidden="true"></i>
                        </Link>
                        <Link href="www.whatsapp.com">
                            <i className="fa fa-whatsapp" aria-hidden="true"></i>
                        </Link>
                        <Link href="www.instagram.com">
                            <i className="fa fa-instagram" aria-hidden="true"></i>
                        </Link>
                        <Link href="www.linkedin.com">
                            <i className="fa fa-linkedin" aria-hidden="true"></i>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="flex header_bottom bg-gray-900 text-white">
                <div className="container-fluid">
                    <nav className="navbar navbar-expand-lg">
                        <div className="custom_nav-container navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav text-xl md:space-x-10">
                                <li className="nav-item">
                                    <Link className="nav-link hover:text-orange-500 " href="/">Home <span className="sr-only">(current)</span></Link>
                                </li>
                                <li className="nav-item-active">
                                    <Link className="nav-link text-orange-500 hover:text-white" href="/services">Services</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link hover:text-orange-500" href="/about"> About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link hover:text-orange-500" href="/portfolio">Portfolio</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link hover:text-orange-500" href="/contact">Contact Us</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>

            {/* service section  */}
            <section className="service_section layout_padding">
                <div className="container ">
                    <div className="heading_container heading_center">
                        <h2>Our <span>Services</span></h2>
                        <p className="text-lg text-center px-4">
                            At Ozoh Engineering Company, we prioritize innovation, reliability, 
                            and efficiency in every project we undertake. Whether you require 
                            installations, repairs, or maintenance services, we have the expertise 
                            to deliver tailored solutions that meet industry standards and regulations.
                        </p>
                    </div>
                    <div className="row">
                        <div className="col-sm-6 col-md-4">
                            <div className="box ">
                                <div className="img-box">
                                    <Image src={s1Image} alt="" />
                                </div>
                                <div className="detail-box">
                                    <h5>
                                        Welding And Fabrication
                                    </h5>
                                    <p>
                                        For seamless welding and precise fabrication, we set 
                                        metallic skeleton for buildings like factories, fabricating trusses 
                                        suitably designed for the building and finally roofing them. 
                                        We prioritize adherence to the highest industry standards.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4">
                            <div className="box ">
                                <div className="img-box">
                                    <Image src={s2Image} alt="" />
                                </div>
                                <div className="detail-box">
                                    <h5>
                                        Roofing
                                    </h5>
                                    <p>
                                        We provide efficient and reliable solutions for residential, 
                                        commercial, and industrial property. From repairs, maintenance 
                                        to complete roof installations, our experienced professionals 
                                        ensure that your roof remains leak-free, and visually appealing.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4">
                            <div className="box ">
                                <div className="img-box">
                                    <Image src={s3Image} alt="" />
                                </div>
                                <div className="detail-box">
                                    <h5>
                                        Maintenance Of Structures
                                    </h5>
                                    <p>
                                        We focus on preserving, the integrity and longevity of your 
                                        structures. We offer routine inspections, preventive maintenance 
                                        plans, and prompt repairs to address any structural issues, ensuring 
                                        the safety and stability of your buildings or facilities.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4">
                            <div className="box ">
                                <div className="img-box">
                                    <Image src={s4Image} alt="" />
                                </div>
                                <div className="detail-box">
                                    <h5>
                                        Painting
                                    </h5>
                                    <p>
                                        We revitalize your living or working spaces with a fresh coat 
                                        of paint. We bring creativity, precision, and attention to detail 
                                        to every project, delivering exceptional results that truly enhance 
                                        the aesthetic appeal of your property in both interior and exterior.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4">
                            <div className="box ">
                                <div className="img-box">
                                    <Image src={s5Image} alt="" />
                                </div>
                                <div className="detail-box">
                                    <h5>
                                        Civil Works
                                    </h5>
                                    <p>
                                        We encompass a wide range of infrastructure projects including 
                                        construction of domestic, commercical and industrial buildings, 
                                        excavation, landscaping, and more. Our  civil engineers and 
                                        technicians bring attention to detail to every project.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4">
                            <div className="box ">
                                <div className="img-box">
                                    <Image src={s6Image} alt="" />
                                </div>
                                <div className="detail-box">
                                    <h5>
                                        Office Design
                                    </h5>
                                    <p>
                                        We create functional and inspiring workspaces that promote 
                                        productivity, collaboration, and employee well-being. From efficient 
                                        space planning and ergonomic considerations to aesthetic customization, 
                                        we support your business objectives.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4">
                            <div className="box ">
                                <div className="img-box">
                                    <Image src={s3Image} alt="" />
                                </div>
                                <div className="detail-box">
                                    <h5>
                                        Installation of Tanks
                                    </h5>
                                    <p>
                                        Whether it's above-ground or below-ground tanks, we take pride in delivering 
                                        top-notch solutions tailored to meet your specific needs. 
                                        From site assessment to the final connection, our skilled 
                                        professionals guarantee the durability and reliability of the installed tanks.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4">
                            <div className="box ">
                                <div className="img-box">
                                    <Image src={s3Image} alt="" />
                                </div>
                                <div className="detail-box">
                                    <h5>
                                        All Structural Engineering Works
                                    </h5>
                                    <p>
                                        Unlock the full potential of your architectural visions with 
                                        our comprehensive structural engineering services. 
                                        We bring a wealth of expertise to every project, 
                                        encompassing design, analysis, and execution of all structural elements. 
                                        From residential buildings to commercial complexes
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center py-4 mt-4">
                        <Link href="/contact" className="text-white border rounded px-3 py-2 bg-orange-700 hover:bg-orange-600">
                            Contact Us For A Service
                        </Link>
                    </div>
                </div>
            </section>
            {/* end service section  */}

            {/* info section  */}
            <section className="info_section ">
                <div className="info_container layout_padding2">
                    <div className="container">
                        <div className="info_logo">
                            <a className="navbar-brand" href="index.html"> OZOH <span>ENG. COMPANY</span> </a>
                        </div>
                        <div className="info_main">
                            <div className="row">
                                <div className="col-md-3 col-lg-2">
                                    <div className="info_link-box">
                                        <h5>
                                            Useful Links
                                        </h5>
                                        <ul>
                                            <li>
                                                <Link href="/">Home</Link>
                                            </li>
                                            <li>
                                                <Link href="/about">About </Link>
                                            </li>
                                            <li>
                                                <Link href="/services">Services </Link>
                                            </li>
                                            <li>
                                                <Link href="/portfolio"> Portfolio </Link>
                                            </li>
                                            <li>
                                                <Link href="/contact"> Contact </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-3 mx-auto  ">
                                    <h5>
                                        social media
                                    </h5>
                                    <div className="social_box">
                                        <Link href="www.facebook.com">
                                            <i className="fa fa-facebook" aria-hidden="true"></i>
                                        </Link>
                                        <Link href="www.twitter.com">
                                            <i className="fa fa-twitter" aria-hidden="true"></i>
                                        </Link>
                                        <Link href="www.linkedin.com">
                                            <i className="fa fa-linkedin" aria-hidden="true"></i>
                                        </Link>
                                        <Link href="www.youtube.com">
                                            <i className="fa fa-youtube-play" aria-hidden="true"></i>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-md-3 mt-4">
                                    <div className="info_form ">
                                        <h5>Subscribe To Our Newsletter</h5>
                                        <div className="-mt-2 mb-4">
                                            <p className="text-lg text-orange-500">{loading ? 'Please wait, Processing Email .....' : ''}</p>
                                        </div>
                                        <form action="" onSubmit={handleEmailSubmit}>
                                            <input 
                                                className="text-black" 
                                                type="email" 
                                                id="newsemail"
                                                placeholder="Enter Your Email" 
                                                onChange={(e) => setClientEmail({...clientEmail, newsemail:e.target.value})} />
                                            <button type="submit">
                                                <i className="fa fa-arrow-right" aria-hidden="true"></i>
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="info_bottom">
                            <div className="info_contact ">
                                <div className="row">
                                    <div className="col-md-3">
                                        <Link href="/" className="link-box">
                                        <i className="fa fa-map-marker" aria-hidden="true"></i>
                                        <span>
                                            Bweyogerere Butto
                                        </span>
                                        </Link>
                                    </div>
                                    <div className="col-md-5">
                                        <Link href="/" className="link-box">
                                            <i className="fa fa-phone" aria-hidden="true"></i>
                                            <span>
                                                Call +256 772 174 100 or +256 758 156 715(Whatsapp)
                                            </span>
                                        </Link>
                                    </div>
                                    <div className="col-md-4">
                                        <Link href="mailto:ozohengineeringcompany@gmail.com" className="link-box">
                                            <i className="fa fa-envelope" aria-hidden="true"></i>
                                            <span>
                                                ozohengineeringcompany@gmail.com
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* end info section  */}

            {/* footer section - */}
            <footer className="footer_section">
                <div className="container">
                    <p>
                        &copy; <span id="displayYear"></span> All Rights Reserved By
                        <span className="text-orange-600"><Link href="www.github.com/TroyMoses"> TroyMoses</Link></span>
                    </p>
                </div>
            </footer>
            {/* footer section  */}
        </div>
    )
}