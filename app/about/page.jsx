import Image from "next/image";
import Link from "next/link";
import team1 from 'app/public/assets/team1.jpg';
import team2 from 'app/public/assets/team2.jpg';
import team3 from 'app/public/assets/team3.jpg';
import adv from 'app/public/assets/advantages.jpg';


export default function AboutPage() {

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
                            <li className="active"><Link href="/about">About</Link></li>
                            <li className=""><Link href="/services">Services</Link></li>
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
                            <li className="breadcrumb-item" aria-current="page">About Us</li>
                        </ol>
                    </nav>
                </div>
            </div>

            {/* Advantages and details */}
            <section className="advantages pt-5">
                <div className="container pb-lg-5">
                    <div className="row advantages_grids">
                        <div className="col-lg-6">
                            <Image 
                                src={adv} 
                                alt="" 
                                className="img-fluid" />
                        </div>
                        <div className="col-lg-6 mt-lg-0 mt-4">
                            <h3 className="mt-3">ELIGIBILITY REQUIREMENTS.</h3>
                            <p className="my-sm-4 my-3"> You bring an item to our office and use it as collateral for our
                                loan.</p><p>1. Your item will be evaluated after which we shall let you
                                    know how much you can borrow.</p><p>2. If we both reach an agreement on he valuation and how
                                        much you can borrow. We will register you and file your
                                        loan.</p> <p>3. Your item can be redeemed at anytime or before the
                                            agreed date after repaying your loan, interest and
                                            applicable charges.</p>
                        </div>
                        <div className="px-3">
                            <h3 className="mt-3 ">CHARGES AND INTEREST.</h3>
                            <p className="mb-3">The following charges shall apply, and from time to time, be subject to
                                changes without notice within the fu ll extent permitted or demanded
                                by law.
                                NB: The applicable interest rate will be from 15% to 30% per month based on
                                declining balance.</p>
                                <br></br>
                        </div>
                        <div className="px-2">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Helping Bank Charges
                                            Description.</th>
                                        <th>Charges
                                        </th>
                                        
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>One week interest</td>
                                        <td>15%</td>
                                        
                                    </tr>
                                    <tr>
                                        <td>Two week interest</td>
                                        <td>20%</td>
                                        
                                    </tr>
                                    <tr>
                                        <td>Three week interest</td>
                                        <td>25%</td>
                                        
                                    </tr>
                                    <tr>
                                        <td>Four week interest</td>
                                        <td>30%</td>
                                        
                                    </tr>
                                </tbody>
                            </table>
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
                <Link href="/about" className="move-top"> 
                    <span className="fa fa-angle-up  mb-3" aria-hidden="true"></span>
                </Link>
            </div>
        </div>
    )
}