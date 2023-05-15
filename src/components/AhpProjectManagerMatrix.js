import { useState, useEffect } from "react";
import { SelectComponent } from "./SelectComponent";
import Image from "next/image";
import nextPage from "./../assets/images/button-arrow.svg";
import previousPage from "./../assets/images/button-arrow-down.svg";

export const AhpProjectManagerMatrix = ({
  employees,
  ahpVariables,
  setAhpVariables,
  sortedEmployeesArray,
  setSortedEmployeesArray,
}) => {
  const [consistationRatioo, setConsistationRatioo] = useState(1);
  const [managerData, setManagerData] = useState("");
  const [weights, setWeights] = useState("");
  useEffect(() => {
    async function getPageData() {
      const apiUrlEndPoint = "http://localhost:3000/api/getDataManager";
      const response = await fetch(apiUrlEndPoint);
      const res = await response.json();
      setManagerData(res.results);
    }
    getPageData();
  }, []);
  const returnBestManager = () => {
    if (managerData) {
      return managerData?.map((element) => {
        return {
          id: element.id,
          value:
            element.doswiadczenie * weights.firstRowWeight +
            element.zarzadzanie_zespolem * weights.secondRowWeight +
            element.komunikacja * weights.thirdRowWeight +
            element.organizacja_pracy * weights.fourthRowWeight +
            element.adaptacja * weights.fifthRowWeight,
          employeeID: element.employee_id,
        };
      });
    }
  };
  const sortBestManager = () => {
    if (managerData) {
      return returnBestManager().sort((a, b) => {
        return b.value - a.value;
      });
    }
  };

  useEffect(() => {
    let firstColSum =
      1 +
      1 / ahpVariables.pmVariables.doswiadczenieZarzadzanieZespolem +
      1 / ahpVariables.pmVariables.pmDoswiadczenieKomunikacja +
      1 / ahpVariables.pmVariables.doswiadczenieOrganizacjaPracy +
      1 / ahpVariables.pmVariables.doswiadczenieAdaptacja;

    let secondColSum =
      ahpVariables.pmVariables.doswiadczenieZarzadzanieZespolem +
      1 +
      1 / ahpVariables.pmVariables.ZarzadzanieZespolemKomunikacja +
      1 / ahpVariables.pmVariables.ZarzadzanieZespolemOrganizacjaPracy +
      1 / ahpVariables.pmVariables.ZarzadzanieZespolemAdaptacja;

    let thirdColSum =
      ahpVariables.pmVariables.pmDoswiadczenieKomunikacja +
      ahpVariables.pmVariables.ZarzadzanieZespolemKomunikacja +
      1 +
      1 / ahpVariables.pmVariables.komunikacjaOrganizacjaPracy +
      1 / ahpVariables.pmVariables.komunikacjaAdaptacja;

    let fourtColSum =
      ahpVariables.pmVariables.doswiadczenieOrganizacjaPracy +
      ahpVariables.pmVariables.ZarzadzanieZespolemOrganizacjaPracy +
      ahpVariables.pmVariables.komunikacjaOrganizacjaPracy +
      1 +
      1 / ahpVariables.pmVariables.organizacjaPracyAdaptacja;

    let fifthColSum =
      ahpVariables.pmVariables.doswiadczenieAdaptacja +
      ahpVariables.pmVariables.ZarzadzanieZespolemAdaptacja +
      ahpVariables.pmVariables.komunikacjaAdaptacja +
      ahpVariables.pmVariables.organizacjaPracyAdaptacja +
      1;

    let firstRowFirstCol = 1 / firstColSum;

    let firstRowsecondCol =
      ahpVariables.pmVariables.doswiadczenieZarzadzanieZespolem / secondColSum;

    let firstRowthirdCol =
      ahpVariables.pmVariables.pmDoswiadczenieKomunikacja / thirdColSum;

    let firstRowfourthCol =
      ahpVariables.pmVariables.doswiadczenieOrganizacjaPracy / fourtColSum;

    let firstRowfifthCol =
      ahpVariables.pmVariables.doswiadczenieAdaptacja / fifthColSum;

    let secondRowFirstCol =
      1 /
      ahpVariables.pmVariables.doswiadczenieZarzadzanieZespolem /
      firstColSum;
    let secondRowSecondCol = 1 / secondColSum;
    let secondRowThirdCol =
      ahpVariables.pmVariables.ZarzadzanieZespolemKomunikacja / thirdColSum;
    let secondRowFourthCol =
      ahpVariables.pmVariables.ZarzadzanieZespolemOrganizacjaPracy /
      fourtColSum;
    let secondRowFifthCol =
      ahpVariables.pmVariables.ZarzadzanieZespolemAdaptacja / fifthColSum;

    let thirdRowFirstCol =
      1 / ahpVariables.pmVariables.pmDoswiadczenieKomunikacja / firstColSum;
    let thirdRowlSecondCol =
      1 /
      ahpVariables.pmVariables.ZarzadzanieZespolemKomunikacja /
      secondColSum;
    let thirdRowThirdCol = 1 / thirdColSum;
    let thirdRowFourCol =
      ahpVariables.pmVariables.komunikacjaOrganizacjaPracy / fourtColSum;
    let thirdRowFifthCol =
      ahpVariables.pmVariables.komunikacjaAdaptacja / fifthColSum;

    let fourthRowFirstCol =
      1 / ahpVariables.pmVariables.doswiadczenieOrganizacjaPracy / firstColSum;

    let fourthRowlSecondCol =
      1 /
      ahpVariables.pmVariables.ZarzadzanieZespolemOrganizacjaPracy /
      secondColSum;
    let fourthRowThirdCol =
      1 / ahpVariables.pmVariables.komunikacjaOrganizacjaPracy / thirdColSum;
    let fourthRowFourCol = 1 / fourtColSum;
    let fourthRowFifthCol =
      ahpVariables.pmVariables.organizacjaPracyAdaptacja / fifthColSum;

    let fifthRowFirstCol =
      1 / ahpVariables.pmVariables.doswiadczenieAdaptacja / firstColSum;
    let fifthRowSecondCol =
      1 / ahpVariables.pmVariables.ZarzadzanieZespolemAdaptacja / secondColSum;
    let fifthRowThirdCol =
      1 / ahpVariables.pmVariables.komunikacjaAdaptacja / thirdColSum;
    let fiftRowFourthCol =
      1 / ahpVariables.pmVariables.organizacjaPracyAdaptacja / fourtColSum;
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
        ahpVariables.pmVariables.doswiadczenieZarzadzanieZespolem *
          secondRowWeight +
        ahpVariables.pmVariables.pmDoswiadczenieKomunikacja * thirdRowWeight +
        ahpVariables.pmVariables.doswiadczenieOrganizacjaPracy *
          fourthRowWeight +
        ahpVariables.pmVariables.doswiadczenieAdaptacja * fifthRowWeight) /
      firstRowWeight;

    let secondRowWeightSum =
      ((1 / ahpVariables.pmVariables.doswiadczenieZarzadzanieZespolem) *
        firstRowWeight +
        1 * secondRowWeight +
        ahpVariables.pmVariables.ZarzadzanieZespolemKomunikacja *
          thirdRowWeight +
        ahpVariables.pmVariables.ZarzadzanieZespolemOrganizacjaPracy *
          fourthRowWeight +
        ahpVariables.pmVariables.ZarzadzanieZespolemAdaptacja *
          fifthRowWeight) /
      secondRowWeight;

    let thirdRowWeightSum =
      ((1 / ahpVariables.pmVariables.pmDoswiadczenieKomunikacja) *
        firstRowWeight +
        (1 / ahpVariables.pmVariables.ZarzadzanieZespolemKomunikacja) *
          secondRowWeight +
        1 * thirdRowWeight +
        ahpVariables.pmVariables.komunikacjaOrganizacjaPracy * fourthRowWeight +
        ahpVariables.pmVariables.komunikacjaAdaptacja * fifthRowWeight) /
      thirdRowWeight;

    let fourthRowWeightSum =
      ((1 / ahpVariables.pmVariables.doswiadczenieOrganizacjaPracy) *
        firstRowWeight +
        (1 / ahpVariables.pmVariables.ZarzadzanieZespolemOrganizacjaPracy) *
          secondRowWeight +
        (1 / ahpVariables.pmVariables.komunikacjaOrganizacjaPracy) *
          thirdRowWeight +
        1 * fourthRowWeight +
        ahpVariables.pmVariables.organizacjaPracyAdaptacja * fifthRowWeight) /
      fourthRowWeight;

    let fifthRowWeightSum =
      ((1 / ahpVariables.pmVariables.doswiadczenieAdaptacja) * firstRowWeight +
        (1 / ahpVariables.pmVariables.ZarzadzanieZespolemAdaptacja) *
          secondRowWeight +
        (1 / ahpVariables.pmVariables.komunikacjaAdaptacja) * thirdRowWeight +
        (1 / ahpVariables.pmVariables.organizacjaPracyAdaptacja) *
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
      manager: {
        ...sortedEmployeesArray.manager,
        bestManager: sortBestManager(),
      },
    });
  }, [ahpVariables]);

  return (
    <div>
      <div className="flex justify-center py-8 px-4 text-4xl font-semibold">
        <h2>Projekt Manager</h2>
      </div>
      <div className="w-full justify-center items-center flex ">
        <table>
          <tr className="column">
            <th className="row"></th>
            <th className="row">Doswiadczenie</th>
            <th className="row">Zarzadzanie zespołem</th>
            <th className="row">Komunikacja</th>
            <th className="row">Organizacja pracy</th>
            <th className="row">Adaptacja i elastyczność</th>
          </tr>
          <tr className="column">
            <th className="row">Doswiadczenie</th>
            <td className="row">1</td>
            <td className="row">
              <SelectComponent
                ahpVariables={ahpVariables}
                setAhpVariables={setAhpVariables}
                variableTag="doswiadczenieZarzadzanieZespolem"
              />
            </td>
            <td className="row">
              <SelectComponent
                ahpVariables={ahpVariables}
                setAhpVariables={setAhpVariables}
                variableTag="pmDoswiadczenieKomunikacja"
              />
            </td>
            <td className="row">
              <SelectComponent
                ahpVariables={ahpVariables}
                setAhpVariables={setAhpVariables}
                variableTag="doswiadczenieOrganizacjaPracy"
              />
            </td>
            <td className="row">
              <SelectComponent
                ahpVariables={ahpVariables}
                setAhpVariables={setAhpVariables}
                variableTag="doswiadczenieAdaptacja"
              />
            </td>
          </tr>
          <tr className="column">
            <th className="row"> Zarzadzanie zespołem </th>
            <td className="row">
              {1 / ahpVariables.pmVariables.doswiadczenieZarzadzanieZespolem < 1
                ? (
                    1 /
                    ahpVariables.pmVariables.doswiadczenieZarzadzanieZespolem
                  ).toFixed(3)
                : (
                    1 /
                    ahpVariables.pmVariables.doswiadczenieZarzadzanieZespolem
                  ).toFixed(0)}
            </td>
            <td className="row"> 1</td>
            <td className="row">
              <SelectComponent
                ahpVariables={ahpVariables}
                setAhpVariables={setAhpVariables}
                variableTag="ZarzadzanieZespolemKomunikacja"
              />
            </td>
            <td className="row">
              <SelectComponent
                ahpVariables={ahpVariables}
                setAhpVariables={setAhpVariables}
                variableTag="ZarzadzanieZespolemOrganizacjaPracy"
              />
            </td>
            <td className="row">
              <SelectComponent
                ahpVariables={ahpVariables}
                setAhpVariables={setAhpVariables}
                variableTag="ZarzadzanieZespolemAdaptacja"
              />
            </td>
          </tr>
          <tr className="column">
            <th className="row">Komunikacja</th>
            <td className="row">
              {1 / ahpVariables.pmVariables.pmDoswiadczenieKomunikacja < 1
                ? (
                    1 / ahpVariables.pmVariables.pmDoswiadczenieKomunikacja
                  ).toFixed(3)
                : (
                    1 / ahpVariables.pmVariables.pmDoswiadczenieKomunikacja
                  ).toFixed(0)}{" "}
            </td>
            <td className="row">
              {1 / ahpVariables.pmVariables.ZarzadzanieZespolemKomunikacja < 1
                ? (
                    1 / ahpVariables.pmVariables.ZarzadzanieZespolemKomunikacja
                  ).toFixed(3)
                : (
                    1 / ahpVariables.pmVariables.ZarzadzanieZespolemKomunikacja
                  ).toFixed(0)}
            </td>
            <td className="row">1</td>
            <td className="row">
              <SelectComponent
                ahpVariables={ahpVariables}
                setAhpVariables={setAhpVariables}
                variableTag="komunikacjaOrganizacjaPracy"
              />
            </td>
            <td className="row">
              <SelectComponent
                ahpVariables={ahpVariables}
                setAhpVariables={setAhpVariables}
                variableTag="komunikacjaAdaptacja"
              />
            </td>
          </tr>
          <tr className="column">
            <th className="row">Organizacja pracy</th>
            <td className="row">
              {1 / ahpVariables.pmVariables.doswiadczenieOrganizacjaPracy < 1
                ? (
                    1 / ahpVariables.pmVariables.doswiadczenieOrganizacjaPracy
                  ).toFixed(3)
                : (
                    1 / ahpVariables.pmVariables.doswiadczenieOrganizacjaPracy
                  ).toFixed(0)}
            </td>
            <td className="row">
              {1 /
                ahpVariables.pmVariables.ZarzadzanieZespolemOrganizacjaPracy <
              1
                ? (
                    1 /
                    ahpVariables.pmVariables.ZarzadzanieZespolemOrganizacjaPracy
                  ).toFixed(3)
                : (
                    1 /
                    ahpVariables.pmVariables.ZarzadzanieZespolemOrganizacjaPracy
                  ).toFixed(0)}
            </td>
            <td className="row">
              {1 / ahpVariables.pmVariables.komunikacjaOrganizacjaPracy < 1
                ? (
                    1 / ahpVariables.pmVariables.komunikacjaOrganizacjaPracy
                  ).toFixed(3)
                : (
                    1 / ahpVariables.pmVariables.komunikacjaOrganizacjaPracy
                  ).toFixed(0)}
            </td>
            <td className="row">1</td>
            <td className="row">
              <SelectComponent
                ahpVariables={ahpVariables}
                setAhpVariables={setAhpVariables}
                variableTag="organizacjaPracyAdaptacja"
              />
            </td>
          </tr>
          <tr className="column">
            <th className="row">Adaptacja i elastyczność</th>

            <td className="row">
              {1 / ahpVariables.pmVariables.doswiadczenieAdaptacja < 1
                ? (1 / ahpVariables.pmVariables.doswiadczenieAdaptacja).toFixed(
                    3
                  )
                : (1 / ahpVariables.pmVariables.doswiadczenieAdaptacja).toFixed(
                    0
                  )}
            </td>
            <td className="row">
              {1 / ahpVariables.pmVariables.ZarzadzanieZespolemAdaptacja < 1
                ? (
                    1 / ahpVariables.pmVariables.ZarzadzanieZespolemAdaptacja
                  ).toFixed(3)
                : (
                    1 / ahpVariables.pmVariables.ZarzadzanieZespolemAdaptacja
                  ).toFixed(0)}
            </td>
            <td className="row">
              {1 / ahpVariables.pmVariables.komunikacjaAdaptacja < 1
                ? (1 / ahpVariables.pmVariables.komunikacjaAdaptacja).toFixed(3)
                : (1 / ahpVariables.pmVariables.komunikacjaAdaptacja).toFixed(
                    0
                  )}
            </td>
            <td className="row">
              {1 / ahpVariables.pmVariables.organizacjaPracyAdaptacja < 1
                ? (
                    1 / ahpVariables.pmVariables.organizacjaPracyAdaptacja
                  ).toFixed(3)
                : (
                    1 / ahpVariables.pmVariables.organizacjaPracyAdaptacja
                  ).toFixed(0)}{" "}
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
