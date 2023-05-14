import { useState, useEffect } from "react";
import { SelectComponent } from "./SelectComponent";
import Image from "next/image";
import nextPage from "./../assets/images/button-arrow.svg";
import previousPage from "./../assets/images/button-arrow-down.svg";

export const AhpBackendMatrix = ({
  employees,
  ahpVariables,
  setAhpVariables,
}) => {
  useEffect(() => {
    const [consistationRatioo, setConsistationRatioo] = useState(1);
    let firstColSum =
      1 +
      1 / ahpVariables.backendVariables.backDoswiadczenieSzybkoscPracy +
      1 / ahpVariables.backendVariables.backDoswiadczenieKomunikacja +
      1 / ahpVariables.backendVariables.backDoswiadczeniePracaZespolowa +
      1 / ahpVariables.backendVariables.backendDoswiadczenieAdaptacja +
      1 / ahpVariables.backendVariables.backDoswiadczenieTestowanie;

    let secondColSum =
      ahpVariables.backendVariables.backDoswiadczenieSzybkoscPracy +
      1 +
      1 / ahpVariables.backendVariables.backSzybkoscPisaniaKoduKomunikacja +
      1 / ahpVariables.backendVariables.backSzybkoscPisaniaKoduPracaZespolowa +
      1 / ahpVariables.backendVariables.backSzybkoscPisaniaKoduAdaptacja +
      1 /
        ahpVariables.backendVariables
          .backSzybkoscPisaniaKoduTesowanieWlasnegoKodu;

    let thirdColSum =
      ahpVariables.backendVariables.backDoswiadczenieKomunikacja +
      ahpVariables.backendVariables.backSzybkoscPisaniaKoduKomunikacja +
      1 +
      1 / ahpVariables.backendVariables.backKomunikacjaPracaZespolowa +
      1 / ahpVariables.backendVariables.backendKomunikacjaAdaptacja +
      1 / ahpVariables.backendVariables.backKomunikacjaTestowanie;

    let fourtColSum =
      ahpVariables.backendVariables.backDoswiadczeniePracaZespolowa +
      ahpVariables.backendVariables.backSzybkoscPisaniaKoduPracaZespolowa +
      ahpVariables.backendVariables.backKomunikacjaPracaZespolowa +
      1 +
      1 / ahpVariables.backendVariables.backPracaZespolowaAdaptacja +
      1 / ahpVariables.backendVariables.backPracaZespolowaTestowanie;

    let fifthColSum =
      ahpVariables.backendVariables.backendDoswiadczenieAdaptacja +
      ahpVariables.backendVariables.backSzybkoscPisaniaKoduAdaptacja +
      ahpVariables.backendVariables.backendKomunikacjaAdaptacja +
      ahpVariables.backendVariables.backPracaZespolowaAdaptacja +
      1 +
      1 / ahpVariables.backendVariables.backAdaptacjaTestowanie;

    let sixColSum =
      ahpVariables.backendVariables.backDoswiadczenieTestowanie +
      ahpVariables.backendVariables
        .backSzybkoscPisaniaKoduTesowanieWlasnegoKodu +
      ahpVariables.backendVariables.backKomunikacjaTestowanie +
      ahpVariables.backendVariables.backPracaZespolowaTestowanie +
      1 / ahpVariables.backendVariables.backAdaptacjaTestowanie +
      1;

    let firstRowFirstCol = 1 / firstColSum;

    let firstRowsecondCol =
      ahpVariables.backendVariables.backDoswiadczenieSzybkoscPracy /
      secondColSum;

    let firstRowthirdCol =
      ahpVariables.backendVariables.backDoswiadczenieKomunikacja / thirdColSum;

    let firstRowfourthCol =
      ahpVariables.backendVariables.backDoswiadczeniePracaZespolowa /
      fourtColSum;

    let firstRowfifthCol =
      ahpVariables.backendVariables.backendDoswiadczenieAdaptacja / fifthColSum;

    let firstRowSixCol =
      ahpVariables.backendVariables.backDoswiadczenieTestowanie / sixColSum;

    let secondRowFirstCol =
      1 /
      ahpVariables.backendVariables.backDoswiadczenieSzybkoscPracy /
      firstColSum;
    let secondRowSecondCol = 1 / secondColSum;
    let secondRowThirdCol =
      ahpVariables.backendVariables.backSzybkoscPisaniaKoduKomunikacja /
      thirdColSum;
    let secondRowFourthCol =
      ahpVariables.backendVariables.backSzybkoscPisaniaKoduPracaZespolowa /
      fourtColSum;
    let secondRowFifthCol =
      ahpVariables.backendVariables.backSzybkoscPisaniaKoduAdaptacja /
      fifthColSum;
    let secondRowSixCol =
      ahpVariables.backendVariables
        .backSzybkoscPisaniaKoduTesowanieWlasnegoKodu / sixColSum;

    let thirdRowFirstCol =
      1 /
      ahpVariables.backendVariables.backDoswiadczenieKomunikacja /
      firstColSum;
    let thirdRowlSecondCol =
      1 /
      ahpVariables.backendVariables.backSzybkoscPisaniaKoduKomunikacja /
      secondColSum;
    let thirdRowThirdCol = 1 / thirdColSum;
    let thirdRowFourCol =
      ahpVariables.backendVariables.backKomunikacjaPracaZespolowa / fourtColSum;
    let thirdRowFifthCol =
      ahpVariables.backendVariables.backendKomunikacjaAdaptacja / fifthColSum;
    let thirdRowSixCol =
      ahpVariables.backendVariables.backKomunikacjaTestowanie / sixColSum;

    let fourthRowFirstCol =
      1 /
      ahpVariables.backendVariables.backDoswiadczeniePracaZespolowa /
      firstColSum;

    let fourthRowlSecondCol =
      1 /
      ahpVariables.backendVariables.backSzybkoscPisaniaKoduPracaZespolowa /
      secondColSum;
    let fourthRowThirdCol =
      1 /
      ahpVariables.backendVariables.backKomunikacjaPracaZespolowa /
      thirdColSum;
    let fourthRowFourCol = 1 / fourtColSum;
    let fourthRowFifthCol =
      ahpVariables.backendVariables.backPracaZespolowaAdaptacja / fifthColSum;
    let fourthRowSixCol =
      ahpVariables.backendVariables.backPracaZespolowaTestowanie / sixColSum;

    let fifthRowFirstCol =
      1 /
      ahpVariables.backendVariables.backendDoswiadczenieAdaptacja /
      firstColSum;
    let fifthRowSecondCol =
      1 /
      ahpVariables.backendVariables.backSzybkoscPisaniaKoduAdaptacja /
      secondColSum;
    let fifthRowThirdCol =
      1 /
      ahpVariables.backendVariables.backendKomunikacjaAdaptacja /
      thirdColSum;
    let fiftRowFourthCol =
      1 /
      ahpVariables.backendVariables.backPracaZespolowaAdaptacja /
      fourtColSum;
    let fifthRowFifthCol = 1 / fifthColSum;
    let fifthRowSixCol =
      ahpVariables.backendVariables.backAdaptacjaTestowanie / sixColSum;

    let sixRowFirstCol =
      1 /
      ahpVariables.backendVariables.backDoswiadczenieTestowanie /
      firstColSum;
    let sixRowSecondCol =
      1 /
      ahpVariables.backendVariables
        .backSzybkoscPisaniaKoduTesowanieWlasnegoKodu /
      secondColSum;
    let sixRowThirdCol =
      1 / ahpVariables.backendVariables.backKomunikacjaTestowanie / thirdColSum;
    let sixRowFourthCol =
      1 /
      ahpVariables.backendVariables.backPracaZespolowaTestowanie /
      fourtColSum;
    let sixRowFifthCol =
      ahpVariables.backendVariables.backAdaptacjaTestowanie / sixColSum;
    let sixRowSixCol = 1 / fifthColSum;

    let firstRowWeight =
      (firstRowFirstCol +
        firstRowsecondCol +
        firstRowthirdCol +
        firstRowfourthCol +
        firstRowfifthCol +
        firstRowSixCol) /
      6;
    let secondRowWeight =
      (secondRowFirstCol +
        secondRowSecondCol +
        secondRowThirdCol +
        secondRowFourthCol +
        secondRowFifthCol +
        secondRowSixCol) /
      6;
    let thirdRowWeight =
      (thirdRowFirstCol +
        thirdRowlSecondCol +
        thirdRowThirdCol +
        thirdRowFourCol +
        thirdRowFifthCol +
        thirdRowSixCol) /
      6;
    let fourthRowWeight =
      (fourthRowFirstCol +
        fourthRowlSecondCol +
        fourthRowThirdCol +
        fourthRowFourCol +
        fourthRowFifthCol +
        fourthRowSixCol) /
      6;
    let fifthRowWeight =
      (fifthRowFirstCol +
        fifthRowSecondCol +
        fifthRowThirdCol +
        fiftRowFourthCol +
        fifthRowFifthCol +
        fifthRowSixCol) /
      6;
    let sixRowWeight =
      (sixRowFirstCol +
        sixRowSecondCol +
        sixRowThirdCol +
        sixRowFourthCol +
        sixRowFifthCol +
        sixRowSixCol) /
      6;
    ////////////////////////////////////////
    let firstRowWeightSum =
      (1 * firstRowWeight +
        ahpVariables.backendVariables.backDoswiadczenieSzybkoscPracy *
          secondRowWeight +
        ahpVariables.backendVariables.backDoswiadczenieKomunikacja *
          thirdRowWeight +
        ahpVariables.backendVariables.backDoswiadczeniePracaZespolowa *
          fourthRowWeight +
        ahpVariables.backendVariables.backendDoswiadczenieAdaptacja *
          fifthRowWeight +
        ahpVariables.backendVariables.backDoswiadczenieTestowanie *
          sixRowWeight) /
      firstRowWeight;

    let secondRowWeightSum =
      ((1 / ahpVariables.backendVariables.backDoswiadczenieSzybkoscPracy) *
        firstRowWeight +
        1 * secondRowWeight +
        ahpVariables.backendVariables.backSzybkoscPisaniaKoduKomunikacja *
          thirdRowWeight +
        ahpVariables.backendVariables.backSzybkoscPisaniaKoduPracaZespolowa *
          fourthRowWeight +
        ahpVariables.backendVariables.backSzybkoscPisaniaKoduAdaptacja *
          fifthRowWeight +
        ahpVariables.backendVariables
          .backSzybkoscPisaniaKoduTesowanieWlasnegoKodu *
          sixRowWeight) /
      secondRowWeight;

    let thirdRowWeightSum =
      ((1 / ahpVariables.backendVariables.backDoswiadczenieKomunikacja) *
        firstRowWeight +
        (1 / ahpVariables.backendVariables.backSzybkoscPisaniaKoduKomunikacja) *
          secondRowWeight +
        1 * thirdRowWeight +
        ahpVariables.backendVariables.backKomunikacjaPracaZespolowa *
          fourthRowWeight +
        ahpVariables.backendVariables.backendKomunikacjaAdaptacja *
          fifthRowWeight +
        ahpVariables.backendVariables.backKomunikacjaTestowanie *
          sixRowWeight) /
      thirdRowWeight;

    let fourthRowWeightSum =
      ((1 / ahpVariables.backendVariables.backDoswiadczeniePracaZespolowa) *
        firstRowWeight +
        (1 /
          ahpVariables.backendVariables.backSzybkoscPisaniaKoduPracaZespolowa) *
          secondRowWeight +
        (1 / ahpVariables.backendVariables.backKomunikacjaPracaZespolowa) *
          thirdRowWeight +
        1 * fourthRowWeight +
        ahpVariables.backendVariables.backPracaZespolowaAdaptacja *
          fifthRowWeight +
        ahpVariables.backendVariables.backPracaZespolowaTestowanie *
          sixRowWeight) /
      fourthRowWeight;

    let fifthRowWeightSum =
      ((1 / ahpVariables.backendVariables.backendDoswiadczenieAdaptacja) *
        firstRowWeight +
        (1 / ahpVariables.backendVariables.backSzybkoscPisaniaKoduAdaptacja) *
          secondRowWeight +
        (1 / ahpVariables.backendVariables.backendKomunikacjaAdaptacja) *
          thirdRowWeight +
        (1 / ahpVariables.backendVariables.backPracaZespolowaAdaptacja) *
          fourthRowWeight +
        1 * fifthRowWeight +
        ahpVariables.backendVariables.backAdaptacjaTestowanie * sixRowWeight) /
      fifthRowWeight;

    let sixRowWeightSum =
      ((1 / ahpVariables.backendVariables.backDoswiadczenieTestowanie) *
        firstRowWeight +
        (1 /
          ahpVariables.backendVariables
            .backSzybkoscPisaniaKoduTesowanieWlasnegoKodu) *
          secondRowWeight +
        (1 / ahpVariables.backendVariables.backKomunikacjaTestowanie) *
          thirdRowWeight +
        (1 / ahpVariables.backendVariables.backPracaZespolowaTestowanie) *
          fourthRowWeight +
        (1 / ahpVariables.backendVariables.backAdaptacjaTestowanie) *
          fifthRowWeight +
        1 * sixRowWeight) /
      sixRowWeight;

    let lambdaMax =
      (firstRowWeightSum +
        secondRowWeightSum +
        thirdRowWeightSum +
        fourthRowWeightSum +
        fifthRowWeightSum +
        sixRowWeightSum) /
      6;

    let consistencyIndex = (lambdaMax - 6) / (6 - 1);
    let consistencyRatio = consistencyIndex / 1.25;
    console.log(
      firstRowWeightSum,
      secondRowWeightSum,
      thirdRowWeightSum,
      fourthRowWeightSum,
      fifthRowWeightSum,
      sixRowWeightSum
    );
    console.log(lambdaMax, consistencyIndex, consistencyRatio);
    setConsistationRatioo(consistencyRatio);
  }, [ahpVariables]);
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
