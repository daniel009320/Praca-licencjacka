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
import ahp from "@/pages/ahp";
export const AhpHours = ({ ahpVariables, setAhpVariables }) => {
  const [remnantHours, setRemnantHours] = useState(ahpVariables.hours);
  const [maxHours, setMaxHours] = useState(ahpVariables.hours);
  useEffect(() => {
    if (!ahpVariables.designer) {
      setAhpVariables({ ...ahpVariables, designerHours: 0 });
      setMaxHours(ahpVariables.hours - 3);
    } else {
      // setAhpVariables(state=>({ ...state, designerHours: 1 }));
      setMaxHours(ahpVariables.hours - 4);
    }
    let difference =
      ahpVariables.frontHours +
      ahpVariables.backendHours +
      ahpVariables.designerHours +
      ahpVariables.pmHours +
      ahpVariables.testerHours;
   
     
    setRemnantHours(ahpVariables.hours-difference);
  }, [
    ahpVariables.designer,
    ahpVariables.frontHours + ahpVariables.backendHours,
    ahpVariables.designerHours,
    ahpVariables.pmHours,
    ahpVariables.testerHours,
  ]);
  
  console.log(remnantHours)
  const updateValues = (e, updatedValue) => {
     const numberRegex = /^\d+$/;
    if (numberRegex.test(e.target.value))
    switch (updatedValue) {
      case "frontHours":
        setAhpVariables(state=>({ ...state, frontHours: Number(e.target.value) }));

        break;
      case "backendHours":
        setAhpVariables(state=>({ ...state, backendHours: Number(e.target.value) }));

        break;
      case "designerHours":
        setAhpVariables(state=>({ ...state, designerHours: Number(e.target.value) }));

        break;
      case "pmHours":
        setAhpVariables(state=>({ ...state, pmHours: Number(e.target.value)}));

        break;
      case "testerHours":
        setAhpVariables(state=>({ ...state, testerHours: Number(e.target.value) }));

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
        {ahpVariables.designer ? (
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
              setAhpVariables(state=>({
                ...state,
                designerHours: ahpVariables.designerHours + 1,
              }))
            }
          />
              <input
                value={ahpVariables.designerHours}
                className="outline-none bg-custom-yellow text-center cursor-pointer text-xl font-semibold"
                onChange={(e) => updateValues(e, "designerHours")}
                
              />
              <Image
            src={arrowDown}
            alt="arrow down"
            className="cursor-pointer"
            onClick={() => {
              if (ahpVariables.designerHours > 0) {
                setAhpVariables(state=>({
                  ...state,
                  designerHours: ahpVariables.designerHours - 1,
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
              setAhpVariables(state=>({
                ...state,
                pmHours: ahpVariables.pmHours + 1,
              }))
            }
          />
            <input
              value={ahpVariables.pmHours}
              className="outline-none bg-custom-yellow text-center cursor-pointer text-xl font-semibold"
          
              onChange={(e) => updateValues(e, "pmHours")}
             
            />
             <Image
            src={arrowDown}
            alt="arrow down"
            className="cursor-pointer"
            onClick={() => {
              if (ahpVariables.pmHours > 0) {
                setAhpVariables(state=>({
                  ...state,
                  pmHours: ahpVariables.pmHours - 1,
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
              setAhpVariables(state=>({
                ...state,
                frontHours: ahpVariables.frontHours + 1,
              }))
            }
          />
            <input
              value={ahpVariables.frontHours}
              className="outline-none bg-custom-yellow text-center cursor-pointer text-xl font-semibold"
              onChange={(e) => updateValues(e, "frontHours")}
            />
              <Image
            src={arrowDown}
            alt="arrow down"
            className="cursor-pointer"
            onClick={() => {
              if (ahpVariables.frontHours > 0) {
                setAhpVariables(state=>({
                  ...state,
                  frontHours: ahpVariables.frontHours - 1,
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
              setAhpVariables(state=>({
                ...state,
                backendHours: ahpVariables.backendHours + 1,
              }))
            }
          />
            <input
            className="outline-none bg-custom-yellow text-center cursor-pointer text-xl font-semibold"
              value={ahpVariables.backendHours}
             
              onChange={(e) => updateValues(e, "backendHours")}
             
            
            />
             <Image
            src={arrowDown}
            alt="arrow down"
            className="cursor-pointer"
            onClick={() => {
              if (ahpVariables.backendHours > 0) {
                setAhpVariables(state=>({
                  ...state,
                  backendHours: ahpVariables.backendHours - 1,
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
              setAhpVariables(state=>({
                ...state,
                testerHours: ahpVariables.testerHours + 1,
              }))
            }
          />
            <input
            className="outline-none bg-custom-yellow text-center cursor-pointer text-xl font-semibold"
              value={ahpVariables.testerHours}
              
              onChange={(e) => updateValues(e, "testerHours")}
             
            />
              <Image
            src={arrowDown}
            alt="arrow down"
            className="cursor-pointer"
            onClick={() => {
              if (ahpVariables.testerHours > 0) {
                setAhpVariables(state=>({
                  ...state,
                  testerHours: ahpVariables.testerHours - 1,
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
              setAhpVariables({
                ...ahpVariables,
                currentPage: ahpVariables.currentPage - 1,
              })
            }
          />
        </div>
       {remnantHours>=0? <div className="border-2 border-black rounded-full py-2 px-2 cursor-pointer my-6">
          <Image
            src={nextPage}
            alt="next page"
            onClick={() =>
              setAhpVariables({
                ...ahpVariables,
                currentPage: ahpVariables.currentPage + 1,
              })
            }
          />
        </div>:""}
      </div>
    </div>
  );
};
