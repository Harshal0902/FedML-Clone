import React from 'react'
import CEOIMg from "../assets/ceo.webp"
import CTOImg from "../assets/cto.webp"

export default function Team() {
  return (
    <div className='bg-gradient-to-b md:bg-gradient-to-r from-blue-100 to-blue-300 py-10'>

      <h1 className='text-center text-4xl md:text-6xl font-bold text-gray-800'>Our team</h1>

      <p className='text-center text-xl py-6 text-gray-800 px-4'>A Strong Alliance of Industrial and Academia Experience</p>

      <div className='grid md:grid-cols-2 gap-12 md:gap-0 px-8 md:px-20 text-gray-800'>

        <div className='md:px-20 px-4'>
          <div className='grid place-items-center'>
            <img src={CEOIMg} className="w-72 h-72 rounded-full" alt="" />
          </div>
          <h1 className='text-3xl text-center py-4 font-bold'>Salman Avestimehr</h1>
          <p className='text-xl text-center py-4 font-semibold'>Co-founder and CEO</p>
          <ul className='list-disc text-lg md:text-xl text-gray-500'>
            <li>More than 10 years academic, R&D, and management experience in information theory, machine learning and AI, distributed computing, and security/privacy</li>
            <li>Dean's Professor of ECE and CS Departments at USC</li>
            <li>Director of <a href='https://trustedai.usc.edu/' target="_blank" rel="noreferrer" className='underline hover:no-underline text-black hover:text-[#3E4C73]'>USC-Amazon Center on Secure & Trusted ML</a></li>
            <li>Director of <a href='https://www.avestimehr.com/vital-lab' target="_blank" rel="noreferrer" className='underline hover:no-underline text-black hover:text-[#3E4C73]'>vITAL Research Lab</a></li>
            <li>Amazon Scholar in Alexa AI (2020-2022)</li>
            <li>PhD, UC Berkeley (2008); IEEE Fellow</li>
            <li>Numerous awards for research, including a PECASE award from the White House (President Obama) and Best Paper Award for <a href='http://fedml.ai/' target="_blank" rel="noreferrer" className='underline hover:no-underline text-black hover:text-[#3E4C73]'>FedML.ai</a></li>
            <li>Raised more than $25M in research funding from NSF, DARPA, ONR, ARO, and Industry</li>
            <li>Homepage: <a href='https://www.avestimehr.com/' target="_blank" rel="noreferrer" className='underline hover:no-underline text-black hover:text-[#3E4C73]'> https://www.avestimehr.com/</a></li>
          </ul>
        </div>

        <div className='md:px-20 px-4'>
          <div className='grid place-items-center'>
            <img src={CTOImg} className="w-72 h-72 rounded-full" alt="" />
          </div>
          <h1 className='text-3xl text-center py-4 font-bold'>Chaoyang He</h1>
          <p className='text-xl text-center py-4 font-semibold '>Co-founder and CTO</p>
          <ul className='list-disc text-lg md:text-xl text-gray-500'>
            <li>10 years R&D experience in top-tier Internet companies:
              Principal Software Engineer and Engineering Manager, Tencent, 2014-2018; Senior Software Engineer, Baidu, 2012-2014; Software Engineer, Huawei, 2011-2012; Part-time researcher with Google/Facebook/Amazon (2018-present)
            </li>
            <li>3 years experience in engineering management and development with business & production-driven strategies for Tencent Cloud, Tencent WeChat Automotive / AI in Car, Tencent Games, Tencent Maps.</li>
            <li>PhD in CS, University of Southern California</li>
            <li>Industrial-level Awards: Tencent Outstanding Staff Award, 2015-2016 WeChat MyCar, Special Award for Innovation, 2016; Baidu LBS Group Star Awards, 2013 Q3&Q4
            </li>
            <li>Homepage: <a href='https://chaoyanghe.com/' target="_blank" rel="noreferrer" className='underline hover:no-underline text-black hover:text-[#3E4C73]'>https://chaoyanghe.com/</a></li>
          </ul>
        </div>

      </div>

    </div>
  )
}
