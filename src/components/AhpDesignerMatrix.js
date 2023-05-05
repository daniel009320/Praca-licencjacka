import { useState } from "react";
import { SelectComponent } from "./SelectComponent";
import Image from "next/image";
import nextPage from "./../assets/images/button-arrow.svg";
import previousPage from "./../assets/images/button-arrow-down.svg";

export const AhpDesignerMatrix = ({
  employees,
  ahpVariables,
  setAhpVariables,
}) => {
  const [currentPosition, setCurrentPosition] = useState(0);

  return (
    <div>
      <div className="flex justify-center py-8 px-4 text-4xl font-semibold">
        <h2>Grafik</h2>
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
      <div>
        <h1>xd</h1>
      </div>
    </div>
  );
};
