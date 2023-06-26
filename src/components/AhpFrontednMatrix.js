import { useState, useEffect } from "react";
import { SelectComponent } from "./SelectComponent";
import Image from "next/image";
import nextPage from "./../assets/images/button-arrow.svg";
import previousPage from "./../assets/images/button-arrow-down.svg";
import { AiFillInfoCircle } from "react-icons/ai";
import { modalState } from "@/atoms/modalAtom";
import { useRecoilState } from "recoil";
import { Modal } from "./Modal";
export const AhpFrontendMatrix = ({
  employees,
  ahpVariables,
  setAhpVariables,
  sortedEmployeesArray,
  setSortedEmployeesArray,
}) => {
  const [consistationRatioo, setConsistationRatioo] = useState(1);
  const [showModal, setShowModal] = useRecoilState(modalState);
  const [frontendData, setFrontendData] = useState("");
  const [weights, setWeights] = useState("");
  useEffect(() => {
    async function getPageData() {
      const apiUrlEndPoint = "http://localhost:3000/api/getDataFrontend";
      const response = await fetch(apiUrlEndPoint);
      const res = await response.json();
      setFrontendData(res.results);
    }
    getPageData();
  }, []);
  const returnBestFrontend = () => {
    if (frontendData) {
      return frontendData?.map((element) => {
        return {
          id: element.id,
          value:
            element.doswiadczenie * weights.firstRowWeight +
            element.szybkosc_pisania_kodu * weights.secondRowWeight +
            element.testowanie_wlasnego_kodu * weights.sixRowWeight +
            element.praca_zespolowa * weights.fourthRowWeight +
            element.komunikacja * weights.thirdRowWeight +
            element.adaptacja * weights.fifthRowWeight +
            element.stylowanie * weights.sevenRowWeight,
          employeeID: element.employee_id,
        };
      });
    }
  };
  console.log(returnBestFrontend());
  const sortBestFrontend = () => {
    if (frontendData) {
      return returnBestFrontend().sort((a, b) => {
        return b.value - a.value;
      });
    }
  };

  useEffect(() => {
    let firstColSum =
      1 +
      1 / ahpVariables.frontendVariables.frontDoswiadczenieSzybkoscPracy +
      1 / ahpVariables.frontendVariables.forntDoswiadczenieKomunikacja +
      1 / ahpVariables.frontendVariables.doswiadczeniePracaZespolowa +
      1 / ahpVariables.frontendVariables.forntDoswiadczenieAdaptacja +
      1 / ahpVariables.frontendVariables.doswiadczenieTestowanie +
      1 / ahpVariables.frontendVariables.doswiadczenieStylowanie;

    let secondColSum =
      ahpVariables.frontendVariables.frontDoswiadczenieSzybkoscPracy +
      1 +
      1 / ahpVariables.frontendVariables.szybkoscPisaniaKoduKomunikacja +
      1 / ahpVariables.frontendVariables.szybkoscPisaniaKoduPracaZespolowa +
      1 / ahpVariables.frontendVariables.szybkoscPisaniaKoduAdaptacja +
      1 /
        ahpVariables.frontendVariables
          .szybkoscPisaniaKoduTesowanieWlasnegoKodu +
      1 / ahpVariables.frontendVariables.szybkoscPisaniaKoduStylowanie;

    let thirdColSum =
      ahpVariables.frontendVariables.forntDoswiadczenieKomunikacja +
      ahpVariables.frontendVariables.szybkoscPisaniaKoduKomunikacja +
      1 +
      1 / ahpVariables.frontendVariables.komunikacjaPracaZespolowa +
      1 / ahpVariables.frontendVariables.frontKomunikacjaAdaptacja +
      1 / ahpVariables.frontendVariables.komunikacjaTestowanie +
      1 / ahpVariables.frontendVariables.komunikacjaStylowanie;

    let fourtColSum =
      ahpVariables.frontendVariables.doswiadczeniePracaZespolowa +
      ahpVariables.frontendVariables.szybkoscPisaniaKoduPracaZespolowa +
      ahpVariables.frontendVariables.komunikacjaPracaZespolowa +
      1 +
      1 / ahpVariables.frontendVariables.pracaZespolowaAdaptacja +
      1 / ahpVariables.frontendVariables.pracaZespolowaTestowanie +
      1 / ahpVariables.frontendVariables.pracaZespolowaStylowanie;

    let fifthColSum =
      ahpVariables.frontendVariables.forntDoswiadczenieAdaptacja +
      ahpVariables.frontendVariables.szybkoscPisaniaKoduAdaptacja +
      ahpVariables.frontendVariables.frontKomunikacjaAdaptacja +
      ahpVariables.frontendVariables.pracaZespolowaAdaptacja +
      1 +
      1 / ahpVariables.frontendVariables.adaptacjaTestowanie +
      1 / ahpVariables.frontendVariables.adaptacjaStylowanie;

    let sixColSum =
      ahpVariables.frontendVariables.doswiadczenieTestowanie +
      ahpVariables.frontendVariables.szybkoscPisaniaKoduTesowanieWlasnegoKodu +
      ahpVariables.frontendVariables.komunikacjaTestowanie +
      ahpVariables.frontendVariables.pracaZespolowaTestowanie +
      1 / ahpVariables.frontendVariables.adaptacjaTestowanie +
      1 +
      1 / ahpVariables.frontendVariables.testowanieStylowanie;

    let sevenColSum =
      ahpVariables.frontendVariables.doswiadczenieStylowanie +
      ahpVariables.frontendVariables.szybkoscPisaniaKoduStylowanie +
      ahpVariables.frontendVariables.komunikacjaStylowanie +
      ahpVariables.frontendVariables.pracaZespolowaStylowanie +
      1 / ahpVariables.frontendVariables.adaptacjaStylowanie +
      1 / ahpVariables.frontendVariables.testowanieStylowanie +
      1;
    let firstRowFirstCol = 1 / firstColSum;

    let firstRowsecondCol =
      ahpVariables.frontendVariables.frontDoswiadczenieSzybkoscPracy /
      secondColSum;

    let firstRowthirdCol =
      ahpVariables.frontendVariables.forntDoswiadczenieKomunikacja /
      thirdColSum;

    let firstRowfourthCol =
      ahpVariables.frontendVariables.doswiadczeniePracaZespolowa / fourtColSum;

    let firstRowfifthCol =
      ahpVariables.frontendVariables.forntDoswiadczenieAdaptacja / fifthColSum;

    let firstRowSixCol =
      ahpVariables.frontendVariables.doswiadczenieTestowanie / sixColSum;
    let firstRowSevenCol =
      ahpVariables.frontendVariables.doswiadczenieStylowanie / sevenColSum;

    let secondRowFirstCol =
      1 /
      ahpVariables.frontendVariables.frontDoswiadczenieSzybkoscPracy /
      firstColSum;
    let secondRowSecondCol = 1 / secondColSum;
    let secondRowThirdCol =
      ahpVariables.frontendVariables.szybkoscPisaniaKoduKomunikacja /
      thirdColSum;
    let secondRowFourthCol =
      ahpVariables.frontendVariables.szybkoscPisaniaKoduPracaZespolowa /
      fourtColSum;
    let secondRowFifthCol =
      ahpVariables.frontendVariables.szybkoscPisaniaKoduAdaptacja / fifthColSum;
    let secondRowSixCol =
      ahpVariables.frontendVariables.szybkoscPisaniaKoduTesowanieWlasnegoKodu /
      sixColSum;
    let secondRowSevenCol =
      ahpVariables.frontendVariables.szybkoscPisaniaKoduStylowanie /
      sevenColSum;

    let thirdRowFirstCol =
      1 /
      ahpVariables.frontendVariables.forntDoswiadczenieKomunikacja /
      firstColSum;
    let thirdRowlSecondCol =
      1 /
      ahpVariables.frontendVariables.szybkoscPisaniaKoduKomunikacja /
      secondColSum;
    let thirdRowThirdCol = 1 / thirdColSum;
    let thirdRowFourCol =
      ahpVariables.frontendVariables.komunikacjaPracaZespolowa / fourtColSum;
    let thirdRowFifthCol =
      ahpVariables.frontendVariables.frontKomunikacjaAdaptacja / fifthColSum;
    let thirdRowSixCol =
      ahpVariables.frontendVariables.komunikacjaTestowanie / sixColSum;
    let thirdRowSevenCol =
      ahpVariables.frontendVariables.komunikacjaStylowanie / sevenColSum;

    let fourthRowFirstCol =
      1 /
      ahpVariables.frontendVariables.doswiadczeniePracaZespolowa /
      firstColSum;

    let fourthRowlSecondCol =
      1 /
      ahpVariables.frontendVariables.szybkoscPisaniaKoduPracaZespolowa /
      secondColSum;
    let fourthRowThirdCol =
      1 /
      ahpVariables.frontendVariables.komunikacjaPracaZespolowa /
      thirdColSum;
    let fourthRowFourCol = 1 / fourtColSum;
    let fourthRowFifthCol =
      ahpVariables.frontendVariables.pracaZespolowaAdaptacja / fifthColSum;
    let fourthRowSixCol =
      ahpVariables.frontendVariables.pracaZespolowaTestowanie / sixColSum;
    let fourthRowSevenCol =
      ahpVariables.frontendVariables.pracaZespolowaStylowanie / sevenColSum;

    let fifthRowFirstCol =
      1 /
      ahpVariables.frontendVariables.forntDoswiadczenieAdaptacja /
      firstColSum;
    let fifthRowSecondCol =
      1 /
      ahpVariables.frontendVariables.szybkoscPisaniaKoduAdaptacja /
      secondColSum;
    let fifthRowThirdCol =
      1 /
      ahpVariables.frontendVariables.frontKomunikacjaAdaptacja /
      thirdColSum;
    let fiftRowFourthCol =
      1 / ahpVariables.frontendVariables.pracaZespolowaAdaptacja / fourtColSum;
    let fifthRowFifthCol = 1 / fifthColSum;
    let fifthRowSixCol =
      ahpVariables.frontendVariables.adaptacjaTestowanie / sixColSum;
    let fifthRowSevenCol =
      ahpVariables.frontendVariables.adaptacjaStylowanie / sevenColSum;

    let sixRowFirstCol =
      1 / ahpVariables.frontendVariables.doswiadczenieTestowanie / firstColSum;
    let sixRowSecondCol =
      1 /
      ahpVariables.frontendVariables.szybkoscPisaniaKoduTesowanieWlasnegoKodu /
      secondColSum;
    let sixRowThirdCol =
      1 / ahpVariables.frontendVariables.komunikacjaTestowanie / thirdColSum;
    let sixRowFourthCol =
      1 / ahpVariables.frontendVariables.pracaZespolowaTestowanie / fourtColSum;
    let sixRowFifthCol =
      ahpVariables.frontendVariables.adaptacjaTestowanie / sixColSum;
    let sixRowSixCol = 1 / fifthColSum;
    let sixRowSevenCol =
      ahpVariables.frontendVariables.testowanieStylowanie / sevenColSum;

    let sevenRowFirstCol =
      1 / ahpVariables.frontendVariables.doswiadczenieStylowanie / firstColSum;
    let sevenRowSecondCol =
      1 /
      ahpVariables.frontendVariables.szybkoscPisaniaKoduStylowanie /
      secondColSum;
    let sevenRowThirdCol =
      1 / ahpVariables.frontendVariables.komunikacjaStylowanie / thirdColSum;
    let sevenRowFourthCol =
      1 / ahpVariables.frontendVariables.pracaZespolowaStylowanie / fourtColSum;
    let sevenRowFifthCol =
      ahpVariables.frontendVariables.adaptacjaStylowanie / sixColSum;
    let sevenRowSixCol =
      ahpVariables.frontendVariables.testowanieStylowanie / sevenColSum;
    let sevenRowSevenCol = 1 / fifthColSum;

    let firstRowWeight =
      (firstRowFirstCol +
        firstRowsecondCol +
        firstRowthirdCol +
        firstRowfourthCol +
        firstRowfifthCol +
        firstRowSixCol +
        firstRowSevenCol) /
      7;
    let secondRowWeight =
      (secondRowFirstCol +
        secondRowSecondCol +
        secondRowThirdCol +
        secondRowFourthCol +
        secondRowFifthCol +
        secondRowSixCol +
        secondRowSevenCol) /
      7;
    let thirdRowWeight =
      (thirdRowFirstCol +
        thirdRowlSecondCol +
        thirdRowThirdCol +
        thirdRowFourCol +
        thirdRowFifthCol +
        thirdRowSixCol +
        thirdRowSevenCol) /
      7;
    let fourthRowWeight =
      (fourthRowFirstCol +
        fourthRowlSecondCol +
        fourthRowThirdCol +
        fourthRowFourCol +
        fourthRowFifthCol +
        fourthRowSixCol +
        fourthRowSevenCol) /
      7;
    let fifthRowWeight =
      (fifthRowFirstCol +
        fifthRowSecondCol +
        fifthRowThirdCol +
        fiftRowFourthCol +
        fifthRowFifthCol +
        fifthRowSixCol +
        fifthRowSevenCol) /
      7;
    let sixRowWeight =
      (sixRowFirstCol +
        sixRowSecondCol +
        sixRowThirdCol +
        sixRowFourthCol +
        sixRowFifthCol +
        sixRowSixCol +
        sixRowSevenCol) /
      7;
    let sevenRowWeight =
      (sevenRowFirstCol +
        sevenRowSecondCol +
        sevenRowThirdCol +
        sevenRowFourthCol +
        sevenRowFifthCol +
        sevenRowSixCol +
        sevenRowSevenCol) /
      7;

    ////////////////////////////////////////
    let firstRowWeightSum =
      (1 * firstRowWeight +
        ahpVariables.frontendVariables.frontDoswiadczenieSzybkoscPracy *
          secondRowWeight +
        ahpVariables.frontendVariables.forntDoswiadczenieKomunikacja *
          thirdRowWeight +
        ahpVariables.frontendVariables.doswiadczeniePracaZespolowa *
          fourthRowWeight +
        ahpVariables.frontendVariables.forntDoswiadczenieAdaptacja *
          fifthRowWeight +
        ahpVariables.frontendVariables.doswiadczenieTestowanie * sixRowWeight +
        ahpVariables.frontendVariables.doswiadczenieStylowanie *
          sevenRowWeight) /
      firstRowWeight;

    let secondRowWeightSum =
      ((1 / ahpVariables.frontendVariables.frontDoswiadczenieSzybkoscPracy) *
        firstRowWeight +
        1 * secondRowWeight +
        ahpVariables.frontendVariables.szybkoscPisaniaKoduKomunikacja *
          thirdRowWeight +
        ahpVariables.frontendVariables.szybkoscPisaniaKoduPracaZespolowa *
          fourthRowWeight +
        ahpVariables.frontendVariables.szybkoscPisaniaKoduAdaptacja *
          fifthRowWeight +
        ahpVariables.frontendVariables
          .szybkoscPisaniaKoduTesowanieWlasnegoKodu *
          sixRowWeight +
        ahpVariables.frontendVariables.szybkoscPisaniaKoduStylowanie *
          sevenRowWeight) /
      secondRowWeight;

    let thirdRowWeightSum =
      ((1 / ahpVariables.frontendVariables.forntDoswiadczenieKomunikacja) *
        firstRowWeight +
        (1 / ahpVariables.frontendVariables.szybkoscPisaniaKoduKomunikacja) *
          secondRowWeight +
        1 * thirdRowWeight +
        ahpVariables.frontendVariables.komunikacjaPracaZespolowa *
          fourthRowWeight +
        ahpVariables.frontendVariables.frontKomunikacjaAdaptacja *
          fifthRowWeight +
        ahpVariables.frontendVariables.komunikacjaTestowanie * sixRowWeight +
        ahpVariables.frontendVariables.komunikacjaStylowanie * sevenRowWeight) /
      thirdRowWeight;

    let fourthRowWeightSum =
      ((1 / ahpVariables.frontendVariables.doswiadczeniePracaZespolowa) *
        firstRowWeight +
        (1 / ahpVariables.frontendVariables.szybkoscPisaniaKoduPracaZespolowa) *
          secondRowWeight +
        (1 / ahpVariables.frontendVariables.komunikacjaPracaZespolowa) *
          thirdRowWeight +
        1 * fourthRowWeight +
        ahpVariables.frontendVariables.pracaZespolowaAdaptacja *
          fifthRowWeight +
        ahpVariables.frontendVariables.pracaZespolowaTestowanie * sixRowWeight +
        ahpVariables.frontendVariables.pracaZespolowaStylowanie *
          sevenRowWeight) /
      fourthRowWeight;

    let fifthRowWeightSum =
      ((1 / ahpVariables.frontendVariables.forntDoswiadczenieAdaptacja) *
        firstRowWeight +
        (1 / ahpVariables.frontendVariables.szybkoscPisaniaKoduAdaptacja) *
          secondRowWeight +
        (1 / ahpVariables.frontendVariables.frontKomunikacjaAdaptacja) *
          thirdRowWeight +
        (1 / ahpVariables.frontendVariables.pracaZespolowaAdaptacja) *
          fourthRowWeight +
        1 * fifthRowWeight +
        ahpVariables.frontendVariables.adaptacjaTestowanie * sixRowWeight +
        ahpVariables.frontendVariables.adaptacjaStylowanie * sevenRowWeight) /
      fifthRowWeight;

    let sixRowWeightSum =
      ((1 / ahpVariables.frontendVariables.doswiadczenieTestowanie) *
        firstRowWeight +
        (1 /
          ahpVariables.frontendVariables
            .szybkoscPisaniaKoduTesowanieWlasnegoKodu) *
          secondRowWeight +
        (1 / ahpVariables.frontendVariables.komunikacjaTestowanie) *
          thirdRowWeight +
        (1 / ahpVariables.frontendVariables.pracaZespolowaTestowanie) *
          fourthRowWeight +
        (1 / ahpVariables.frontendVariables.adaptacjaTestowanie) *
          fifthRowWeight +
        1 * sixRowWeight +
        ahpVariables.frontendVariables.testowanieStylowanie * sevenRowWeight) /
      sixRowWeight;

    let sevenRowWeightSum =
      ((1 / ahpVariables.frontendVariables.doswiadczenieStylowanie) *
        firstRowWeight +
        (1 / ahpVariables.frontendVariables.szybkoscPisaniaKoduStylowanie) *
          secondRowWeight +
        (1 / ahpVariables.frontendVariables.komunikacjaStylowanie) *
          thirdRowWeight +
        (1 / ahpVariables.frontendVariables.pracaZespolowaStylowanie) *
          fourthRowWeight +
        (1 / ahpVariables.frontendVariables.adaptacjaStylowanie) *
          fifthRowWeight +
        ahpVariables.frontendVariables.testowanieStylowanie * sixRowWeight +
        1 * sevenRowWeight) /
      sevenRowWeight;
    let lambdaMax =
      (firstRowWeightSum +
        secondRowWeightSum +
        thirdRowWeightSum +
        fourthRowWeightSum +
        fifthRowWeightSum +
        sixRowWeightSum +
        sevenRowWeightSum) /
        7 +
      0.000000000000001;

    let consistencyIndex = (lambdaMax - 7) / (7 - 1);
    let consistencyRatio = consistencyIndex / 1.35;
    console.log(
      "Ci:",
      consistencyIndex,
      "lambda",
      lambdaMax,
      "CR:",
      consistencyRatio
    );

    console.log(
      ((1 / ahpVariables.frontendVariables.doswiadczenieStylowanie) *
        firstRowWeight +
        (1 / ahpVariables.frontendVariables.szybkoscPisaniaKoduStylowanie) *
          secondRowWeight +
        (1 / ahpVariables.frontendVariables.komunikacjaStylowanie) *
          thirdRowWeight +
        (1 / ahpVariables.frontendVariables.pracaZespolowaStylowanie) *
          fourthRowWeight +
        (1 / ahpVariables.frontendVariables.adaptacjaStylowanie) *
          fifthRowWeight +
        ahpVariables.frontendVariables.testowanieStylowanie * sixRowWeight +
        1 * sevenRowWeight) /
        sevenRowWeight
    );
    console.log(sevenRowWeight);
    setConsistationRatioo(consistencyRatio);
    setWeights({
      firstRowWeight: fifthRowWeight,
      secondRowWeight: secondRowWeight,
      thirdRowWeight: thirdRowWeight,
      fourthRowWeight: fourthRowWeight,
      fifthRowWeight: fifthRowWeight,
      sixRowWeight: sixRowWeight,
      sevenRowWeight: sevenRowWeight,
    });
    setSortedEmployeesArray({
      ...sortedEmployeesArray,
      frontend: {
        ...sortedEmployeesArray.fronted,
        bestFrontend: sortBestFrontend(),
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
          <h2>Programista frontendowy</h2>

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
            <th className="row">Szybkość pisania kodu</th>
            <th className="row">Komunikacja</th>
            <th className="row">Praca zespołowa</th>
            <th className="row">Adaptacja</th>
            <th className="row">Testowanie własnego kodu</th>
            <th className="row">Stylowanie</th>
          </tr>
          <tr className="column">
            <th className="row">Doswiadczenie</th>
            <td className="row">1</td>
            <td className="row">
              <SelectComponent
                ahpVariables={ahpVariables}
                setAhpVariables={setAhpVariables}
                variableTag="frontDoswiadczenieSzybkoscPracy"
              />
            </td>
            <td className="row">
              <SelectComponent
                ahpVariables={ahpVariables}
                setAhpVariables={setAhpVariables}
                variableTag="forntDoswiadczenieKomunikacja"
              />
            </td>
            <td className="row">
              <SelectComponent
                ahpVariables={ahpVariables}
                setAhpVariables={setAhpVariables}
                variableTag="doswiadczeniePracaZespolowa"
              />
            </td>
            <td className="row">
              <SelectComponent
                ahpVariables={ahpVariables}
                setAhpVariables={setAhpVariables}
                variableTag="forntDoswiadczenieAdaptacja"
              />
            </td>
            <td className="row">
              <SelectComponent
                ahpVariables={ahpVariables}
                setAhpVariables={setAhpVariables}
                variableTag="doswiadczenieTestowanie"
              />
            </td>
            <td className="row">
              <SelectComponent
                ahpVariables={ahpVariables}
                setAhpVariables={setAhpVariables}
                variableTag="doswiadczenieStylowanie"
              />
            </td>
          </tr>
          <tr className="column">
            <th className="row"> Szybkość pisania kodu</th>
            <td className="row">
              {1 /
                ahpVariables.frontendVariables.frontDoswiadczenieSzybkoscPracy <
              1
                ? (
                    1 /
                    ahpVariables.frontendVariables
                      .frontDoswiadczenieSzybkoscPracy
                  ).toFixed(3)
                : (
                    1 /
                    ahpVariables.frontendVariables
                      .frontDoswiadczenieSzybkoscPracy
                  ).toFixed(0)}
            </td>
            <td className="row"> 1</td>
            <td className="row">
              <SelectComponent
                ahpVariables={ahpVariables}
                setAhpVariables={setAhpVariables}
                variableTag="szybkoscPisaniaKoduKomunikacja"
              />
            </td>
            <td className="row">
              <SelectComponent
                ahpVariables={ahpVariables}
                setAhpVariables={setAhpVariables}
                variableTag="szybkoscPisaniaKoduPracaZespolowa"
              />
            </td>
            <td className="row">
              <SelectComponent
                ahpVariables={ahpVariables}
                setAhpVariables={setAhpVariables}
                variableTag="szybkoscPisaniaKoduAdaptacja"
              />
            </td>
            <td className="row">
              <SelectComponent
                ahpVariables={ahpVariables}
                setAhpVariables={setAhpVariables}
                variableTag="szybkoscPisaniaKoduTesowanieWlasnegoKodu"
              />
            </td>
            <td className="row">
              <SelectComponent
                ahpVariables={ahpVariables}
                setAhpVariables={setAhpVariables}
                variableTag="szybkoscPisaniaKoduStylowanie"
              />
            </td>
          </tr>
          <tr className="column">
            <th className="row">Komunikacja</th>
            <td className="row">
              {1 /
                ahpVariables.frontendVariables.forntDoswiadczenieKomunikacja <
              1
                ? (
                    1 /
                    ahpVariables.frontendVariables.forntDoswiadczenieKomunikacja
                  ).toFixed(3)
                : (
                    1 /
                    ahpVariables.frontendVariables.forntDoswiadczenieKomunikacja
                  ).toFixed(0)}{" "}
            </td>
            <td className="row">
              {1 /
                ahpVariables.frontendVariables.szybkoscPisaniaKoduKomunikacja <
              1
                ? (
                    1 /
                    ahpVariables.frontendVariables
                      .szybkoscPisaniaKoduKomunikacja
                  ).toFixed(3)
                : (
                    1 /
                    ahpVariables.frontendVariables
                      .szybkoscPisaniaKoduKomunikacja
                  ).toFixed(0)}
            </td>
            <td className="row">1</td>
            <td className="row">
              <SelectComponent
                ahpVariables={ahpVariables}
                setAhpVariables={setAhpVariables}
                variableTag="komunikacjaPracaZespolowa"
              />
            </td>
            <td className="row">
              <SelectComponent
                ahpVariables={ahpVariables}
                setAhpVariables={setAhpVariables}
                variableTag="frontKomunikacjaAdaptacja"
              />
            </td>
            <td className="row">
              <SelectComponent
                ahpVariables={ahpVariables}
                setAhpVariables={setAhpVariables}
                variableTag="komunikacjaTestowanie"
              />
            </td>
            <td className="row">
              <SelectComponent
                ahpVariables={ahpVariables}
                setAhpVariables={setAhpVariables}
                variableTag="komunikacjaStylowanie"
              />
            </td>
          </tr>
          <tr className="column">
            <th className="row">Praca zespołowa</th>
            <td className="row">
              {1 / ahpVariables.frontendVariables.doswiadczeniePracaZespolowa <
              1
                ? (
                    1 /
                    ahpVariables.frontendVariables.doswiadczeniePracaZespolowa
                  ).toFixed(3)
                : (
                    1 /
                    ahpVariables.frontendVariables.doswiadczeniePracaZespolowa
                  ).toFixed(0)}
            </td>
            <td className="row">
              {1 /
                ahpVariables.frontendVariables
                  .szybkoscPisaniaKoduPracaZespolowa <
              1
                ? (
                    1 /
                    ahpVariables.frontendVariables
                      .szybkoscPisaniaKoduPracaZespolowa
                  ).toFixed(3)
                : (
                    1 /
                    ahpVariables.frontendVariables
                      .szybkoscPisaniaKoduPracaZespolowa
                  ).toFixed(0)}
            </td>
            <td className="row">
              {1 / ahpVariables.frontendVariables.komunikacjaPracaZespolowa < 1
                ? (
                    1 / ahpVariables.frontendVariables.komunikacjaPracaZespolowa
                  ).toFixed(3)
                : (
                    1 / ahpVariables.frontendVariables.komunikacjaPracaZespolowa
                  ).toFixed(0)}
            </td>
            <td className="row">1</td>
            <td className="row">
              <SelectComponent
                ahpVariables={ahpVariables}
                setAhpVariables={setAhpVariables}
                variableTag="pracaZespolowaAdaptacja"
              />
            </td>
            <td className="row">
              <SelectComponent
                ahpVariables={ahpVariables}
                setAhpVariables={setAhpVariables}
                variableTag="pracaZespolowaTestowanie"
              />
            </td>
            <td className="row">
              <SelectComponent
                ahpVariables={ahpVariables}
                setAhpVariables={setAhpVariables}
                variableTag="pracaZespolowaStylowanie"
              />
            </td>
          </tr>
          <tr className="column">
            <th className="row">Adaptacja</th>
            <td className="row">
              {1 / ahpVariables.frontendVariables.forntDoswiadczenieAdaptacja <
              1
                ? (
                    1 /
                    ahpVariables.frontendVariables.forntDoswiadczenieAdaptacja
                  ).toFixed(3)
                : (
                    1 /
                    ahpVariables.frontendVariables.forntDoswiadczenieAdaptacja
                  ).toFixed(0)}{" "}
            </td>
            <td className="row">
              {1 / ahpVariables.frontendVariables.szybkoscPisaniaKoduAdaptacja <
              1
                ? (
                    1 /
                    ahpVariables.frontendVariables.szybkoscPisaniaKoduAdaptacja
                  ).toFixed(3)
                : (
                    1 /
                    ahpVariables.frontendVariables.szybkoscPisaniaKoduAdaptacja
                  ).toFixed(0)}
            </td>
            <td className="row">
              {1 / ahpVariables.frontendVariables.frontKomunikacjaAdaptacja < 1
                ? (
                    1 / ahpVariables.frontendVariables.frontKomunikacjaAdaptacja
                  ).toFixed(3)
                : (
                    1 / ahpVariables.frontendVariables.frontKomunikacjaAdaptacja
                  ).toFixed(0)}
            </td>
            <td className="row">
              {1 / ahpVariables.frontendVariables.pracaZespolowaAdaptacja < 1
                ? (
                    1 / ahpVariables.frontendVariables.pracaZespolowaAdaptacja
                  ).toFixed(3)
                : (
                    1 / ahpVariables.frontendVariables.pracaZespolowaAdaptacja
                  ).toFixed(0)}
            </td>
            <td className="row">1</td>
            <td className="row">
              <SelectComponent
                ahpVariables={ahpVariables}
                setAhpVariables={setAhpVariables}
                variableTag="adaptacjaTestowanie"
              />
            </td>
            <td className="row">
              <SelectComponent
                ahpVariables={ahpVariables}
                setAhpVariables={setAhpVariables}
                variableTag="adaptacjaStylowanie"
              />
            </td>
          </tr>
          <tr className="column">
            <th className="row">Testowanie wlasnego kodu</th>
            <td className="row">
              {1 / ahpVariables.frontendVariables.doswiadczenieTestowanie < 1
                ? (
                    1 / ahpVariables.frontendVariables.doswiadczenieTestowanie
                  ).toFixed(3)
                : (
                    1 / ahpVariables.frontendVariables.doswiadczenieTestowanie
                  ).toFixed(0)}{" "}
            </td>
            <td className="row">
              {1 /
                ahpVariables.frontendVariables
                  .szybkoscPisaniaKoduTesowanieWlasnegoKodu <
              1
                ? (
                    1 /
                    ahpVariables.frontendVariables
                      .szybkoscPisaniaKoduTesowanieWlasnegoKodu
                  ).toFixed(3)
                : (
                    1 /
                    ahpVariables.frontendVariables
                      .szybkoscPisaniaKoduTesowanieWlasnegoKodu
                  ).toFixed(0)}
            </td>
            <td className="row">
              {1 / ahpVariables.frontendVariables.komunikacjaTestowanie < 1
                ? (
                    1 / ahpVariables.frontendVariables.komunikacjaTestowanie
                  ).toFixed(3)
                : (
                    1 / ahpVariables.frontendVariables.komunikacjaTestowanie
                  ).toFixed(0)}
            </td>
            <td className="row">
              {1 / ahpVariables.frontendVariables.pracaZespolowaTestowanie < 1
                ? (
                    1 / ahpVariables.frontendVariables.pracaZespolowaTestowanie
                  ).toFixed(3)
                : (
                    1 / ahpVariables.frontendVariables.pracaZespolowaTestowanie
                  ).toFixed(0)}
            </td>
            <td className="row">
              {1 / ahpVariables.frontendVariables.adaptacjaTestowanie < 1
                ? (
                    1 / ahpVariables.frontendVariables.adaptacjaTestowanie
                  ).toFixed(3)
                : (
                    1 / ahpVariables.frontendVariables.adaptacjaTestowanie
                  ).toFixed(0)}
            </td>
            <td className="row">1</td>
            <td className="row">
              <SelectComponent
                ahpVariables={ahpVariables}
                setAhpVariables={setAhpVariables}
                variableTag="testowanieStylowanie"
              />
            </td>
          </tr>
          <tr className="column">
            <th className="row">Stylowanie</th>
            <td className="row">
              {1 / ahpVariables.frontendVariables.doswiadczenieStylowanie < 1
                ? (
                    1 / ahpVariables.frontendVariables.doswiadczenieStylowanie
                  ).toFixed(3)
                : (
                    1 / ahpVariables.frontendVariables.doswiadczenieStylowanie
                  ).toFixed(0)}{" "}
            </td>
            <td className="row">
              {1 /
                ahpVariables.frontendVariables.szybkoscPisaniaKoduStylowanie <
              1
                ? (
                    1 /
                    ahpVariables.frontendVariables.szybkoscPisaniaKoduStylowanie
                  ).toFixed(3)
                : (
                    1 /
                    ahpVariables.frontendVariables.szybkoscPisaniaKoduStylowanie
                  ).toFixed(0)}
            </td>
            <td className="row">
              {1 / ahpVariables.frontendVariables.komunikacjaStylowanie < 1
                ? (
                    1 / ahpVariables.frontendVariables.komunikacjaStylowanie
                  ).toFixed(3)
                : (
                    1 / ahpVariables.frontendVariables.komunikacjaStylowanie
                  ).toFixed(0)}
            </td>
            <td className="row">
              {1 / ahpVariables.frontendVariables.pracaZespolowaStylowanie < 1
                ? (
                    1 / ahpVariables.frontendVariables.pracaZespolowaStylowanie
                  ).toFixed(3)
                : (
                    1 / ahpVariables.frontendVariables.pracaZespolowaStylowanie
                  ).toFixed(0)}
            </td>
            <td className="row">
              {1 / ahpVariables.frontendVariables.adaptacjaStylowanie < 1
                ? (
                    1 / ahpVariables.frontendVariables.adaptacjaStylowanie
                  ).toFixed(3)
                : (
                    1 / ahpVariables.frontendVariables.adaptacjaStylowanie
                  ).toFixed(0)}
            </td>
            <td className="row">
              {1 / ahpVariables.frontendVariables.testowanieStylowanie < 1
                ? (
                    1 / ahpVariables.frontendVariables.testowanieStylowanie
                  ).toFixed(3)
                : (
                    1 / ahpVariables.frontendVariables.testowanieStylowanie
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
