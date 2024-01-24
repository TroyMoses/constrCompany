'use client';

import Link from "next/link";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import heroImage from '../app/public/assets/hero-bg.jpg';
import aboutImage from '../app/public/assets/about-img.png';
import p1Image from '../app/public/assets/p1.jpg';
import p2Image from '../app/public/assets/p2.jpg';
import p3Image from '../app/public/assets/p3.jpg';
import s1Image from '../app/public/assets/s1.png';
import s2Image from '../app/public/assets/s2.png';
import s3Image from '../app/public/assets/s3.png';
import s4Image from '../app/public/assets/s4.png';
import s5Image from '../app/public/assets/s5.png';
import s6Image from '../app/public/assets/s6.png';
import clientImage from '../app/public/assets/client.jpg';
import roofstructures3 from '../app/public/assets/roofstructures3.jpg';
import roofing3 from '../app/public/assets/roofing3.jpg';
import ozoh from '../app/public/assets/ozoh.jpg';
import roofing from '../app/public/assets/roofing.jpg';
import airconditioner from '../app/public/assets/airconditioner.jpg';
import roofstructure8 from '../app/public/assets/roofstructure8.jpg';
import roofstructures2 from '../app/public/assets/roofstructures2.jpg';
import tankstructure2 from '../app/public/assets/tankstructure2.jpg';
import structuralbuilding from '../app/public/assets/structuralbuilding.jpg';
import scafolds from '../app/public/assets/scafolds.jpg';
import tankstructure3 from '../app/public/assets/tankstructure3.jpg';
import roofstructures4 from '../app/public/assets/roofstructures4.jpg';


export default function HomePage() {

    const router = useRouter();
    const [client, setClient] = React.useState({
        name: "",
        number: "",
        service: "",
        email: "",
        message: ""
    });
    const [clientEmail, setClientEmail] = React.useState({
        newsemail: ""
    });

    const [loading, setLoading] = React.useState(false);

    const [buttonDisabled, setButtonDisabled] = React.useState(true);

    useEffect(() => {
        if(client.name.length > 0 && client.number.length > 0 && client.service.length > 0 && client.email.length > 0 && client.message.length > 0) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }, [client]);

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const res = await fetch('/api/clients', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(client)
            });
            const data = await res.json();
            if(data.success) {
                setClient({
                    name: "",
                    number: "",
                    service: "",
                    email: "",
                    message: ""
                });
                setLoading(false);
            } else {
                setLoading(false);
            }
            router.push('/services');
        } catch (error) {
            console.error(error.message);
        } finally {
            setLoading(false);
        }
    };

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
                        <Link href="https://wa.me/256758156715">
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
                                <li className="nav-item-active">
                                    <Link className="nav-link text-orange-500 hover:text-white" href="/">Home <span className="sr-only">(current)</span></Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link hover:text-orange-500" href="/services">Services</Link>
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
           

            {/* slider section */}
            <section className="slider_section flex justify-center text-center py-10 md:py-28 -pt-5">
            <div id="customCarousel1" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="container">
                            <div className="detail-box flex-col justify-center ml-10">
                                <h1 className="space-y-2">
                                    <p className="text-white">
                                        We Build
                                    </p> 
                                    <p className="text-white">
                                        Things Architects
                                    </p>
                                    <p className="text-white">
                                        Dream About
                                    </p>
                                </h1>
                                <div className="btn-box justify-center">
                                    <Link href="/services" className="btn1 rounded">
                                        Read More
                                    </Link>
                                    <Link href="/contact" className="btn2 rounded">
                                        Contact Us
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </section>
            {/* end slider section */}

            {/* about section  */}
            <section className="about_section layout_padding">
                <div className="container  ">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="detail-box pr-2">
                                <div className="heading_container">
                                <h2>Welcome to <span>Ozoh Engineering Company.</span></h2>
                                </div>
                                <p className=" text-lg">
                                    We are a leading provider of comprehensive engineering solutions. 
                                    Located in Butto, Bweyogerere, we specialize in a wide range of services included 
                                    in the services section. 
                                </p>
                                <p className=" text-lg">
                                    With our team of experienced professionals and state-of-the-art equipment, 
                                    we deliver high-quality results and ensure utmost customer satisfaction. 
                                    Our committment to excellence and attention to detail set us apart in the 
                                    industry, as we strive to meet and exceed the unique needs of our clients.
                                    
                                </p>
                                <Link className="text-lg rounded" href="/services">
                                    Read More
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-6 ">
                            <div className="img-box">
                                <Image src={aboutImage} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* end about section  */}

            {/* portfolio section */}
            <section className="portfolio_section ">
                <div className="container">
                    <div className="heading_container heading_center">
                        <h2>
                            Our Work Portfolio
                        </h2>
                    </div>
                </div>
                <div className="owl-carousel portfolio_carousel px-4 pb-4 md:flex">
                    <div className="item decorative p-2">
                        <div className="box">
                            <div className="img-box">
                                <Image src={tankstructure3} alt="" height={500} />
                                    <div className="btn_overlay">
                                        <Link href="/portfolio" className="rounded">
                                            See More
                                        </Link>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div className="item facade p-2">
                        <div className="box">
                            <div className="img-box">
                                <Image src={p3Image} alt="" />
                                <div className="btn_overlay">
                                    <Link href="/portfolio" className="rounded">
                                        See More
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item perforated decorative p-2">
                        <div className="box">
                            <div className="img-box">
                                <Image src={roofing3} height={500} />
                                <div className="btn_overlay">
                                    <Link href="/portfolio" className="rounded">
                                        See More
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item railing p-2">
                        <div className="box">
                            <div className="img-box">
                                <Image src={p1Image} alt="" />
                                <div className="btn_overlay">
                                    <Link href="/portfolio" className="rounded">
                                        See More
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="owl-carousel portfolio_carousel px-4 pb-4 md:flex">
                    <div className="item decorative p-2">
                        <div className="box">
                            <div className="img-box">
                                <Image src={tankstructure2} height={500} />
                                    <div className="btn_overlay">
                                        <Link href="/portfolio" className="rounded">
                                            See More
                                        </Link>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div className="item facade p-2">
                        <div className="box">
                            <div className="img-box">
                                <Image src={roofstructures4} alt="" />
                                <div className="btn_overlay">
                                    <Link href="/portfolio" className="rounded">
                                        See More
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item perforated decorative p-2">
                        <div className="box">
                            <div className="img-box">
                                <Image src={scafolds} alt="" />
                                <div className="btn_overlay">
                                    <Link href="/portfolio" className="rounded">
                                        See More
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item railing p-2">
                        <div className="box">
                            <div className="img-box">
                                <Image src={structuralbuilding} alt="" />
                                <div className="btn_overlay">
                                    <Link href="/portfolio" className="rounded">
                                        See More
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center py-4">
                    <Link href="/portfolio" className="text-white border rounded px-3 py-2 hover:bg-orange-700">
                        See More Photos
                    </Link>
                </div>
            </section>
            {/* end portfolio section */}

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
                    </div>
                    <div className="btn-box">
                        <Link href="/services" className="rounded">
                            Read More
                        </Link>
                    </div>
                </div>
            </section>
            {/* end service section  */}

            {/* contact section  */}
            <section className="contact_section">
                <div className="container">
                    <div className="heading_container heading_center">
                        <h2>Get In <span>Touch</span></h2>
                        <p className="text-lg px-4">
                            With a proven track record of successful projects and a 
                            dedication to delivering exceptional results, Ozoh Engineering 
                            Company is your trusted partner for all your engineering needs. 
                            Contact us today to discuss how we can bring your visions to life 
                            and help you achieve your goals.
                        </p>
                    </div>
                    <h3 className=" font-medium text-center">Contact Form</h3>
                    <div className="row flex justify-center text-center items-center mx-1">
                        <div className="col-md-6 px-0">
                            <div className="form_container ">
                                <form action="" onSubmit={handleSubmit}>
                                    <div className="form-row">
                                        <div className="form-group col">
                                            <input 
                                                type="text" 
                                                className="form-control rounded" 
                                                id="name" 
                                                placeholder="Your Name" 
                                                onChange={(e) => setClient({...client, name:e.target.value})} />
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-lg-6">
                                            <input 
                                                type="text" 
                                                className="form-control rounded" 
                                                id="number"
                                                placeholder="Phone Number" 
                                                onChange={(e) => setClient({...client, number:e.target.value})} />
                                        </div>
                                        <div className="form-group col-lg-6">
                                            <input 
                                                type="text" 
                                                id="service" 
                                                className="form-control wide rounded" 
                                                placeholder="Specify Service Here"
                                                onChange={(e) => setClient({...client, service:e.target.value})} >
                                            </input>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col">
                                            <input 
                                                type="email" 
                                                className="form-control rounded" 
                                                id="email"
                                                placeholder="Email" 
                                                onChange={(e) => setClient({...client, email:e.target.value})} />
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col">
                                            <textarea 
                                                type="text" 
                                                className="message-box form-control rounded" 
                                                id="message"
                                                placeholder="Message" 
                                                onChange={(e) => setClient({...client, message:e.target.value})} />
                                        </div>
                                    </div>
                                    <div className="btn_box flex-col">
                                        <div className="-mt-2 mb-4">
                                            <p className="text-lg text-orange-500">{loading ? 'Please wait, processing Feedback Form .....' : ''}</p>
                                        </div>
                                        <button type="submit" className="rounded">
                                            {buttonDisabled ? 'Provide Feedback' : 'Send Feedback'}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* end contact section  */}

            {/* client section  */}
            <section id="testimonials" className='mx-auto mb-5'>

                {/* Container to heading and testm blocks */}
                <div className="max-w-6xl px-5 mx-auto mt-16 text-center">

                    {/* Heading */}
                    <h2 className="text-4xl font-bold text-center">
                        What's Different About OZOH?
                    </h2>
                </div>

            </section>
            {/* end client section  */}

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
                                        <Link href="https://wa.me/256758156715" className="link-box">
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