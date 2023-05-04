import { useState } from "react";
import { SelectComponent } from "./SelectComponent";
import Image from "next/image";
import nextPage from "./../assets/images/button-arrow.svg";
import previousPage from "./../assets/images/button-arrow-down.svg";

export const AhpBackendMatrix = ({
  employees,
  ahpVariables,
  setAhpVariables,
}) => {
  const [currentPosition, setCurrentPosition] = useState(0);
  return (
    <div>
      <div className="flex justify-center py-8 px-4 text-4xl font-semibold">
        <h2>Programista backendowy</h2>
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
          </tr>
          <tr className="column">
            <th className="row">Doswiadczenie</th>
            <td className="row">1</td>
            <td className="row">
              <SelectComponent
                ahpVariables={ahpVariables}
                setAhpVariables={setAhpVariables}
                variableTag="backDoswiadczenieSzybkoscPracy"
              />
            </td>
            <td className="row">
              <SelectComponent
                ahpVariables={ahpVariables}
                setAhpVariables={setAhpVariables}
                variableTag="backDoswiadczenieKomunikacja"
              />
            </td>
            <td className="row">
              <SelectComponent
                ahpVariables={ahpVariables}
                setAhpVariables={setAhpVariables}
                variableTag="backDoswiadczeniePracaZespolowa"
              />
            </td>
            <td className="row">
              <SelectComponent
                ahpVariables={ahpVariables}
                setAhpVariables={setAhpVariables}
                variableTag="backendDoswiadczenieAdaptacja"
              />
            </td>
            <td className="row">
              <SelectComponent
                ahpVariables={ahpVariables}
                setAhpVariables={setAhpVariables}
                variableTag="backDoswiadczenieTestowanie"
              />
            </td>
          </tr>
          <tr className="column">
            <th className="row"> Szybkość pisania kodu</th>
            <td className="row">
              {1 /
                ahpVariables.backendVariables.backDoswiadczenieSzybkoscPracy <
              1
                ? (
                    1 /
                    ahpVariables.backendVariables.backDoswiadczenieSzybkoscPracy
                  ).toFixed(3)
                : (
                    1 /
                    ahpVariables.backendVariables.backDoswiadczenieSzybkoscPracy
                  ).toFixed(0)}
            </td>
            <td className="row"> 1</td>
            <td className="row">
              <SelectComponent
                ahpVariables={ahpVariables}
                setAhpVariables={setAhpVariables}
                variableTag="backSzybkoscPisaniaKoduKomunikacja"
              />
            </td>
            <td className="row">
              <SelectComponent
                ahpVariables={ahpVariables}
                setAhpVariables={setAhpVariables}
                variableTag="backSzybkoscPisaniaKoduPracaZespolowa"
              />
            </td>
            <td className="row">
              <SelectComponent
                ahpVariables={ahpVariables}
                setAhpVariables={setAhpVariables}
                variableTag="backSzybkoscPisaniaKoduAdaptacja"
              />
            </td>
            <td className="row">
              <SelectComponent
                ahpVariables={ahpVariables}
                setAhpVariables={setAhpVariables}
                variableTag="backSzybkoscPisaniaKoduTesowanieWlasnegoKodu"
              />
            </td>
          </tr>
          <tr className="column">
            <th className="row">Komunikacja</th>
            <td className="row">
              {1 / ahpVariables.backendVariables.backDoswiadczenieKomunikacja <
              1
                ? (
                    1 /
                    ahpVariables.backendVariables.backDoswiadczenieKomunikacja
                  ).toFixed(3)
                : (
                    1 /
                    ahpVariables.backendVariables.backDoswiadczenieKomunikacja
                  ).toFixed(0)}{" "}
            </td>
            <td className="row">
              {1 /
                ahpVariables.backendVariables
                  .backSzybkoscPisaniaKoduKomunikacja <
              1
                ? (
                    1 /
                    ahpVariables.backendVariables
                      .backSzybkoscPisaniaKoduKomunikacja
                  ).toFixed(3)
                : (
                    1 /
                    ahpVariables.backendVariables
                      .backSzybkoscPisaniaKoduKomunikacja
                  ).toFixed(0)}
            </td>
            <td className="row">1</td>
            <td className="row">
              <SelectComponent
                ahpVariables={ahpVariables}
                setAhpVariables={setAhpVariables}
                variableTag="backKomunikacjaPracaZespolowa"
              />
            </td>
            <td className="row">
              <SelectComponent
                ahpVariables={ahpVariables}
                setAhpVariables={setAhpVariables}
                variableTag="backendKomunikacjaAdaptacja"
              />
            </td>
            <td className="row">
              <SelectComponent
                ahpVariables={ahpVariables}
                setAhpVariables={setAhpVariables}
                variableTag="backKomunikacjaTestowanie"
              />
            </td>
          </tr>
          <tr className="column">
            <th className="row">Praca zespołowa</th>
            <td className="row">
              {1 /
                ahpVariables.backendVariables.backDoswiadczeniePracaZespolowa <
              1
                ? (
                    1 /
                    ahpVariables.backendVariables
                      .backDoswiadczeniePracaZespolowa
                  ).toFixed(3)
                : (
                    1 /
                    ahpVariables.backendVariables
                      .backDoswiadczeniePracaZespolowa
                  ).toFixed(0)}
            </td>
            <td className="row">
              {1 /
                ahpVariables.backendVariables
                  .backSzybkoscPisaniaKoduPracaZespolowa <
              1
                ? (
                    1 /
                    ahpVariables.backendVariables
                      .backSzybkoscPisaniaKoduPracaZespolowa
                  ).toFixed(3)
                : (
                    1 /
                    ahpVariables.backendVariables
                      .backSzybkoscPisaniaKoduPracaZespolowa
                  ).toFixed(0)}
            </td>
            <td className="row">
              {1 / ahpVariables.backendVariables.backKomunikacjaPracaZespolowa <
              1
                ? (
                    1 /
                    ahpVariables.backendVariables.backKomunikacjaPracaZespolowa
                  ).toFixed(3)
                : (
                    1 /
                    ahpVariables.backendVariables.backKomunikacjaPracaZespolowa
                  ).toFixed(0)}
            </td>
            <td className="row">1</td>
            <td className="row">
              <SelectComponent
                ahpVariables={ahpVariables}
                setAhpVariables={setAhpVariables}
                variableTag="backPracaZespolowaAdaptacja"
              />
            </td>
            <td className="row">
              <SelectComponent
                ahpVariables={ahpVariables}
                setAhpVariables={setAhpVariables}
                variableTag="backPracaZespolowaTestowanie"
              />
            </td>
          </tr>
          <tr className="column">
            <th className="row">Adaptacja</th>
            <td className="row">
              {1 / ahpVariables.backendVariables.backendDoswiadczenieAdaptacja <
              1
                ? (
                    1 /
                    ahpVariables.backendVariables.backendDoswiadczenieAdaptacja
                  ).toFixed(3)
                : (
                    1 /
                    ahpVariables.backendVariables.backendDoswiadczenieAdaptacja
                  ).toFixed(0)}
            </td>
            <td className="row">
              {1 /
                ahpVariables.backendVariables.backSzybkoscPisaniaKoduAdaptacja <
              1
                ? (
                    1 /
                    ahpVariables.backendVariables
                      .backSzybkoscPisaniaKoduAdaptacja
                  ).toFixed(3)
                : (
                    1 /
                    ahpVariables.backendVariables
                      .backSzybkoscPisaniaKoduAdaptacja
                  ).toFixed(0)}
            </td>
            <td className="row">
              {1 / ahpVariables.backendVariables.backendKomunikacjaAdaptacja < 1
                ? (
                    1 /
                    ahpVariables.backendVariables.backendKomunikacjaAdaptacja
                  ).toFixed(3)
                : (
                    1 /
                    ahpVariables.backendVariables.backendKomunikacjaAdaptacja
                  ).toFixed(0)}
            </td>
            <td className="row">
              {1 / ahpVariables.backendVariables.backPracaZespolowaAdaptacja < 1
                ? (
                    1 /
                    ahpVariables.backendVariables.backPracaZespolowaAdaptacja
                  ).toFixed(3)
                : (
                    1 /
                    ahpVariables.backendVariables.backPracaZespolowaAdaptacja
                  ).toFixed(0)}
            </td>
            <td className="row">1</td>
            <td className="row">
              <SelectComponent
                ahpVariables={ahpVariables}
                setAhpVariables={setAhpVariables}
                variableTag="backAdaptacjaTestowanie"
              />
            </td>
          </tr>
          <tr className="column">
            <th className="row">Testowanie wlasnego kodu</th>
            <td className="row">
              {1 / ahpVariables.backendVariables.backDoswiadczenieTestowanie < 1
                ? (
                    1 /
                    ahpVariables.backendVariables.backDoswiadczenieTestowanie
                  ).toFixed(3)
                : (
                    1 /
                    ahpVariables.backendVariables.backDoswiadczenieTestowanie
                  ).toFixed(0)}{" "}
            </td>
            <td className="row">
              {1 /
                ahpVariables.backendVariables
                  .backSzybkoscPisaniaKoduTesowanieWlasnegoKodu <
              1
                ? (
                    1 /
                    ahpVariables.backendVariables
                      .backSzybkoscPisaniaKoduTesowanieWlasnegoKodu
                  ).toFixed(3)
                : (
                    1 /
                    ahpVariables.backendVariables
                      .backSzybkoscPisaniaKoduTesowanieWlasnegoKodu
                  ).toFixed(0)}
            </td>
            <td className="row">
              {1 / ahpVariables.backendVariables.backKomunikacjaTestowanie < 1
                ? (
                    1 / ahpVariables.backendVariables.backKomunikacjaTestowanie
                  ).toFixed(3)
                : (
                    1 / ahpVariables.backendVariables.backKomunikacjaTestowanie
                  ).toFixed(0)}
            </td>
            <td className="row">
              {1 / ahpVariables.backendVariables.backPracaZespolowaTestowanie <
              1
                ? (
                    1 /
                    ahpVariables.backendVariables.backPracaZespolowaTestowanie
                  ).toFixed(3)
                : (
                    1 /
                    ahpVariables.backendVariables.backPracaZespolowaTestowanie
                  ).toFixed(0)}
            </td>
            <td className="row">
              {1 / ahpVariables.backendVariables.backAdaptacjaTestowanie < 1
                ? (
                    1 / ahpVariables.backendVariables.backAdaptacjaTestowanie
                  ).toFixed(3)
                : (
                    1 / ahpVariables.backendVariables.backAdaptacjaTestowanie
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
