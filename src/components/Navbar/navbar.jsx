import React from 'react'
import image1 from '../../assets/ashoka.jpg'

const Navbar = () => {
  return (
    <div>
        <header className="text-emarald-400 bg-amber-500 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
      {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg> */}
      <img style={{height: '40px', marginLeft: '10px'}} src="https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg " alt="123" />
      <span className="ml-3 text-xl">SAHAYATA</span>
    </a>
    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
      <a href='/' className="mr-5 hover:text-white">Home</a>
      <a href='/search' className="mr-5 hover:text-white">Search</a>
      <a href='/dashboard' className="mr-5 hover:text-white">Dashboard</a>
      <a href='/contact' className="mr-5 hover:text-white">Contact Us</a>
      <a href='/admin' className="mr-5 hover:text-white">Registration</a>
    </nav>
  </div>
</header>
    </div>
  )
}

export default Navbar