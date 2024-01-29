import React from 'react'

const TopNavbar = () => {
  return (
    <div className="bg-pink-200 px-24">
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      {/* Sol Açılır Menü (Dil Seçeneği) */}
      <div className="relative group">
        <button className="focus:outline-none text-gray-700 hover:text-pink-600">
          Language
        </button>
        <div className="absolute hidden mt-2 bg-pink-200  rounded-lg shadow-md">
          <ul className="py-1">
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-pink-400 hover:text-white"
              >
                Türkçe
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-gray-600 hover:bg-pink-400 hover:text-white"
              >
                English
              </a>
            </li>
            {/* Diğer dil seçenekleri buraya eklenebilir */}
          </ul>
        </div>
      </div>
      {/* Orta Metin Giriş Alanı */}
      <div className="flex-grow text-center">
        <p className="hover:text-pink-600">
          <a href="tel:0312 059 08 08">CALL NOW: 0312 059 08 08</a>
        </p>
      </div>
      {/* Sağ Açılır Menü */}
      <div className="relative group">
        <button className="focus:outline-none hover:text-pink-600">
          Currency
        </button>
        <div className="absolute hidden mt-2 bg-pink-200  text-gray-700 rounded-lg shadow-md">
          <ul className="py-1">
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-gray-900 hover:bg-pink-400 hover:text-white"
              >
                EURO
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-gray-600 hover:bg-pink-400 hover:text-white"
              >
                DOLAR
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  )
}

export default TopNavbar
