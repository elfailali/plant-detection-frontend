import React from 'react';
import { Link } from 'react-router-dom';
import kachfLogo2 from '../images/Kachf_Logo/2.png'

const HeaderHome = () => {
  const logoStyle = {
    textDecoration: 'none',
    color: 'white',
    fontSize: '1.5em',
    fontWeight: 'bold',
    display: 'flex', // Permet d'aligner l'image et le texte correctement
    alignItems: 'center', // Centre l'image et le texte verticalement
  };

  return (
    // style={navStyle}
    <header  className="sticky items-center drop-shadow-lg border-b z-10 m-auto top-0 animated bg-white flex w-full flex-col justify-center px-16 py-2 max-md:max-w-full max-md:px-5">

      <div className=" flex justify-center w-full max-w-[1140px]  max-md:max-w-full max-md:flex-wrap ">
        <div className="flex items-stretch bg-white justify-between gap-5 my-auto max-md:max-w-full max-md:flex-wrap flex justify-center">
          <Link to="/" style={logoStyle}>
            <img src={kachfLogo2} alt="Logo"  className='w-20 '/>
          </Link>

          <div className="items-stretch flex justify-between justify-end gap-5 px-8 self-end flex flex-col mt-4 font-medium lg:flex-row  lg:mt-0">
            <div className="text-stone-800 text-m grow whitespace-nowrap font-semibold">
              <Link to="/">
                Home
              </Link>
            </div>
            <div className="text-stone-800 text-m font-semibold">

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

        {/* <div className="items-stretch self-stretch flex justify-between gap-5 pl-20 py-4 max-md:pl-5">
          <div className="text-white text-right text-sm whitespace-nowrap justify-center items-stretch bg-red-700 grow px-6 py-2.5 rounded-lg max-md:px-5">
          <Link to="/SignOut">
            Sign Out
          </Link>
          </div>
        </div> */}
      </div>


    </header>
  );
};

export default HeaderHome;
