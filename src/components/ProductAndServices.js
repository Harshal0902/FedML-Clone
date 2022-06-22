import React from 'react'
import OpenSourceImg from "../assets/open_source.webp"
import EdgeImg from "../assets/edge_ai.webp"
import MlOpsImg from "../assets/mlops.webp"
import MLImg from "../assets/ml.webp"

export default function ProductAndServices() {
  return (
    <div className='pb-8 grid place-items-center'>

      <h1 className='px-4 text-[2.8rem] md:text-5xl text-gray-800 font-bold text-center'>Our Product and Services</h1>
      <p className='px-4 md:w-[45rem] py-5 text-lg md:text-xl text-gray-500'>A Versatile Edge-Cloud Ecosystem for Federated Learning/Analytics at Scale Smoothly transplant from in-lab simulation to real-world system deployment</p>

      <hr className='h-[0.1rem] w-full px-4 md:w-[45rem] bg-gray-400 mb-8' />


      <div className='grid md:grid-cols-3 gap-8 py-6 text-gray-800 px-4 md:px-24'>

        <div className='grid place-items-center'>
          <h1 className='text-5xl font-bold'>Open Source</h1>
          <p className='text-center text-2xl py-8'>An international community for cutting-edge algorithms</p>
          <img src={OpenSourceImg} alt="product" className="h-56 w-56" />
        </div>

        <div className='grid place-items-center'>
          <h1 className='text-5xl font-bold'>Edge AI SDK</h1>
          <p className='text-center text-2xl py-8'>A lightweight and cross-platform design for secure edge training</p>
          <img src={EdgeImg} alt="product" className="h-56 w-[20rem]" />
        </div>

        <div className='grid place-items-center'>
          <h1 className='text-5xl font-bold'>MLOp's Clous</h1>
          <p className='text-center text-2xl py-8'>A user-friendly cloud service for real-world collaboration and deployment</p>
          <img src={MlOpsImg} alt="product" className="h-56 w-[20rem]" />
        </div>

      </div>

      <img src={MLImg} alt="product" className="h-[16rem] w-full md:w-[60rem] md:h-[30rem] p-4 md:px-24 md:py-8" />
      <hr className='h-[0.1rem] w-full px-4 md:w-[45rem] bg-gray-400 my-8' />
      <h1 className='px-4 md:px-44 text-[2.8rem] md:text-5xl text-gray-800 font-bold text-center'>Core Technology is Backed by Years of Cutting-edge Research
      </h1>
      <p className='px-4 md:w-[58rem] py-5 text-lg md:text-xl text-gray-500'>Our core technology is backed by years of cutting-edge research represented in <a href='https://fedml.ai/research-papers/' target="_blank" rel="noreferrer" className='underline hover:no-underline text-blue-700'>50+ publications</a> in ML/FL Algorithms, Security/Privacy, Systems, and Applications, as well as 10 years of industrial experience in Distributed Systems, Cloud Computing, and Mobile/IoT Systems.</p>

    </div>
  )
}
