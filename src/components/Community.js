import React from 'react'
import {motion} from "framer-motion"

export const fadeBottom = {
  hidden: {
      opacity: 0,
      y: 80
  },
  visible: {
      opacity: 1,
      y: -80,
      transition: {
          duration: .6,
      }
  }
}

export default function Community() {
  return (
    <motion.div variants={fadeBottom} initial="hidden" animate="visible" className='py-12'>

      <div className='grid place-items-center py-8'>
        <h1 className='px-4 text-[2.8rem] md:text-5xl text-gray-800 font-bold text-center'>Wide Adoption by AI Community</h1>
        <p className='px-4 md:px-[20rem] py-5 text-lg md:text-xl text-gray-500'>FedML open source library has been used widely in the world, including researchers and engineers from the <b><i>United States, Canada, China, Germany, Denmark, Korea, and Singapore</i></b>. Some of them are from big companies <b><i>Google, Amazon, Adobe, Cisco, and Huawei</i></b>, as well as well-known research-oriented universities such as <b><i>Stanford, Princeton, USC, HKUST, Tsinghua</i></b>, etc. They published in top-tier AI conferences including ICML, NeurIPS, ICLR, and AAAI.</p>
      </div>

      <div className='grid md:grid-cols-4 gap-5 md:gap-0 bg-gradient-to-b md:bg-gradient-to-r from-blue-500 to-purple-600 text-white py-8 px-16'>

        <div className='grid place-items-center'>
          <h1 className='text-5xl font-bold'>3</h1>
          <p className='text-center text-2xl font-semibold pt-4 md:pt-8'>Products</p>
          <p className='text-center text-xl w-[16rem] pb-4'>including open-source, edge AI SDK, and MLOps platform</p>
        </div>

        <div className='grid place-items-center'>
          <h1 className='text-5xl font-bold mt-3'>50+</h1>
          <p className='text-center text-2xl font-semibold pt-4 md:mt-[3.6rem]'>Scientific Publications</p>
          <p className='text-center text-xl w-[16rem] pb-4'>in ML/FL algorithms, security/privacy, systems, and applications</p>
        </div>

        <div className='grid place-items-center'>
          <h1 className='text-5xl font-bold'>1500+</h1>
          <p className='text-center text-2xl font-semibold pt-4 md:pt-8 w-72'>Open-source Community Users</p>
          <p className='text-center text-xl w-[16rem] pb-4'>from all over the world</p>
        </div>

        <div className='grid place-items-center'>
          <h1 className='text-5xl font-bold'>10+</h1>
          <p className='text-center text-2xl font-semibold pt-4 md:pt-2'>Industrial Collaborators</p>
          <p className='text-center text-xl w-[16rem] pb-4'>from top-tier companies</p>
        </div>

      </div>

    </motion.div>
  )
}
