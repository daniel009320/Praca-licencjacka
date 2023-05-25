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
import previousPage from "./../assets/images/button-arrow-down.svg";

export const SawProjectManager = ({ sawVariables, setSawVariables }) => {
  const parseString = (e, updatedVariables) => {
    const numberRegex = /^\d+$/;
    if (numberRegex.test(e.target.value))
      switch (updatedVariables) {
        case "pmDoswiadczenie":
          setSawVariables({
            ...sawVariables,
            pmVariables: {
              ...sawVariables.pmVariables,
              pmDoswiadczenie: Number(e.target.value),
            },
          });
          break;
        case "zarzadzanieZespolem":
          setSawVariables({
            ...sawVariables,
            pmVariables: {
              ...sawVariables.pmVariables,
              zarzadzanieZespolem: Number(e.target.value),
            },
          });
          break;
        case "pmKomunikacja":
          setSawVariables({
            ...sawVariables,
            pmVariables: {
              ...sawVariables.pmVariables,
              pmKomunikacja: Number(e.target.value),
            },
          });
          break;
        case "organizacjaPracy":
          setSawVariables({
            ...sawVariables,
            pmVariables: {
              ...sawVariables.pmVariables,
              organizacjaPracy: Number(e.target.value),
            },
          });
          break;
        case "adaptacja":
          setSawVariables({
            ...sawVariables,
            pmVariables: {
              ...sawVariables.pmVariables,
              adaptacja: Number(e.target.value),
            },
          });
          break;
      }
  };
  let weightSum =
    sawVariables.pmVariables.pmDoswiadczenie +
    sawVariables.pmVariables.zarzadzanieZespolem +
    sawVariables.pmVariables.pmKomunikacja +
    sawVariables.pmVariables.organizacjaPracy +
    sawVariables.pmVariables.adaptacja;

  let doswiadczenieWeight =
    sawVariables.pmVariables.pmDoswiadczenie / weightSum;
  let zarzadzanieZespolemWeight =
    sawVariables.pmVariables.zarzadzanieZespolem / weightSum;
  let komunikacjaWeight = sawVariables.pmVariables.pmKomunikacja / weightSum;
  let organizacjaPracyWeight =
    sawVariables.pmVariables.organizacjaPracy / weightSum;
  let adaptacjaWeight = sawVariables.pmVariables.adaptacja / weightSum;

  console.log(
    weightSum,
    doswiadczenieWeight,
    zarzadzanieZespolemWeight,
    komunikacjaWeight,
    organizacjaPracyWeight,
    adaptacjaWeight
  );
  return (
    <div className="flex w-full  justify-center  flex-col items-center">
      <div className="py-6 text-5xl">
        <h1>Projekt Manager</h1>
      </div>
      <div className="lg:w-2/3 w-full justify-center flex items-center  flex-wrap gap-4  ">
        <div className="w-[325px] border-2 border-black py-4 px-6 flex items-center flex-col gap-2">
          <Image src={budget} alt="money bag" />
          <label className="text-xl font-semibold ">Doswiadczenie</label>
          <Image
            src={arrowUp}
            alt="arrow up"
            className="cursor-pointer"
            onClick={() => {
              if (sawVariables.pmVariables.pmDoswiadczenie < 10) {
                setSawVariables({
                  ...sawVariables,
                  pmVariables: {
                    ...sawVariables.pmVariables,
                    pmDoswiadczenie:
                      sawVariables.pmVariables.pmDoswiadczenie + 1,
                  },
                });
              }
            }}
          />
          <input
            className="outline-none bg-custom-yellow text-center cursor-pointer text-xl font-semibold"
            type="number"
            max={10}
            disabled={true}
            value={sawVariables.pmVariables.pmDoswiadczenie}
            onChange={(e) => {
              parseString(e, "pmDoswiadczenie");
            }}
          />
          <Image
            src={arrowDown}
            alt="arrow down"
            className="cursor-pointer"
            onClick={() => {
              if (sawVariables.pmVariables.pmDoswiadczenie > 1) {
                setSawVariables({
                  ...sawVariables,
                  pmVariables: {
                    ...sawVariables.pmVariables,
                    pmDoswiadczenie:
                      sawVariables.pmVariables.pmDoswiadczenie - 1,
                  },
                });
              }
            }}
          />
        </div>

        <div className="w-[325px] border-2 border-black py-4 px-6 flex items-center flex-col gap-2">
          <Image src={clock} alt="money bag" />
          <label className="text-xl font-semibold ">Zarzadzanie zespołem</label>
          <Image
            src={arrowUp}
            alt="arrow up"
            className="cursor-pointer"
            onClick={() => {
              if (sawVariables.pmVariables.zarzadzanieZespolem < 10) {
                setSawVariables({
                  ...sawVariables,
                  pmVariables: {
                    ...sawVariables.pmVariables,
                    zarzadzanieZespolem:
                      sawVariables.pmVariables.zarzadzanieZespolem + 1,
                  },
                });
              }
            }}
          />
          <input
            className="outline-none bg-custom-yellow text-center cursor-pointer text-xl font-semibold"
            type="number"
            max={10}
            disabled={true}
            value={sawVariables.pmVariables.zarzadzanieZespolem}
            onChange={(e) => {
              parseString(e, "zarzadzanieZespolem");
            }}
          />
          <Image
            src={arrowDown}
            alt="arrow down"
            className="cursor-pointer"
            onClick={() => {
              if (sawVariables.pmVariables.zarzadzanieZespolem > 1) {
                setSawVariables({
                  ...sawVariables,
                  pmVariables: {
                    ...sawVariables.pmVariables,
                    zarzadzanieZespolem:
                      sawVariables.pmVariables.zarzadzanieZespolem - 1,
                  },
                });
              }
            }}
          />
        </div>

        <div className="w-[325px] border-2 border-black py-4 px-6 flex items-center flex-col gap-2">
          <Image src={user} alt="money bag" />
          <label className="text-xl font-semibold ">Komunikacja</label>
          <Image
            src={arrowUp}
            alt="arrow up"
            className="cursor-pointer"
            onClick={() => {
              if (sawVariables.pmVariables.pmKomunikacja < 10) {
                setSawVariables({
                  ...sawVariables,
                  pmVariables: {
                    ...sawVariables.pmVariables,
                    pmKomunikacja: sawVariables.pmVariables.pmKomunikacja + 1,
                  },
                });
              }
            }}
          />
          <input
            className="outline-none bg-custom-yellow text-center cursor-pointer text-xl font-semibold"
            type="number"
            max={10}
            disabled={true}
            value={sawVariables.pmVariables.pmKomunikacja}
            onChange={(e) => {
              parseString(e, "pmKomunikacja");
            }}
          />
          <Image
            src={arrowDown}
            alt="arrow down"
            className="cursor-pointer"
            onClick={() => {
              if (sawVariables.pmVariables.pmKomunikacja > 1) {
                setSawVariables({
                  ...sawVariables,
                  pmVariables: {
                    ...sawVariables.pmVariables,
                    pmKomunikacja: sawVariables.pmVariables.pmKomunikacja - 1,
                  },
                });
              }
            }}
          />
        </div>

        <div className="w-[325px] border-2 border-black py-4 px-6 flex items-center flex-col gap-2">
          <Image src={backend} alt="money bag" />
          <label className="text-xl font-semibold ">Organizacja pracy</label>
          <Image
            src={arrowUp}
            alt="arrow up"
            className="cursor-pointer"
            onClick={() => {
              if (sawVariables.pmVariables.organizacjaPracy < 10) {
                setSawVariables({
                  ...sawVariables,
                  pmVariables: {
                    ...sawVariables.pmVariables,
                    organizacjaPracy:
                      sawVariables.pmVariables.organizacjaPracy + 1,
                  },
                });
              }
            }}
          />
          <input
            className="outline-none bg-custom-yellow text-center cursor-pointer text-xl font-semibold"
            type="number"
            max={10}
            disabled={true}
            value={sawVariables.pmVariables.organizacjaPracy}
            onChange={(e) => {
              parseString(e, "organizacjaPracy");
            }}
          />
          <Image
            src={arrowDown}
            alt="arrow down"
            className="cursor-pointer"
            onClick={() => {
              if (sawVariables.pmVariables.organizacjaPracy > 1) {
                setSawVariables({
                  ...sawVariables,
                  pmVariables: {
                    ...sawVariables.pmVariables,
                    organizacjaPracy:
                      sawVariables.pmVariables.organizacjaPracy - 1,
                  },
                });
              }
            }}
          />
        </div>

        <div className="w-[325px] border-2 border-black py-4 px-6 flex items-center flex-col gap-2">
          <Image src={tester} alt="money bag" />
          <label className="text-xl font-semibold ">
            Adaptacja i elastycznosc
          </label>
          <Image
            src={arrowUp}
            alt="arrow up"
            className="cursor-pointer"
            onClick={() => {
              if (sawVariables.pmVariables.adaptacja < 10) {
                setSawVariables({
                  ...sawVariables,
                  pmVariables: {
                    ...sawVariables.pmVariables,
                    adaptacja: sawVariables.pmVariables.adaptacja + 1,
                  },
                });
              }
            }}
          />
          <input
            className="outline-none bg-custom-yellow text-center cursor-pointer text-xl font-semibold"
            type="number"
            max={10}
            disabled={true}
            value={sawVariables.pmVariables.adaptacja}
            onChange={(e) => {
              parseString(e, "adaptacja");
            }}
          />
          <Image
            src={arrowDown}
            alt="arrow down"
            className="cursor-pointer"
            onClick={() => {
              if (sawVariables.pmVariables.adaptacja > 1) {
                setSawVariables({
                  ...sawVariables,
                  pmVariables: {
                    ...sawVariables.pmVariables,
                    adaptacja: sawVariables.pmVariables.adaptacja - 1,
                  },
                });
              }
            }}
          />
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
      </div>
    </div>
  );
};
