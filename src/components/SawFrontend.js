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

export const SawFrontend = ({ sawVariables, setSawVariables }) => {
  const parseString = (e, updatedVariables) => {
    const numberRegex = /^\d+$/;
    if (numberRegex.test(e.target.value))
      switch (updatedVariables) {
        case "frontDoswiadczenie":
          setSawVariables({
            ...sawVariables,
            frontendVariables: {
              ...sawVariables.frontendVariables,
              frontDoswiadczenie: Number(e.target.value),
            },
          });
          break;
        case "szybkoscPisaniaKodu":
          setSawVariables({
            ...sawVariables,
            frontendVariables: {
              ...sawVariables.frontendVariables,
              szybkoscPisaniaKodu: Number(e.target.value),
            },
          });
          break;
        case "frontKomunikacja":
          setSawVariables({
            ...sawVariables,
            frontendVariables: {
              ...sawVariables.frontendVariables,
              frontKomunikacja: Number(e.target.value),
            },
          });
          break;
        case "frontPracaZespolowa":
          setSawVariables({
            ...sawVariables,
            frontendVariables: {
              ...sawVariables.frontendVariables,
              frontPracaZespolowa: Number(e.target.value),
            },
          });
          break;
        case "frontAdaptacja":
          setSawVariables({
            ...sawVariables,
            frontendVariables: {
              ...sawVariables.frontendVariables,
              frontAdaptacja: Number(e.target.value),
            },
          });
          break;
        case "testowanieWlasnegoKodu":
          setSawVariables({
            ...sawVariables,
            frontendVariables: {
              ...sawVariables.frontendVariables,
              testowanieWlasnegoKodu: Number(e.target.value),
            },
          });
          break;
        case "stylowanie":
          setSawVariables({
            ...sawVariables,
            frontendVariables: {
              ...sawVariables.frontendVariables,
              stylowanie: Number(e.target.value),
            },
          });
          break;
      }
  };
  return (
    <div className="flex w-full  justify-center  flex-col items-center">
      <div className="py-6 text-5xl">
        <h1>Frontend developer</h1>
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
                frontendVariables: {
                  ...sawVariables.frontendVariables,
                  frontDoswiadczenie:
                    sawVariables.frontendVariables.frontDoswiadczenie + 1,
                },
              })
            }
          />
          <input
            className="outline-none bg-custom-yellow text-center cursor-pointer text-xl font-semibold"
            value={sawVariables.frontendVariables.frontDoswiadczenie}
            onChange={(e) => {
              parseString(e, "frontDoswiadczenie");
            }}
          />
          <Image
            src={arrowDown}
            alt="arrow down"
            className="cursor-pointer"
            onClick={() => {
              if (sawVariables.frontendVariables.frontDoswiadczenie > 0) {
                setSawVariables({
                  ...sawVariables,
                  frontendVariables: {
                    ...sawVariables.frontendVariables,
                    frontDoswiadczenie:
                      sawVariables.frontendVariables.frontDoswiadczenie - 1,
                  },
                });
              }
            }}
          />
        </div>

        <div className="w-[325px] border-2 border-black py-4 px-6 flex items-center flex-col gap-2">
          <Image src={clock} alt="money bag" />
          <label className="text-xl font-semibold ">
            {" "}
            Szybkość pisania kodu
          </label>
          <Image
            src={arrowUp}
            alt="arrow up"
            className="cursor-pointer"
            onClick={() =>
              setSawVariables({
                ...sawVariables,
                frontendVariables: {
                  ...sawVariables.frontendVariables,
                  szybkoscPisaniaKodu:
                    sawVariables.frontendVariables.szybkoscPisaniaKodu + 1,
                },
              })
            }
          />
          <input
            className="outline-none bg-custom-yellow text-center cursor-pointer text-xl font-semibold"
            value={sawVariables.frontendVariables.szybkoscPisaniaKodu}
            onChange={(e) => {
              parseString(e, "szybkoscPisaniaKodu");
            }}
          />
          <Image
            src={arrowDown}
            alt="arrow down"
            className="cursor-pointer"
            onClick={() => {
              if (sawVariables.frontendVariables.szybkoscPisaniaKodu > 0) {
                setSawVariables({
                  ...sawVariables,
                  frontendVariables: {
                    ...sawVariables.frontendVariables,
                    szybkoscPisaniaKodu:
                      sawVariables.frontendVariables.szybkoscPisaniaKodu - 1,
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
            onClick={() =>
              setSawVariables({
                ...sawVariables,
                frontendVariables: {
                  ...sawVariables.frontendVariables,
                  frontKomunikacja:
                    sawVariables.frontendVariables.frontKomunikacja + 1,
                },
              })
            }
          />
          <input
            className="outline-none bg-custom-yellow text-center cursor-pointer text-xl font-semibold"
            value={sawVariables.frontendVariables.frontKomunikacja}
            onChange={(e) => {
              parseString(e, "frontKomunikacja");
            }}
          />
          <Image
            src={arrowDown}
            alt="arrow down"
            className="cursor-pointer"
            onClick={() => {
              if (sawVariables.frontendVariables.frontKomunikacja > 0) {
                setSawVariables({
                  ...sawVariables,
                  frontendVariables: {
                    ...sawVariables.frontendVariables,
                    frontKomunikacja:
                      sawVariables.frontendVariables.frontKomunikacja - 1,
                  },
                });
              }
            }}
          />
        </div>

        <div className="w-[325px] border-2 border-black py-4 px-6 flex items-center flex-col gap-2">
          <Image src={backend} alt="money bag" />
          <label className="text-xl font-semibold "> Praca Zespołowa</label>
          <Image
            src={arrowUp}
            alt="arrow up"
            className="cursor-pointer"
            onClick={() =>
              setSawVariables({
                ...sawVariables,
                frontendVariables: {
                  ...sawVariables.frontendVariables,
                  frontPracaZespolowa:
                    sawVariables.frontendVariables.frontPracaZespolowa + 1,
                },
              })
            }
          />
          <input
            className="outline-none bg-custom-yellow text-center cursor-pointer text-xl font-semibold"
            value={sawVariables.frontendVariables.frontPracaZespolowa}
            onChange={(e) => {
              parseString(e, "frontPracaZespolowa");
            }}
          />
          <Image
            src={arrowDown}
            alt="arrow down"
            className="cursor-pointer"
            onClick={() => {
              if (sawVariables.frontendVariables.frontPracaZespolowa > 0) {
                setSawVariables({
                  ...sawVariables,
                  frontendVariables: {
                    ...sawVariables.frontendVariables,
                    frontPracaZespolowa:
                      sawVariables.frontendVariables.frontPracaZespolowa - 1,
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
                frontendVariables: {
                  ...sawVariables.frontendVariables,
                  frontAdaptacja:
                    sawVariables.frontendVariables.frontAdaptacja + 1,
                },
              })
            }
          />
          <input
            className="outline-none bg-custom-yellow text-center cursor-pointer text-xl font-semibold"
            value={sawVariables.frontendVariables.frontAdaptacja}
            onChange={(e) => {
              parseString(e, "frontAdaptacja");
            }}
          />
          <Image
            src={arrowDown}
            alt="arrow down"
            className="cursor-pointer"
            onClick={() => {
              if (sawVariables.frontendVariables.frontAdaptacja > 0) {
                setSawVariables({
                  ...sawVariables,
                  frontendVariables: {
                    ...sawVariables.frontendVariables,
                    frontAdaptacja:
                      sawVariables.frontendVariables.frontAdaptacja - 1,
                  },
                });
              }
            }}
          />
        </div>
        <div className="w-[325px] border-2 border-black py-4 px-6 flex items-center flex-col gap-2">
          <Image src={tester} alt="money bag" />
          <label className="text-xl font-semibold ">
            Testowanie własnego kodu
          </label>
          <Image
            src={arrowUp}
            alt="arrow up"
            className="cursor-pointer"
            onClick={() =>
              setSawVariables({
                ...sawVariables,
                frontendVariables: {
                  ...sawVariables.frontendVariables,
                  testowanieWlasnegoKodu:
                    sawVariables.frontendVariables.testowanieWlasnegoKodu + 1,
                },
              })
            }
          />
          <input
            className="outline-none bg-custom-yellow text-center cursor-pointer text-xl font-semibold"
            value={sawVariables.frontendVariables.testowanieWlasnegoKodu}
            onChange={(e) => {
              parseString(e, "testowanieWlasnegoKodu");
            }}
          />
          <Image
            src={arrowDown}
            alt="arrow down"
            className="cursor-pointer"
            onClick={() => {
              if (sawVariables.frontendVariables.testowanieWlasnegoKodu > 0) {
                setSawVariables({
                  ...sawVariables,
                  frontendVariables: {
                    ...sawVariables.frontendVariables,
                    testowanieWlasnegoKodu:
                      sawVariables.frontendVariables.testowanieWlasnegoKodu - 1,
                  },
                });
              }
            }}
          />
        </div>
        <div className="w-[325px] border-2 border-black py-4 px-6 flex items-center flex-col gap-2">
          <Image src={tester} alt="money bag" />
          <label className="text-xl font-semibold ">Stylowanie</label>
          <Image
            src={arrowUp}
            alt="arrow up"
            className="cursor-pointer"
            onClick={() =>
              setSawVariables({
                ...sawVariables,
                frontendVariables: {
                  ...sawVariables.frontendVariables,
                  stylowanie: sawVariables.frontendVariables.stylowanie + 1,
                },
              })
            }
          />
          <input
            className="outline-none bg-custom-yellow text-center cursor-pointer text-xl font-semibold"
            value={sawVariables.frontendVariables.stylowanie}
            onChange={(e) => {
              parseString(e, "stylowanie");
            }}
          />
          <Image
            src={arrowDown}
            alt="arrow down"
            className="cursor-pointer"
            onClick={() => {
              if (sawVariables.frontendVariables.stylowanie > 0) {
                setSawVariables({
                  ...sawVariables,
                  frontendVariables: {
                    ...sawVariables.frontendVariables,
                    stylowanie: sawVariables.frontendVariables.stylowanie - 1,
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
