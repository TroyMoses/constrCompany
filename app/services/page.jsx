import Image from "next/image";
import Link from "next/link";
import a1 from 'app/public/assets/a1.png';
import a2 from 'app/public/assets/a2.png';
import a3 from 'app/public/assets/a3.png';
import serv from 'app/public/assets/serv.jpg';
import financial from 'app/public/assets/financial_services.jpeg';
import loan from 'app/public/assets/loan_management.jpeg';
import personal from 'app/public/assets/personal_banking.jpeg';

export default function ServicesPage() {

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
                            <li className="active"><Link href="/services">Services</Link></li>
                            <li className=""><Link href="/contact">Contact</Link></li>
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
                            <li className="breadcrumb-item" aria-current="page">Services</li>
                        </ol>
                    </nav>
                </div>
            </div>

            {/* Services */}
            <section className="services py-5">
                <div className="container py-md-5 py-sm-3">
                    <h3 className="heading mb-5">Services <strong> we provide </strong></h3>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="row">
                                <div className="col-9 mt-lg-5 grid">
                                    <h3>Business Loans</h3>
                                    <p className="mt-2">
                                        Business loan is a source of capital 
                                        that can help you stock your shelves, 
                                        buy new equipment or expand your footprint.
                                    </p>
                                </div>
                                <div className="col-3 mt-lg-5 icon text-lg-center text-left grid1">
                                    <Image 
                                        src={a2} 
                                        alt="" 
                                        className="img-fluid max-w-full h-auto" />
                                </div>
                                
                                <div className="col-9 mt-sm-5 mt-4 grid">
                                    <h3>Individual Loans</h3>
                                    <p className="mt-2"> 
                                        They can be used for various purposes, 
                                        such as working capital, loan consolidation, 
                                        home repairs and so on.
                                    </p>
                                </div>
                                <div className="col-3 mt-sm-5 mt-4 icon text-lg-center text-left grid4">
                                    <Image 
                                        src={a3} 
                                        alt="" 
                                        className="img-fluid max-w-full h-auto" />
                                </div>
                                
                                <div className="col-9 mt-sm-5 mt-4 grid">
                                    <h3>Emergency Loans</h3>
                                    <p className="mt-2"> 
                                        Emergency Loans provide quick access to 
                                        money when immedidate or unexpected situation arise.
                                    </p>
                                </div>
                                <div className="col-3 mt-sm-5 mt-4 icon text-lg-center text-left grid5">
                                    <Image 
                                        src={a1} 
                                        alt="" 
                                        className="img-fluid" />
                                </div>
                                
                            </div>
                        </div>
                        <div className="col-lg-4 text-center my-lg-0 my-4">
                            <Image 
                                src={serv} 
                                alt="" 
                                className="img-fluid max-w-full h-auto" />
                        </div>
                        <div className="col-lg-4 text-left">
                            <div className="row">
                                <div className="col-3 mt-sm-5 mt-4 icon text-lg-center text-right grid6">
                                    <Image 
                                        src={a2}
                                        alt="" 
                                        className="img-fluid max-w-full h-auto" />
                                </div>
                                <div className="col-9 mt-sm-5 mt-4 grid">
                                    <h3>Tuition Fee loan</h3>
                                    <p className="mt-2">
                                        Tuition Fee loan is a loan that coveres the 
                                        cost of the fees of your semester and the 
                                        lender will pay back with interest.
                                    </p>
                                </div>
                                
                                <div className="col-3 mt-sm-5 mt-4 icon text-lg-center text-right grid7">
                                    <Image 
                                        src={a3}
                                        alt="" 
                                        className="img-fluid max-w-full h-auto" />
                                </div>
                                <div className="col-9 mt-sm-5 mt-4 grid">
                                    <h3>Quick Simple Loans</h3>
                                    <p className="mt-2"> 
                                        We also offer quick simple loans with very simple 
                                        and understandable terms and conditions that favours 
                                        both parties.
                                    </p>
                                </div>
                                
                                <div className="col-3 mt-sm-5 mt-4 icon text-lg-center text-right grid3">
                                    <Image 
                                        src={a1} 
                                        alt="" 
                                        className="img-fluid max-w-full h-auto" />
                                </div>
                                <div className="col-9 mt-sm-5 mt-4 grid">
                                    <h3>24/7 Support</h3>
                                    <p className="mt-2"> 
                                        We are avaiable any time, and you can reach out to us 
                                        through our email or contact that is showing at the end 
                                        of the page.
                                    </p>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Other services  */}
            <section className="other_services pt-5">
                <div className="container py-md-5 py-3">
                    <h2 className="heading mb-5">A wide range<strong> of Banking services </strong></h2>
                    <div className="row">
                        <div className="col-lg-4 col-sm-6 mb-5">
                            <div className="grid">
                                <Image 
                                    src={personal} 
                                    alt="" 
                                    className="img-flui max-w-full h-auto" />
                                <div className="info p-4">
                                    <h4 className="">Personal Banking</h4>
                                    <p className="my-3">
                                        Our Personal Banking services are designed to cater to your 
                                        individual financial needs. Enjoy secure and convenient access 
                                        to your accounts, easy fund transfers, and a range of banking 
                                        solutions tailored to help you manage your money effectively.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 mb-5">
                            <div className="grid">
                                <Image 
                                    src={financial} 
                                    alt="" 
                                    className="img-flui max-w-full h-auto" />
                                <div className="info p-4">
                                    <h4 className="">Financial Services</h4>
                                    <p className="my-3">
                                        Our comprehensive Financial Services offer expert 
                                        guidance and support to help you achieve your 
                                        financial goals. From investment advice to 
                                        retirement planning, we provide a wide array of 
                                        services to optimize your financial well-being and 
                                        secure your future.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 mb-5">
                            <div className="grid">
                                <Image 
                                    src={loan} 
                                    alt="" 
                                    className="img-flui max-w-full h-auto" />
                                <div className="info p-4">
                                    <h4 className="">Loan Management</h4>
                                    <p className="my-3">
                                        With our efficient Loan Management solutions, 
                                        borrowing becomes stress-free. We offer flexible 
                                        loan options, competitive interest rates, and 
                                        personalized assistance throughout the application 
                                        process and repayment journey.
                                    </p>
                                </div>
                            </div>
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
                <Link href="/services" className="move-top"> 
                    <span className="fa fa-angle-up  mb-3" aria-hidden="true"></span>
                </Link>
            </div>
        </div>
    )
}