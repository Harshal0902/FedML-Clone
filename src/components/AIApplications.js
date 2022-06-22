import React from 'react'
import FedNLPImg from "../assets/fed_nlp.webp"
import FedCVImg from "../assets/fed_cv.webp"
import FedGraphNN from "../assets/fed_graph.webp"
import FedIoTImg from "../assets/fed_iot.webp"

export default function AIApplications() {
  return (
    <div className='bg-gradient-to-b md:bg-gradient-to-r from-blue-500 to-purple-600 py-10 text-white grid place-items-center'>

      <h1 className='px-4 text-[2.8rem] md:text-5xl font-bold text-center'>Enabling Diverse AI Applications</h1>

      <p className='px-4 md:w-[58rem] py-5 text-lg md:text-xl text-center'>FedML Ecosystem facilitates federated learning research and productization in diverse application domains. With the foundational support from FedML Core Framework, it supports FedNLP (Natural Language Processing), FedCV (Computer Vision), FedGraphNN (Graph Neural Networks), and FedIoT (Internet of Things).</p>

      <hr className='h-[0.1rem] w-full px-4 md:w-[45rem] bg-[#6272BA] mb-8' />

      <div className='grid md:grid-cols-4 md:px-16 px-4 pb-8 gap-8 md:gap-0'>

        <div className='grid place-items-center'>
          <img src={FedNLPImg} alt="product" className="h-56 w-56" />
          <h1 className='text-4xl text-center font-bold py-4'>FedNLP</h1>
          <p className="text-xl text-center py-2 md:w-3/4">Benchmarking Federated Learning Methods for Natural Language Processing Tasks <a href="https://arxiv.org/pdf/2104.08815.pdf" target="_blank" rel="noreferrer" className='underline hover:no-underline'>[Paper]</a></p>
        </div>

        <div className='grid place-items-center'>
          <img src={FedCVImg} alt="product" className="h-56 w-56" />
          <h1 className='text-4xl text-center font-bold py-4'>FedCV</h1>
          <p className="text-xl text-center py-2 md:w-3/4">A Federated Learning Framework for Diverse Computer Vision Tasks <a href="https://arxiv.org/pdf/2111.11066.pdf" target="_blank" rel="noreferrer" className='underline hover:no-underline'>[Paper]</a></p>
        </div>

        <div className='grid place-items-center'>
          <img src={FedGraphNN} alt="product" className="h-56 w-56" />
          <h1 className='text-4xl text-center font-bold py-4'>FedGraphNN</h1>
          <p className="text-xl text-center py-2 md:w-3/4">A Federated Learning Benchmark System for Graph Neural Networks <a href="https://arxiv.org/pdf/2104.07145.pdf" target="_blank" rel="noreferrer" className='underline hover:no-underline'>[Paper]</a></p>
        </div>

        <div className='grid place-items-center'>
          <img src={FedIoTImg} alt="product" className="h-56 w-56" />
          <h1 className='text-4xl text-center font-bold py-4'>FedIoT</h1>
          <p className="text-xl text-center py-2 md:w-3/4">Federated Learning for Internet of Things <a href="https://arxiv.org/pdf/2106.07976.pdf" target="_blank" rel="noreferrer" className='underline hover:no-underline'>[Paper]</a></p>
        </div>

      </div>

    </div>
  )
}
