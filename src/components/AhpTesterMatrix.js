import { useState } from "react";
import { SelectComponent } from "./SelectComponent";
import Image from "next/image";
import nextPage from "./../assets/images/button-arrow.svg";
import previousPage from "./../assets/images/button-arrow-down.svg";

export const AhpTesterMatrix = ({
  employees,
  ahpVariables,
  setAhpVariables,
}) => {
  const [currentPosition, setCurrentPosition] = useState(0);
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
