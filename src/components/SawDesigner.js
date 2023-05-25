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
import { List } from "@mui/material";

export const SawDesigner = ({ sawVariables, setSawVariables }) => {
  const [designerData, setDesignerData] = useState("");
  const [changedDesignerData, setChangedData] = useState("");
  useEffect(() => {
    async function getPageData() {
      const apiUrlEndPoint = "http://localhost:3000/api/getDataDesigner";
      const response = await fetch(apiUrlEndPoint);
      const res = await response.json();
      setDesignerData(res.results);
    }
    getPageData();
  }, []);
  console.log(designerData);
  const parseString = (e, updatedVariables) => {
    const numberRegex = /^\d+$/;
    if (numberRegex.test(e.target.value))
      switch (updatedVariables) {
        case "doswiadczenie":
          setSawVariables({
            ...sawVariables,
            designerVariables: {
              ...sawVariables.designerVariables,
              doswiadczenie: Number(e.target.value),
            },
          });
          break;
        case "szybkoscPracy":
          setSawVariables({
            ...sawVariables,
            designerVariables: {
              ...sawVariables.designerVariables,
              szybkoscPracy: Number(e.target.value),
            },
          });
          break;
        case "komunikacja":
          setSawVariables({
            ...sawVariables,
            designerVariables: {
              ...sawVariables.designerVariables,
              komunikacja: Number(e.target.value),
            },
          });
          break;
        case "kreatywnosc":
          setSawVariables({
            ...sawVariables,
            designerVariables: {
              ...sawVariables.designerVariables,
              kreatywnosc: Number(e.target.value),
            },
          });
          break;
        case "responsywnosc":
          setSawVariables({
            ...sawVariables,
            designerVariables: {
              ...sawVariables.designerVariables,
              responsywnosc: Number(e.target.value),
            },
          });
          break;
      }
  };
  let weightSum =
    sawVariables.designerVariables.doswiadczenie +
    sawVariables.designerVariables.szybkoscPracy +
    sawVariables.designerVariables.komunikacja +
    sawVariables.designerVariables.kreatywnosc +
    sawVariables.designerVariables.responsywnosc;

  let doswiadczenieWeight =
    sawVariables.designerVariables.doswiadczenie / weightSum;
  let szybkoscPracyWeight =
    sawVariables.designerVariables.szybkoscPracy / weightSum;
  let komunikacjaWeight =
    sawVariables.designerVariables.komunikacja / weightSum;
  let kreatywnoscWeight =
    sawVariables.designerVariables.kreatywnosc / weightSum;
  let resposywnoscWeight =
    sawVariables.designerVariables.responsywnosc / weightSum;

  console.log(
    weightSum,
    doswiadczenieWeight,
    szybkoscPracyWeight,
    komunikacjaWeight,
    kreatywnoscWeight,
    resposywnoscWeight
  );
  const findExperience = (list) => {
    if (designerData) {
      const searchedValue = Math.max(...list.map((obj) => obj.doswiadczenie));
      return list.filter((obj) => obj.doswiadczenie === searchedValue);
    }
  };
  console.log(find(designerData)[0].doswiadczenie);
  return (
    <div className="flex w-full  justify-center  flex-col items-center">
      <div className="py-6 text-5xl">
        <h1>Grafik</h1>
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
              if (sawVariables.designerVariables.doswiadczenie < 10)
                setSawVariables({
                  ...sawVariables,
                  designerVariables: {
                    ...sawVariables.designerVariables,
                    doswiadczenie:
                      sawVariables.designerVariables.doswiadczenie + 1,
                  },
                });
            }}
          />
          <input
            className="outline-none bg-custom-yellow text-center cursor-pointer text-xl font-semibold"
            type="number"
            max={10}
            disabled={true}
            value={sawVariables.designerVariables.doswiadczenie}
            onChange={(e) => {
              parseString(e, "doswiadczenie");
            }}
          />
          <Image
            src={arrowDown}
            alt="arrow down"
            className="cursor-pointer"
            onClick={() => {
              if (sawVariables.designerVariables.doswiadczenie > 1) {
                setSawVariables({
                  ...sawVariables,
                  designerVariables: {
                    ...sawVariables.designerVariables,
                    doswiadczenie:
                      sawVariables.designerVariables.doswiadczenie - 1,
                  },
                });
              }
            }}
          />
        </div>

        <div className="w-[325px] border-2 border-black py-4 px-6 flex items-center flex-col gap-2">
          <Image src={clock} alt="money bag" />
          <label className="text-xl font-semibold ">Szybkość pracy</label>
          <Image
            src={arrowUp}
            alt="arrow up"
            className="cursor-pointer"
            onClick={() => {
              if (sawVariables.designerVariables.szybkoscPracy < 10) {
                setSawVariables({
                  ...sawVariables,
                  designerVariables: {
                    ...sawVariables.designerVariables,
                    szybkoscPracy:
                      sawVariables.designerVariables.szybkoscPracy + 1,
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
            value={sawVariables.designerVariables.szybkoscPracy}
            onChange={(e) => {
              parseString(e, "szybkoscPracy");
            }}
          />
          <Image
            src={arrowDown}
            alt="arrow down"
            className="cursor-pointer"
            onClick={() => {
              if (sawVariables.designerVariables.szybkoscPracy > 1) {
                setSawVariables({
                  ...sawVariables,
                  designerVariables: {
                    ...sawVariables.designerVariables,
                    szybkoscPracy:
                      sawVariables.designerVariables.szybkoscPracy - 1,
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
              if (sawVariables.designerVariables.komunikacja < 10)
                setSawVariables({
                  ...sawVariables,
                  designerVariables: {
                    ...sawVariables.designerVariables,
                    komunikacja: sawVariables.designerVariables.komunikacja + 1,
                  },
                });
            }}
          />
          <input
            className="outline-none bg-custom-yellow text-center cursor-pointer text-xl font-semibold"
            type="number"
            max={10}
            disabled={true}
            value={sawVariables.designerVariables.komunikacja}
            onChange={(e) => {
              parseString(e, "komunikacja");
            }}
          />
          <Image
            src={arrowDown}
            alt="arrow down"
            className="cursor-pointer"
            onClick={() => {
              if (sawVariables.designerVariables.komunikacja > 1) {
                setSawVariables({
                  ...sawVariables,
                  designerVariables: {
                    ...sawVariables.designerVariables,
                    komunikacja: sawVariables.designerVariables.komunikacja - 1,
                  },
                });
              }
            }}
          />
        </div>

        <div className="w-[325px] border-2 border-black py-4 px-6 flex items-center flex-col gap-2">
          <Image src={backend} alt="money bag" />
          <label className="text-xl font-semibold ">Kreatywność</label>
          <Image
            src={arrowUp}
            alt="arrow up"
            className="cursor-pointer"
            onClick={() => {
              if (sawVariables.designerVariables.kreatywnosc < 10)
                setSawVariables({
                  ...sawVariables,
                  designerVariables: {
                    ...sawVariables.designerVariables,
                    kreatywnosc: sawVariables.designerVariables.kreatywnosc + 1,
                  },
                });
            }}
          />
          <input
            className="outline-none bg-custom-yellow text-center cursor-pointer text-xl font-semibold"
            type="number"
            max={10}
            disabled={true}
            value={sawVariables.designerVariables.kreatywnosc}
            onChange={(e) => {
              parseString(e, "kreatywnosc");
            }}
          />
          <Image
            src={arrowDown}
            alt="arrow down"
            className="cursor-pointer"
            onClick={() => {
              if (sawVariables.designerVariables.kreatywnosc > 1) {
                setSawVariables({
                  ...sawVariables,
                  designerVariables: {
                    ...sawVariables.designerVariables,
                    kreatywnosc: sawVariables.designerVariables.kreatywnosc - 1,
                  },
                });
              }
            }}
          />
        </div>

        <div className="w-[325px] border-2 border-black py-4 px-6 flex items-center flex-col gap-2">
          <Image src={tester} alt="money bag" />
          <label className="text-xl font-semibold ">Responsywność</label>
          <Image
            src={arrowUp}
            alt="arrow up"
            className="cursor-pointer"
            onClick={() => {
              if (sawVariables.designerVariables.responsywnosc < 10) {
                setSawVariables({
                  ...sawVariables,
                  designerVariables: {
                    ...sawVariables.designerVariables,
                    responsywnosc:
                      sawVariables.designerVariables.responsywnosc + 1,
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
            value={sawVariables.designerVariables.responsywnosc}
            onChange={(e) => {
              parseString(e, "responsywnosc");
            }}
          />
          <Image
            src={arrowDown}
            alt="arrow down"
            className="cursor-pointer"
            onClick={() => {
              if (sawVariables.designerVariables.responsywnosc > 1) {
                setSawVariables({
                  ...sawVariables,
                  designerVariables: {
                    ...sawVariables.designerVariables,
                    responsywnosc:
                      sawVariables.designerVariables.responsywnosc - 1,
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
