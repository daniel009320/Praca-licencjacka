import { useState, useEffect } from "react";
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
  const [backendData, setBackendData] = useState("");
  const [changedBackendData, setChangedBackendData] = useState("");
  useEffect(() => {
    async function getPageData() {
      const apiUrlEndPoint = "http://localhost:3000/api/getDataBackend";
      const response = await fetch(apiUrlEndPoint);
      const res = await response.json();
      setBackendData(res.results);
    }
    getPageData();
  }, []);

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
  let weightSum =
    sawVariables.backendVariables.backDoswiadczenie +
    sawVariables.backendVariables.backSzybkoscPisaniaKodu +
    sawVariables.backendVariables.backKomunikacja +
    sawVariables.backendVariables.backPracaZespolowa +
    sawVariables.backendVariables.backAdaptacja +
    sawVariables.backendVariables.backTestowanieWlasnegoKodu;

  let doswiadczenieWeight =
    sawVariables.backendVariables.backDoswiadczenie / weightSum;
  let szybkoscPisaniaKoduWeight =
    sawVariables.backendVariables.backSzybkoscPisaniaKodu / weightSum;
  let komunikacjaWeight =
    sawVariables.backendVariables.backKomunikacja / weightSum;
  let pracaZespolowaWeight =
    sawVariables.backendVariables.backPracaZespolowa / weightSum;
  let adaptacjaWeight = sawVariables.backendVariables.backAdaptacja / weightSum;
  let testowanieWlasnegoKoduWeight =
    sawVariables.backendVariables.backTestowanieWlasnegoKodu / weightSum;

  useEffect(() => {
    const findBestEmployee = (list) => {
      if (backendData !== "") {
        const searchedExp = Math.max(...list.map((obj) => obj.doswiadczenie));
        let hExp = list.filter((obj) => obj.doswiadczenie === searchedExp);
        let currentExp = backendData.map((element) => ({
          value: element.doswiadczenie / hExp[0].doswiadczenie,
          id: element.id,
        }));

        const searchedCodeSpeed = Math.max(
          ...list.map((obj) => obj.szybkosc_pisania_kodu)
        );
        let codeSpeed = list.filter(
          (obj) => obj.szybkosc_pisania_kodu === searchedCodeSpeed
        );
        let currentCodeSpeed = backendData.map((element) => ({
          value:
            element.szybkosc_pisania_kodu / codeSpeed[0].szybkosc_pisania_kodu,
          id: element.id,
        }));

        const searchedTestCode = Math.max(
          ...list.map((obj) => obj.testowanie_wlasnego_kodu)
        );
        let hTestCode = list.filter(
          (obj) => obj.testowanie_wlasnego_kodu === searchedTestCode
        );
        let currentTestCode = backendData.map((element) => ({
          value:
            element.testowanie_wlasnego_kodu /
            hTestCode[0].testowanie_wlasnego_kodu,
          id: element.id,
        }));

        const searchedKom = Math.max(...list.map((obj) => obj.komunikacja));
        let hKom = list.filter((obj) => obj.komunikacja === searchedKom);
        let currentKom = backendData.map((element) => ({
          value: element.komunikacja / hKom[0].komunikacja,
          id: element.id,
        }));

        const searchedAdap = Math.max(...list.map((obj) => obj.adaptacja));
        let hAdap = list.filter((obj) => obj.adaptacja === searchedAdap);
        let currentAdap = backendData.map((element) => ({
          value: element.adaptacja / hAdap[0].adaptacja,
          id: element.id,
        }));

        const searchedTeamWork = Math.max(
          ...list.map((obj) => obj.praca_zespolowa)
        );
        let hTeamWork = list.filter(
          (obj) => obj.praca_zespolowa === searchedTeamWork
        );
        let currentTeamWork = backendData.map((element) => ({
          value: element.praca_zespolowa / hTeamWork[0].praca_zespolowa,
          id: element.id,
        }));

        let employesChangedValues = [];
        for (let i = 0; i < backendData.length; i++) {
          employesChangedValues.push({
            id: currentAdap[i].id,
            valueKom: currentKom[i].value,
            valueAdap: currentAdap[i].value,
            valueTestCode: currentTestCode[i].value,
            valueCodeSpeed: currentCodeSpeed[i].value,
            valueExp: currentExp[i].value,
            valueTeamWork: currentTeamWork[i].value,
          });
        }

        let finalEmployessWeightSum = [];

        for (let i = 0; i < backendData.length; i++) {
          finalEmployessWeightSum.push({
            id: employesChangedValues[i].id,
            weight:
              employesChangedValues[i].valueCodeSpeed *
                szybkoscPisaniaKoduWeight +
              employesChangedValues[i].valueExp * doswiadczenieWeight +
              employesChangedValues[i].valueKom * komunikacjaWeight +
              employesChangedValues[i].valueAdap * adaptacjaWeight +
              employesChangedValues[i].valueTestCode *
                testowanieWlasnegoKoduWeight +
              employesChangedValues[i].valueTeamWork * pracaZespolowaWeight,
          });
        }

        console.log(employesChangedValues, finalEmployessWeightSum);

        setChangedBackendData(finalEmployessWeightSum);
      }
    };
    findBestEmployee(backendData);
  }, [sawVariables]);
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
            onClick={() => {
              if (sawVariables.backendVariables.backDoswiadczenie < 10) {
                setSawVariables({
                  ...sawVariables,
                  backendVariables: {
                    ...sawVariables.backendVariables,
                    backDoswiadczenie:
                      sawVariables.backendVariables.backDoswiadczenie + 1,
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
              if (sawVariables.backendVariables.backDoswiadczenie > 1) {
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
            onClick={() => {
              if (sawVariables.backendVariables.backSzybkoscPisaniaKodu < 10) {
                setSawVariables({
                  ...sawVariables,
                  backendVariables: {
                    ...sawVariables.backendVariables,
                    backSzybkoscPisaniaKodu:
                      sawVariables.backendVariables.backSzybkoscPisaniaKodu + 1,
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
              if (sawVariables.backendVariables.backSzybkoscPisaniaKodu > 1) {
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
            onClick={() => {
              if (sawVariables.backendVariables.backKomunikacja < 10) {
                setSawVariables({
                  ...sawVariables,
                  backendVariables: {
                    ...sawVariables.backendVariables,
                    backKomunikacja:
                      sawVariables.backendVariables.backKomunikacja + 1,
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
              if (sawVariables.backendVariables.backKomunikacja > 1) {
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
            onClick={() => {
              if (sawVariables.backendVariables.backPracaZespolowa < 10) {
                setSawVariables({
                  ...sawVariables,
                  backendVariables: {
                    ...sawVariables.backendVariables,
                    backPracaZespolowa:
                      sawVariables.backendVariables.backPracaZespolowa + 1,
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
              if (sawVariables.backendVariables.backPracaZespolowa > 1) {
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
            onClick={() => {
              if (sawVariables.backendVariables.backAdaptacja < 10) {
                setSawVariables({
                  ...sawVariables,
                  backendVariables: {
                    ...sawVariables.backendVariables,
                    backAdaptacja:
                      sawVariables.backendVariables.backAdaptacja + 1,
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
              if (sawVariables.backendVariables.backAdaptacja > 1) {
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
            onClick={() => {
              if (
                sawVariables.backendVariables.backTestowanieWlasnegoKodu < 10
              ) {
                setSawVariables({
                  ...sawVariables,
                  backendVariables: {
                    ...sawVariables.backendVariables,
                    backTestowanieWlasnegoKodu:
                      sawVariables.backendVariables.backTestowanieWlasnegoKodu +
                      1,
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
                sawVariables.backendVariables.backTestowanieWlasnegoKodu > 1
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
