import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="relative w-full bg-white">
  <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
    <NavLink to={"/"} className="inline-flex items-center space-x-2">
      <span className='overflow-hidden w-10'>
        <img src="https://img.freepik.com/free-vector/flat-design-crypto-mining-logo-template_23-2149409054.jpg?t=st=1698559799~exp=1698560399~hmac=02efc8967937811259bbfea12251e2ebe0e0d7762de1bfd029b10bf6577ef238" alt="this application logo" />
      </span>
      <span className="font-bold">DeBank</span>
    </NavLink>

    <div className="lg:block">
      <ul className="inline-flex space-x-8">
        <li>
          <NavLink
            to={""}
            className={({isActive})=> `text-sm font-semibold  ${isActive ? "text-blue-700" : "text-gray-800"} hover:text-blue-900`}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/stack"}
            className={({isActive})=> `text-sm font-semibold  ${isActive ? "text-blue-700" : "text-gray-800"} hover:text-blue-900`}
          >
            Stack
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"withdraw"}
            className={({isActive})=> `text-sm font-semibold  ${isActive ? "text-blue-700" : "text-gray-800"} hover:text-blue-900`}
          >
            Withdraw
          </NavLink>
        </li>
      </ul>
    </div>

    <div className=" lg:block">
      <div className=' flex justify-between items-center gap-3'>
      <button
        type="button"
        className="rounded-md order-2 bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
        connect wallet
      </button>
      <p className='order-1'>0x000000.....</p>
      </div>
    </div>

    <div className="lg:hidden">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="h-6 w-6 cursor-pointer"
      >
        <line x1="4" y1="12" x2="20" y2="12"></line>
        <line x1="4" y1="6" x2="20" y2="6"></line>
        <line x1="4" y1="18" x2="20" y2="18"></line>
      </svg>
    </div>
  </div>
</div>

  )
}

export default Navbar