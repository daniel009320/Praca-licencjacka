import { object, string, number, date, InferType } from "yup";
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

export const Formsaw = ({ sawVariables, setSawVariables }) => {
  let userShema = object({
    budget: number().required().positive().integer(),
    hours: number().required().positive().integer().moreThan(4),
    frontend: number().required().positive().integer(),
    backend: number().required().positive().integer(),
    tester: number().required().positive().integer(),
  });
  let userShema2 = object({
    budget: number().required().positive().integer(),
    hours: number().required().positive().integer().moreThan(3),
    frontend: number().required().positive().integer(),
    backend: number().required().positive().integer(),
    tester: number().required().positive().integer(),
  });
  const parseString = (e, updatedVariables) => {
    const numberRegex = /^\d+$/;
    if (numberRegex.test(e.target.value))
      switch (updatedVariables) {
        case "budget":
          setSawVariables({
            ...sawVariables,
            budget: Number(e.target.value),
          });
          break;
        case "hours":
          setSawVariables({
            ...sawVariables,
            hours: Number(e.target.value),
          });
          break;
        case "frontend":
          setSawVariables({
            ...sawVariables,
            frontend: Number(e.target.value),
          });
          break;
        case "backend":
          setSawVariables({
            ...sawVariables,
            backend: Number(e.target.value),
          });
          break;
        case "tester":
          setSawVariables({
            ...sawVariables,
            tester: Number(e.target.value),
          });
          break;
        case "designer":
          setSawVariables({
            ...sawVariables,
            designer: !sawVariables.designer,
          });
          break;
      }
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
              setSawVariables({
                ...sawVariables,
                budget: sawVariables.budget + 1,
              })
            }
          />
          <input
            className="outline-none bg-custom-yellow text-center cursor-pointer text-xl font-semibold"
            value={sawVariables.budget}
            onChange={(e) => {
              parseString(e, "budget");
            }}
          />
          <Image
            src={arrowDown}
            alt="arrow down"
            className="cursor-pointer"
            onClick={() => {
              if (sawVariables.budget > 0) {
                setSawVariables({
                  ...sawVariables,
                  budget: sawVariables.budget - 1,
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
              setSawVariables({
                ...sawVariables,
                hours: sawVariables.hours + 1,
              })
            }
          />
          <input
            className="outline-none bg-custom-yellow text-center cursor-pointer text-xl font-semibold"
            value={sawVariables.hours}
            onChange={(e) => {
              parseString(e, "hours");
            }}
          />
          <Image
            src={arrowDown}
            alt="arrow down"
            className="cursor-pointer"
            onClick={() => {
              if (sawVariables.hours > 0) {
                setSawVariables({
                  ...sawVariables,
                  hours: sawVariables.hours - 1,
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
          <Image
            src={arrowUp}
            alt="arrow up"
            className="cursor-pointer"
            onClick={() =>
              setSawVariables({
                ...sawVariables,
                frontend: sawVariables.frontend + 1,
              })
            }
          />
          <input
            className="outline-none bg-custom-yellow text-center cursor-pointer text-xl font-semibold"
            value={sawVariables.frontend}
            onChange={(e) => {
              parseString(e, "frontend");
            }}
          />
          <Image
            src={arrowDown}
            alt="arrow down"
            className="cursor-pointer"
            onClick={() => {
              if (sawVariables.frontend > 0) {
                setSawVariables({
                  ...sawVariables,
                  frontend: sawVariables.frontend - 1,
                });
              }
            }}
          />
        </div>

        <div className="w-[325px] border-2 border-black py-4 px-6 flex items-center flex-col gap-2">
          <Image src={backend} alt="money bag" />
          <label className="text-xl font-semibold ">
            Ilość programistów backend
          </label>
          <Image
            src={arrowUp}
            alt="arrow up"
            className="cursor-pointer"
            onClick={() =>
              setSawVariables({
                ...sawVariables,
                backend: sawVariables.backend + 1,
              })
            }
          />
          <input
            className="outline-none bg-custom-yellow text-center cursor-pointer text-xl font-semibold"
            value={sawVariables.backend}
            onChange={(e) => {
              parseString(e, "backend");
            }}
          />
          <Image
            src={arrowDown}
            alt="arrow down"
            className="cursor-pointer"
            onClick={() => {
              if (sawVariables.backend > 0) {
                setSawVariables({
                  ...sawVariables,
                  backend: sawVariables.backend - 1,
                });
              }
            }}
          />
        </div>

        <div className="w-[325px] border-2 border-black py-4 px-6 flex items-center flex-col gap-2">
          <Image src={tester} alt="money bag" />
          <label className="text-xl font-semibold ">Ilość testerów</label>
          <Image
            src={arrowUp}
            alt="arrow up"
            className="cursor-pointer"
            onClick={() =>
              setSawVariables({
                ...sawVariables,
                tester: sawVariables.tester + 1,
              })
            }
          />
          <input
            className="outline-none bg-custom-yellow text-center cursor-pointer text-xl font-semibold"
            value={sawVariables.tester}
            onChange={(e) => {
              parseString(e, "tester");
            }}
          />
          <Image
            src={arrowDown}
            alt="arrow down"
            className="cursor-pointer"
            onClick={() => {
              if (sawVariables.tester > 0) {
                setSawVariables({
                  ...sawVariables,
                  tester: sawVariables.tester - 1,
                });
              }
            }}
          />
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
            checked:after:absolute checked:after:-mt-12px checked:after:ml-[1.125rem] checked:after:block checked:after:h-[2.325rem] checked:after:w-[0.775rem] 
            checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-black 
            checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04]  focus:transition-[border-color_0.2s]"
            type="checkbox"
            checked={sawVariables.designer}
            onChange={(e) => {
              setSawVariables({
                ...sawVariables,
                designer: !sawVariables.designer,
              });
            }}
          />
        </div>
      </div>
      {(
        sawVariables.designer
          ? userShema.isValidSync(sawVariables)
          : userShema2.isValidSync(sawVariables)
      ) ? (
        <div className="border-2 border-black rounded-full py-2 px-2 cursor-pointer my-6">
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
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
