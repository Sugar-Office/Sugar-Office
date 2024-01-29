import React from 'react'
import TopNavbar from './TopNavbar'

const Navbar = () => {
  return (
    <div>
      <>
  <TopNavbar/>
  <hr className="border-gray-300 dark:border-gray-700" />
  <div className="flex-grow">
    <nav className="bg-pink-100 border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 ">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <picture>
          <img
            src="https://sekerofisi.com/uploads/p/o/Cp0Dlc3Rg2xo.PNG"
            className="h-24"
            alt="Sugar-office Logo"
          />
          </picture>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-200  rounded-lg md:hidden hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        {/* Add the search button below */}
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="px-12 py-2 bg-pink-200 border border-gray-200 rounded-md ml-2 rounded-r-md focus:outline-none focus:ring focus:border-white dark:bg-gray-800 dark:border-gray-700 dark:text-white"
          />
          <button className="inline-flex items-center p-3 justify-center bg-pink-500 text-sm text-white rounded-r-3xl hover:bg-pink-400 ">
            <span className="sr-only">Open search</span>
            <svg
              className="w-5 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6M9 17c-5 0-7-6-7-6s2-6 7-6 7 6 7 6-2 6-7 6z"
              />
            </svg>
          </button>
        </div>
        {/* End of search button */}
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-3 md:p-0 mt-3   bg-pink-100 md:flex-row md:space-x-6 rtl:space-x-reverse ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="2em"
              viewBox="0 0 448 512"
            >
              <path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z" />
            </svg>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-pink-400 md:p-0 dark:text-white md:dark:hover:text-pink-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                aria-current="page"
              >
                Account
              </a>
              <a
                href="#"
                className="block py-2 px-3 text-white bg-pink-400 rounded md:bg-transparent md:text-pink-600 md:p-0 dark:text-white md:dark:text-pink-400"
                aria-current="page"
              >
                Login / Register
              </a>
            </li>
            <div className="flex ">
              <svg
                className=""
                xmlns="http://www.w3.org/2000/svg"
                height="2em"
                viewBox="0 0 512 512"
              >
                <path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" />
              </svg>
              <sup className="bg-red-600 p-1 text-center h-5 w-5 border rounded-full">
                5
              </sup>
            </div>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-pink-400 md:p-0 dark:text-white md:dark:hover:text-pink-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Wishlist
              </a>
              <a
                href="#"
                className="block py-2 px-3 text-white bg-pink-400 rounded md:bg-transparent md:text-pink-600 md:p-0 dark:text-white md:dark:text-pink-400"
                aria-current="page"
              >
                Edit Your Wistlist
              </a>
            </li>
            <div className="flex ">
              <svg
                className="bg-pink-100 p-2 border rounded-full border-pink-600"
                xmlns="http://www.w3.org/2000/svg"
                height="2em"
                viewBox="0 0 512 512"
              >
                <path d="M32 96l320 0V32c0-12.9 7.8-24.6 19.8-29.6s25.7-2.2 34.9 6.9l96 96c6 6 9.4 14.1 9.4 22.6s-3.4 16.6-9.4 22.6l-96 96c-9.2 9.2-22.9 11.9-34.9 6.9s-19.8-16.6-19.8-29.6V160L32 160c-17.7 0-32-14.3-32-32s14.3-32 32-32zM480 352c17.7 0 32 14.3 32 32s-14.3 32-32 32H160v64c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-96-96c-6-6-9.4-14.1-9.4-22.6s3.4-16.6 9.4-22.6l96-96c9.2-9.2 22.9-11.9 34.9-6.9s19.8 16.6 19.8 29.6l0 64H480z" />
              </svg>
              <sup className="bg-red-600 p-1 text-center h-5 w-5 border rounded-full">
                5
              </sup>
            </div>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-pink-400 md:p-0 dark:text-white md:dark:hover:text-pink-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Compare
              </a>
              <a
                href="#"
                className="block py-2 px-3 text-white bg-pink-400 rounded md:bg-transparent md:text-pink-600 md:p-0 dark:text-white md:dark:text-pink-400"
                aria-current="page"
              >
                Product Conparison
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
  <hr className="border-gray-300 dark:border-gray-700" />
  {/*-- Multilevel Menu --*/}
  <div className=" relative group-multilevel bg-pink-200">
    <nav className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 bg-pink-200">
      <div className=" space-x-4 flex items-center z-10">
        <div className="group relative inline-block">
          <button className="text-gray-700 rounded group-hover:bg-purple-300 hover:text-black">
            CATOGORIES
          </button>
          <div className="hidden  group-hover:block absolute bg-purple-300 bg-opacity-70 border-pink-700  p-3 space-y-2 z-10">
            <div className="grid grid-cols-3 gap-4">
              <div>
                <a
                  href="#"
                  className="text-black hover:bg-pink-400 hover:text-white p-1 rounded"
                >
                  Link1
                </a>
                <a
                  href="#"
                  className="text-black hover:bg-pink-400 hover:text-white p-1 rounded"
                >
                  Link2
                </a>
                <a
                  href="#"
                  className="text-black hover:bg-pink-400 hover:text-white p-1 rounded"
                >
                  Link3
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="group relative inline-block">
          <button className="text-gray-700 rounded group-hover:bg-purple-300 hover:text-black">
            MEGAMENU
          </button>
          <div className="hidden group-hover:block absolute bg-purple-300 bg-opacity-70 border-pink-700 p-2 space-y-2 z-10">
            <div className="grid grid-cols-3 gap-4">
              <div>
                <a
                  href="#"
                  className="text-black hover:bg-pink-400 hover:text-white p-1 rounded"
                >
                  Link1
                </a>
                <a
                  href="#"
                  className="text-black hover:bg-pink-400 hover:text-white p-1 rounded"
                >
                  Link2
                </a>
                <a
                  href="#"
                  className="text-black hover:bg-pink-400 hover:text-white p-1 rounded"
                >
                  Link3
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="group relative inline-block">
          <button className="text-gray-700 rounded group-hover:bg-purple-300 hover:text-black">
            MULTILEVEL
          </button>
          <div className="hidden group-hover:block absolute bg-purple-300 bg-opacity-70 border-pink-700 p-2 space-y-2 z-10">
            <a
              href="#"
              className="text-black hover:bg-pink-400 hover:text-white p-1 rounded"
            >
              Link1
            </a>
            <a
              href="#"
              className="text-black hover:bg-pink-400 hover:text-white p-1 rounded"
            >
              Link2
            </a>
          </div>
        </div>
        <div className="group relative inline-block">
          <button className="text-gray-700 rounded group-hover:bg-purple-300 hover:text-black">
            BRANDS
          </button>
          <div className="hidden group-hover:block absolute bg-purple-300 bg-opacity-70 border-pink-700 p-2 space-y-2 z-10">
            <a
              href="#"
              className="text-black hover:bg-pink-400 hover:text-white p-1 rounded"
            >
              Link1
            </a>
            <a
              href="#"
              className="text-black hover:bg-pink-400 hover:text-white p-1 rounded"
            >
              Link2
            </a>
          </div>
        </div>
        <div className="group relative inline-block">
          <button className="text-gray-700 rounded group-hover:bg-purple-300 hover:text-black">
            SPECIALS
          </button>
          <div className="hidden group-hover:block absolute bg-purple-300 bg-opacity-70 border-pink-700 p-2 space-y-2 z-10">
            <a
              href="#"
              className="text-black hover:bg-pink-400 hover:text-white p-1 rounded"
            >
              Link1
            </a>
            <a
              href="#"
              className="text-black hover:bg-pink-400 hover:text-white p-1 rounded"
            >
              Link2
            </a>
          </div>
        </div>
      </div>
      {/* Alışveriş Sepeti İkonu ve Butonu */}
      <div
        className="group relative  space-x-3 flex items-center justify-center p-1 z-10"
        id="cart-container"
      >
        <i className="text-base">5 item(s) - $8,567.00</i>
        <svg
          className="bg-pink-100 p-2 border rounded-full border-pink-600"
          xmlns="http://www.w3.org/2000/svg"
          height="3em"
          viewBox="0 0 512 512"
        >
          <path d="M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96H64C28.7 96 0 124.7 0 160v96H192 320 512V160c0-35.3-28.7-64-64-64H384V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zM512 288H320v32c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32V288H0V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V288z" />
        </svg>
        <button
          className="text-gray-700 rounded group-hover:bg-purple-300 hover:text-black"
          id="cart-button"
        >
          Sepetim
        </button>
        <div
          className=" hidden group-hover:block absolute mr-3 bg-purple-300 bg-opacity-70 border-pink-700 top-full mt-0 z-10"
          id="cart-dropdown"
        >
          <div className="grid grid-cols-3 gap-4 ">
            <div className="">
              <a
                href="#"
                className="text-black hover:bg-pink-400 hover:text-white  rounded"
              >
                sepet 1
              </a>
              <a
                href="#"
                className="text-black hover:bg-pink-400 hover:text-white  rounded"
              >
                sepet 2
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</>

    </div>
  )
}

export default Navbar
