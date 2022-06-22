import React, { useState } from 'react'
import Headroom from "react-headroom"
import NavLogo from "../assets/nav_logo.webp"
import { motion } from "framer-motion"

const fadeNav = {
    hidden: {
        opacity: 0,
        y: -40
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: .8,
        }
    }
}

export default function Navbar() {

    const [showNavbar, setShowNavbar] = useState(false);

    return (
        <Headroom className="fixed z-50 w-full">

            <motion.div variants={fadeNav} initial="hidden" animate="visible">
                <nav className="flex items-center py-2 flex-wrap px-4 tracking-wider bg-white">
                    <span className="p-2 mr-4 inline-flex items-center text-4xl md:text-5xl cursor-pointer font-base  ">
                        <img src={NavLogo} alt="logo" className='h-16' />
                    </span>
                    <button className="lg:hidden right-0 absolute md:px-8 px-6 mr-1 mb-1 ease-linear transition-all duration-150" type="button" onClick={() => setShowNavbar(true)} aria-hidden="false" aria-label="button">
                        <div className="bg-purple-800 px-3 py-2 rounded-full text-white text-base" aria-hidden="false">Menu +</div>
                    </button>
                    {showNavbar ? (
                        <div>
                            <div className=" flex overflow-x-hidden mx-4 md:mx-8 h-screen overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none md:hidden"
                            >
                                <div className="relative my-4 mx-auto w-screen">
                                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-gray-100 outline-none focus:outline-none">
                                        <div className="flex items-start justify-between p-5 border-solid rounded-t">
                                            <div>
                                                <img src={NavLogo} alt="logo" className='h-16' />
                                            </div>

                                            <button className="absolute right-6" onClick={() => setShowNavbar(false)} aria-hidden="false" aria-label="button">
                                                <div className="text-4xl font-bold" aria-hidden="false">&times;</div>
                                            </button>

                                        </div>

                                        <div className="grid justify-center">
                                            <div className="inline-flex w-64 h-1 bg-indigo-500 rounded-full"></div>
                                        </div>

                                        <div className="grid px-8 text-xl py-2 gap-2 w-full mb-4"
                                        >
                                            <ul className="text-lg text-gray-800">
                                                <li>Introduction</li>
                                                <li>Open Source</li>
                                                <ul>
                                                    <a href="https://github.com/FedML-AI" target="_blank" rel="noreferrer" className='hover:text-[#3E4C73] py-2' ><li>- GitHub</li></a>
                                                    <a href="https://doc.fedml.ai/" target="_blank" rel="noreferrer" className='hover:text-[#3E4C73] py-2' ><li>- Docs</li></a>
                                                    <a href="https://fedml.ai/use-cases/" target="_blank" rel="noreferrer" className='hover:text-[#3E4C73] py-2' ><li>- UseCase</li></a>
                                                    <a href="https://join.slack.com/t/fedml/shared_invite/zt-havwx1ee-a1xfOUrATNfc9DFqU~r34w" target="_blank" rel="noreferrer" className='hover:text-[#3E4C73] py-2' ><li>- Join the community</li></a>
                                                </ul>
                                                <li>Platform</li>
                                                <a href="https://fedml.ai/platform-tutorial/" target="_blank" rel="noreferrer" className='hover:text-[#3E4C73] py-2' ><li>- Tutorial</li></a>
                                                <a href="http://open.fedml.ai/" target="_blank" rel="noreferrer" className='hover:text-[#3E4C73] py-2' ><li>- Login</li></a>
                                                <li>Solution</li>
                                                <ul className="text-lg text-gray-800">
                                                    <a href="https://doc.fedml.ai/simulation/user_guide.html" target="_blank" rel="noreferrer" className='hover:text-[#3E4C73] py-2' ><li>- Parrot: Simulation the Real World</li></a>
                                                    <a href="https://doc.fedml.ai/cross-silo/user_guide.html" target="_blank" rel="noreferrer" className='hover:text-[#3E4C73] py-2' ><li>- Octopus: Simple connector for Data Silos</li></a>
                                                    <a href="https://doc.fedml.ai/cross-device/user_guide.html/" target="_blank" rel="noreferrer" className='hover:text-[#3E4C73] py-2' ><li>- BeeHive: Collaborative learning on Smartphones/IOT</li></a>
                                                    <a href="https://doc.fedml.ai/distributed/user_guide.html" target="_blank" rel="noreferrer" className='hover:text-[#3E4C73] py-2' ><li>- Cheeta: Speedy Training of Large Modules</li></a>
                                                    <a href="https://fedml.ai/ai-applications/" target="_blank" rel="noreferrer" className='hover:text-[#3E4C73] py-2' ><li>- All Application Ecosystem</li></a>
                                                </ul>
                                                <li>Technology</li>
                                                <ul className="text-lg text-gray-800">
                                                    <a href="https://fedml.ai/technology-overview/" target="_blank" rel="noreferrer" className='hover:text-[#3E4C73] py-2' ><li>- Overview</li></a>
                                                    <a href="https://fedml.ai/edge-ai-sdk/" target="_blank" rel="noreferrer" className='hover:text-[#3E4C73] py-2' ><li>- Edge AI/SDK</li></a>
                                                    <a href="https://fedml.ai/use-cases/" target="_blank" rel="noreferrer" className='hover:text-[#3E4C73] py-2' ><li>- UseCase</li></a>
                                                    <a href="https://doc.fedml.ai/starter/mlops_video.html" target="_blank" rel="noreferrer" className='hover:text-[#3E4C73] py-2' ><li>- MLOps Platform</li></a>
                                                    <a href="https://fedml.ai/research-papers/" target="_blank" rel="noreferrer" className='hover:text-[#3E4C73] py-2' ><li>- Publications</li></a>
                                                </ul>
                                                <a href="https://fedml.ai/enterprise-service/" target="_blank" rel="noreferrer" className='hover:text-[#3E4C73] py-2' ><li>Contact</li></a>
                                                <a href="https://fedml.ai/about-us/" target="_blank" rel="noreferrer" className='hover:text-[#3E4C73] py-2' ><li>About Us</li></a>
                                                <a href="https://fedml.ai/careers/" target="_blank" rel="noreferrer" className='hover:text-[#3E4C73] py-2' ><li>Carriers</li></a>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="opacity-25 fixed inset-0 z-40 h-screen bg-black md:hidden"></div>
                        </div>
                    ) : null}

                    <div className="hidden top-navbar w-full lg:inline-flex lg:flex-grow lg:w-auto" >
                        <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full text-base lg:items-center items-start flex flex-col lg:h-auto space-x-2 mr-12">

                            <a href='https://docs.google.com/presentation/d/1IUq2-c-Jba1vYCKABOk-paPwRMcSwTo5aYhtGdQtVJU/edit#slide=id.gd9c453428_0_16' target="_blank" rel="noreferrer"><span className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded items-center justify-center hover:text-[#3E4C73] cursor-pointer font-semibold">Introduction</span></a>

                            <span className="group lg:inline-flex lg:w-auto w-full px-3 py-2 rounded items-center justify-center hover:text-[#3E4C73] cursor-pointer font-semibold">Open Source
                                <div className="w-4 overflow-hidden inline-block mt-1">
                                    <div className=" h-3 w-3 bg-[#3E4C73] -rotate-45 transform origin-top-left"></div>
                                </div>
                                <div className="group-hover:block hidden bg-white z-50 absolute top-16 -ml-20 rounded-md p-2 shadow-xl shadow-gray-800">
                                    <ul className="text-lg text-gray-800">
                                        <a href="https://github.com/FedML-AI" target="_blank" rel="noreferrer" className='hover:text-[#3E4C73] py-2' ><li>- GitHub</li></a>
                                        <a href="https://doc.fedml.ai/" target="_blank" rel="noreferrer" className='hover:text-[#3E4C73] py-2' ><li>- Docs</li></a>
                                        <a href="https://fedml.ai/use-cases/" target="_blank" rel="noreferrer" className='hover:text-[#3E4C73] py-2' ><li>- UseCase</li></a>
                                        <a href="https://join.slack.com/t/fedml/shared_invite/zt-havwx1ee-a1xfOUrATNfc9DFqU~r34w" target="_blank" rel="noreferrer" className='hover:text-[#3E4C73] py-2' ><li>- Join the community</li></a>
                                    </ul>
                                </div>
                            </span>

                            <span className="group lg:inline-flex lg:w-auto w-full px-3 py-2 rounded items-center justify-center hover:text-[#3E4C73] cursor-pointer font-semibold">Platform
                                <div className="w-4 overflow-hidden inline-block mt-1">
                                    <div className=" h-3 w-3 bg-[#3E4C73] -rotate-45 transform origin-top-left"></div>
                                </div>
                                <div className="group-hover:block hidden bg-white z-50 absolute top-16 -ml-6 rounded-md p-2 shadow-xl shadow-gray-800">
                                    <ul className="text-lg text-gray-800">
                                        <a href="https://fedml.ai/platform-tutorial/" target="_blank" rel="noreferrer" className='hover:text-[#3E4C73] py-2' ><li>- Tutorial</li></a>
                                        <a href="http://open.fedml.ai/" target="_blank" rel="noreferrer" className='hover:text-[#3E4C73] py-2' ><li>- Login</li></a>
                                    </ul>
                                </div>
                            </span>

                            <span className="group lg:inline-flex lg:w-auto w-full px-3 py-2 rounded items-center justify-center hover:text-[#3E4C73] cursor-pointer font-semibold">Solutions
                                <div className="w-4 overflow-hidden inline-block mt-1">
                                    <div className=" h-3 w-3 bg-[#3E4C73] -rotate-45 transform origin-top-left"></div>
                                </div>
                                <div className="group-hover:block hidden bg-white z-50 absolute top-16 -ml-96 rounded-md p-2 shadow-xl shadow-gray-800">
                                    <ul className="text-lg text-gray-800">
                                        <a href="https://doc.fedml.ai/simulation/user_guide.html" target="_blank" rel="noreferrer" className='hover:text-[#3E4C73] py-2' ><li>- Parrot: Simulation the Real World</li></a>
                                        <a href="https://doc.fedml.ai/cross-silo/user_guide.html" target="_blank" rel="noreferrer" className='hover:text-[#3E4C73] py-2' ><li>- Octopus: Simple connector for Data Silos</li></a>
                                        <a href="https://doc.fedml.ai/cross-device/user_guide.html/" target="_blank" rel="noreferrer" className='hover:text-[#3E4C73] py-2' ><li>- BeeHive: Collaborative learning on Smartphones/IOT</li></a>
                                        <a href="https://doc.fedml.ai/distributed/user_guide.html" target="_blank" rel="noreferrer" className='hover:text-[#3E4C73] py-2' ><li>- Cheeta: Speedy Training of Large Modules</li></a>
                                        <a href="https://fedml.ai/ai-applications/" target="_blank" rel="noreferrer" className='hover:text-[#3E4C73] py-2' ><li>- All Application Ecosystem</li></a>
                                    </ul>
                                </div>
                            </span>

                            <span className="group lg:inline-flex lg:w-auto w-full px-3 py-2 rounded items-center justify-center hover:text-[#3E4C73] cursor-pointer font-semibold">Technology
                                <div className="w-4 overflow-hidden inline-block mt-1">
                                    <div className=" h-3 w-3 bg-[#3E4C73] -rotate-45 transform origin-top-left"></div>
                                </div>
                                <div className="group-hover:block hidden bg-white z-50 absolute top-16 -ml-20 rounded-md p-2 shadow-xl shadow-gray-800">
                                    <ul className="text-lg text-gray-800">
                                        <a href="https://fedml.ai/technology-overview/" target="_blank" rel="noreferrer" className='hover:text-[#3E4C73] py-2' ><li>- Overview</li></a>
                                        <a href="https://fedml.ai/edge-ai-sdk/" target="_blank" rel="noreferrer" className='hover:text-[#3E4C73] py-2' ><li>- Edge AI/SDK</li></a>
                                        <a href="https://fedml.ai/use-cases/" target="_blank" rel="noreferrer" className='hover:text-[#3E4C73] py-2' ><li>- UseCase</li></a>
                                        <a href="https://doc.fedml.ai/starter/mlops_video.html" target="_blank" rel="noreferrer" className='hover:text-[#3E4C73] py-2' ><li>- MLOps Platform</li></a>
                                        <a href="https://fedml.ai/research-papers/" target="_blank" rel="noreferrer" className='hover:text-[#3E4C73] py-2' ><li>- Publications</li></a>
                                    </ul>
                                </div>
                            </span>

                            <a href="https://fedml.ai/enterprise-service/" target="_blank" rel="noreferrer"><span className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded items-center justify-center hover:text-[#3E4C73] cursor-pointer font-semibold">Contact</span></a>

                            <a href="https://fedml.ai/about-us/" target="_blank" rel="noreferrer"><span className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded items-center justify-center hover:text-[#3E4C73] cursor-pointer font-semibold">About Us</span></a>

                            <a href="https://fedml.ai/careers/" target="_blank" rel="noreferrer"><span className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded items-center justify-center hover:text-[#3E4C73] cursor-pointer font-semibold">Careers</span></a>

                        </div>
                    </div>
                </nav>

            </motion.div>
        </Headroom>
    );
}
