import Image from "next/image";
import clock from "./../assets/images/clock.svg";
import user from "./../assets/images/user.svg";
import backend from "./../assets/images/Server.svg";
import tester from "./../assets/images/TestResults.svg";
import grafic from "./../assets/images/Illustrator.svg";
import nextPage from "./../assets/images/button-arrow.svg";
import previousPage from "./../assets/images/button-arrow-down.svg";
import { Slider } from "@mui/material";
import { useEffect, useState } from "react";
export const AhpHours = ({ ahpVariables, setAhpVariables }) => {
  const [remnantHours, setRemnantHours] = useState(ahpVariables.hours);

  useEffect(() => {
    if (!ahpVariables.designer) {
      setAhpVariables({ ...ahpVariables, designerHours: 0 });
    }

    setRemnantHours(
      ahpVariables.hours -
        (ahpVariables.frontHours +
          ahpVariables.backendHours +
          ahpVariables.designerHours +
          ahpVariables.pmHours +
          ahpVariables.testerHours)
    );
  }, [ahpVariables]);
  console.log(remnantHours, ahpVariables.hours);
  return (
    <div className="flex w-full  justify-center  flex-col items-center">
      <div className="py-6 text-5xl">
        <h1>Przypisanie godzin</h1>
      </div>
      <div className="lg:w-2/3 w-full justify-center flex items-center  flex-wrap gap-4  ">
        {ahpVariables.designer ? (
          <div className="w-[325px] h-[272px] border-2 border-black py-4 px-6 flex items-center flex-col gap-2">
            <Image src={grafic} alt="designer" />
            <label className="text-xl font-semibold ">
              Ilość godzin dla grafika
            </label>
            <div className="w-full py-8 mt-7">
              <Slider
                defaultValue={ahpVariables.designerHours}
                step={1}
                marks
                min={ahpVariables.designerHours}
                max={remnantHours}
                className="dark"
                valueLabelDisplay="on"
              />
            </div>
          </div>
        ) : (
          ""
        )}

        <div className="w-[325px] h-[272px]  border-2 border-black py-4 px-6 flex items-center flex-col gap-2">
          <Image src={clock} alt="pm" />
          <label className="text-xl text-center font-semibold ">
            Ilość godzin dla projekt menadzera
          </label>

          <div className="w-full py-8 ">
            <Slider
              defaultValue={ahpVariables.pmHours}
              step={1}
              marks
              min={ahpVariables.pmHours}
              max={remnantHours}
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
              defaultValue={ahpVariables.frontHours}
              step={1}
              marks
              min={ahpVariables.frontHours}
              max={remnantHours}
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
              defaultValue={ahpVariables.backendHours}
              step={1}
              marks
              min={ahpVariables.backendHours}
              max={remnantHours}
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
              defaultValue={ahpVariables.testerHours}
              step={1}
              marks
              min={ahpVariables.testerHours}
              max={remnantHours}
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
