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
                <div className="flex justify-center md:justify-between space-x-52 md:space-x-96 py-3 header_top text-xl">
                    <div className="text-2xl">
                        <a className="navbar-brand md:pl-20 text-4xl" href="index.html"> Tro<span>Weld</span> </a>
                    </div>
                    
                    <div className="social_box md:pr-24 space-x-3 md:space-x-5">
                        <a href="">
                            <i className="fa fa-facebook" aria-hidden="true"></i>
                        </a>
                        <a href="">
                            <i className="fa fa-twitter" aria-hidden="true"></i>
                        </a>
                        <a href="">
                            <i className="fa fa-linkedin" aria-hidden="true"></i>
                        </a>
                        <a href="">
                            <i className="fa fa-instagram" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div className="flex header_bottom bg-gray-900 text-white">
                <div className="container-fluid">
                    <nav className="navbar navbar-expand-lg">
                        <div className="custom_nav-container navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav text-xl md:space-x-10">
                                <li className="nav-item-active">
                                    <a className="nav-link text-orange-500 hover:text-white" href="index.html">Home <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link hover:text-orange-500" href="service.html">Services</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link hover:text-orange-500" href="about.html"> About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link hover:text-orange-500" href="portfolio.html">Portfolio</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link hover:text-orange-500" href="contact.html">Contact Us</a>
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
                                        Dream Up
                                    </p>
                                </h1>
                                <div className="btn-box justify-center">
                                    <a href="" className="btn1">
                                        Read More
                                    </a>
                                    <a href="" className="btn2">
                                        Contact Us
                                    </a>
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
                    <div className="detail-box">
                        <div className="heading_container">
                        <h2>Welcome to <span>Troweld</span></h2>
                        </div>
                        <p>
                        Simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever
                        since the 1500s, when an unknown printer took a galley of type
                        and scrambled it to make a type specimen book. It has s
                        </p>
                        <a href="">
                        Read More
                        </a>
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
                <div className="carousel-wrap ">
                    <div className="filter_box">
                    <nav className="owl-filter-bar">
                        <a href="#" className="item active" data-owl-filter="*">All</a>
                        <a href="#" className="item" data-owl-filter=".decorative">DECORATIVE</a>
                        <a href="#" className="item" data-owl-filter=".facade">FACADES </a>
                        <a href="#" className="item" data-owl-filter=".perforated">PERFORATED
                        </a>
                        <a href="#" className="item" data-owl-filter=".railing">RAILINGS </a>
                    </nav>
                    </div>
                </div>
                </div>
                <div className="owl-carousel portfolio_carousel">
                <div className="item decorative">
                    <div className="box">
                    <div className="img-box">
                        <Image src={p1Image} alt="" />
                        <div className="btn_overlay">
                        <a href="" className="">
                            See More
                        </a>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="item facade">
                    <div className="box">
                    <div className="img-box">
                    <Image src={p2Image} alt="" />
                        <div className="btn_overlay">
                        <a href="" className="">
                            See More
                        </a>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="item perforated decorative">
                    <div className="box">
                    <div className="img-box">
                    <Image src={p3Image} alt="" />
                        <div className="btn_overlay">
                        <a href="" className="">
                            See More
                        </a>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="item railing">
                    <div className="box">
                    <div className="img-box">
                    <Image src={p1Image} alt="" />
                        <div className="btn_overlay">
                        <a href="" className="">
                            See More
                        </a>
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
                </div>
                <div className="row">
                    <div className="col-sm-6 col-md-4">
                    <div className="box ">
                        <div className="img-box">
                        <Image src={s1Image} alt="" />
                        </div>
                        <div className="detail-box">
                        <h5>
                            Home Welding
                        </h5>
                        <p>
                            when looking at its layout. The point of using Lorem Ipsum is
                            that it has a more-or-less normal
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
                            Gate Welding
                        </h5>
                        <p>
                            when looking at its layout. The point of using Lorem Ipsum is
                            that it has a more-or-less normal
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
                            Window Welding
                        </h5>
                        <p>
                            when looking at its layout. The point of using Lorem Ipsum is
                            that it has a more-or-less normal
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
                            Machine Welding
                        </h5>
                        <p>
                            when looking at its layout. The point of using Lorem Ipsum is
                            that it has a more-or-less normal
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
                            Bike Welding
                        </h5>
                        <p>
                            when looking at its layout. The point of using Lorem Ipsum is
                            that it has a more-or-less normal
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
                            Car Welding
                        </h5>
                        <p>
                            when looking at its layout. The point of using Lorem Ipsum is
                            that it has a more-or-less normal
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
                </div>
                <div className="row flex justify-center text-center items-center">
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
                            <input type="text" className="message-box form-control" placeholder="Message" />
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
            <section className="client_section layout_padding">
                <div className="container">
                <div className="heading_container heading_center">
                    <h2>
                    Testimonial
                    </h2>
                </div>
                <div className="row">
                    <div className="col-md-9 mx-auto">
                    <div id="customCarousel2" className="carousel slide" data-ride="carousel">
                        <div className="row">
                        <div className="col-md-11">
                            <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="box">
                                <div className="client_id">
                                    <div className="img-box">
                                    <Image src={clientImage} alt="" />
                                    </div>
                                    <h5>
                                    Alex Jonson
                                    </h5>
                                </div>
                                <div className="detail-box">
                                    <p>
                                    ipsum dolor sit amet, consectetur adipiscing elit,
                                    sed do eiusmod tempor incididunt ut labore et dolore
                                    magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit
                                    </p>
                                </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="box">
                                <div className="client_id">
                                    <div className="img-box">
                                    <img src="images/client.jpg" alt="" />
                                    </div>
                                    <h5>
                                    Alex Jonson
                                    </h5>
                                </div>
                                <div className="detail-box">
                                    <p>
                                    ipsum dolor sit amet, consectetur adipiscing elit,
                                    sed do eiusmod tempor incididunt ut labore et dolore
                                    magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit
                                    </p>
                                </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="box">
                                <div className="client_id">
                                    <div className="img-box">
                                    <img src="images/client.jpg" alt="" />
                                    </div>
                                    <h5>
                                    Alex Jonson
                                    </h5>
                                </div>
                                <div className="detail-box">
                                    <p>
                                    ipsum dolor sit amet, consectetur adipiscing elit,
                                    sed do eiusmod tempor incididunt ut labore et dolore
                                    magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit
                                    </p>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-md-1">
                            <ol className="carousel-indicators">
                            <li data-target="#customCarousel2" data-slide-to="0" className="active"></li>
                            <li data-target="#customCarousel2" data-slide-to="1"></li>
                            <li data-target="#customCarousel2" data-slide-to="2"></li>
                            </ol>
                        </div>
                        </div>
                    </div>
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