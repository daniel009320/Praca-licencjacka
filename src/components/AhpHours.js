import Image from "next/image";
import clock from "./../assets/images/clock.svg";
import user from "./../assets/images/user.svg";
import backend from "./../assets/images/Server.svg";
import tester from "./../assets/images/TestResults.svg";
import grafic from "./../assets/images/Illustrator.svg";
import nextPage from "./../assets/images/button-arrow.svg";
import pm from "./../assets/images/Project_Manager.svg";
import previousPage from "./../assets/images/button-arrow-down.svg";
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
      setAhpVariables({ ...ahpVariables, designerHours: 1 });
      setMaxHours(ahpVariables.hours - 4);
    }
    let difference =
      ahpVariables.frontHours +
      ahpVariables.backendHours +
      ahpVariables.designerHours +
      ahpVariables.pmHours +
      ahpVariables.testerHours;
    if (difference > 120) {
      difference = 120;
    }
    setRemnantHours(ahpVariables.hours - difference);
  }, [
    ahpVariables.designer,
    ahpVariables.frontHours + ahpVariables.backendHours,
    ahpVariables.designerHours,
    ahpVariables.pmHours,
    ahpVariables.testerHours,
  ]);

  const updateValues = (e, updatedValue) => {
    switch (updatedValue) {
      case "frontHours":
        setAhpVariables({ ...ahpVariables, frontHours: e.target.value });

        break;
      case "backendHours":
        setAhpVariables({ ...ahpVariables, backendHours: e.target.value });

        break;
      case "designerHours":
        setAhpVariables({ ...ahpVariables, designerHours: e.target.value });

        break;
      case "pmHours":
        setAhpVariables({ ...ahpVariables, pmHours: e.target.value });

        break;
      case "testerHours":
        setAhpVariables({ ...ahpVariables, testerHours: e.target.value });

        break;
    }
  };

  console.log(remnantHours, ahpVariables.hours);
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
            <div className="w-full py-8 mt-7">
              <Slider
                value={ahpVariables.designerHours}
                step={1}
                marks
                min={1}
                max={maxHours}
                className="dark"
                onChange={(e) => updateValues(e, "designerHours")}
                valueLabelDisplay="on"
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

          <div className="w-full py-8 ">
            <Slider
              value={ahpVariables.pmHours}
              step={1}
              marks
              min={1}
              max={maxHours}
              onChange={(e) => updateValues(e, "pmHours")}
              className="dark"
              valueLabelDisplay="on"
            />
          </div>
        </div>

        <div className="w-[325px] h-[272px] border-2 border-black py-4 px-6 flex items-center flex-col gap-2">
          <Image src={user} alt="user" />
          <label className="text-xl text-center font-semibold ">
            Ilość godzin dla programistów frontend
          </label>

          <div className="w-full py-8 ">
            <Slider
              value={ahpVariables.frontHours}
              step={1}
              marks
              min={1}
              max={maxHours}
              onChange={(e) => updateValues(e, "frontHours")}
              className="dark"
              valueLabelDisplay="on"
            />
          </div>
        </div>

        <div className="w-[325px] h-[272px] border-2 border-black py-4 px-6 flex items-center flex-col gap-2">
          <Image src={backend} alt="backend" />
          <label className="text-xl text-center font-semibold ">
            Ilość godzin dla programistów backend
          </label>

          <div className="w-full py-8 ">
            <Slider
              value={ahpVariables.backendHours}
              step={1}
              marks
              min={1}
              onChange={(e) => updateValues(e, "backendHours")}
              max={maxHours}
              className="dark"
              valueLabelDisplay="on"
            />
          </div>
        </div>

        <div className="w-[325px] h-[272px] border-2 border-black py-4 px-6 flex items-center flex-col gap-2">
          <Image src={tester} alt="tester" />
          <label className="text-xl font-semibold ">
            Ilość godzin dla testerów
          </label>

          <div className="w-full mt-7 py-8 ">
            <Slider
              value={ahpVariables.testerHours}
              step={1}
              marks
              min={1}
              onChange={(e) => updateValues(e, "testerHours")}
              max={maxHours}
              className="dark"
              valueLabelDisplay="on"
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
        <div className="border-2 border-black rounded-full py-2 px-2 cursor-pointer my-6">
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
        </div>
      </div>
    </div>
  );
};
