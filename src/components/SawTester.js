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

export const SawTester = ({ sawVariables, setSawVariables }) => {
  const parseString = (e, updatedVariables) => {
    const numberRegex = /^\d+$/;
    if (numberRegex.test(e.target.value))
      switch (updatedVariables) {
        case "testDoswiadczenie":
          setSawVariables({
            ...sawVariables,
            testerVariables: {
              ...sawVariables.testerVariables,
              testDoswiadczenie: Number(e.target.value),
            },
          });
          break;
        case "testKomunikacja":
          setSawVariables({
            ...sawVariables,
            testerVariables: {
              ...sawVariables.testerVariables,
              testKomunikacja: Number(e.target.value),
            },
          });
          break;
        case "testTestyManualne":
          setSawVariables({
            ...sawVariables,
            testerVariables: {
              ...sawVariables.testerVariables,
              testTestyManualne: Number(e.target.value),
            },
          });
          break;
        case "testTestyAutomatyczne":
          setSawVariables({
            ...sawVariables,
            testerVariables: {
              ...sawVariables.testerVariables,
              testTestyAutomatyczne: Number(e.target.value),
            },
          });
          break;
        case "testAdaptacja":
          setSawVariables({
            ...sawVariables,
            testerVariables: {
              ...sawVariables.testerVariables,
              testAdaptacja: Number(e.target.value),
            },
          });
          break;
      }
  };
  return (
    <div className="flex w-full  justify-center  flex-col items-center">
      <div className="py-6 text-5xl">
        <h1>Tester</h1>
      </div>
      <div className="lg:w-2/3 w-full justify-center flex items-center  flex-wrap gap-4  ">
        <div className="w-[325px] border-2 border-black py-4 px-6 flex items-center flex-col gap-2">
          <Image src={budget} alt="money bag" />
          <label className="text-xl font-semibold ">Doswiadczenie</label>
          <Image
            src={arrowUp}
            alt="arrow up"
            className="cursor-pointer"
            onClick={() =>
              setSawVariables({
                ...sawVariables,
                testerVariables: {
                  ...sawVariables.testerVariables,
                  testDoswiadczenie:
                    sawVariables.testerVariables.testDoswiadczenie + 1,
                },
              })
            }
          />
          <input
            className="outline-none bg-custom-yellow text-center cursor-pointer text-xl font-semibold"
            value={sawVariables.testerVariables.testDoswiadczenie}
            onChange={(e) => {
              parseString(e, "testDoswiadczenie");
            }}
          />
          <Image
            src={arrowDown}
            alt="arrow down"
            className="cursor-pointer"
            onClick={() => {
              if (sawVariables.testerVariables.testDoswiadczenie > 0) {
                setSawVariables({
                  ...sawVariables,
                  testerVariables: {
                    ...sawVariables.testerVariables,
                    testDoswiadczenie:
                      sawVariables.testerVariables.testDoswiadczenie - 1,
                  },
                });
              }
            }}
          />
        </div>

        <div className="w-[325px] border-2 border-black py-4 px-6 flex items-center flex-col gap-2">
          <Image src={clock} alt="money bag" />
          <label className="text-xl font-semibold ">Komunikacja</label>
          <Image
            src={arrowUp}
            alt="arrow up"
            className="cursor-pointer"
            onClick={() =>
              setSawVariables({
                ...sawVariables,
                testerVariables: {
                  ...sawVariables.testerVariables,
                  testKomunikacja:
                    sawVariables.testerVariables.testKomunikacja + 1,
                },
              })
            }
          />
          <input
            className="outline-none bg-custom-yellow text-center cursor-pointer text-xl font-semibold"
            value={sawVariables.testerVariables.testKomunikacja}
            onChange={(e) => {
              parseString(e, "testKomunikacja");
            }}
          />
          <Image
            src={arrowDown}
            alt="arrow down"
            className="cursor-pointer"
            onClick={() => {
              if (sawVariables.testerVariables.testKomunikacja > 0) {
                setSawVariables({
                  ...sawVariables,
                  testerVariables: {
                    ...sawVariables.testerVariables,
                    testKomunikacja:
                      sawVariables.testerVariables.testKomunikacja - 1,
                  },
                });
              }
            }}
          />
        </div>

        <div className="w-[325px] border-2 border-black py-4 px-6 flex items-center flex-col gap-2">
          <Image src={user} alt="money bag" />
          <label className="text-xl font-semibold ">Testy Manualne</label>
          <Image
            src={arrowUp}
            alt="arrow up"
            className="cursor-pointer"
            onClick={() =>
              setSawVariables({
                ...sawVariables,
                testerVariables: {
                  ...sawVariables.testerVariables,
                  testTestyManualne:
                    sawVariables.testerVariables.testTestyManualne + 1,
                },
              })
            }
          />
          <input
            className="outline-none bg-custom-yellow text-center cursor-pointer text-xl font-semibold"
            value={sawVariables.testerVariables.testTestyManualne}
            onChange={(e) => {
              parseString(e, "testTestyManualne");
            }}
          />
          <Image
            src={arrowDown}
            alt="arrow down"
            className="cursor-pointer"
            onClick={() => {
              if (sawVariables.testerVariables.testTestyManualne > 0) {
                setSawVariables({
                  ...sawVariables,
                  testerVariables: {
                    ...sawVariables.testerVariables,
                    testTestyManualne:
                      sawVariables.testerVariables.testTestyManualne - 1,
                  },
                });
              }
            }}
          />
        </div>

        <div className="w-[325px] border-2 border-black py-4 px-6 flex items-center flex-col gap-2">
          <Image src={backend} alt="money bag" />
          <label className="text-xl font-semibold ">Testy automatyczne</label>
          <Image
            src={arrowUp}
            alt="arrow up"
            className="cursor-pointer"
            onClick={() =>
              setSawVariables({
                ...sawVariables,
                testerVariables: {
                  ...sawVariables.testerVariables,
                  testTestyAutomatyczne:
                    sawVariables.testerVariables.testTestyAutomatyczne + 1,
                },
              })
            }
          />
          <input
            className="outline-none bg-custom-yellow text-center cursor-pointer text-xl font-semibold"
            value={sawVariables.testerVariables.testTestyAutomatyczne}
            onChange={(e) => {
              parseString(e, "testTestyAutomatyczne");
            }}
          />
          <Image
            src={arrowDown}
            alt="arrow down"
            className="cursor-pointer"
            onClick={() => {
              if (sawVariables.testerVariables.testTestyAutomatyczne > 0) {
                setSawVariables({
                  ...sawVariables,
                  testerVariables: {
                    ...sawVariables.testerVariables,
                    testTestyAutomatyczne:
                      sawVariables.testerVariables.testTestyAutomatyczne - 1,
                  },
                });
              }
            }}
          />
        </div>

        <div className="w-[325px] border-2 border-black py-4 px-6 flex items-center flex-col gap-2">
          <Image src={tester} alt="money bag" />
          <label className="text-xl font-semibold ">Adaptacja</label>
          <Image
            src={arrowUp}
            alt="arrow up"
            className="cursor-pointer"
            onClick={() =>
              setSawVariables({
                ...sawVariables,
                testerVariables: {
                  ...sawVariables.testerVariables,
                  testAdaptacja: sawVariables.testerVariables.testAdaptacja + 1,
                },
              })
            }
          />
          <input
            className="outline-none bg-custom-yellow text-center cursor-pointer text-xl font-semibold"
            value={sawVariables.testerVariables.testAdaptacja}
            onChange={(e) => {
              parseString(e, "testAdaptacja");
            }}
          />
          <Image
            src={arrowDown}
            alt="arrow down"
            className="cursor-pointer"
            onClick={() => {
              if (sawVariables.testerVariables.testAdaptacja > 0) {
                setSawVariables({
                  ...sawVariables,
                  testerVariables: {
                    ...sawVariables.testerVariables,
                    testAdaptacja:
                      sawVariables.testerVariables.testAdaptacja - 1,
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
