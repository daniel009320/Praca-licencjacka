import Image from "next/image";
import clock from "./../assets/images/clock.svg";
import user from "./../assets/images/user.svg";
import backend from "./../assets/images/Server.svg";
import tester from "./../assets/images/TestResults.svg";
import grafic from "./../assets/images/Illustrator.svg";
import nextPage from "./../assets/images/button-arrow.svg";
import pm from "./../assets/images/Project_Manager.svg";
import previousPage from "./../assets/images/button-arrow-down.svg";
import arrowUp from "./../assets/images/SortDown.svg";
import arrowDown from "./../assets/images/SortDown-1.svg";
import { Slider } from "@mui/material";
import { useEffect, useState } from "react";

export const Sawhours = ({ sawVariables, setSawVariables }) => {
  const [remnantHours, setRemnantHours] = useState(sawVariables.hours);
  const [maxHours, setMaxHours] = useState(sawVariables.hours);
  useEffect(() => {
    if (!sawVariables.designer) {
      setSawVariables({ ...sawVariables, designerHours: 0 });
      setMaxHours(sawVariables.hours - 3);
    } else {
      setMaxHours(sawVariables.hours - 4);
    }
    let difference =
      sawVariables.frontHours +
      sawVariables.backendHours +
      sawVariables.designerHours +
      sawVariables.pmHours +
      sawVariables.testerHours;
   
     
    setRemnantHours(sawVariables.hours-difference);
  }, [
    sawVariables.designer,
    sawVariables.frontHours + sawVariables.backendHours,
    sawVariables.designerHours,
    sawVariables.pmHours,
    sawVariables.testerHours,
  ]);
  
  console.log(remnantHours)
  const updateValues = (e, updatedValue) => {
     const numberRegex = /^\d+$/;
    if (numberRegex.test(e.target.value))
    switch (updatedValue) {
      case "frontHours":
        setSawVariables(state=>({ ...state, frontHours: Number(e.target.value) }));

        break;
      case "backendHours":
        setSawVariables(state=>({ ...state, backendHours: Number(e.target.value) }));

        break;
      case "designerHours":
        setSawVariables(state=>({ ...state, designerHours: Number(e.target.value) }));

        break;
      case "pmHours":
        setSawVariables(state=>({ ...state, pmHours: Number(e.target.value)}));

        break;
      case "testerHours":
        setSawVariables(state=>({ ...state, testerHours: Number(e.target.value) }));

        break;
    }
  };


  return (
    <div className="flex w-full  justify-center  flex-col items-center">
      <div className="py-6 text-5xl items-center justify-center">
        <h1>Przypisanie godzin</h1>
      </div>
      {remnantHours < 1 ? (
        <div className="  text-center text-lg items-center justify-center py-2 px-2 border-2 border-red-600 text-red-600 mt-10 mb-10 ">
          Pozostałe godziny przypisane do projektu:{" "}
          {remnantHours < 0 ? 0 : remnantHours}
        </div>
      ) : (
        <div className="  text-center text-lg items-center justify-center py-2 px-2 border-2 border-black mt-10 mb-10 ">
          Pozostałe godziny przypisane do projektu:{" "}
          {remnantHours < 0 ? 0 : remnantHours}
        </div>
      )}
      <div className="lg:w-2/3 w-full justify-center flex items-center  flex-wrap gap-4  ">
        {sawVariables.designer ? (
          <div className="w-[325px] h-[272px] border-2 border-black py-4 px-6 flex items-center flex-col gap-2">
            <Image src={grafic} alt="designer" />
            <label className="text-xl font-semibold ">
              Ilość godzin dla grafika
            </label>
            <div className=" flex w-full  mt-7 items-center justify-center flex-col items-center">
            <Image
            src={arrowUp}
            alt="arrow up"
            className="cursor-pointer"
            onClick={() =>
              setSawVariables(state=>({
                ...state,
                designerHours: sawVariables.designerHours + 1,
              }))
            }
          />
              <input
                value={sawVariables.designerHours}
                className="outline-none bg-custom-yellow text-center cursor-pointer text-xl font-semibold"
                onChange={(e) => updateValues(e, "designerHours")}
                
              />
              <Image
            src={arrowDown}
            alt="arrow down"
            className="cursor-pointer"
            onClick={() => {
              if (sawVariables.designerHours > 0) {
                setSawVariables(state=>({
                  ...state,
                  designerHours: sawVariables.designerHours - 1,
                }));
              }
            }}
          />
            </div>
          </div>
        ) : (
          ""
        )}

        <div className="w-[325px] h-[272px]  border-2 border-black py-4 px-6 flex items-center flex-col gap-2">
          <Image src={pm} alt="pm" />
          <label className="text-xl text-center font-semibold ">
            Ilość godzin dla projekt menadzera
          </label>

          <div className="w-full  flex justify-center flex-col items-center ">
          <Image
            src={arrowUp}
            alt="arrow up"
            className="cursor-pointer"
            onClick={() =>
              setSawVariables(state=>({
                ...state,
                pmHours: sawVariables.pmHours + 1,
              }))
            }
          />
            <input
              value={sawVariables.pmHours}
              className="outline-none bg-custom-yellow text-center cursor-pointer text-xl font-semibold"
          
              onChange={(e) => updateValues(e, "pmHours")}
             
            />
             <Image
            src={arrowDown}
            alt="arrow down"
            className="cursor-pointer"
            onClick={() => {
              if (sawVariables.pmHours > 0) {
                setSawVariables(state=>({
                  ...state,
                  pmHours: sawVariables.pmHours - 1,
                }));
              }
            }}
          />
          </div>
        </div>

        <div className="w-[325px] h-[272px] border-2 border-black py-4 px-6 flex items-center flex-col gap-2">
          <Image src={user} alt="user" />
          <label className="text-xl text-center font-semibold ">
            Ilość godzin dla programistów frontend
          </label>

          <div className="w-full  flex justify-center flex-col items-center ">
          <Image
            src={arrowUp}
            alt="arrow up"
            className="cursor-pointer"
            onClick={() =>
              setSawVariables(state=>({
                ...state,
                frontHours: sawVariables.frontHours + 1,
              }))
            }
          />
            <input
              value={sawVariables.frontHours}
              className="outline-none bg-custom-yellow text-center cursor-pointer text-xl font-semibold"
              onChange={(e) => updateValues(e, "frontHours")}
            />
              <Image
            src={arrowDown}
            alt="arrow down"
            className="cursor-pointer"
            onClick={() => {
              if (sawVariables.frontHours > 0) {
                setSawVariables(state=>({
                  ...state,
                  frontHours: sawVariables.frontHours - 1,
                }));
              }
            }}
          />
          </div>
        </div>

        <div className="w-[325px] h-[272px] border-2 border-black py-4 px-6 flex items-center flex-col gap-2">
          <Image src={backend} alt="backend" />
          <label className="text-xl text-center font-semibold ">
            Ilość godzin dla programistów backend
          </label>
        
          <div className="w-full  flex justify-center flex-col items-center ">
          <Image
            src={arrowUp}
            alt="arrow up"
            className="cursor-pointer"
            onClick={() =>
              setSawVariables(state=>({
                ...state,
                backendHours: sawVariables.backendHours + 1,
              }))
            }
          />
            <input
            className="outline-none bg-custom-yellow text-center cursor-pointer text-xl font-semibold"
              value={sawVariables.backendHours}
             
              onChange={(e) => updateValues(e, "backendHours")}
             
            
            />
             <Image
            src={arrowDown}
            alt="arrow down"
            className="cursor-pointer"
            onClick={() => {
              if (sawVariables.backendHours > 0) {
                setSawVariables(state=>({
                  ...state,
                  backendHours: sawVariables.backendHours - 1,
                }));
              }
            }}
          />
          </div>
         
        </div>

        <div className="w-[325px] h-[272px] border-2 border-black py-4 px-6 flex items-center flex-col gap-2">
          <Image src={tester} alt="tester" />
          <label className="text-xl font-semibold ">
            Ilość godzin dla testerów
          </label>

          <div className="w-full mt-7  flex justify-center flex-col items-center ">
          <Image
            src={arrowUp}
            alt="arrow up"
            className="cursor-pointer"
            onClick={() =>
              setSawVariables(state=>({
                ...state,
                testerHours: sawVariables.testerHours + 1,
              }))
            }
          />
            <input
            className="outline-none bg-custom-yellow text-center cursor-pointer text-xl font-semibold"
              value={sawVariables.testerHours}
              
              onChange={(e) => updateValues(e, "testerHours")}
             
            />
              <Image
            src={arrowDown}
            alt="arrow down"
            className="cursor-pointer"
            onClick={() => {
              if (sawVariables.testerHours > 0) {
                setSawVariables(state=>({
                  ...state,
                  testerHours: sawVariables.testerHours - 1,
                }));
              }
            }}
          />
          </div>
        </div>
      </div>
      <div className="flex gap-6">
        <div className="border-2 border-black rounded-full py-2 px-2 cursor-pointer my-6">
          <Image
            src={previousPage}
            alt="previous page"
            onClick={() =>
              setSawVariables({
                ...sawVariables,
                currentPage: sawVariables.currentPage - 1,
              })
            }
          />
        </div>
       {remnantHours>=0? <div className="border-2 border-black rounded-full py-2 px-2 cursor-pointer my-6">
          <Image
            src={nextPage}
            alt="next page"
            onClick={() =>
              setSawVariables({
                ...sawVariables,
                currentPage: sawVariables.currentPage + 1,
              })
            }
          />
        </div>:""}
      </div>
    </div>
  );
};
