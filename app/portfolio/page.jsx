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
import roofstructures3 from '../public/assets/roofstructures3.jpg';
import roofing3 from '../public/assets/roofing3.jpg';
import ozoh from '../public/assets/ozoh.jpg';
import roofing from '../public/assets/roofing.jpg';
import airconditioner from '../public/assets/airconditioner.jpg';
import roofstructure8 from '../public/assets/roofstructure8.jpg';
import roofstructures2 from '../public/assets/roofstructures2.jpg';
import tankstructure2 from '../public/assets/tankstructure2.jpg';
import structuralbuilding from '../public/assets/structuralbuilding.jpg';
import scafolds from '../public/assets/scafolds.jpg';
import tankstructure3 from '../public/assets/tankstructure3.jpg';
import roofstructures4 from '../public/assets/roofstructures4.jpg';
import tankstructure4 from '../public/assets/tankstructure4.jpg';
import tankstructure from '../public/assets/tankstructure.jpg';
import sheetwalls from '../public/assets/sheetwalls.jpg';
import sheetwall2 from '../public/assets/sheetwall2.jpg';
import roofstructure6 from '../public/assets/roofstructure6.jpg';
import roofstructure7 from '../public/assets/roofstructure7.jpg';
import roofing2 from '../public/assets/roofing2.jpg';
import roofstructures from '../public/assets/roofstructures.jpg';
import engineer from '../public/assets/engineer.jpg';
import metalworks from '../public/assets/metalworks.jpg';
import tanktour1 from '../public/assets/tank-tour.jpeg';
import tanktour2 from '../public/assets/tank-tour2.jpeg';
import tanktour3 from '../public/assets/tank-tour3.jpeg';
import tanktour4 from '../public/assets/tank-tour4.jpeg';


export default function PortfolioPage() {

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
                                <li className="nav-item">
                                    <Link className="nav-link hover:text-orange-500" href="/services">Services</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link hover:text-orange-500" href="/about"> About</Link>
                                </li>
                                <li className="nav-item-active">
                                    <Link className="nav-link text-orange-500 hover:text-white" href="/portfolio">Portfolio</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link hover:text-orange-500" href="/contact">Contact Us</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>

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
                                <Image src={tanktour1} alt="" height="" />
                            </div>
                        </div>
                    </div>
                    <div className="item facade p-2">
                        <div className="box">
                            <div className="img-box">
                                <Image src={tanktour2} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="item perforated decorative p-2">
                        <div className="box">
                            <div className="img-box">
                                <Image src={tanktour3} height="" />
                            </div>
                        </div>
                    </div>
                    <div className="item railing p-2">
                        <div className="box">
                            <div className="img-box">
                                <Image src={tanktour4} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="owl-carousel portfolio_carousel px-4 pb-4 md:flex">
                    <div className="item decorative p-2">
                        <div className="box">
                            <div className="img-box">
                                <Image src={tankstructure3} alt="" height={500} />
                            </div>
                        </div>
                    </div>
                    <div className="item facade p-2">
                        <div className="box">
                            <div className="img-box">
                                <Image src={p3Image} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="item perforated decorative p-2">
                        <div className="box">
                            <div className="img-box">
                                <Image src={roofing3} height={500} />
                            </div>
                        </div>
                    </div>
                    <div className="item railing p-2">
                        <div className="box">
                            <div className="img-box">
                                <Image src={p1Image} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="owl-carousel portfolio_carousel px-4 pb-4 md:flex">
                    <div className="item decorative p-2">
                        <div className="box">
                            <div className="img-box">
                                <Image src={tankstructure} height="" />
                            </div>
                        </div>
                    </div>
                    <div className="item facade p-2">
                        <div className="box">
                            <div className="img-box">
                                <Image src={tankstructure2} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="item perforated decorative p-2">
                        <div className="box">
                            <div className="img-box">
                                <Image src={tankstructure4} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="item railing p-2">
                        <div className="box">
                            <div className="img-box">
                                <Image src={sheetwalls} height="500" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="owl-carousel portfolio_carousel px-4 pb-4 md:flex">
                    <div className="item decorative p-2">
                        <div className="box">
                            <div className="img-box">
                                <Image src={sheetwall2} height={500} />
                            </div>
                        </div>
                    </div>
                    <div className="item facade p-2">
                        <div className="box">
                            <div className="img-box">
                                <Image src={roofstructures4} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="item perforated decorative p-2">
                        <div className="box">
                            <div className="img-box">
                                <Image src={scafolds} height="500" />
                            </div>
                        </div>
                    </div>
                    <div className="item railing p-2">
                        <div className="box">
                            <div className="img-box">
                                <Image src={roofstructure6} height="500" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="owl-carousel portfolio_carousel px-4 pb-4 md:flex">
                    <div className="item decorative p-2">
                        <div className="box">
                            <div className="img-box">
                                <Image src={roofing} height={500} />
                            </div>
                        </div>
                    </div>
                    <div className="item facade p-2">
                        <div className="box">
                            <div className="img-box">
                                <Image src={roofing2} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="item perforated decorative p-2">
                        <div className="box">
                            <div className="img-box">
                                <Image src={roofstructures} height="500" />
                            </div>
                        </div>
                    </div>
                    <div className="item railing p-2">
                        <div className="box">
                            <div className="img-box">
                                <Image src={roofstructure7} height="500" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="owl-carousel portfolio_carousel px-4 pb-4 md:flex">
                    <div className="item decorative p-2">
                        <div className="box">
                            <div className="img-box">
                                <Image src={ozoh} height={500} />
                            </div>
                        </div>
                    </div>
                    <div className="item facade p-2">
                        <div className="box">
                            <div className="img-box">
                                <Image src={engineer} height="500" />
                            </div>
                        </div>
                    </div>
                    <div className="item perforated decorative p-2">
                        <div className="box">
                            <div className="img-box">
                                <Image src={metalworks} height="500" />
                            </div>
                        </div>
                    </div>
                    <div className="item railing p-2">
                        <div className="box">
                            <div className="img-box">
                                <Image src={roofstructure7} height="500" />
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