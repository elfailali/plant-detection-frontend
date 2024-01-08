import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import  '../styles/tailwind.css';
import {useLocation, useParams } from 'react-router-dom'





const Result = () => {
  // const {plantClass} = useParams();
  const navigate = useNavigate();
  const { state } = useLocation();
  const { plantClass, confidence, selectedFile } = state || {};

  const [diagnosisResult, setDiagnosisResult] = useState({
    plantName: "",
    description: "",
    treatment: ""
  })

  const [plants, setPlants] = useState([{
    id: '',
    nameID: '',
    name: '',
    type: '',
    description: '',
    treatement: '',
  }])

  useEffect(() => {
    fetch("https://plants-detection-backend-vercel.vercel.app/plants").then(res => {
      if(res.ok){
        return res.json()
      }
      throw new Error('Something went wrong');
    })
    .then(jsonRes => setPlants(jsonRes))
    .catch((error) => {
      console.log("errorh" +error)
    });
  })

  console.log("plants "+ plants)

  const updateDiagnosisResult = () => {
    const matchingPlant = plants.find(plant => plant.nameID === plantClass);
  
    // If a matching plant is found, update diagnosisResult
    if (matchingPlant) {
      setDiagnosisResult({
        plantName: matchingPlant.nameID,
        description: matchingPlant.description,
        treatment: matchingPlant.treatement 
      });
    } else {
      setDiagnosisResult({
        plantName: "",
        description: "No description found",
        treatment: "" 
      })
    }
  };
  
  useEffect(() => {
    updateDiagnosisResult();
  }, [plants, plantClass]);


    return (
        <div className="bg-gradient-to-t from-lime-400 to-lime-50 ">
          <div className=" flex w-full flex-col justify-center items-center mt-0 px-16 py-12 max-md:max-w-full max-md:mt-10 max-md:px-5">
            <div className="flex w-full max-w-[1200px] flex-col mb-8 items-end max-md:max-w-full">

              <div className="flex w-[817px] max-w-full items-stretch justify-between gap-5 max-md:flex-wrap">
                <div className="text-slate-800 text-center text-5xl font-bold leading-7 grow shrink basis-auto max-md:max-w-full max-md:text-4xl max-md:leading-6">
                  Diagnosis Result
                </div>
                <div onClick={() => navigate('/GetDiagnostic')} className="text-white text-right text-sm whitespace-nowrap justify-center items-stretch bg-blue-700 hover:bg-blue-800 cursor-pointer shadow-lg px-6 py-2.5 rounded-lg self-start max-md:px-5">
                  + New Detection
                </div>
              </div>

              <div className="bg-white flex-col shadow-2xl fill-white overflow-hidden self-stretch relative flex min-h-[12px] w-full items-stretch mt-6 py-11 max-md:max-w-full">
                <img
                  loading="lazy"
                  src={URL.createObjectURL(selectedFile)}
                  alt="Selected Plant"
                  className=" aspect-[1.19]    shadow-md object-contain object-center w-[426px] shadow-sm overflow-hidden self-center max-w-full mt-16 max-md:mt-10"
                />

                <div className="bg-red-600 relative justify-center text-white text-center text-2xl font-bold leading-7 max-w-full  self-center  items-center mt-8 px-16 py-7 rounded-xl max-md:px-5">
                  {plantClass}
                </div>


                {diagnosisResult.plantName.length > 0 &&
                                  <div className="relative flex flex-col mt-12 pl-12 pr-16 max-md:max-w-full max-md:mt-10 max-md:px-5">
                                  <div className="text-black text-3xl font-bold leading-7 self-stretch max-md:max-w-full">
                                    Description
                                  </div>
                                  <div className=" text-black text-lg font-medium leading-8 self-stretch mt-12 max-md:max-w-full max-md:mt-10">
                                    {diagnosisResult.description}
                                  </div>
                                  <div className="bg-white-100 text-black text-3xl font-bold leading-7 self-stretch mt-12 max-md:max-w-full max-md:mt-10">
                                    Treatment
                                  </div>
                                  <div className="text-black text-lg font-medium leading-8 self-stretch mt-14 max-md:max-w-full max-md:mt-10">
                                    {diagnosisResult.treatment}
                                  </div>
                                  <div className="bg-lime-400 hover:bg-lime-300 cursor-pointer flex items-center justify-between gap-5 mt-8 pl-11 pr-20 py-3.5 rounded-full self-start max-md:px-5">
                                    <img
                                      loading="lazy"
                                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/fd56c033920e38c35177af8d7d8e60ff9701eeff3d1a4448dcd4c14d1706778c?"
                                      className="aspect-[1.56] object-contain object-center w-[25px] fill-slate-800 overflow-hidden shrink-0 max-w-full my-auto"
                                    />
                                    <div className="text-slate-800 text-2xl font-bold leading-7">
                                      Buy Product
                                    </div>
                                  </div>
                                </div>
                }

              </div>
            </div>
          </div>
        </div>
      );
};

export default Result