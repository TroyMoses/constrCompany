'use client';

import Link from "next/link";
import React, { useState } from 'react';
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


export default function HomePage() {

    const emailAddress = 'helpingbank7@gmail.com'
    
    return (
        <div className="h-screen w-screen my-3 mx-auto">
            <div className="header_section">
                <div className="flex-col text-center mx-auto py-3 header_top">
                    <div className="text-2xl md:ml-16">
                        <Link className="navbar-brand md:pl-20 flex-col" href="/"> <div className=" text-7xl">OZOH</div> <span className="text-4xl md:text-4xl">ENGINEERING COMPANY</span> </Link>
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
                                    <Link href="/services" className="btn1">
                                        Read More
                                    </Link>
                                    <Link href="/contact" className="btn2">
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
                                    Located in example, we specialize in a wide range of services included 
                                    in the services section. 
                                </p>
                                <p className=" text-lg">
                                    With our team of experienced professionals and state-of-the-art equipment, 
                                    we deliver high-quality results and ensure utmost customer satisfaction. 
                                    Our committment to excellence and attention to detail set us apart in the 
                                    industry, as we strive to meet and exceed the unique needs of our clients.
                                    
                                </p>
                                <Link className="text-lg" href="/services">
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
                                <Image src={p1Image} alt="" />
                                    <div className="btn_overlay">
                                        <Link href="/portfolio" className="">
                                            See More
                                        </Link>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div className="item facade p-2">
                        <div className="box">
                            <div className="img-box">
                                <Image src={p2Image} alt="" />
                                <div className="btn_overlay">
                                    <Link href="/portfolio" className="">
                                        See More
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item perforated decorative p-2">
                        <div className="box">
                            <div className="img-box">
                                <Image src={p3Image} alt="" />
                                <div className="btn_overlay">
                                    <Link href="/portfolio" className="">
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
                                    <Link href="/portfolio" className="">
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
                                <Image src={p1Image} alt="" />
                                    <div className="btn_overlay">
                                        <Link href="/portfolio" className="">
                                            See More
                                        </Link>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div className="item facade p-2">
                        <div className="box">
                            <div className="img-box">
                                <Image src={p2Image} alt="" />
                                <div className="btn_overlay">
                                    <Link href="/portfolio" className="">
                                        See More
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item perforated decorative p-2">
                        <div className="box">
                            <div className="img-box">
                                <Image src={p3Image} alt="" />
                                <div className="btn_overlay">
                                    <Link href="/portfolio" className="">
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
                                    <Link href="/portfolio" className="">
                                        See More
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
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
                                        We provide seamless welding and precise fabrication, 
                                        ensuring durable and high-quality results for various applications. 
                                        Whether it's custom or industrial components, we prioritize excellence 
                                        in craftsmanship and adhere to the highest industry standards.
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
                                        Cival Works
                                    </h5>
                                    <p>
                                        We encompass a wide range of infrastructure projects including 
                                        road construction, drainage systems, excavation, landscaping, 
                                        and more. We boast a team of experienced civil engineers and 
                                        technicians who bring attention to detail to every project.
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
                        <a href="">
                        Read More
                        </a>
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
                <div className="row flex justify-center text-center items-center mx-1">
                    <h3 className=" font-medium">Contact Form</h3>
                    <div className="col-md-6 px-0">
                    <div className="form_container ">
                        <form action="">
                        <div className="form-row">
                            <div className="form-group col">
                            <input type="text" className="form-control" placeholder="Your Name" />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-lg-6">
                            <input type="text" className="form-control" placeholder="Phone Number" />
                            </div>
                            <div className="form-group col-lg-6">
                            <select name="" id="" className="form-control wide">
                                <option value="">Select Service</option>
                                <option value="">Service 1</option>
                                <option value="">Service 2</option>
                                <option value="">Service 3</option>
                            </select>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col">
                            <input type="email" className="form-control" placeholder="Email" />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col">
                            <textarea type="text" className="message-box form-control" placeholder="Message" />
                            </div>
                        </div>
                        <div className="btn_box">
                            <button>
                                SEND
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
            <section id="testimonials" className='mx-auto'>

                {/* Container to heading and testm blocks */}
                <div className="max-w-6xl px-5 mx-auto mt-16 text-center">

                    {/* Heading */}
                    <h2 className="text-4xl font-bold text-center">
                        What's Different About USVA?
                    </h2>

                    {/* Testimonial Container */}
                    <div className="flex flex-col mt-24 md:flex-row md:space-x-6">

                        {/* Testimonial 1 */}
                        <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-gray-200 md:w-1/3">

                            <Image className='w-28 -mt-14 rounded-full' alt="" />

                            <h5 className="text-lg font-bold">Flavia Bae</h5>

                            <p className="text-md text-gray-700">
                                "USVA has managed to uplift the youths' talent of volleyball. 
                                The ability to develop an all round physically and mentally 
                                fit volleyballer is what we need in the volleyball sport. And 
                                USVA has provided it."
                            </p>
                        </div>

                        {/* Testimonial 2 */}
                        <div className="hidden flex-col items-center p-6 space-y-6 rounded-lg bg-gray-200 md:flex md:w-1/3">

                            <Image className='w-28 h-28 -mt-14 rounded-full' alt="" />

                            <h5 className="text-lg font-bold">Andy Tyga</h5>

                            <p className="text-md text-gray-700">
                                "I have managed to participate in very many 
                                competitions and through these, i have won counless medals 
                                and trophies. Most of these have been possible through the 
                                help of USVA."
                            </p>
                        </div>

                        {/* Testimonial 3 */}
                        <div className="hidden flex-col items-center p-6 space-y-6 rounded-lg bg-gray-200 md:flex md:w-1/3">

                            <Image className='w-28 h-28 -mt-14 rounded-full' alt="" />

                            <h5 className="text-lg font-bold">Anonymous</h5>

                            <p className="text-md text-gray-700">
                                "USVA is like home to me, there is always someone to look 
                                up to, either for help or for mentorship. The whole team
                                 is determined to offer endless support in the name of the support."
                            </p>
                        </div>
                    </div>
                </div>

            </section>
            {/* end client section  */}

            {/* info section  */}
            <section className="info_section ">
                <div className="info_container layout_padding2">
                <div className="container">
                    <div className="info_logo">
                    <a className="navbar-brand" href="index.html"> Tro<span>Weld</span> </a>
                    </div>
                    <div className="info_main">
                    <div className="row">
                        <div className="col-md-3 col-lg-2">
                        <div className="info_link-box">
                            <h5>
                            Useful Link
                            </h5>
                            <ul>
                            <li className=" active">
                                <a className="" href="index.html">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="">
                                <a className="" href="about.html">About </a>
                            </li>
                            <li className="">
                                <a className="" href="service.html">Services </a>
                            </li>
                            <li className="">
                                <a className="" href="portfolio.html"> Portfolio </a>
                            </li>
                            <li className="">
                                <a className="" href="contact.html"> Contact </a>
                            </li>
                            </ul>
                        </div>
                        </div>
                        <div className="col-md-3 ">
                        <h5>
                            Welding
                        </h5>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur
                            adipiscinaliquaLoreadipiscing
                        </p>
                        </div>
                        <div className="col-md-3 mx-auto  ">
                        <h5>
                            social media
                        </h5>
                        <div className="social_box">
                            <a href="#">
                            <i className="fa fa-facebook" aria-hidden="true"></i>
                            </a>
                            <a href="#">
                            <i className="fa fa-twitter" aria-hidden="true"></i>
                            </a>
                            <a href="#">
                            <i className="fa fa-linkedin" aria-hidden="true"></i>
                            </a>
                            <a href="#">
                            <i className="fa fa-youtube-play" aria-hidden="true"></i>
                            </a>
                        </div>
                        </div>
                        <div className="col-md-3">
                        <h5>
                            Our welding center
                        </h5>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur
                            adipiscinaliquaLoreadipiscing
                        </p>
                        </div>
                    </div>
                    </div>
                    <div className="info_bottom">
                    <div className="row">
                        <div className="col-lg-9">
                        <div className="info_contact ">
                            <div className="row">
                            <div className="col-md-3">
                                <a href="#" className="link-box">
                                <i className="fa fa-map-marker" aria-hidden="true"></i>
                                <span>
                                    Location
                                </span>
                                </a>
                            </div>
                            <div className="col-md-5">
                                <a href="#" className="link-box">
                                <i className="fa fa-phone" aria-hidden="true"></i>
                                <span>
                                    Call +01 1234567890
                                </span>
                                </a>
                            </div>
                            <div className="col-md-4">
                                <a href="#" className="link-box">
                                <i className="fa fa-envelope" aria-hidden="true"></i>
                                <span>
                                    demo@gmail.com
                                </span>
                                </a>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-md-3">
                        <div className="info_form ">
                            <form action="">
                            <input type="email" placeholder="Enter Your Email" />
                            <button>
                                <i className="fa fa-arrow-right" aria-hidden="true"></i>
                            </button>
                            </form>
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
                    <a href="https://html.design/">Free Html Templates</a>
                </p>
                </div>
            </footer>
            {/* footer section  */}

            {/* Footer */}
            <footer className="py-5 pl-10">
                
            </footer>

        </div>
    )
}