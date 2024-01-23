import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import  '../styles/tailwind.css';
import { Link } from 'react-router-dom';





const Api = () => {


    return (
        <div className="bg-gradient-to-t from-lime-50 to-lime-50 ">
          <div className=" flex w-full flex-col justify-center items-center mt-0 px-16 py-12 max-md:max-w-full max-md:px-5">
            <div className="flex w-full max-w-[1200px] flex-col mb-8 items-end max-md:max-w-full">



              <div className="bg-white flex-col shadow-2xl fill-white overflow-hidden self-stretch relative flex min-h-[12px] w-full items-stretch mt-6 py-11 max-md:max-w-full">
              <div className="flex w-[817px] max-w-full items-stretch justify-between gap-5 max-md:flex-wrap">
                
                <div className="text-slate-800 text-start pl-10 text-5xl font-bold leading-7 grow shrink basis-auto max-md:max-w-full max-md:text-4xl max-md:leading-6">
                    Kachf Api 
                  </div>
                </div>


                                  <div className="relative flex flex-col mt-12 pl-12 pr-16 max-md:max-w-full max-md:mt-10 max-md:px-5">
                                  <div className="text-black text-3xl font-bold leading-7 self-stretch max-md:max-w-full">
                                    Get the best real-time diagnoses of crop issues
                                  </div>
                                  <div className=" text-black text-lg font-medium leading-8 self-stretch mt-12 max-md:max-w-full max-md:mt-10">
                                    Provide the best support to your farmers with accurate crop diagnosis and customised solutions anytime and anywhere.
                                  </div>
                                  <p className="text-lg  mt-4 leading-7">Api endpoint: http://usa-central0-plants-disease-detection-2025.cloudfunctions.net/username-****/predict</p>
                                  <p className="text-lg leading-7">Replace **** with your password</p>
                                  <p className="text-lg mb-6 leading-7">Note: give "file" name to your request image</p>
                                  <div className="bg-lime-400 hover:bg-lime-300 cursor-pointer flex items-center font-extrabold justify-between gap-5 mt-8 pl-11 pr-10 py-3.5 rounded-full self-start max-md:px-5">
                                    <Link to="/Contact">
                                        Get in contact for Support
                                    </Link>
                                  </div>
                                </div>

              </div>
            </div>
          </div>
        </div>
      );
};

export default Api