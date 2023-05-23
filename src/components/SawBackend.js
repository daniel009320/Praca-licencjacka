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

export const SawBackend = ({ sawVariables, setSawVariables }) => {
  const parseString = (e, updatedVariables) => {
    const numberRegex = /^\d+$/;
    if (numberRegex.test(e.target.value))
      switch (updatedVariables) {
        case "backDoswiadczenie":
          setSawVariables({
            ...sawVariables,
            backendVariables: {
              ...sawVariables.backendVariables,
              backDoswiadczenie: Number(e.target.value),
            },
          });
          break;
        case "backSzybkoscPisaniaKodu":
          setSawVariables({
            ...sawVariables,
            backendVariables: {
              ...sawVariables.backendVariables,
              backSzybkoscPisaniaKodu: Number(e.target.value),
            },
          });
          break;
        case "backKomunikacja":
          setSawVariables({
            ...sawVariables,
            backendVariables: {
              ...sawVariables.backendVariables,
              backKomunikacja: Number(e.target.value),
            },
          });
          break;
        case "backPracaZespolowa":
          setSawVariables({
            ...sawVariables,
            backendVariables: {
              ...sawVariables.backendVariables,
              backPracaZespolowa: Number(e.target.value),
            },
          });
          break;
        case "backAdaptacja":
          setSawVariables({
            ...sawVariables,
            backendVariables: {
              ...sawVariables.backendVariables,
              backAdaptacja: Number(e.target.value),
            },
          });
          break;
        case "backTestowanieWlasnegoKodu":
          setSawVariables({
            ...sawVariables,
            backendVariables: {
              ...sawVariables.backendVariables,
              backTestowanieWlasnegoKodu: Number(e.target.value),
            },
          });
          break;
      }
  };
  return (
    <div className="flex w-full  justify-center  flex-col items-center">
      <div className="py-6 text-5xl">
        <h1>Backend developer</h1>
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
                backendVariables: {
                  ...sawVariables.backendVariables,
                  backDoswiadczenie:
                    sawVariables.backendVariables.backDoswiadczenie + 1,
                },
              })
            }
          />
          <input
            className="outline-none bg-custom-yellow text-center cursor-pointer text-xl font-semibold"
            value={sawVariables.backendVariables.backDoswiadczenie}
            onChange={(e) => {
              parseString(e, "backDoswiadczenie");
            }}
          />
          <Image
            src={arrowDown}
            alt="arrow down"
            className="cursor-pointer"
            onClick={() => {
              if (sawVariables.backendVariables.backDoswiadczenie > 0) {
                setSawVariables({
                  ...sawVariables,
                  backendVariables: {
                    ...sawVariables.backendVariables,
                    backDoswiadczenie:
                      sawVariables.backendVariables.backDoswiadczenie - 1,
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
                backendVariables: {
                  ...sawVariables.backendVariables,
                  backSzybkoscPisaniaKodu:
                    sawVariables.backendVariables.backSzybkoscPisaniaKodu + 1,
                },
              })
            }
          />
          <input
            className="outline-none bg-custom-yellow text-center cursor-pointer text-xl font-semibold"
            value={sawVariables.backendVariables.backSzybkoscPisaniaKodu}
            onChange={(e) => {
              parseString(e, "backSzybkoscPisaniaKodu");
            }}
          />
          <Image
            src={arrowDown}
            alt="arrow down"
            className="cursor-pointer"
            onClick={() => {
              if (sawVariables.backendVariables.backSzybkoscPisaniaKodu > 0) {
                setSawVariables({
                  ...sawVariables,
                  backendVariables: {
                    ...sawVariables.backendVariables,
                    backSzybkoscPisaniaKodu:
                      sawVariables.backendVariables.backSzybkoscPisaniaKodu - 1,
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
                backendVariables: {
                  ...sawVariables.backendVariables,
                  backKomunikacja:
                    sawVariables.backendVariables.backKomunikacja + 1,
                },
              })
            }
          />
          <input
            className="outline-none bg-custom-yellow text-center cursor-pointer text-xl font-semibold"
            value={sawVariables.backendVariables.backKomunikacja}
            onChange={(e) => {
              parseString(e, "backKomunikacja");
            }}
          />
          <Image
            src={arrowDown}
            alt="arrow down"
            className="cursor-pointer"
            onClick={() => {
              if (sawVariables.backendVariables.backKomunikacja > 0) {
                setSawVariables({
                  ...sawVariables,
                  backendVariables: {
                    ...sawVariables.backendVariables,
                    backKomunikacja:
                      sawVariables.backendVariables.backKomunikacja - 1,
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
                backendVariables: {
                  ...sawVariables.backendVariables,
                  backPracaZespolowa:
                    sawVariables.backendVariables.backPracaZespolowa + 1,
                },
              })
            }
          />
          <input
            className="outline-none bg-custom-yellow text-center cursor-pointer text-xl font-semibold"
            value={sawVariables.backendVariables.backPracaZespolowa}
            onChange={(e) => {
              parseString(e, "backPracaZespolowa");
            }}
          />
          <Image
            src={arrowDown}
            alt="arrow down"
            className="cursor-pointer"
            onClick={() => {
              if (sawVariables.backendVariables.backPracaZespolowa > 0) {
                setSawVariables({
                  ...sawVariables,
                  backendVariables: {
                    ...sawVariables.backendVariables,
                    backPracaZespolowa:
                      sawVariables.backendVariables.backPracaZespolowa - 1,
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
                backendVariables: {
                  ...sawVariables.backendVariables,
                  backAdaptacja:
                    sawVariables.backendVariables.backAdaptacja + 1,
                },
              })
            }
          />
          <input
            className="outline-none bg-custom-yellow text-center cursor-pointer text-xl font-semibold"
            value={sawVariables.backendVariables.backAdaptacja}
            onChange={(e) => {
              parseString(e, "backAdaptacja");
            }}
          />
          <Image
            src={arrowDown}
            alt="arrow down"
            className="cursor-pointer"
            onClick={() => {
              if (sawVariables.backendVariables.backAdaptacja > 0) {
                setSawVariables({
                  ...sawVariables,
                  backendVariables: {
                    ...sawVariables.backendVariables,
                    backAdaptacja:
                      sawVariables.backendVariables.backAdaptacja - 1,
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
                backendVariables: {
                  ...sawVariables.backendVariables,
                  backTestowanieWlasnegoKodu:
                    sawVariables.backendVariables.backTestowanieWlasnegoKodu +
                    1,
                },
              })
            }
          />
          <input
            className="outline-none bg-custom-yellow text-center cursor-pointer text-xl font-semibold"
            value={sawVariables.backendVariables.backTestowanieWlasnegoKodu}
            onChange={(e) => {
              parseString(e, "backTestowanieWlasnegoKodu");
            }}
          />
          <Image
            src={arrowDown}
            alt="arrow down"
            className="cursor-pointer"
            onClick={() => {
              if (
                sawVariables.backendVariables.backTestowanieWlasnegoKodu > 0
              ) {
                setSawVariables({
                  ...sawVariables,
                  backendVariables: {
                    ...sawVariables.backendVariables,
                    backTestowanieWlasnegoKodu:
                      sawVariables.backendVariables.backTestowanieWlasnegoKodu -
                      1,
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
