import { useState } from "react";
import { SelectComponent } from "./SelectComponent";
import Image from "next/image";
import nextPage from "./../assets/images/button-arrow.svg";
import previousPage from "./../assets/images/button-arrow-down.svg";

export const AhpProjectManagerMatrix = ({
  employees,
  ahpVariables,
  setAhpVariables,
}) => {
  const [currentPosition, setCurrentPosition] = useState(0);
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
