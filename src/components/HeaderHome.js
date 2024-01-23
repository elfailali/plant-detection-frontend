import React from 'react';
import { Link } from 'react-router-dom';
import kachfLogo2 from '../images/Kachf_Logo/2.png'

const HeaderHome = () => {
  return (
    <header  className="sticky items-center drop-shadow-lg border-b z-10 m-auto top-0 animated bg-white flex w-full flex-col justify-center px-16 py-2 max-md:max-w-full max-md:px-5">

      <div className=" flex justify-center w-full max-w-[1140px]  max-md:max-w-full max-md:flex-wrap ">
        <div className="flex items-stretch bg-white justify-between gap-5 my-auto max-md:max-w-full max-md:flex-wrap flex justify-center">
          <Link to="/" className='flex items-center	'>
            <img src={kachfLogo2} alt="Logo"  className='w-20'/>
          </Link>

          <div className="items-stretch flex justify-between justify-end gap-5 px-8 self-end flex flex-col mt-4 font-medium sm:flex-row lg:mt-0  max-sm:m-0 max-sm:gap-1">
            <div className="text-stone-800 text-m grow whitespace-nowrap font-semibold max-sm:hidden">
              <Link to="/">
                Home
              </Link>
            </div>
            <div className="text-stone-800 text-m font-semibold max-sm:hidden">
              <Link to="/library">
                Library
              </Link>
            </div>
            <div className="text-stone-800 text-m font-semibold">
              <Link to="/news">
                News 
              </Link>
            </div>
            {/* <div className="text-stone-800 text-m font-semibold">
              <Link to="/History">
                History
              </Link>
            </div> */}
            <div className="text-stone-800 text-m font-semibold">
              <Link to="/Contact">
                Contact Us
              </Link>
            </div>
              <div className="text-stone-800 text-m grow whitespace-nowrap font-semibold">
                <Link to="/api">
                  API
                </Link>
              </div>
          </div>
        </div>

      </div>


    </header>
  );
};

export default HeaderHome;
