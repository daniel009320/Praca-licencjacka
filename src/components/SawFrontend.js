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

export const SawFrontend = ({ sawVariables, setSawVariables }) => {
  const [frontData, setFrontData] = useState("");
  const [changedFrontData, setChangedFrontData] = useState("");
  useEffect(() => {
    async function getPageData() {
      const apiUrlEndPoint = "http://localhost:3000/api/getDataFrontend";
      const response = await fetch(apiUrlEndPoint);
      const res = await response.json();
      setFrontData(res.results);
    }
    getPageData();
  }, []);

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
  let weightSum =
    sawVariables.frontendVariables.frontDoswiadczenie +
    sawVariables.frontendVariables.szybkoscPisaniaKodu +
    sawVariables.frontendVariables.frontKomunikacja +
    sawVariables.frontendVariables.frontPracaZespolowa +
    sawVariables.frontendVariables.frontAdaptacja +
    sawVariables.frontendVariables.testowanieWlasnegoKodu +
    sawVariables.frontendVariables.stylowanie;

  let doswiadczenieWeight =
    sawVariables.frontendVariables.frontDoswiadczenie / weightSum;
  let szybkoscPisaniaKoduWeight =
    sawVariables.frontendVariables.szybkoscPisaniaKodu / weightSum;
  let komunikacjaWeight =
    sawVariables.frontendVariables.frontKomunikacja / weightSum;
  let pracaZespolowaWeight =
    sawVariables.frontendVariables.frontPracaZespolowa / weightSum;
  let adaptacjaWeight =
    sawVariables.frontendVariables.frontAdaptacja / weightSum;
  let testowanieWlasnegoKoduWeight =
    sawVariables.frontendVariables.testowanieWlasnegoKodu / weightSum;
  let stylowanieWeight = sawVariables.frontendVariables.stylowanie / weightSum;

  useEffect(() => {
    const findBestEmployee = (list) => {
      if (frontData !== "") {
        const searchedExp = Math.max(...list.map((obj) => obj.doswiadczenie));
        let hExp = list.filter((obj) => obj.doswiadczenie === searchedExp);
        let currentExp = frontData.map((element) => ({
          value: element.doswiadczenie / hExp[0].doswiadczenie,
          id: element.id,
        }));

        const searchedCodeSpeed = Math.max(
          ...list.map((obj) => obj.szybkosc_pisania_kodu)
        );
        let codeSpeed = list.filter(
          (obj) => obj.szybkosc_pisania_kodu === searchedCodeSpeed
        );
        let currentCodeSpeed = frontData.map((element) => ({
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
        let currentTestCode = frontData.map((element) => ({
          value:
            element.testowanie_wlasnego_kodu /
            hTestCode[0].testowanie_wlasnego_kodu,
          id: element.id,
        }));

        const searchedKom = Math.max(...list.map((obj) => obj.komunikacja));
        let hKom = list.filter((obj) => obj.komunikacja === searchedKom);
        let currentKom = frontData.map((element) => ({
          value: element.komunikacja / hKom[0].komunikacja,
          id: element.id,
        }));

        const searchedAdap = Math.max(...list.map((obj) => obj.adaptacja));
        let hAdap = list.filter((obj) => obj.adaptacja === searchedAdap);
        let currentAdap = frontData.map((element) => ({
          value: element.adaptacja / hAdap[0].adaptacja,
          id: element.id,
        }));

        const searchedTeamWork = Math.max(
          ...list.map((obj) => obj.praca_zespolowa)
        );
        let hTeamWork = list.filter(
          (obj) => obj.praca_zespolowa === searchedTeamWork
        );
        let currentTeamWork = frontData.map((element) => ({
          value: element.praca_zespolowa / hTeamWork[0].praca_zespolowa,
          id: element.id,
        }));

        const searchedStyling = Math.max(...list.map((obj) => obj.stylowanie));
        let hStyling = list.filter((obj) => obj.stylowanie === searchedStyling);
        let currentStyling = frontData.map((element) => ({
          value: element.stylowanie / hStyling[0].stylowanie,
          id: element.id,
        }));

        let employesChangedValues = [];
        for (let i = 0; i < frontData.length; i++) {
          employesChangedValues.push({
            id: currentAdap[i].id,
            valueKom: currentKom[i].value,
            valueAdap: currentAdap[i].value,
            valueTestCode: currentTestCode[i].value,
            valueCodeSpeed: currentCodeSpeed[i].value,
            valueExp: currentExp[i].value,
            valueTeamWork: currentTeamWork[i].value,
            valueStyling: currentStyling[i].value,
          });
        }

        let finalEmployessWeightSum = [];

        for (let i = 0; i < frontData.length; i++) {
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
              employesChangedValues[i].valueTeamWork * pracaZespolowaWeight +
              employesChangedValues[i].valueStyling * stylowanieWeight,
          });
        }

        console.log(employesChangedValues, finalEmployessWeightSum);

        setChangedFrontData(finalEmployessWeightSum);
      }
    };
    findBestEmployee(frontData);
  }, [sawVariables]);

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
            onClick={() => {
              if (sawVariables.frontendVariables.frontDoswiadczenie < 10) {
                setSawVariables({
                  ...sawVariables,
                  frontendVariables: {
                    ...sawVariables.frontendVariables,
                    frontDoswiadczenie:
                      sawVariables.frontendVariables.frontDoswiadczenie + 1,
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
              if (sawVariables.frontendVariables.frontDoswiadczenie > 1) {
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
            onClick={() => {
              if (sawVariables.frontendVariables.szybkoscPisaniaKodu < 10) {
                setSawVariables({
                  ...sawVariables,
                  frontendVariables: {
                    ...sawVariables.frontendVariables,
                    szybkoscPisaniaKodu:
                      sawVariables.frontendVariables.szybkoscPisaniaKodu + 1,
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
              if (sawVariables.frontendVariables.szybkoscPisaniaKodu > 1) {
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
            onClick={() => {
              if (sawVariables.frontendVariables.frontKomunikacja < 10) {
                setSawVariables({
                  ...sawVariables,
                  frontendVariables: {
                    ...sawVariables.frontendVariables,
                    frontKomunikacja:
                      sawVariables.frontendVariables.frontKomunikacja + 1,
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
              if (sawVariables.frontendVariables.frontKomunikacja > 1) {
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
            onClick={() => {
              if (sawVariables.frontendVariables.frontPracaZespolowa < 10) {
                setSawVariables({
                  ...sawVariables,
                  frontendVariables: {
                    ...sawVariables.frontendVariables,
                    frontPracaZespolowa:
                      sawVariables.frontendVariables.frontPracaZespolowa + 1,
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
              if (sawVariables.frontendVariables.frontPracaZespolowa > 1) {
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
            onClick={() => {
              if (sawVariables.frontendVariables.frontAdaptacja < 10) {
                setSawVariables({
                  ...sawVariables,
                  frontendVariables: {
                    ...sawVariables.frontendVariables,
                    frontAdaptacja:
                      sawVariables.frontendVariables.frontAdaptacja + 1,
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
              if (sawVariables.frontendVariables.frontAdaptacja > 1) {
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
            onClick={() => {
              if (sawVariables.frontendVariables.testowanieWlasnegoKodu < 10) {
                setSawVariables({
                  ...sawVariables,
                  frontendVariables: {
                    ...sawVariables.frontendVariables,
                    testowanieWlasnegoKodu:
                      sawVariables.frontendVariables.testowanieWlasnegoKodu + 1,
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
            onClick={() => {
              if (sawVariables.frontendVariables.stylowanie < 10) {
                setSawVariables({
                  ...sawVariables,
                  frontendVariables: {
                    ...sawVariables.frontendVariables,
                    stylowanie: sawVariables.frontendVariables.stylowanie + 1,
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
              if (sawVariables.frontendVariables.stylowanie > 1) {
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
