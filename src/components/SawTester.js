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

export const SawTester = ({ sawVariables, setSawVariables }) => {
  const [testerData, setTesterData] = useState("");
  const [changedTesterData, setChangedTesterData] = useState("");
  useEffect(() => {
    async function getPageData() {
      const apiUrlEndPoint = "http://localhost:3000/api/getDataTester";
      const response = await fetch(apiUrlEndPoint);
      const res = await response.json();
      setTesterData(res.results);
    }
    getPageData();
  }, []);

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
  let weightSum =
    sawVariables.testerVariables.testDoswiadczenie +
    sawVariables.testerVariables.testKomunikacja +
    sawVariables.testerVariables.testTestyManualne +
    sawVariables.testerVariables.testTestyAutomatyczne +
    sawVariables.testerVariables.testAdaptacja;

  let doswiadczenieWeight =
    sawVariables.testerVariables.testDoswiadczenie / weightSum;
  let komunikacjaWeight =
    sawVariables.testerVariables.testKomunikacja / weightSum;
  let testyManualneWeight =
    sawVariables.testerVariables.testTestyManualne / weightSum;
  let testyAutomatyczneWeight =
    sawVariables.testerVariables.testTestyAutomatyczne / weightSum;
  let adaptacjaWeight = sawVariables.testerVariables.testAdaptacja / weightSum;

  useEffect(() => {
    const findBestEmployee = (list) => {
      if (testerData !== "") {
        const searchedExp = Math.max(...list.map((obj) => obj.doswiadczenie));
        let hExp = list.filter((obj) => obj.doswiadczenie === searchedExp);
        let currentExp = testerData.map((element) => ({
          value: element.doswiadczenie / hExp[0].doswiadczenie,
          id: element.id,
        }));

        const searchedAutomaticTest = Math.max(
          ...list.map((obj) => obj.testy_automatyczne)
        );
        let automaticTest = list.filter(
          (obj) => obj.testy_automatyczne === searchedAutomaticTest
        );
        let currentAutomaticTest = testerData.map((element) => ({
          value:
            element.testy_automatyczne / automaticTest[0].testy_automatyczne,
          id: element.id,
        }));

        const searchedManualTest = Math.max(
          ...list.map((obj) => obj.testy_manualne)
        );
        let hManualTest = list.filter(
          (obj) => obj.testy_manualne === searchedManualTest
        );
        let currentManualTest = testerData.map((element) => ({
          value: element.testy_manualne / hManualTest[0].testy_manualne,
          id: element.id,
        }));

        const searchedKom = Math.max(...list.map((obj) => obj.komunikacja));
        let hKom = list.filter((obj) => obj.komunikacja === searchedKom);
        let currentKom = testerData.map((element) => ({
          value: element.komunikacja / hKom[0].komunikacja,
          id: element.id,
        }));

        const searchedAdap = Math.max(...list.map((obj) => obj.adaptacja));
        let hAdap = list.filter((obj) => obj.adaptacja === searchedAdap);
        let currentAdap = testerData.map((element) => ({
          value: element.adaptacja / hAdap[0].adaptacja,
          id: element.id,
        }));

        let employesChangedValues = [];
        for (let i = 0; i < testerData.length; i++) {
          employesChangedValues.push({
            id: currentAdap[i].id,
            valueKom: currentKom[i].value,
            valueAdap: currentAdap[i].value,
            valueManualTest: currentManualTest[i].value,
            valueAutomaticTest: currentAutomaticTest[i].value,
            valueExp: currentExp[i].value,
          });
        }

        let finalEmployessWeightSum = [];

        for (let i = 0; i < testerData.length; i++) {
          finalEmployessWeightSum.push({
            id: employesChangedValues[i].id,
            weight:
              employesChangedValues[i].valueManualTest * testyManualneWeight +
              employesChangedValues[i].valueExp * doswiadczenieWeight +
              employesChangedValues[i].valueKom * komunikacjaWeight +
              employesChangedValues[i].valueAdap * adaptacjaWeight +
              employesChangedValues[i].valueAutomaticTest *
                testyAutomatyczneWeight,
          });
        }

        console.log(employesChangedValues, finalEmployessWeightSum);

        setChangedTesterData(finalEmployessWeightSum);
      }
    };
    findBestEmployee(testerData);
  }, [sawVariables]);

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
            onClick={() => {
              if (sawVariables.testerVariables.testDoswiadczenie < 10) {
                setSawVariables({
                  ...sawVariables,
                  testerVariables: {
                    ...sawVariables.testerVariables,
                    testDoswiadczenie:
                      sawVariables.testerVariables.testDoswiadczenie + 1,
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
              if (sawVariables.testerVariables.testDoswiadczenie > 1) {
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
            onClick={() => {
              if (sawVariables.testerVariables.testKomunikacja < 10) {
                setSawVariables({
                  ...sawVariables,
                  testerVariables: {
                    ...sawVariables.testerVariables,
                    testKomunikacja:
                      sawVariables.testerVariables.testKomunikacja + 1,
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
              if (sawVariables.testerVariables.testKomunikacja > 1) {
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
            onClick={() => {
              if (sawVariables.testerVariables.testTestyManualne < 10) {
                setSawVariables({
                  ...sawVariables,
                  testerVariables: {
                    ...sawVariables.testerVariables,
                    testTestyManualne:
                      sawVariables.testerVariables.testTestyManualne + 1,
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
              if (sawVariables.testerVariables.testTestyManualne > 1) {
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
            onClick={() => {
              if (sawVariables.testerVariables.testTestyAutomatyczne < 10) {
                setSawVariables({
                  ...sawVariables,
                  testerVariables: {
                    ...sawVariables.testerVariables,
                    testTestyAutomatyczne:
                      sawVariables.testerVariables.testTestyAutomatyczne + 1,
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
              if (sawVariables.testerVariables.testTestyAutomatyczne > 1) {
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
            onClick={() => {
              if (sawVariables.testerVariables.testAdaptacja < 10) {
                setSawVariables({
                  ...sawVariables,
                  testerVariables: {
                    ...sawVariables.testerVariables,
                    testAdaptacja:
                      sawVariables.testerVariables.testAdaptacja + 1,
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
              if (sawVariables.testerVariables.testAdaptacja > 1) {
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
