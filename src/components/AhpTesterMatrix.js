import { useState, useEffect } from "react";
import { SelectComponent } from "./SelectComponent";
import Image from "next/image";
import nextPage from "./../assets/images/button-arrow.svg";
import previousPage from "./../assets/images/button-arrow-down.svg";

export const AhpTesterMatrix = ({
  employees,
  ahpVariables,
  setAhpVariables,
}) => {
  const [consistationRatioo, setConsistationRatioo] = useState(1);
  useEffect(() => {
    let firstColSum =
      1 +
      1 / ahpVariables.testerVariables.testDoswiadczenieKomunikacja +
      1 / ahpVariables.testerVariables.doswiadczenieTestyManualne +
      1 / ahpVariables.testerVariables.doswiadczenieTestyAutomatyczne +
      1 / ahpVariables.testerVariables.testDoswiadczenieAdaptacja;

    let secondColSum =
      ahpVariables.testerVariables.testDoswiadczenieKomunikacja +
      1 +
      1 / ahpVariables.testerVariables.komunikacjaTestyManualne +
      1 / ahpVariables.testerVariables.komunikacjaTestyAutomatyczne +
      1 / ahpVariables.testerVariables.testKomunikacjaAdaptacja;

    let thirdColSum =
      ahpVariables.testerVariables.doswiadczenieTestyManualne +
      ahpVariables.testerVariables.komunikacjaTestyManualne +
      1 +
      1 / ahpVariables.testerVariables.testyManualneTestyAutomatyczne +
      1 / ahpVariables.testerVariables.testyManualneAdaptacja;

    let fourtColSum =
      ahpVariables.testerVariables.doswiadczenieTestyAutomatyczne +
      ahpVariables.testerVariables.komunikacjaTestyAutomatyczne +
      ahpVariables.testerVariables.testyManualneTestyAutomatyczne +
      1 +
      1 / ahpVariables.testerVariables.testyAutomatyczneAdaptacja;

    let fifthColSum =
      ahpVariables.testerVariables.testDoswiadczenieAdaptacja +
      ahpVariables.testerVariables.testKomunikacjaAdaptacja +
      ahpVariables.testerVariables.testyManualneAdaptacja +
      ahpVariables.testerVariables.testyAutomatyczneAdaptacja +
      1;

    let firstRowFirstCol = 1 / firstColSum;

    let firstRowsecondCol =
      ahpVariables.testerVariables.testDoswiadczenieKomunikacja / secondColSum;

    let firstRowthirdCol =
      ahpVariables.testerVariables.doswiadczenieTestyManualne / thirdColSum;

    let firstRowfourthCol =
      ahpVariables.testerVariables.doswiadczenieTestyAutomatyczne / fourtColSum;

    let firstRowfifthCol =
      ahpVariables.testerVariables.testDoswiadczenieAdaptacja / fifthColSum;

    let secondRowFirstCol =
      1 /
      ahpVariables.testerVariables.testDoswiadczenieKomunikacja /
      firstColSum;
    let secondRowSecondCol = 1 / secondColSum;
    let secondRowThirdCol =
      ahpVariables.testerVariables.komunikacjaTestyManualne / thirdColSum;
    let secondRowFourthCol =
      ahpVariables.testerVariables.komunikacjaTestyAutomatyczne / fourtColSum;
    let secondRowFifthCol =
      ahpVariables.testerVariables.testKomunikacjaAdaptacja / fifthColSum;

    let thirdRowFirstCol =
      1 / ahpVariables.testerVariables.doswiadczenieTestyManualne / firstColSum;
    let thirdRowlSecondCol =
      1 / ahpVariables.testerVariables.komunikacjaTestyManualne / secondColSum;
    let thirdRowThirdCol = 1 / thirdColSum;
    let thirdRowFourCol =
      ahpVariables.testerVariables.testyManualneTestyAutomatyczne / fourtColSum;
    let thirdRowFifthCol =
      ahpVariables.testerVariables.testyManualneAdaptacja / fifthColSum;

    let fourthRowFirstCol =
      1 /
      ahpVariables.testerVariables.doswiadczenieTestyAutomatyczne /
      firstColSum;

    let fourthRowlSecondCol =
      1 /
      ahpVariables.testerVariables.komunikacjaTestyAutomatyczne /
      secondColSum;
    let fourthRowThirdCol =
      1 /
      ahpVariables.testerVariables.testyManualneTestyAutomatyczne /
      thirdColSum;
    let fourthRowFourCol = 1 / fourtColSum;
    let fourthRowFifthCol =
      ahpVariables.testerVariables.testyAutomatyczneAdaptacja / fifthColSum;

    let fifthRowFirstCol =
      1 / ahpVariables.testerVariables.testDoswiadczenieAdaptacja / firstColSum;
    let fifthRowSecondCol =
      1 / ahpVariables.testerVariables.testKomunikacjaAdaptacja / secondColSum;
    let fifthRowThirdCol =
      1 / ahpVariables.testerVariables.testyManualneAdaptacja / thirdColSum;
    let fiftRowFourthCol =
      1 / ahpVariables.testerVariables.testyAutomatyczneAdaptacja / fourtColSum;
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

    //////////////////////////
    let firstRowWeightSum =
      (1 * firstRowWeight +
        ahpVariables.testerVariables.testDoswiadczenieKomunikacja *
          secondRowWeight +
        ahpVariables.testerVariables.doswiadczenieTestyManualne *
          thirdRowWeight +
        ahpVariables.testerVariables.doswiadczenieTestyAutomatyczne *
          fourthRowWeight +
        ahpVariables.testerVariables.testDoswiadczenieAdaptacja *
          fifthRowWeight) /
      firstRowWeight;

    let secondRowWeightSum =
      ((1 / ahpVariables.testerVariables.testDoswiadczenieKomunikacja) *
        firstRowWeight +
        1 * secondRowWeight +
        ahpVariables.testerVariables.komunikacjaTestyManualne * thirdRowWeight +
        ahpVariables.testerVariables.komunikacjaTestyAutomatyczne *
          fourthRowWeight +
        ahpVariables.testerVariables.testKomunikacjaAdaptacja *
          fifthRowWeight) /
      secondRowWeight;

    let thirdRowWeightSum =
      ((1 / ahpVariables.testerVariables.doswiadczenieTestyManualne) *
        firstRowWeight +
        (1 / ahpVariables.testerVariables.komunikacjaTestyManualne) *
          secondRowWeight +
        1 * thirdRowWeight +
        ahpVariables.testerVariables.testyManualneTestyAutomatyczne *
          fourthRowWeight +
        ahpVariables.testerVariables.testyManualneAdaptacja * fifthRowWeight) /
      thirdRowWeight;

    let fourthRowWeightSum =
      ((1 / ahpVariables.testerVariables.doswiadczenieTestyAutomatyczne) *
        firstRowWeight +
        (1 / ahpVariables.testerVariables.komunikacjaTestyAutomatyczne) *
          secondRowWeight +
        (1 / ahpVariables.testerVariables.testyManualneTestyAutomatyczne) *
          thirdRowWeight +
        1 * fourthRowWeight +
        ahpVariables.testerVariables.testyAutomatyczneAdaptacja *
          fifthRowWeight) /
      fourthRowWeight;

    let fifthRowWeightSum =
      ((1 / ahpVariables.testerVariables.testDoswiadczenieAdaptacja) *
        firstRowWeight +
        (1 / ahpVariables.testerVariables.testKomunikacjaAdaptacja) *
          secondRowWeight +
        (1 / ahpVariables.testerVariables.testyManualneAdaptacja) *
          thirdRowWeight +
        (1 / ahpVariables.testerVariables.testyAutomatyczneAdaptacja) *
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

    console.log(consistencyRatio);
    setConsistationRatioo(consistencyRatio);
  }, [ahpVariables]);
  return (
    <div>
      <div className="flex justify-center py-8 px-4 text-4xl font-semibold">
        <h2>Tester oprogramowania</h2>
      </div>
      <div className="w-full justify-center items-center flex ">
        <table>
          <tr className="column">
            <th className="row"></th>
            <th className="row">Doswiadczenie</th>
            <th className="row">Komunikacja</th>
            <th className="row">Testy manualne</th>
            <th className="row">Testy automatyczne</th>
            <th className="row">Adaptacja</th>
          </tr>
          <tr className="column">
            <th className="row">Doswiadczenie</th>
            <td className="row">1</td>
            <td className="row">
              <SelectComponent
                ahpVariables={ahpVariables}
                setAhpVariables={setAhpVariables}
                variableTag="testDoswiadczenieKomunikacja"
              />
            </td>
            <td className="row">
              <SelectComponent
                ahpVariables={ahpVariables}
                setAhpVariables={setAhpVariables}
                variableTag="doswiadczenieTestyManualne"
              />
            </td>
            <td className="row">
              <SelectComponent
                ahpVariables={ahpVariables}
                setAhpVariables={setAhpVariables}
                variableTag="doswiadczenieTestyAutomatyczne"
              />
            </td>
            <td className="row">
              <SelectComponent
                ahpVariables={ahpVariables}
                setAhpVariables={setAhpVariables}
                variableTag="testDoswiadczenieAdaptacja"
              />
            </td>
          </tr>
          <tr className="column">
            <th className="row"> Komunikacja </th>
            <td className="row">
              {1 / ahpVariables.testerVariables.testDoswiadczenieKomunikacja < 1
                ? (
                    1 /
                    ahpVariables.testerVariables.testDoswiadczenieKomunikacja
                  ).toFixed(3)
                : (
                    1 /
                    ahpVariables.testerVariables.testDoswiadczenieKomunikacja
                  ).toFixed(0)}
            </td>
            <td className="row"> 1</td>
            <td className="row">
              <SelectComponent
                ahpVariables={ahpVariables}
                setAhpVariables={setAhpVariables}
                variableTag="komunikacjaTestyManualne"
              />
            </td>
            <td className="row">
              <SelectComponent
                ahpVariables={ahpVariables}
                setAhpVariables={setAhpVariables}
                variableTag="komunikacjaTestyAutomatyczne"
              />
            </td>
            <td className="row">
              <SelectComponent
                ahpVariables={ahpVariables}
                setAhpVariables={setAhpVariables}
                variableTag="testKomunikacjaAdaptacja"
              />
            </td>
          </tr>
          <tr className="column">
            <th className="row">Testy manualne</th>
            <td className="row">
              {" "}
              {1 / ahpVariables.testerVariables.doswiadczenieTestyManualne < 1
                ? (
                    1 / ahpVariables.testerVariables.doswiadczenieTestyManualne
                  ).toFixed(3)
                : (
                    1 / ahpVariables.testerVariables.doswiadczenieTestyManualne
                  ).toFixed(0)}{" "}
            </td>
            <td className="row">
              {" "}
              {1 / ahpVariables.testerVariables.komunikacjaTestyManualne < 1
                ? (
                    1 / ahpVariables.testerVariables.komunikacjaTestyManualne
                  ).toFixed(3)
                : (
                    1 / ahpVariables.testerVariables.komunikacjaTestyManualne
                  ).toFixed(0)}
            </td>
            <td className="row">1</td>
            <td className="row">
              <SelectComponent
                ahpVariables={ahpVariables}
                setAhpVariables={setAhpVariables}
                variableTag="testyManualneTestyAutomatyczne"
              />
            </td>
            <td className="row">
              <SelectComponent
                ahpVariables={ahpVariables}
                setAhpVariables={setAhpVariables}
                variableTag="testyManualneAdaptacja"
              />
            </td>
          </tr>
          <tr className="column">
            <th className="row">Testy automatyczne</th>

            <td className="row">
              {" "}
              {1 / ahpVariables.testerVariables.doswiadczenieTestyAutomatyczne <
              1
                ? (
                    1 /
                    ahpVariables.testerVariables.doswiadczenieTestyAutomatyczne
                  ).toFixed(3)
                : (
                    1 /
                    ahpVariables.testerVariables.doswiadczenieTestyAutomatyczne
                  ).toFixed(0)}
            </td>
            <td className="row">
              {" "}
              {1 / ahpVariables.testerVariables.komunikacjaTestyAutomatyczne < 1
                ? (
                    1 /
                    ahpVariables.testerVariables.komunikacjaTestyAutomatyczne
                  ).toFixed(3)
                : (
                    1 /
                    ahpVariables.testerVariables.komunikacjaTestyAutomatyczne
                  ).toFixed(0)}
            </td>
            <td className="row">
              {" "}
              {1 / ahpVariables.testerVariables.testyManualneTestyAutomatyczne <
              1
                ? (
                    1 /
                    ahpVariables.testerVariables.testyManualneTestyAutomatyczne
                  ).toFixed(3)
                : (
                    1 /
                    ahpVariables.testerVariables.testyManualneTestyAutomatyczne
                  ).toFixed(0)}
            </td>
            <td className="row">1</td>
            <td className="row">
              <SelectComponent
                ahpVariables={ahpVariables}
                setAhpVariables={setAhpVariables}
                variableTag="testyAutomatyczneAdaptacja"
              />
            </td>
          </tr>
          <tr className="column">
            <th className="row">Adaptacja</th>
            <td className="row">
              {" "}
              {1 / ahpVariables.testerVariables.testDoswiadczenieAdaptacja < 1
                ? (
                    1 / ahpVariables.testerVariables.testDoswiadczenieAdaptacja
                  ).toFixed(3)
                : (
                    1 / ahpVariables.testerVariables.testDoswiadczenieAdaptacja
                  ).toFixed(0)}{" "}
            </td>
            <td className="row">
              {" "}
              {1 / ahpVariables.testerVariables.testKomunikacjaAdaptacja < 1
                ? (
                    1 / ahpVariables.testerVariables.testKomunikacjaAdaptacja
                  ).toFixed(3)
                : (
                    1 / ahpVariables.testerVariables.testKomunikacjaAdaptacja
                  ).toFixed(0)}
            </td>
            <td className="row">
              {" "}
              {1 / ahpVariables.testerVariables.testyManualneAdaptacja < 1
                ? (
                    1 / ahpVariables.testerVariables.testyManualneAdaptacja
                  ).toFixed(3)
                : (
                    1 / ahpVariables.testerVariables.testyManualneAdaptacja
                  ).toFixed(0)}
            </td>
            <td className="row">
              {" "}
              {1 / ahpVariables.testerVariables.testyAutomatyczneAdaptacja < 1
                ? (
                    1 / ahpVariables.testerVariables.testyAutomatyczneAdaptacja
                  ).toFixed(3)
                : (
                    1 / ahpVariables.testerVariables.testyAutomatyczneAdaptacja
                  ).toFixed(0)}
            </td>
            <td className="row">1</td>
          </tr>
        </table>
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
        {consistationRatioo < 0.1 ? (
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
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
