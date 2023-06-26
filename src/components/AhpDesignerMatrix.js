import { useState, useEffect } from "react";
import { SelectComponent } from "./SelectComponent";
import Image from "next/image";
import nextPage from "./../assets/images/button-arrow.svg";
import previousPage from "./../assets/images/button-arrow-down.svg";
import ahp from "@/pages/ahp";
import { AiFillInfoCircle } from "react-icons/ai";
import { modalState } from "@/atoms/modalAtom";
import { useRecoilState } from "recoil";
import { Modal } from "./Modal";
export const AhpDesignerMatrix = ({
  employees,
  ahpVariables,
  setAhpVariables,
  sortedEmployeesArray,
  setSortedEmployeesArray,
}) => {
  const [consistationRatioo, setConsistationRatioo] = useState(1);
  const [designerData, setDesignerData] = useState("");
  const [weights, setWeights] = useState("");
  const [showModal, setShowModal] = useRecoilState(modalState);
  useEffect(() => {
    async function getPageData() {
      const apiUrlEndPoint = "http://localhost:3000/api/getDataDesigner";
      const response = await fetch(apiUrlEndPoint);
      const res = await response.json();
      setDesignerData(res.results);
    }
    getPageData();
  }, []);
  const returnBestDesiger = () => {
    if (designerData) {
      return designerData?.map((element) => {
        return {
          id: element.id,
          value:
            element.doswiadczenie * weights.firstRowWeight +
            element.kreatywnosc * weights.fourthRowWeight +
            element.szybkosc_pracy * weights.secondRowWeight +
            element.komunikacja * weights.thirdRowWeight +
            element.responsywnosc * weights.fifthRowWeight,
          employeeID: element.employee_id,
        };
      });
    }
  };
  const sortBestDesigners = () => {
    if (designerData) {
      return returnBestDesiger().sort((a, b) => {
        return b.value - a.value;
      });
    }
  };

  useEffect(() => {
    let firstColSum =
      1 +
      1 / ahpVariables.designerVariables.doswiadczenieSzybkoscPracy +
      1 / ahpVariables.designerVariables.doswiadczenieKomunikacja +
      1 / ahpVariables.designerVariables.doswiadczenieKreatywnosc +
      1 / ahpVariables.designerVariables.doswiadczenieResponsywnosc;

    let secondColSum =
      ahpVariables.designerVariables.doswiadczenieSzybkoscPracy +
      1 +
      1 / ahpVariables.designerVariables.szybkoscPracyKomunikacja +
      1 / ahpVariables.designerVariables.szybkoscPracyKreatywnosc +
      1 / ahpVariables.designerVariables.szybkoscPracyResponsywnosc;

    let thirdColSum =
      ahpVariables.designerVariables.doswiadczenieKomunikacja +
      ahpVariables.designerVariables.szybkoscPracyKomunikacja +
      1 +
      1 / ahpVariables.designerVariables.komunikacjaKreatywnosc +
      1 / ahpVariables.designerVariables.komunikacjaResponsywnosc;

    let fourtColSum =
      ahpVariables.designerVariables.doswiadczenieKreatywnosc +
      ahpVariables.designerVariables.szybkoscPracyKreatywnosc +
      ahpVariables.designerVariables.komunikacjaKreatywnosc +
      1 +
      1 / ahpVariables.designerVariables.kreatywnoscResponsywnosc;

    let fifthColSum =
      ahpVariables.designerVariables.doswiadczenieResponsywnosc +
      ahpVariables.designerVariables.szybkoscPracyResponsywnosc +
      ahpVariables.designerVariables.komunikacjaResponsywnosc +
      ahpVariables.designerVariables.kreatywnoscResponsywnosc +
      1;

    let firstRowFirstCol = 1 / firstColSum;

    let firstRowsecondCol =
      ahpVariables.designerVariables.doswiadczenieSzybkoscPracy / secondColSum;

    let firstRowthirdCol =
      ahpVariables.designerVariables.doswiadczenieKomunikacja / thirdColSum;

    let firstRowfourthCol =
      ahpVariables.designerVariables.doswiadczenieKreatywnosc / fourtColSum;

    let firstRowfifthCol =
      ahpVariables.designerVariables.doswiadczenieResponsywnosc / fifthColSum;

    let secondRowFirstCol =
      1 /
      ahpVariables.designerVariables.doswiadczenieSzybkoscPracy /
      firstColSum;
    let secondRowSecondCol = 1 / secondColSum;
    let secondRowThirdCol =
      ahpVariables.designerVariables.szybkoscPracyKomunikacja / thirdColSum;
    let secondRowFourthCol =
      ahpVariables.designerVariables.szybkoscPracyKreatywnosc / fourtColSum;
    let secondRowFifthCol =
      ahpVariables.designerVariables.szybkoscPracyResponsywnosc / fifthColSum;

    let thirdRowFirstCol =
      1 / ahpVariables.designerVariables.doswiadczenieKomunikacja / firstColSum;
    let thirdRowlSecondCol =
      1 /
      ahpVariables.designerVariables.szybkoscPracyKomunikacja /
      secondColSum;
    let thirdRowThirdCol = 1 / thirdColSum;
    let thirdRowFourCol =
      ahpVariables.designerVariables.komunikacjaKreatywnosc / fourtColSum;
    let thirdRowFifthCol =
      ahpVariables.designerVariables.komunikacjaResponsywnosc / fifthColSum;

    let fourthRowFirstCol =
      1 / ahpVariables.designerVariables.doswiadczenieKreatywnosc / firstColSum;

    let fourthRowlSecondCol =
      1 /
      ahpVariables.designerVariables.szybkoscPracyKreatywnosc /
      secondColSum;
    let fourthRowThirdCol =
      1 / ahpVariables.designerVariables.komunikacjaKreatywnosc / thirdColSum;
    let fourthRowFourCol = 1 / fourtColSum;
    let fourthRowFifthCol =
      ahpVariables.designerVariables.kreatywnoscResponsywnosc / fifthColSum;

    let fifthRowFirstCol =
      1 /
      ahpVariables.designerVariables.doswiadczenieResponsywnosc /
      firstColSum;
    let fifthRowSecondCol =
      1 /
      ahpVariables.designerVariables.szybkoscPracyResponsywnosc /
      secondColSum;
    let fifthRowThirdCol =
      1 / ahpVariables.designerVariables.komunikacjaResponsywnosc / thirdColSum;
    let fiftRowFourthCol =
      1 / ahpVariables.designerVariables.kreatywnoscResponsywnosc / fourtColSum;
    let fifthRowFifthCol = 1 / fifthColSum;
    let firstRowWeight =
      (firstRowFirstCol +
        firstRowsecondCol +
        firstRowthirdCol +
        firstRowfourthCol +
        firstRowfifthCol) /
      5;
    let secondRowWeight =
      (secondRowFirstCol +
        secondRowSecondCol +
        secondRowThirdCol +
        secondRowFourthCol +
        secondRowFifthCol) /
      5;
    let thirdRowWeight =
      (thirdRowFirstCol +
        thirdRowlSecondCol +
        thirdRowThirdCol +
        thirdRowFourCol +
        thirdRowFifthCol) /
      5;
    let fourthRowWeight =
      (fourthRowFirstCol +
        fourthRowlSecondCol +
        fourthRowThirdCol +
        fourthRowFourCol +
        fourthRowFifthCol) /
      5;
    let fifthRowWeight =
      (fifthRowFirstCol +
        fifthRowSecondCol +
        fifthRowThirdCol +
        fiftRowFourthCol +
        fifthRowFifthCol) /
      5;
    /////////////////////////////////
    let firstRowWeightSum =
      (1 * firstRowWeight +
        ahpVariables.designerVariables.doswiadczenieSzybkoscPracy *
          secondRowWeight +
        ahpVariables.designerVariables.doswiadczenieKomunikacja *
          thirdRowWeight +
        ahpVariables.designerVariables.doswiadczenieKreatywnosc *
          fourthRowWeight +
        ahpVariables.designerVariables.doswiadczenieResponsywnosc *
          fifthRowWeight) /
      firstRowWeight;

    let secondRowWeightSum =
      ((1 / ahpVariables.designerVariables.doswiadczenieSzybkoscPracy) *
        firstRowWeight +
        1 * secondRowWeight +
        ahpVariables.designerVariables.szybkoscPracyKomunikacja *
          thirdRowWeight +
        ahpVariables.designerVariables.szybkoscPracyKreatywnosc *
          fourthRowWeight +
        ahpVariables.designerVariables.szybkoscPracyResponsywnosc *
          fifthRowWeight) /
      secondRowWeight;

    let thirdRowWeightSum =
      ((1 / ahpVariables.designerVariables.doswiadczenieKomunikacja) *
        firstRowWeight +
        (1 / ahpVariables.designerVariables.szybkoscPracyKomunikacja) *
          secondRowWeight +
        1 * thirdRowWeight +
        ahpVariables.designerVariables.komunikacjaKreatywnosc *
          fourthRowWeight +
        ahpVariables.designerVariables.komunikacjaResponsywnosc *
          fifthRowWeight) /
      thirdRowWeight;

    let fourthRowWeightSum =
      ((1 / ahpVariables.designerVariables.doswiadczenieKreatywnosc) *
        firstRowWeight +
        (1 / ahpVariables.designerVariables.szybkoscPracyKreatywnosc) *
          secondRowWeight +
        (1 / ahpVariables.designerVariables.komunikacjaKreatywnosc) *
          thirdRowWeight +
        1 * fourthRowWeight +
        ahpVariables.designerVariables.kreatywnoscResponsywnosc *
          fifthRowWeight) /
      fourthRowWeight;

    let fifthRowWeightSum =
      ((1 / ahpVariables.designerVariables.doswiadczenieResponsywnosc) *
        firstRowWeight +
        (1 / ahpVariables.designerVariables.szybkoscPracyResponsywnosc) *
          secondRowWeight +
        (1 / ahpVariables.designerVariables.komunikacjaResponsywnosc) *
          thirdRowWeight +
        (1 / ahpVariables.designerVariables.kreatywnoscResponsywnosc) *
          fourthRowWeight +
        1 * fifthRowWeight) /
      fifthRowWeight;

    let lambdaMax =
      (firstRowWeightSum +
        secondRowWeightSum +
        thirdRowWeightSum +
        fourthRowWeightSum +
        fifthRowWeightSum) /
      5;

    let consistencyIndex = (lambdaMax - 5) / (5 - 1);
    let consistencyRatio = consistencyIndex / 1.11;

    setConsistationRatioo(consistencyRatio);
    setWeights({
      firstRowWeight: fifthRowWeight,
      secondRowWeight: secondRowWeight,
      thirdRowWeight: thirdRowWeight,
      fourthRowWeight: fourthRowWeight,
      fifthRowWeight: fifthRowWeight,
    });
    setSortedEmployeesArray({
      ...sortedEmployeesArray,
      designer: {
        ...sortedEmployeesArray.designer,
        bestDesigners: sortBestDesigners(),
      },
    });
  }, [ahpVariables]);
  const handleClick = () => {
    setShowModal(!showModal);
  };
  return (
    <div>
      <div className="flex justify-center py-8 px-4 text-4xl font-semibold">
        {showModal && (
          <Modal
            content={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis faucibus ante et magna auctor hendrerit. Donec eu porta ante. Integer finibus sem nec lacus volutpat, ut pellentesque ipsum euismod. Cras eu dictum erat, vitae dapibus leo. Maecenas pretium rutrum est, ut efficitur arcu laoreet eu. Suspendisse consequat sagittis felis ac tristique. Nam egestas vel augue ut maximus."
            }
            header={"Instrukcja"}
          />
        )}
        <div className="py-6 text-5xl flex justify-center gap-6 w-full items-center ">
          <h2>Grafik</h2>
          <AiFillInfoCircle
            className="w-12 h-12 pt-2 cursor-pointer "
            onClick={handleClick}
          />
        </div>
      </div>
      <div className="w-full justify-center items-center flex ">
        <table>
          <tr className="column">
            <th className="row"></th>
            <th className="row">Doswiadczenie</th>
            <th className="row">Szybkość pracy</th>
            <th className="row">Komunikacja</th>
            <th className="row">Kreatywność</th>
            <th className="row">Responsywność</th>
          </tr>
          <tr className="column">
            <th className="row">Doswiadczenie</th>
            <td className="row">1</td>
            <td className="row">
              <SelectComponent
                ahpVariables={ahpVariables}
                setAhpVariables={setAhpVariables}
                variableTag="doswiadczenieSzybkoscPracy"
              />
            </td>
            <td className="row">
              <SelectComponent
                ahpVariables={ahpVariables}
                setAhpVariables={setAhpVariables}
                variableTag="doswiadczenieKomunikacja"
              />
            </td>
            <td className="row">
              <SelectComponent
                ahpVariables={ahpVariables}
                setAhpVariables={setAhpVariables}
                variableTag="doswiadczenieKreatywnosc"
              />
            </td>
            <td className="row">
              <SelectComponent
                ahpVariables={ahpVariables}
                setAhpVariables={setAhpVariables}
                variableTag="doswiadczenieResponsywnosc"
              />
            </td>
          </tr>
          <tr className="column">
            <th className="row"> Szybkość pracy</th>
            <td className="row">
              {1 / ahpVariables.designerVariables.doswiadczenieSzybkoscPracy < 1
                ? (
                    1 /
                    ahpVariables.designerVariables.doswiadczenieSzybkoscPracy
                  ).toFixed(3)
                : (
                    1 /
                    ahpVariables.designerVariables.doswiadczenieSzybkoscPracy
                  ).toFixed(0)}
            </td>
            <td className="row"> 1</td>
            <td className="row">
              <SelectComponent
                ahpVariables={ahpVariables}
                setAhpVariables={setAhpVariables}
                variableTag="szybkoscPracyKomunikacja"
              />
            </td>
            <td className="row">
              <SelectComponent
                ahpVariables={ahpVariables}
                setAhpVariables={setAhpVariables}
                variableTag="szybkoscPracyKreatywnosc"
              />
            </td>
            <td className="row">
              <SelectComponent
                ahpVariables={ahpVariables}
                setAhpVariables={setAhpVariables}
                variableTag="szybkoscPracyResponsywnosc"
              />
            </td>
          </tr>
          <tr className="column">
            <th className="row">Komunikacja</th>
            <td className="row">
              {1 / ahpVariables.designerVariables.doswiadczenieKomunikacja < 1
                ? (
                    1 / ahpVariables.designerVariables.doswiadczenieKomunikacja
                  ).toFixed(3)
                : (
                    1 / ahpVariables.designerVariables.doswiadczenieKomunikacja
                  ).toFixed(0)}{" "}
            </td>
            <td className="row">
              {1 / ahpVariables.designerVariables.szybkoscPracyKomunikacja < 1
                ? (
                    1 / ahpVariables.designerVariables.szybkoscPracyKomunikacja
                  ).toFixed(3)
                : (
                    1 / ahpVariables.designerVariables.szybkoscPracyKomunikacja
                  ).toFixed(0)}
            </td>
            <td className="row">1</td>
            <td className="row">
              <SelectComponent
                ahpVariables={ahpVariables}
                setAhpVariables={setAhpVariables}
                variableTag="komunikacjaKreatywnosc"
              />
            </td>
            <td className="row">
              <SelectComponent
                ahpVariables={ahpVariables}
                setAhpVariables={setAhpVariables}
                variableTag="komunikacjaResponsywnosc"
              />
            </td>
          </tr>
          <tr className="column">
            <th className="row">Kreatywność</th>
            <td className="row">
              {1 / ahpVariables.designerVariables.doswiadczenieKreatywnosc < 1
                ? (
                    1 / ahpVariables.designerVariables.doswiadczenieKreatywnosc
                  ).toFixed(3)
                : (
                    1 / ahpVariables.designerVariables.doswiadczenieKreatywnosc
                  ).toFixed(0)}
            </td>
            <td className="row">
              {1 / ahpVariables.designerVariables.szybkoscPracyKreatywnosc < 1
                ? (
                    1 / ahpVariables.designerVariables.szybkoscPracyKreatywnosc
                  ).toFixed(3)
                : (
                    1 / ahpVariables.designerVariables.szybkoscPracyKreatywnosc
                  ).toFixed(0)}
            </td>
            <td className="row">
              {1 / ahpVariables.designerVariables.komunikacjaKreatywnosc < 1
                ? (
                    1 / ahpVariables.designerVariables.komunikacjaKreatywnosc
                  ).toFixed(3)
                : (
                    1 / ahpVariables.designerVariables.komunikacjaKreatywnosc
                  ).toFixed(0)}
            </td>
            <td className="row">1</td>
            <td className="row">
              <SelectComponent
                ahpVariables={ahpVariables}
                setAhpVariables={setAhpVariables}
                variableTag="kreatywnoscResponsywnosc"
              />
            </td>
          </tr>
          <tr className="column">
            <th className="row">Responsywność</th>
            <td className="row">
              {1 / ahpVariables.designerVariables.doswiadczenieResponsywnosc < 1
                ? (
                    1 /
                    ahpVariables.designerVariables.doswiadczenieResponsywnosc
                  ).toFixed(3)
                : (
                    1 /
                    ahpVariables.designerVariables.doswiadczenieResponsywnosc
                  ).toFixed(0)}{" "}
            </td>
            <td className="row">
              {1 / ahpVariables.designerVariables.szybkoscPracyResponsywnosc < 1
                ? (
                    1 /
                    ahpVariables.designerVariables.szybkoscPracyResponsywnosc
                  ).toFixed(3)
                : (
                    1 /
                    ahpVariables.designerVariables.szybkoscPracyResponsywnosc
                  ).toFixed(0)}
            </td>
            <td className="row">
              {1 / ahpVariables.designerVariables.komunikacjaResponsywnosc < 1
                ? (
                    1 / ahpVariables.designerVariables.komunikacjaResponsywnosc
                  ).toFixed(3)
                : (
                    1 / ahpVariables.designerVariables.komunikacjaResponsywnosc
                  ).toFixed(0)}
            </td>
            <td className="row">
              {1 / ahpVariables.designerVariables.kreatywnoscResponsywnosc < 1
                ? (
                    1 / ahpVariables.designerVariables.kreatywnoscResponsywnosc
                  ).toFixed(3)
                : (
                    1 / ahpVariables.designerVariables.kreatywnoscResponsywnosc
                  ).toFixed(0)}
            </td>
            <td className="row">1</td>
          </tr>
        </table>
      </div>
      <div className="flex justify-center items-center space-y-6 font-bold text-xl py-6 ">
        <p>CR: {consistationRatioo.toFixed(2)}</p>
      </div>
      <div className="flex gap-6 justify-center">
        <div className="border-2 border-black rounded-full py-2 px-2 cursor-pointer my-6">
          <Image
            src={previousPage}
            alt="previous page"
            onClick={() =>
              setAhpVariables({
                ...ahpVariables,
                currentPage: ahpVariables.currentPage - 1,
              })
            }
          />
        </div>

        <div className="border-2 border-black rounded-full py-2 px-2 cursor-pointer my-6">
          <Image
            src={nextPage}
            alt="next page"
            onClick={() =>
              setAhpVariables({
                ...ahpVariables,
                currentPage: ahpVariables.currentPage + 1,
              })
            }
          />
        </div>
      </div>
    </div>
  );
};
