import React from 'react'
import { motion } from 'framer-motion'

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

export default function Hero() {
  return (
    <motion.div variants={fadeBottom} initial="hidden" animate="visible">

      <div className='bg-hero-pattern grid md:grid-cols-2 min-h-screen px-4 md:px-[5rem] pb-8 pt-56'>

        <div className='text-white'>

          <h1 className='text-[1.6rem] font-bold'>Social, Secure, Scalable, and Efficient</h1>

          <h1 className='py-5 text-4xl font-bold md:mr-12'>The community building open and collaborative AI anywhere at any scale</h1>

          <p className='text-xl font-[400] py-5'>An end-to-end machine learning ecosystem for people or organizations to transform their data to intelligence with minimum effort.</p>

          <p className='text-xl font-[400] py-5'>Currently, we start from building the AI platform with</p>

          <ul className='list-disc text-xl font-[400] ml-5 py-3'>
            <li>Cutting-edge federated learning algorithms backed by years of <b>Open Source</b>-oriented research (50+ scientific publications, 900+ early slack users, and 300+ GitHub forks)</li>
            <li>Lightweight and cross-platform Edge AI SDK for GPUs, smartphones, and IoTs</li>
            <li>User-friendly <b>MLOps</b> platform to simplify collaboration and real-world deployment</li>
            <li>Platform-supported vertical <b>Solutions</b> <i>across a broad range of industries</i></li>
          </ul>

          <div className='flex flex-row flex-wrap space-x-2 space-y-2 py-5'>

            <a href='https://fedml.ai/platform-tutorial/' target="_blank" rel="noreferrer"><button className='uppercase text-base md:text-lg bg-gradient-to-r from-yellow-500 to-orange-600 px-4 py-2 rounded-full font-bold hover:opacity-80 mt-2'>Live demo</button></a>

            <a href='http://open.fedml.ai/#/login?isRegister=true' target="_blank" rel="noreferrer"><button className='uppercase text-base md:text-lg bg-gray-600 px-4 py-2 rounded-full font-bold hover:opacity-80'>Sign Up</button></a>

            <a href='https://join.slack.com/t/fedml/shared_invite/zt-havwx1ee-a1xfOUrATNfc9DFqU~r34w' target="_blank" rel="noreferrer"><button className='uppercase text-base md:text-lg bg-gray-600 px-4 py-2 rounded-full font-bold hover:opacity-80 -ml-2 md:ml-0'>Join our slack</button></a>

            <a href='https://doc.fedml.ai/' target="_blank" rel="noreferrer"><button className='uppercase text-base md:text-lg bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-2 rounded-full font-bold hover:opacity-80'>Docunmantation</button></a>

          </div>
        </div>

        <div className='py-3 px-4'>
          <iframe className='w-full h-52 md:h-96' src="https://www.youtube.com/embed/Xgm0XEaMlVQ" title="hero_yt" />
        </div>

      </div>

    </motion.div>
  )
}
