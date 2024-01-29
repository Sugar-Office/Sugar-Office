import React from 'react'

const Module21 = () => {
  return (
    <>
  {/*------- Modul-21 -----*/}
  <div className="relative bg-gray-100 flex items-center justify-center ">
    <div
      id="featured-container"
      className=" relative w-9/12 bg-white "
      data-carousel="static"
    >
      <div
        id="featured-title"
        className=" modtitle text-2xl font-bold rounded-md leading-6 uppercase  p-5 bg-gray-200"
        style={{ height: "150 px" }}
      >
        <h3 className="">Populer Puroduct</h3>
      </div>
      <div
        className="product-layout w-full grid grid-rows-2 grid-cols-5 gap-4  mb-0 "
        style={{ height: 750 }}
      >
        <div
          className="product-thumb shadow-md p-1"
          onMouseOver="showButtons(this)"
          onMouseOut="hideButtons(this)"
        >
          <div className="transition-card">
            <div className="image h-64">
              <div className="quick-view-icon  items-center left-12 bottom-20 cursor-pointer opacity-0 transition-opacity duration-300 absolute">
                <i className="fas fa-eye text-gray-600" />
              </div>
              <a href="https://opencart.dostguru.com/AS01/autospeed_02/index.php?route=product/product&product_id=43">
                <img
                  src="https://opencart.dostguru.com/AS01/autospeed_02/image/cache/catalog/product/15-288x288.jpg"
                  alt="Fashion Design Two Color Car Wheel"
                  title="Fashion Design Two Color Car Wheel"
                  className="img-responsive center-block "
                />
              </a>
              {/* Pixel Images Start */}
              <a
                href="https://opencart.dostguru.com/AS01/autospeed_02/index.php?route=product/product&product_id=43"
                className="hidden group-hover:inline"
              >
                <img
                  src="https://opencart.dostguru.com/AS01/autospeed_02/image/cache/catalog/product/3-288x288.jpg"
                  className="img-responsive second-img "
                  alt="hover image"
                />
              </a>
              {/* End */}
            </div>
            <div className="txt-contaniar mb-1 mt-2">
              <div className="bran">
                <span>
                  <a
                    href="https://opencart.dostguru.com/AS01/autospeed_02/index.php?route=product/manufacturer/info&manufacturer_id=8"
                    className="textdeb"
                  >
                    car
                  </a>
                </span>
              </div>
              <h4 className="protitle font-bold text-gray-900 hover:text-yellow-400 text-base transfor">
                <a href="https://opencart.dostguru.com/AS01/autospeed_02/index.php?route=product/product&product_id=43">
                  Fashion Design Car Wheel
                </a>
              </h4>
              <div className="rating flex justify-start left-0">
                <span className="fa fa-stack">
                  <i className="fa fa-star fa-stack-1x text-yellow-400 " />
                </span>
                <span className="fa fa-stack">
                  <i className="fa fa-star fa-stack-1x text-yellow-400" />
                </span>
                <span className="fa fa-stack">
                  <i className="fa fa-star fa-stack-1x text-yellow-400" />
                </span>
                <span className="fa fa-stack">
                  <i className="fa fa-star fa-stack-1x text-yellow-400" />
                </span>
              </div>
              <div className="rat-pri">
                <div className="price text-base font-semibold center-block ">
                  $122.00
                </div>
              </div>
              <div
                className="txt-button-group flex justify-start gap-1 p-4 w-72  group-hover:inline"
                style={{ display: "none" }}
              >
                <button
                  type="button"
                  className="text-black bg-gray-200 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-3 py-3 text-center w-36"
                >
                  <span>+</span> Add To Card
                </button>
                <div className="bg-gray-200 rounded-full w-10 px-3 py-3 text-center hover:bg-yellow-500">
                  <i className="fa-regular fa-heart text-black fa-md" />
                </div>
                <div className="bg-gray-200 rounded-full w-10 px-3 py-3  text-center  hover:bg-yellow-500">
                  <i className="fa-solid fa-code-compare text-black fa-md" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="product-thumb shadow-md p-1"
          onMouseOver="showButtons(this)"
          onMouseOut="hideButtons(this)"
        >
          <div className="transition-card">
            <div className="image h-64">
              <div className="quick-view-icon absolute items-center left-12 bottom-20 cursor-pointer opacity-0 transition-opacity duration-300">
                <i className="fas fa-eye text-gray-600" />
              </div>
              <a href="https://opencart.dostguru.com/AS01/autospeed_02/index.php?route=product/product;product_id=28">
                <img
                  src="https://opencart.dostguru.com/AS01/autospeed_02/image/cache/catalog/product/26-288x288.jpg"
                  alt="Alternator Engine Car"
                  title="Alternator Engine Car"
                  className="img-responsive center-block"
                />
              </a>
              {/* Pixel Images Start */}
              <a href="https://opencart.dostguru.com/AS01/autospeed_02/index.php?route=product/product;product_id=28">
                <img
                  src="https://opencart.dostguru.com/AS01/autospeed_02/image/cache/catalog/product/20-288x288.jpg"
                  className="img-responsive second-img"
                  alt="hover image"
                />
              </a>
              {/* End */}
            </div>
            <div className="txt-contaniar mb-1 mt-2">
              <div className="bran">
                <span>
                  <a
                    href="https://opencart.dostguru.com/AS01/autospeed_02/index.php?route=product/manufacturer/info;manufacturer_id=5"
                    className="textdeb"
                  >
                    HTC
                  </a>
                </span>
              </div>
              <h4 className="protitle font-bold text-gray-900 hover:text-yellow-400 text-base transfor">
                <a href="https://opencart.dostguru.com/AS01/autospeed_02/index.php?route=product/product;product_id=28">
                  Alternator Engine Car
                </a>
              </h4>
              <div className="rating flex justify-start  left-0">
                <span className="fa fa-stack">
                  <i className="fa fa-star fa-stack-1x text-yellow-400 " />
                </span>
                <span className="fa fa-stack">
                  <i className="fa fa-star fa-stack-1x text-yellow-400" />
                </span>
                <span className="fa fa-stack">
                  <i className="fa fa-star fa-stack-1x text-yellow-400" />
                </span>
                <span className="fa fa-stack">
                  <i className="fa fa-star fa-stack-1x text-gray-400" />
                </span>
              </div>
              <div className="rat-pri">
                <div className="price text-base font-semibold">
                  <span className="price-new">$38.00</span>{" "}
                  <span className="price-old">$122.00</span>
                  <span className="sale">70%</span>
                </div>
              </div>
              <div className="clearfix" />
              <div className="txt-button-group flex  justify-start gap-1 p-4 w-72 ">
                <button
                  type="button"
                  className="text-black bg-gray-200 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-3 py-3 text-center w-36"
                >
                  <span>+</span> Add To Card
                </button>
                <div className="bg-gray-200 rounded-full w-10 px-3 py-3 text-center hover:bg-yellow-500">
                  <i className="fa-regular fa-heart text-black fa-md" />
                </div>
                <div className="bg-gray-200 rounded-full w-10 px-3 py-3  text-center  hover:bg-yellow-500">
                  <i className="fa-solid fa-code-compare text-black fa-md" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="product-thumb shadow-md p-1"
          onMouseOver="showButtons(this)"
          onMouseOut="hideButtons(this)"
        >
          <div className="transition-card">
            <div className="image h-64">
              <div className="quick-view-icon absolute items-center left-12 bottom-20 cursor-pointer opacity-0 transition-opacity duration-300">
                <i className="fas fa-eye text-gray-600" />
              </div>
              <a href="https://opencart.dostguru.com/AS01/autospeed_02/index.php?route=product/product;product_id=34">
                <img
                  src="https://opencart.dostguru.com/AS01/autospeed_02/image/cache/catalog/product/23-288x288.jpg"
                  alt="Car Body Parts"
                  title="Car Body Parts"
                  className="img-responsive center-block"
                />
              </a>
              {/* Pixel Images Start */}
              <a href="https://opencart.dostguru.com/AS01/autospeed_02/index.php?route=product/product;product_id=34">
                <img
                  src="https://opencart.dostguru.com/AS01/autospeed_02/image/cache/catalog/product/4-288x288.jpg"
                  className="img-responsive second-img"
                  alt="hover image"
                />
              </a>
              {/* End */}
            </div>
            <div className="txt-contaniar mb-1 mt-2">
              <div className="bran">
                <span>
                  <a
                    href="https://opencart.dostguru.com/AS01/autospeed_02/index.php?route=product/manufacturer/info;manufacturer_id=8"
                    className="textdeb"
                  >
                    car
                  </a>
                </span>
              </div>
              <h4 className="protitle font-bold text-gray-900 hover:text-yellow-400 text-base transfor">
                <a href="https://opencart.dostguru.com/AS01/autospeed_02/index.php?route=product/product;product_id=34">
                  Car Body Parts
                </a>
              </h4>
              <div className="rating flex justify-start left-0">
                <span className="fa fa-stack">
                  <i className="fa fa-star fa-stack-1x text-yellow-400 " />
                </span>
                <span className="fa fa-stack">
                  <i className="fa fa-star fa-stack-1x text-yellow-400" />
                </span>
                <span className="fa fa-stack">
                  <i className="fa fa-star fa-stack-1x text-yellow-400" />
                </span>
                <span className="fa fa-stack">
                  <i className="fa fa-star fa-stack-1x text-yellow-400" />
                </span>
              </div>
              <div className="rat-pri">
                <div className="price text-base font-semibold">$122.00</div>
              </div>
              <div className="txt-button-group flex  justify-start gap-1 p-4 w-72 ">
                <button
                  type="button"
                  className="text-black bg-gray-200 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-3 py-3 text-center w-36"
                >
                  <span>+</span> Add To Card
                </button>
                <div className="bg-gray-200 rounded-full w-10 px-3 py-3 text-center hover:bg-yellow-500">
                  <i className="fa-regular fa-heart text-black fa-md" />
                </div>
                <div className="bg-gray-200 rounded-full w-10 px-3 py-3  text-center  hover:bg-yellow-500">
                  <i className="fa-solid fa-code-compare text-black fa-md" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="product-thumb shadow-md p-1"
          onMouseOver="showButtons(this)"
          onMouseOut="hideButtons(this)"
        >
          <div className="transition-card">
            <div className="image h-64">
              <div className="quick-view-icon absolute items-center left-12 bottom-20 cursor-pointer opacity-0 transition-opacity duration-300">
                <i className="fas fa-eye text-gray-600" />
              </div>
              <a href="https://opencart.dostguru.com/AS01/autospeed_02/index.php?route=product/product&product_id=48">
                <img
                  src="https://opencart.dostguru.com/AS01/autospeed_02/image/cache/catalog/product/11-288x288.jpg"
                  alt="Car Steering Wheel Cover"
                  title="Car Steering Wheel Cover"
                  className="img-responsive center-block"
                />
              </a>
              {/* Pixel Images Start */}
              <a href="https://opencart.dostguru.com/AS01/autospeed_02/index.php?route=product/product&product_id=48">
                <img
                  src="https://opencart.dostguru.com/AS01/autospeed_02/image/cache/catalog/product/12-288x288.jpg"
                  className="img-responsive second-img"
                  alt="hover image"
                />
              </a>
              {/* End */}
            </div>
            <div className="txt-contaniar mb-1 mt-2">
              <div className="bran">
                <span>
                  <a
                    href="https://opencart.dostguru.com/AS01/autospeed_02/index.php?route=product/manufacturer/info&manufacturer_id=8"
                    className="textdeb"
                  >
                    car
                  </a>
                </span>
              </div>
              <h4 className="protitle font-bold text-gray-900 hover:text-yellow-400 text-base transfor">
                <a href="https://opencart.dostguru.com/AS01/autospeed_02/index.php?route=product/product&product_id=48">
                  Car Steering Wheel Cover
                </a>
              </h4>
              <div className="rating flex justify-start left-0">
                <span className="fa fa-stack">
                  <i className="fa fa-star fa-stack-1x text-yellow-400 " />
                </span>
                <span className="fa fa-stack">
                  <i className="fa fa-star fa-stack-1x text-yellow-400" />
                </span>
                <span className="fa fa-stack">
                  <i className="fa fa-star fa-stack-1x text-yellow-400" />
                </span>
                <span className="fa fa-stack">
                  <i className="fa fa-star fa-stack-1x text-yellow-400" />
                </span>
              </div>
              <div className="rat-pri">
                <div className="price text-base font-semibold">$122.00</div>
              </div>
              <div className="txt-button-group flex  justify-start gap-1 p-4 w-72 ">
                <button
                  type="button"
                  className="text-black bg-gray-200 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-3 py-3 text-center w-36"
                >
                  <span>+</span> Add To Card
                </button>
                <div className="bg-gray-200 rounded-full w-10 px-3 py-3 text-center hover:bg-yellow-500">
                  <i className="fa-regular fa-heart text-black fa-md" />
                </div>
                <div className="bg-gray-200 rounded-full w-10 px-3 py-3  text-center  hover:bg-yellow-500">
                  <i className="fa-solid fa-code-compare text-black fa-md" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="product-thumb shadow-md p-1"
          onMouseOver="showButtons(this)"
          onMouseOut="hideButtons(this)"
        >
          <div className="transition-card">
            <div className="image h-64">
              <div className="quick-view-icon absolute items-center bottom-20 cursor-pointer opacity-0 transition-opacity duration-300">
                <i className="fas fa-eye text-gray-600" />
              </div>
              <a href="https://opencart.dostguru.com/AS01/autospeed_02/index.php?route=product/product&product_id=49">
                <img
                  src="https://opencart.dostguru.com/AS01/autospeed_02/image/cache/catalog/product/30-288x288.jpg"
                  alt="Mechanic Repairman Inspecting Car Stock"
                  title="Mechanic Repairman Inspecting Car Stock"
                  className="img-responsive center-block"
                />
              </a>
              {/* Pixel Images Start */}
              <a href="https://opencart.dostguru.com/AS01/autospeed_02/index.php?route=product/product&product_id=49">
                <img
                  src="https://opencart.dostguru.com/AS01/autospeed_02/image/cache/catalog/product/19-288x288.jpg"
                  className="img-responsive second-img"
                  alt="hover image"
                />
              </a>
              {/* End */}
            </div>
            <div className="txt-contaniar mb-1 mt-2">
              <div className="bran">
                <span>
                  <a
                    href="https://opencart.dostguru.com/AS01/autospeed_02/index.php?route=product/manufacturer/info&manufacturer_id=7"
                    className="textdeb"
                  >
                    oil
                  </a>
                </span>
              </div>
              <h4 className="protitle font-bold text-gray-900 hover:text-yellow-400 text-base transfor">
                <a href="https://opencart.dostguru.com/AS01/autospeed_02/index.php?route=product/product&product_id=49">
                  Mechanic Inspecting Car Stock
                </a>
              </h4>
              <div className="rating flex justify-start left-0">
                <span className="fa fa-stack">
                  <i className="fa fa-star fa-stack-1x text-yellow-400 " />
                </span>
                <span className="fa fa-stack">
                  <i className="fa fa-star fa-stack-1x text-yellow-400" />
                </span>
                <span className="fa fa-stack">
                  <i className="fa fa-star fa-stack-1x text-yellow-400" />
                </span>
                <span className="fa fa-stack">
                  <i className="fa fa-star fa-stack-1x text-yellow-400" />
                </span>
              </div>
              <div className="rat-pri">
                <div className="price text-base font-semibold">$241.00</div>
              </div>
              <div className="txt-button-group flex  justify-start gap-1 p-4 w-72 ">
                <button
                  type="button"
                  className="text-black bg-gray-200 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-3 py-3 text-center w-36"
                >
                  <span>+</span> Add To Card
                </button>
                <div className="bg-gray-200 rounded-full w-10 px-3 py-3 text-center hover:bg-yellow-500">
                  <i className="fa-regular fa-heart text-black fa-md" />
                </div>
                <div className="bg-gray-200 rounded-full w-10 px-3 py-3  text-center  hover:bg-yellow-500">
                  <i className="fa-solid fa-code-compare text-black fa-md" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="product-thumb shadow-md p-1"
          onMouseOver="showButtons(this)"
          onMouseOut="hideButtons(this)"
        >
          <div className="transition-card">
            <div className="image h-64">
              <div className="quick-view-icon absolute items-center bottom-20 cursor-pointer opacity-0 transition-opacity duration-300">
                <i className="fas fa-eye text-gray-600" />
              </div>
              <a href="https://opencart.dostguru.com/AS01/autospeed_02/index.php?route=product/product&product_id=30">
                <img
                  src="https://opencart.dostguru.com/AS01/autospeed_02/image/cache/catalog/product/27-288x288.jpg"
                  alt="Car Repair Archives - Right to Repair Cars"
                  title="Car Repair Archives - Right to Repair Cars"
                  className="img-responsive center-block"
                />
              </a>
              {/* Pixel Images Start */}
              <a href="https://opencart.dostguru.com/AS01/autospeed_02/index.php?route=product/product&product_id=30">
                <img
                  src="https://opencart.dostguru.com/AS01/autospeed_02/image/cache/catalog/product/12-288x288.jpg"
                  className="img-responsive second-img"
                  alt="hover image"
                />
              </a>
              {/* End */}
            </div>
            <div className="txt-contaniar mb-1 mt-2">
              <div className="bran">
                <span>
                  <a
                    href="https://opencart.dostguru.com/AS01/autospeed_02/index.php?route=product/manufacturer/info&manufacturer_id=9"
                    className="textdeb"
                  >
                    Canon
                  </a>
                </span>
              </div>
              <h4 className="protitle font-bold text-gray-900 hover:text-yellow-400 text-base transfor">
                <a href="https://opencart.dostguru.com/AS01/autospeed_02/index.php?route=product/product&product_id=30">
                  Car Repair Archives
                </a>
              </h4>
              <div className="rating flex justify-start  left-0">
                <span className="fa fa-stack">
                  <i className="fa fa-star fa-stack-1x text-yellow-400 " />
                </span>
                <span className="fa fa-stack">
                  <i className="fa fa-star fa-stack-1x text-yellow-400" />
                </span>
                <span className="fa fa-stack">
                  <i className="fa fa-star fa-stack-1x text-yellow-400" />
                </span>
                <span className="fa fa-stack">
                  <i className="fa fa-star fa-stack-1x text-yellow-400" />
                </span>
              </div>
              <div className="rat-pri">
                <div className="price text-lg font-semibold">$136.00</div>
              </div>
              <div className="txt-button-group flex  justify-start gap-1 p-4 w-72 ">
                <button
                  type="button"
                  className="text-black bg-gray-200 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-3 py-3 text-center w-36"
                >
                  <span>+</span> Add To Card
                </button>
                <div className="bg-gray-200 rounded-full w-10 px-3 py-3 text-center hover:bg-yellow-500">
                  <i className="fa-regular fa-heart text-black fa-md" />
                </div>
                <div className="bg-gray-200 rounded-full w-10 px-3 py-3  text-center  hover:bg-yellow-500">
                  <i className="fa-solid fa-code-compare text-black fa-md" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="product-thumb shadow-md p-1"
          onMouseOver="showButtons(this)"
          onMouseOut="hideButtons(this)"
        >
          <div className="transition-card">
            <div className="image h-64">
              <div className="quick-view-icon absolute items-center bottom-20 cursor-pointer opacity-0 transition-opacity duration-300">
                <i className="fas fa-eye text-gray-600" />
              </div>
              <a href="https://opencart.dostguru.com/AS01/autospeed_02/index.php?route=product/product&product_id=41">
                <img
                  src="https://opencart.dostguru.com/AS01/autospeed_02/image/cache/catalog/product/17-288x288.jpg"
                  alt=" Car Seat Cushion Car Decoration Car"
                  title=" Car Seat Cushion Car Decoration Car"
                  className="img-responsive center-block"
                />
              </a>
              {/* Pixel Images Start */}
              <a href="https://opencart.dostguru.com/AS01/autospeed_02/index.php?route=product/product&product_id=41">
                <img
                  src="https://opencart.dostguru.com/AS01/autospeed_02/image/cache/catalog/product/16-288x288.jpg"
                  className="img-responsive second-img"
                  alt="hover image"
                />
              </a>
              {/* End */}
            </div>
            <div className="txt-contaniar mb-1 mt-2">
              <div className="bran">
                <span>
                  <a
                    href="https://opencart.dostguru.com/AS01/autospeed_02/index.php?route=product/manufacturer/info&manufacturer_id=8"
                    className="textdeb"
                  >
                    car
                  </a>
                </span>
              </div>
              <h4 className="protitle font-bold text-gray-900 hover:text-yellow-400 text-base transfor">
                <a href="https://opencart.dostguru.com/AS01/autospeed_02/index.php?route=product/product&product_id=41">
                  {" "}
                  Cushion Decoration Car
                </a>
              </h4>
              <div className="rating flex justify-start left-0">
                <span className="fa fa-stack">
                  <i className="fa fa-star fa-stack-1x text-yellow-400 " />
                </span>
                <span className="fa fa-stack">
                  <i className="fa fa-star fa-stack-1x text-yellow-400" />
                </span>
                <span className="fa fa-stack">
                  <i className="fa fa-star fa-stack-1x text-yellow-400" />
                </span>
                <span className="fa fa-stack">
                  <i className="fa fa-star fa-stack-1x text-yellow-400" />
                </span>
              </div>
              <div className="rat-pri">
                <div className="price text-lg font-semibold">$120.00</div>
              </div>
              <div className="txt-button-group flex  justify-start gap-1 p-4 w-72 ">
                <button
                  type="button"
                  className="text-black bg-gray-200 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-3 py-3 text-center w-36"
                >
                  <span>+</span> Add To Card
                </button>
                <div className="bg-gray-200 rounded-full w-10 px-3 py-3 text-center hover:bg-yellow-500">
                  <i className="fa-regular fa-heart text-black fa-md" />
                </div>
                <div className="bg-gray-200 rounded-full w-10 px-3 py-3  text-center  hover:bg-yellow-500">
                  <i className="fa-solid fa-code-compare text-black fa-md" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="product-thumb shadow-md p-1"
          onMouseOver="showButtons(this)"
          onMouseOut="hideButtons(this)"
        >
          <div className="transition-card">
            <div className="image h-64">
              <div className="quick-view-icon absolute items-center bottom-20 cursor-pointer opacity-0 transition-opacity duration-300">
                <i className="fas fa-eye text-gray-600" />
              </div>
              <a href="https://opencart.dostguru.com/AS01/autospeed_02/index.php?route=product/product&product_id=33">
                <img
                  src="https://opencart.dostguru.com/AS01/autospeed_02/image/cache/catalog/product/1-288x288.jpg"
                  alt="aluminium alloy wheel machine face rims and wheels"
                  title="aluminium alloy wheel machine face rims and wheels"
                  className="img-responsive center-block"
                />
              </a>
              {/* Pixel Images Start */}
              <a href="https://opencart.dostguru.com/AS01/autospeed_02/index.php?route=product/product&product_id=33">
                <img
                  src="https://opencart.dostguru.com/AS01/autospeed_02/image/cache/catalog/product/21-288x288.jpg"
                  className="img-responsive second-img"
                  alt="hover image"
                />
              </a>
              {/* End */}
            </div>
            <div className="txt-contaniar  mb-1 mt-2">
              <div className="bran">
                <span>
                  <a
                    href="https://opencart.dostguru.com/AS01/autospeed_02/index.php?route=product/manufacturer/info&manufacturer_id=6"
                    className="textdeb"
                  >
                    Palm
                  </a>
                </span>
              </div>
              <h4 className="protitle font-bold text-gray-900 hover:text-yellow-400 text-base transfor">
                <a href="https://opencart.dostguru.com/AS01/autospeed_02/index.php?route=product/product&product_id=33">
                  aluminium machine wheels
                </a>
              </h4>
              <div className="rating flex justify-start  left-0">
                <span className="fa fa-stack">
                  <i className="fa fa-star fa-stack-1x text-yellow-400 " />
                </span>
                <span className="fa fa-stack">
                  <i className="fa fa-star fa-stack-1x text-yellow-400" />
                </span>
                <span className="fa fa-stack">
                  <i className="fa fa-star fa-stack-1x text-yellow-400" />
                </span>
                <span className="fa fa-stack">
                  <i className="fa fa-star fa-stack-1x text-yellow-400" />
                </span>
              </div>
              <div className="rat-pri">
                <div className="price text-base font-semibold">$128.00</div>
              </div>
              <div className="txt-button-group flex  justify-start gap-1 p-4 w-72 ">
                <button
                  type="button"
                  className="text-black bg-gray-200 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-3 py-3 text-center w-36"
                >
                  <span>+</span> Add To Card
                </button>
                <div className="bg-gray-200 rounded-full w-10 px-3 py-3 text-center hover:bg-yellow-500">
                  <i className="fa-regular fa-heart text-black fa-md" />
                </div>
                <div className="bg-gray-200 rounded-full w-10 px-3 py-3  text-center  hover:bg-yellow-500">
                  <i className="fa-solid fa-code-compare text-black fa-md" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="product-thumb shadow-md p-1"
          onMouseOver="showButtons(this)"
          onMouseOut="hideButtons(this)"
        >
          <div className="transition-card">
            <div className="image h-64">
              <div className="quick-view-icon absolute items-center bottom-20 cursor-pointer opacity-0 transition-opacity duration-300">
                <i className="fas fa-eye text-gray-600" />
              </div>
              <a href="https://opencart.dostguru.com/AS01/autospeed_02/index.php?route=product/product&product_id=44">
                <img
                  src="https://opencart.dostguru.com/AS01/autospeed_02/image/cache/catalog/product/22-288x288.jpg"
                  alt="Toys Plastic Tires Toy Car Wheels"
                  title="Toys Plastic Tires Toy Car Wheels"
                  className="img-responsive center-block"
                />
              </a>
              {/* Pixel Images Start */}
              <a href="https://opencart.dostguru.com/AS01/autospeed_02/index.php?route=product/product&product_id=44">
                <img
                  src="https://opencart.dostguru.com/AS01/autospeed_02/image/cache/catalog/product/21-288x288.jpg"
                  className="img-responsive second-img"
                  alt="hover image"
                />
              </a>
              {/* End */}
            </div>
            <div className="txt-contaniar mb-1 mt-2">
              <div className="bran">
                <span>
                  <a
                    href="https://opencart.dostguru.com/AS01/autospeed_02/index.php?route=product/manufacturer/info&manufacturer_id=9"
                    className="textdeb"
                  >
                    Canon
                  </a>
                </span>
              </div>
              <h4 className="protitle font-bold text-gray-900 hover:text-yellow-400 text-base transfor">
                <a href="https://opencart.dostguru.com/AS01/autospeed_02/index.php?route=product/product&product_id=30">
                  Car Right to Repair Cars
                </a>
              </h4>
              <div className="rating flex justify-start  left-0">
                <span className="fa fa-stack">
                  <i className="fa fa-star fa-stack-1x text-yellow-400 " />
                </span>
                <span className="fa fa-stack">
                  <i className="fa fa-star fa-stack-1x text-yellow-400" />
                </span>
                <span className="fa fa-stack">
                  <i className="fa fa-star fa-stack-1x text-yellow-400" />
                </span>
                <span className="fa fa-stack">
                  <i className="fa fa-star fa-stack-1x text-yellow-400" />
                </span>
              </div>
              <div className="rat-pri">
                <div className="price  font-semibold">$136.00</div>
              </div>
              <div className="txt-button-group flex  justify-start gap-1 p-4 w-72 ">
                <button
                  type="button"
                  className="text-black bg-gray-200 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-3 py-3 text-center w-36"
                >
                  <span>+</span> Add To Card
                </button>
                <div className="bg-gray-200 rounded-full w-10 px-3 py-3 text-center hover:bg-yellow-500">
                  <i className="fa-regular fa-heart text-black fa-md" />
                </div>
                <div className="bg-gray-200 rounded-full w-10 px-3 py-3  text-center  hover:bg-yellow-500">
                  <i className="fa-solid fa-code-compare text-black fa-md" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="product-thumb shadow-md p-1"
          onMouseOver="showButtons(this)"
          onMouseOut="hideButtons(this)"
        >
          <div className="transition-card">
            <div className="image h-64">
              <div className="quick-view-icon absolute items-center left-12 bottom-20 cursor-pointer opacity-0 transition-opacity duration-300">
                <i className="fas fa-eye text-gray-600" />
              </div>
              <a href="https://opencart.dostguru.com/AS01/autospeed_02/index.php?route=product/product;product_id=28">
                <img
                  src="https://opencart.dostguru.com/AS01/autospeed_02/image/cache/catalog/product/26-288x288.jpg"
                  alt="Alternator Engine Car"
                  title="Alternator Engine Car"
                  className="img-responsive center-block"
                />
              </a>
              {/* Pixel Images Start */}
              <a href="https://opencart.dostguru.com/AS01/autospeed_02/index.php?route=product/product;product_id=28">
                <img
                  src="https://opencart.dostguru.com/AS01/autospeed_02/image/cache/catalog/product/20-288x288.jpg"
                  className="img-responsive second-img"
                  alt="hover image"
                />
              </a>
              {/* End */}
            </div>
            <div className="txt-contaniar mb-1 mt-2">
              <div className="bran">
                <span>
                  <a
                    href="https://opencart.dostguru.com/AS01/autospeed_02/index.php?route=product/manufacturer/info;manufacturer_id=5"
                    className="textdeb"
                  >
                    HTC
                  </a>
                </span>
              </div>
              <h4 className="protitle font-bold text-gray-900 hover:text-yellow-400 text-base transfor">
                <a href="https://opencart.dostguru.com/AS01/autospeed_02/index.php?route=product/product;product_id=28">
                  Alternator Engine Car
                </a>
              </h4>
              <div className="rating flex justify-start  left-0">
                <span className="fa fa-stack">
                  <i className="fa fa-star fa-stack-1x text-yellow-400 " />
                </span>
                <span className="fa fa-stack">
                  <i className="fa fa-star fa-stack-1x text-yellow-400" />
                </span>
                <span className="fa fa-stack">
                  <i className="fa fa-star fa-stack-1x text-yellow-400" />
                </span>
                <span className="fa fa-stack">
                  <i className="fa fa-star fa-stack-1x text-gray-400" />
                </span>
              </div>
              <div className="rat-pri">
                <div className="price text-base font-semibold ">
                  <span className="price">$122.00</span>
                </div>
              </div>
              <div className="txt-button-group flex justify-start gap-1 p-4 w-72">
                <button
                  type="button"
                  className="text-black bg-gray-200 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-3 py-3 text-center w-36"
                >
                  <span>+</span> Add To Card
                </button>
                <button className="bg-gray-200 rounded-full w-10 px-3 py-3 text-center hover:bg-yellow-500">
                  <i className="fa-regular fa-heart text-black fa-md" />
                </button>
                <button className="bg-gray-200 rounded-full w-10 px-3 py-3  text-center  hover:bg-yellow-500">
                  <i className="fa-solid fa-code-compare text-black fa-md" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</>

  )
}

export default Module21
