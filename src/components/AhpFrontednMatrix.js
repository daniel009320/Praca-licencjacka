import { useState } from "react";
import { SelectComponent } from "./SelectComponent";
import Image from "next/image";
import nextPage from "./../assets/images/button-arrow.svg";
import previousPage from "./../assets/images/button-arrow-down.svg";

export const AhpFrontendMatrix = ({
  employees,
  ahpVariables,
  setAhpVariables,
}) => {
  const [currentPosition, setCurrentPosition] = useState(0);
  return (
    <div>
      <div className="flex justify-center py-8 px-4 text-4xl font-semibold">
        <h2>Programista frontendowy</h2>
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
