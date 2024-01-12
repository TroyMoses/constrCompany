'use client';

import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect } from 'react';
import axios from "axios";
import Link from "next/link";
import team1 from 'app/public/assets/team1.jpg';
import team2 from 'app/public/assets/team2.jpg';
import team3 from 'app/public/assets/team3.jpg';

export default function ContactPage() {

    // const router = useRouter();

    const [client, setClient] = React.useState({
        name: '',
        email:'',
        message: ''
    })

    const [buttonDisabled, setButtonDisabled] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    const handleSubmit = async () => {
        try {
            setLoading(true);
            await fetch('/api/clients', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(client),
            });
            router.push('/');
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if(client.name.length > 0 && client.email.length > 0 && client.message.length > 0) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }, [client]);
    

    const emailAddress = 'helpingbank7@gmail.com'

    return (
        <div className="h-screen w-screen">
            <header>
                <div className="container">
                    <nav className="py-3 flex text-lg">
                        <div id="logo">
				            <h1> <a href="index.html"><span className="fa fa-university "></span> Helping Bank </a></h1>
			            </div>
			            <label htmlFor="drop" className="toggle"><span className="fa fa-bars"></span></label>
                        <input type="checkbox" id="drop" />
                        <ul className="menu ml-auto mt-1">
                            <li className=""><Link href="/">Home</Link></li>
                            <li className=""><Link href="/about">About</Link></li>
                            <li className=""><Link href="/services">Services</Link></li>
                            <li className="active"><Link href="/contact">Contact</Link></li>
                        </ul>
                    </nav>
                </div>
            </header>

            {/* Inner banner */}
            <section className="inner-banner" id="home">
                <div className="inner-layer">
                    <div className="container">
                    </div>
                </div>
            </section>

            {/* Breadcrumb */}
            <div className="breadcrumb-w3pvt">
                <div className="container">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <Link href="/">Home</Link>
                            </li>
                            <li className="breadcrumb-item" aria-current="page">Contact</li>
                        </ol>
                    </nav>
                </div>
            </div>

            {/* Contact section */}
            <section className="contact py-5">
                <div className="container py-lg-5">
                    <h2 className="heading mb-sm-5 mb-4">Get in <strong> touch with us </strong></h2>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 contact-address">
                            <h4 className="mb-4 w3f_title">Contact Details</h4>
                            <ul className="list-w3">
                                <li className="my-3"><span className="fa mr-1 fa-phone"></span>+256-703-713-641</li>
                                <li className="my-3"><span className="fa mr-1 fa-phone"></span>+256-703-713-641</li>
                                <li className=""><span className="fa mr-1 fa-envelope"></span><a href="mailto:helpingbank7@gmail.com">helpingbank7@gmail.com</a></li>
                            </ul>                           
                        </div>

                        <div className="col-lg-4 col-md-6 contact-form mt-md-0 mt-sm-5 mt-4">
                            <h4 className="mb-4 w3f_title">{loading ? 'Processing feedback form' : 'Contact Form'}</h4>
                            <form name="contactform" id="contactform" onSubmit={handleSubmit} novalidate="novalidate">
                                    <div className="form-group">
                                        <label>Name</label>
                                        <input 
                                            type="text" 
                                            id="name" 
                                            className="form-control"
                                            placeholder="Enter Name" 
                                            value={client.name} 
                                            onChange={(e) => setClient({...client, name: e.target.value})} 
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input 
                                            type="email" 
                                            id="email" 
                                            className="form-control" 
                                            placeholder="Enter Email" 
                                            value={client.email} 
                                            onChange={(e) => setClient({...client, email: e.target.value})} 
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>How can we help?</label>
                                        <textarea 
                                            id="message" 
                                            className="form-control"
                                            placeholder="Enter Your Message Here" 
                                            value={client.message} 
                                            onChange={(e) => setClient({...client, message: e.target.value})}
                                        />
                                    </div>				
                                    <button type="submit" className="btn btn-default">{buttonDisabled ? 'Enter feedback' : 'Submit'}</button>
                                </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-5 pl-10">
                <div className="container pt-lg-4">
                    <div className="flex flex-col space-y-3 md:space-y-0 md:flex-row md:justify-between">
                        <div className="col-lg-3 col-sm-6 footer-top">
                            <h4 className=" w3f_title">Contacts</h4>
                            <ul className="list-w3">					
                                <li className="my-2"><span className="fa mr-1 fa-phone"></span>+256-703-713-641</li>
                                <li className="my-2"><span className="fa mr-1 fa-phone"></span>+256-703-713-641</li>
                    
                            </ul>
                        </div>
                        <div className="col-lg-3 col-sm-6 footer-top flex flex-col">
                            <h4 className="mb-1 w3f_title">Email Address</h4>
                            <div className="flex">
                                <div>                                
                                    <span className="fa mr-1 fa-envelope text-gray-500"></span>
                                </div>
                                <div className="text-gray-400">
                                    <a href={`mailto:${emailAddress}`}>helpingbank7@gmail.com</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 footer-top">
                            <h4 className="mb-1 w3f_title">Services</h4>
                            <ul className="list-w3">
                                <li><Link href="/services">Business Loans</Link></li>
                                <li className="my-2"><Link href="/services">Emergency Loans</Link></li>
                                <li className="my-2"><Link href="/services">Individual Loans</Link></li>
                                <li className=""><Link href="/services">Quick Simple Loans</Link></li>
                                <li className=""><Link href="/services">Tuition Fees </Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>

            {/* Copyright */}
            <section className="copy-right py-4">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                            <p className="">© 2023 Bank Card All rights reserved | Design by Ann Chance
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Move to top */}
            <div className="move-top text-right">
                <Link href="/contact" className="move-top"> 
                    <span className="fa fa-angle-up  mb-3" aria-hidden="true"></span>
                </Link>
            </div>
        </div>
    )
}