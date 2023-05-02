import Image from "next/image";
import budget from "./../assets/images/MoneyBag.svg";
import arrowUp from "./../assets/images/SortDown.svg";
import arrowDown from "./../assets/images/SortDown-1.svg";
import clock from "./../assets/images/clock.svg";
import user from "./../assets/images/user.svg";
import backend from "./../assets/images/Server.svg";
import tester from "./../assets/images/TestResults.svg";
import grafic from "./../assets/images/Illustrator.svg";
import nextPage from "./../assets/images/button-arrow.svg";
import ahp from "@/pages/Ahp";
export const Formahp = ({ ahpVariables, setAhpVariables }) => {
  console.log(typeof ahpVariables.budget);
  const parseString = (e, updateVariable) => {
    setAhpVariables({
      ...ahpVariables,
      updateVariable: e.target.value,
    });
  };
  return (
    <div className="flex w-full  justify-center  flex-col items-center">
      <div className="py-6 text-5xl">
        <h1>Formularz</h1>
      </div>
      <div className="lg:w-2/3 w-full justify-center flex items-center  flex-wrap gap-4  ">
        <div className="w-[325px] border-2 border-black py-4 px-6 flex items-center flex-col gap-2">
          <Image src={budget} alt="money bag" />
          <label className="text-xl font-semibold ">Budżet na projekt</label>
          <Image
            src={arrowUp}
            alt="arrow up"
            className="cursor-pointer"
            onClick={() =>
              setAhpVariables({
                ...ahpVariables,
                budget: ahpVariables.budget + 1,
              })
            }
          />
          <input
            className="outline-none bg-custom-yellow text-center cursor-pointer text-xl font-semibold"
            type="number"
            value={ahpVariables.budget}
            onChange={(e) => {
              parseString(e, budget);
            }}
          />
          <Image
            src={arrowDown}
            alt="arrow down"
            className="cursor-pointer"
            onClick={() => {
              if (ahpVariables.budget > 0) {
                setAhpVariables({
                  ...ahpVariables,
                  budget: ahpVariables.budget - 1,
                });
              }
            }}
          />
        </div>

        <div className="w-[325px] border-2 border-black py-4 px-6 flex items-center flex-col gap-2">
          <Image src={clock} alt="money bag" />
          <label className="text-xl font-semibold ">Ilość godzin</label>
          <Image
            src={arrowUp}
            alt="arrow up"
            className="cursor-pointer"
            onClick={() =>
              setAhpVariables({
                ...ahpVariables,
                hours: ahpVariables.hours + 1,
              })
            }
          />
          <input
            className="outline-none bg-custom-yellow text-center cursor-pointer text-xl font-semibold"
            value={ahpVariables.hours}
            onChange={(e) =>
              setAhpVariables({
                ...ahpVariables,
                hours: Number(e.target.value),
              })
            }
          />
          <Image
            src={arrowDown}
            alt="arrow down"
            className="cursor-pointer"
            onClick={() => {
              if (ahpVariables.hours > 0) {
                setAhpVariables({
                  ...ahpVariables,
                  hours: ahpVariables.hours - 1,
                });
              }
            }}
          />
        </div>

        <div className="w-[325px] border-2 border-black py-4 px-6 flex items-center flex-col gap-2">
          <Image src={user} alt="money bag" />
          <label className="text-xl font-semibold ">
            Ilość programistów frontend
          </label>
          <Image src={arrowUp} alt="arrow up" className="cursor-pointer" />
          <input
            className="outline-none bg-custom-yellow text-center cursor-pointer text-xl font-semibold"
            value={0}
          />
          <Image src={arrowDown} alt="arrow down" className="cursor-pointer" />
        </div>

        <div className="w-[325px] border-2 border-black py-4 px-6 flex items-center flex-col gap-2">
          <Image src={backend} alt="money bag" />
          <label className="text-xl font-semibold ">
            Ilość programistów backend
          </label>
          <Image src={arrowUp} alt="arrow up" className="cursor-pointer" />
          <input
            className="outline-none bg-custom-yellow text-center cursor-pointer text-xl font-semibold"
            value={0}
          />
          <Image src={arrowDown} alt="arrow down" className="cursor-pointer" />
        </div>

        <div className="w-[325px] border-2 border-black py-4 px-6 flex items-center flex-col gap-2">
          <Image src={tester} alt="money bag" />
          <label className="text-xl font-semibold ">Ilość testerów</label>
          <Image src={arrowUp} alt="arrow up" className="cursor-pointer" />
          <input
            className="outline-none bg-custom-yellow text-center cursor-pointer text-xl font-semibold"
            value={0}
          />
          <Image src={arrowDown} alt="arrow down" className="cursor-pointer" />
        </div>

        <div className="w-[325px] h-[268px] border-2 border-black py-4 px-6 flex items-center flex-col gap-2">
          <Image src={grafic} alt="money bag" />
          <label className="text-xl font-semibold pb-6">
            Projekt wymaga grafika?
          </label>

          <input
            className="relative float-left  h-[3.125rem] w-[3.125rem] appearance-none  border-[0.125rem] border-solid border-black outline-none
            before:pointer-events-none before:absolute before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 
             before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] 
            checked:after:absolute checked:after:-mt-12px checked:after:ml-[1.225rem] checked:after:block checked:after:h-[2.325rem] checked:after:w-[0.775rem] 
            checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-black 
            checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04]  focus:transition-[border-color_0.2s]"
            type="checkbox"
          />
        </div>
      </div>
      <div className="border-2 border-black rounded-full py-2 px-2 cursor-pointer my-6">
        <Image src={nextPage} alt="next page" />
      </div>
    </div>
  );
};
