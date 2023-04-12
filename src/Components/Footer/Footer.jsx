import React from 'react';
import facebook from '../../assets/Icons/Group 9969.png'
const Footer = () => {

    return (
        <>
            <footer className="bg-black mt-10 ">
                <section className="w-full max-w-6xl mx-auto py-10 px-5">

                    <div className="grid md:grid-cols-2 lg:grid-cols-5 mt-20  gap-10 justify-center lg:items-start ">
                        <div className="text-text_color">
                            <h2 className="font-bold text-2xl mb-2">TalentFinder</h2>
                            <p className="my-2 text-dark3">There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
                            <span><img className='w-18 h-6' src={facebook} alt="" /></span>
                        </div>
                        <div>
                            <div className="text-text_color">
                                <h2 className="font-bold text-2xl">Company</h2>
                                <div className='text-dark3'>
                                <p className="my-2">About Us</p>
                                <p>Work</p>
                                <p className="my-2">Latest News</p>
                                <p>Careers</p>
                               </div>
                            </div>
                        </div>
                        <div>
                            <div className="text-text_color">
                                <h2 className="font-bold text-2xl">Product</h2>

                                <div className='text-dark3'>
                                <p className="my-2">Prototype</p>
                                <p>Plans & Pricing</p>
                                <p>Customers</p>
                                <p>Integrations</p>
                                </div>
                            </div>
                        </div>

                        <div className="text-text_color">
                            <div className="">
                                <h2 className="font-bold text-2xl mb-2">Support</h2>
                                <div className='text-dark3'>
                                <p>Help Desk</p>
                                <p>Sales</p>
                                <p>Become a Partner</p>
                                <p>Developers</p>
                                </div>

                            </div>
                        </div>

                        <div className='text-text_color'>
                            <h1 className='text-2xl font-bold mb-2'>Contact</h1>
                            <div className='text-dark3'>
                            <p>524 Broadway , NYC</p>
                            <p>+1 777 - 978 - 5570</p>
                           </div>
                        </div>
                    </div>
                    <br />
                    <span>< hr /></span>

                    <div className="text-center mt-16 text-text_color flex justify-between">
                        <p className="text-dark3">© 2027 UIDesign.to - All rights reserved.</p>
                        <p className='text-dark3'>Powered by TalentFinder</p>
                    </div>
                </section>
            </footer>
        </>
    );
};

export default Footer;