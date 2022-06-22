import React from 'react'
import LoveImg from "../assets/love.png"

export default function Footer() {
    return (
        <div className="flex bg-gradient-to-b md:bg-gradient-to-r from-blue-500 to-purple-600 text-white justify-center text-xl py-3 items-center w-full mx-auto z-50">
            &lt;/&gt; with <img className="w-6 m-1" src={LoveImg} alt="Love" />, ☕ and 🧠 by&nbsp;<a className="underline" href="https://harshal09.vercel.app/" target="_blank" rel="noreferrer">Harshal Raikwar</a>
        </div>
    )
}
