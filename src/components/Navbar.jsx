import React, { useState } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className='mt-3 fixed top-0 left-0 w-full z-10'>
        <div className='container mx-auto flex items-center justify-between'>
            <div className='logo'>
            <img
                src="https://img2.pic.in.th/pic/unnamed__1_-removebg-preview541b25be2d320ac4.png"
                alt="Logo"
                className="w-32 h-32 mx"
            />
            </div>




            <div className="flex items-center gap-5">
                <a href="https://www.instagram.com/natzu_zz/" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-instagram text-gray-400 text-4xl"></i>
                </a>
                <a href="https://github.com/NatzuSK" target="_blank" rel="noopener noreferrer">
                    <i class="fa-brands fa-github text-gray-400 text-4xl"></i>
                </a>
            </div>
        </div>
        
    </nav>
  )
}

export default Navbar
