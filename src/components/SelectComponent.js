import { Select, MenuItem } from "@mui/material";
export const SelectComponent = ({
  ahpVariables,
  setAhpVariables,
  variableTag,
}) => {
  const selectHandler = (e, variableTag) => {
    switch (variableTag) {
      case "doswiadczenieSzybkoscPracy":
        setAhpVariables({
          ...ahpVariables,
          designerVariables: {
            ...ahpVariables.designerVariables,
            doswiadczenieSzybkoscPracy: e.target.value,
          },
        });
        break;
      case "doswiadczenieKomunikacja":
        setAhpVariables({
          ...ahpVariables,
          designerVariables: {
            ...ahpVariables.designerVariables,
            doswiadczenieKomunikacja: e.target.value,
          },
        });
        break;
      case "doswiadczenieKreatywnosc":
        setAhpVariables({
          ...ahpVariables,
          designerVariables: {
            ...ahpVariables.designerVariables,
            doswiadczenieKreatywnosc: e.target.value,
          },
        });
        break;
      case "doswiadczenieResponsywnosc":
        setAhpVariables({
          ...ahpVariables,
          designerVariables: {
            ...ahpVariables.designerVariables,
            doswiadczenieResponsywnosc: e.target.value,
          },
        });
        break;
      case "szybkoscPracyKomunikacja":
        setAhpVariables({
          ...ahpVariables,
          designerVariables: {
            ...ahpVariables.designerVariables,
            szybkoscPracyKomunikacja: e.target.value,
          },
        });
        break;
      case "szybkoscPracyKreatywnosc":
        setAhpVariables({
          ...ahpVariables,
          designerVariables: {
            ...ahpVariables.designerVariables,
            szybkoscPracyKreatywnosc: e.target.value,
          },
        });
        break;
      case "szybkoscPracyResponsywnosc":
        setAhpVariables({
          ...ahpVariables,
          designerVariables: {
            ...ahpVariables.designerVariables,
            szybkoscPracyResponsywnosc: e.target.value,
          },
        });
        break;
      case "komunikacjaKreatywnosc":
        setAhpVariables({
          ...ahpVariables,
          designerVariables: {
            ...ahpVariables.designerVariables,
            komunikacjaKreatywnosc: e.target.value,
          },
        });
        break;
      case "komunikacjaResponsywnosc":
        setAhpVariables({
          ...ahpVariables,
          designerVariables: {
            ...ahpVariables.designerVariables,
            komunikacjaResponsywnosc: e.target.value,
          },
        });
        break;
      case "kreatywnoscResponsywnosc":
        setAhpVariables({
          ...ahpVariables,
          designerVariables: {
            ...ahpVariables.designerVariables,
            kreatywnoscResponsywnosc: e.target.value,
          },
        });
        break;
      ///////////////////////////////
      case "doswiadczenieZarzadzanieZespolem":
        setAhpVariables({
          ...ahpVariables,
          pmVariables: {
            ...ahpVariables.pmVariables,
            doswiadczenieZarzadzanieZespolem: e.target.value,
          },
        });
        console.log(ahpVariables.pmVariables.doswiadczenieKomunikacja);
        break;
      case "pmDoswiadczenieKomunikacja":
        setAhpVariables({
          ...ahpVariables,
          pmVariables: {
            ...ahpVariables.pmVariables,
            pmDoswiadczenieKomunikacja: e.target.value,
          },
        });
        console.log("latajacy pies");
        break;
      case "doswiadczenieOrganizacjaPracy":
        setAhpVariables({
          ...ahpVariables,
          pmVariables: {
            ...ahpVariables.pmVariables,
            doswiadczenieOrganizacjaPracy: e.target.value,
          },
        });
        break;
      case "doswiadczenieAdaptacja":
        setAhpVariables({
          ...ahpVariables,
          pmVariables: {
            ...ahpVariables.pmVariables,
            doswiadczenieAdaptacja: e.target.value,
          },
        });
        break;
      case "ZarzadzanieZespolemKomunikacja":
        setAhpVariables({
          ...ahpVariables,
          pmVariables: {
            ...ahpVariables.pmVariables,
            ZarzadzanieZespolemKomunikacja: e.target.value,
          },
        });
        break;
      case "ZarzadzanieZespolemOrganizacjaPracy":
        setAhpVariables({
          ...ahpVariables,
          pmVariables: {
            ...ahpVariables.pmVariables,
            ZarzadzanieZespolemOrganizacjaPracy: e.target.value,
          },
        });
        break;
      case "ZarzadzanieZespolemAdaptacja":
        setAhpVariables({
          ...ahpVariables,
          pmVariables: {
            ...ahpVariables.pmVariables,
            ZarzadzanieZespolemAdaptacja: e.target.value,
          },
        });
        break;
      case "komunikacjaOrganizacjaPracy":
        setAhpVariables({
          ...ahpVariables,
          pmVariables: {
            ...ahpVariables.pmVariables,
            komunikacjaOrganizacjaPracy: e.target.value,
          },
        });
        break;
      case "komunikacjaAdaptacja":
        setAhpVariables({
          ...ahpVariables,
          pmVariables: {
            ...ahpVariables.pmVariables,
            komunikacjaAdaptacja: e.target.value,
          },
        });
        break;
      case "organizacjaPracyAdaptacja":
        setAhpVariables({
          ...ahpVariables,
          pmVariables: {
            ...ahpVariables.pmVariables,
            organizacjaPracyAdaptacja: e.target.value,
          },
        });
        break;
      /////////////////////////////////
      case "frontDoswiadczenieSzybkoscPracy":
        setAhpVariables({
          ...ahpVariables,
          frontendVariables: {
            ...ahpVariables.frontendVariables,
            frontDoswiadczenieSzybkoscPracy: e.target.value,
          },
        });
        break;
      case "forntDoswiadczenieKomunikacja":
        setAhpVariables({
          ...ahpVariables,
          frontendVariables: {
            ...ahpVariables.frontendVariables,
            forntDoswiadczenieKomunikacja: e.target.value,
          },
        });
        break;
      case "doswiadczeniePracaZespolowa":
        setAhpVariables({
          ...ahpVariables,
          frontendVariables: {
            ...ahpVariables.frontendVariables,
            doswiadczeniePracaZespolowa: e.target.value,
          },
        });
        break;
      case "forntDoswiadczenieAdaptacja":
        setAhpVariables({
          ...ahpVariables,
          frontendVariables: {
            ...ahpVariables.frontendVariables,
            forntDoswiadczenieAdaptacja: e.target.value,
          },
        });
        break;
      case "doswiadczenieTestowanie":
        setAhpVariables({
          ...ahpVariables,
          frontendVariables: {
            ...ahpVariables.frontendVariables,
            doswiadczenieTestowanie: e.target.value,
          },
        });
        break;
      case "doswiadczenieStylowanie":
        setAhpVariables({
          ...ahpVariables,
          frontendVariables: {
            ...ahpVariables.frontendVariables,
            doswiadczenieStylowanie: e.target.value,
          },
        });
        break;
      case "szybkoscPisaniaKoduKomunikacja":
        setAhpVariables({
          ...ahpVariables,
          frontendVariables: {
            ...ahpVariables.frontendVariables,
            szybkoscPisaniaKoduKomunikacja: e.target.value,
          },
        });
        break;
      case "szybkoscPisaniaKoduPracaZespolowa":
        setAhpVariables({
          ...ahpVariables,
          frontendVariables: {
            ...ahpVariables.frontendVariables,
            szybkoscPisaniaKoduPracaZespolowa: e.target.value,
          },
        });
        break;
      case "szybkoscPisaniaKoduAdaptacja":
        setAhpVariables({
          ...ahpVariables,
          frontendVariables: {
            ...ahpVariables.frontendVariables,
            szybkoscPisaniaKoduAdaptacja: e.target.value,
          },
        });
        break;
      case "szybkoscPisaniaKoduTesowanieWlasnegoKodu":
        setAhpVariables({
          ...ahpVariables,
          frontendVariables: {
            ...ahpVariables.frontendVariables,
            szybkoscPisaniaKoduTesowanieWlasnegoKodu: e.target.value,
          },
        });
        break;
      case "szybkoscPisaniaKoduStylowanie":
        setAhpVariables({
          ...ahpVariables,
          frontendVariables: {
            ...ahpVariables.frontendVariables,
            szybkoscPisaniaKoduStylowanie: e.target.value,
          },
        });
        break;
      case "komunikacjaPracaZespolowa":
        setAhpVariables({
          ...ahpVariables,
          frontendVariables: {
            ...ahpVariables.frontendVariables,
            komunikacjaPracaZespolowa: e.target.value,
          },
        });
        break;
      case "frontKomunikacjaAdaptacja":
        setAhpVariables({
          ...ahpVariables,
          frontendVariables: {
            ...ahpVariables.frontendVariables,
            frontKomunikacjaAdaptacja: e.target.value,
          },
        });
        break;
      case "komunikacjaTestowanie":
        setAhpVariables({
          ...ahpVariables,
          frontendVariables: {
            ...ahpVariables.frontendVariables,
            komunikacjaTestowanie: e.target.value,
          },
        });
        break;
      case "komunikacjaStylowanie":
        setAhpVariables({
          ...ahpVariables,
          frontendVariables: {
            ...ahpVariables.frontendVariables,
            komunikacjaStylowanie: e.target.value,
          },
        });
        break;
      case "pracaZespolowaAdaptacja":
        setAhpVariables({
          ...ahpVariables,
          frontendVariables: {
            ...ahpVariables.frontendVariables,
            pracaZespolowaAdaptacja: e.target.value,
          },
        });
        break;
      case "pracaZespolowaTestowanie":
        setAhpVariables({
          ...ahpVariables,
          frontendVariables: {
            ...ahpVariables.frontendVariables,
            pracaZespolowaTestowanie: e.target.value,
          },
        });
        break;
      case "pracaZespolowaStylowanie":
        setAhpVariables({
          ...ahpVariables,
          frontendVariables: {
            ...ahpVariables.frontendVariables,
            pracaZespolowaStylowanie: e.target.value,
          },
        });
        break;
      case "adaptacjaTestowanie":
        setAhpVariables({
          ...ahpVariables,
          frontendVariables: {
            ...ahpVariables.frontendVariables,
            adaptacjaTestowanie: e.target.value,
          },
        });
        break;
      case "adaptacjaStylowanie":
        setAhpVariables({
          ...ahpVariables,
          frontendVariables: {
            ...ahpVariables.frontendVariables,
            adaptacjaStylowanie: e.target.value,
          },
        });
        break;
      case "testowanieStylowanie":
        setAhpVariables({
          ...ahpVariables,
          frontendVariables: {
            ...ahpVariables.frontendVariables,
            testowanieStylowanie: e.target.value,
          },
        });
        break;
      //////////////////////////////
      case "backDoswiadczenieSzybkoscPracy":
        setAhpVariables({
          ...ahpVariables,
          backendVariables: {
            ...ahpVariables.backendVariables,
            backDoswiadczenieSzybkoscPracy: e.target.value,
          },
        });
        break;
      case "backDoswiadczenieKomunikacja":
        setAhpVariables({
          ...ahpVariables,
          backendVariables: {
            ...ahpVariables.backendVariables,
            backDoswiadczenieKomunikacja: e.target.value,
          },
        });
        break;
      case "backDoswiadczeniePracaZespolowa":
        setAhpVariables({
          ...ahpVariables,
          backendVariables: {
            ...ahpVariables.backendVariables,
            backDoswiadczeniePracaZespolowa: e.target.value,
          },
        });
        break;
      case "backendDoswiadczenieAdaptacja":
        setAhpVariables({
          ...ahpVariables,
          backendVariables: {
            ...ahpVariables.backendVariables,
            backendDoswiadczenieAdaptacja: e.target.value,
          },
        });
        break;
      case "backDoswiadczenieTestowanie":
        setAhpVariables({
          ...ahpVariables,
          backendVariables: {
            ...ahpVariables.backendVariables,
            backDoswiadczenieTestowanie: e.target.value,
          },
        });
        break;
      case "backSzybkoscPisaniaKoduKomunikacja":
        setAhpVariables({
          ...ahpVariables,
          backendVariables: {
            ...ahpVariables.backendVariables,
            backSzybkoscPisaniaKoduKomunikacja: e.target.value,
          },
        });
        break;
      case "backSzybkoscPisaniaKoduPracaZespolowa":
        setAhpVariables({
          ...ahpVariables,
          backendVariables: {
            ...ahpVariables.backendVariables,
            backSzybkoscPisaniaKoduPracaZespolowa: e.target.value,
          },
        });
        break;
      case "backSzybkoscPisaniaKoduAdaptacja":
        setAhpVariables({
          ...ahpVariables,
          backendVariables: {
            ...ahpVariables.backendVariables,
            backSzybkoscPisaniaKoduAdaptacja: e.target.value,
          },
        });
        break;
      case "backSzybkoscPisaniaKoduTesowanieWlasnegoKodu":
        setAhpVariables({
          ...ahpVariables,
          backendVariables: {
            ...ahpVariables.backendVariables,
            backSzybkoscPisaniaKoduTesowanieWlasnegoKodu: e.target.value,
          },
        });
        break;
      case "backKomunikacjaPracaZespolowa":
        setAhpVariables({
          ...ahpVariables,
          backendVariables: {
            ...ahpVariables.backendVariables,
            backKomunikacjaPracaZespolowa: e.target.value,
          },
        });
        break;
      case "backendKomunikacjaAdaptacja":
        setAhpVariables({
          ...ahpVariables,
          backendVariables: {
            ...ahpVariables.backendVariables,
            backendKomunikacjaAdaptacja: e.target.value,
          },
        });
        break;
      case "backKomunikacjaTestowanie":
        setAhpVariables({
          ...ahpVariables,
          backendVariables: {
            ...ahpVariables.backendVariables,
            backKomunikacjaTestowanie: e.target.value,
          },
        });
        break;
      case "backPracaZespolowaAdaptacja":
        setAhpVariables({
          ...ahpVariables,
          backendVariables: {
            ...ahpVariables.backendVariables,
            backPracaZespolowaAdaptacja: e.target.value,
          },
        });
        break;
      case "backPracaZespolowaTestowanie":
        setAhpVariables({
          ...ahpVariables,
          backendVariables: {
            ...ahpVariables.backendVariables,
            backPracaZespolowaTestowanie: e.target.value,
          },
        });
        break;
      case "backAdaptacjaTestowanie":
        setAhpVariables({
          ...ahpVariables,
          backendVariables: {
            ...ahpVariables.backendVariables,
            backAdaptacjaTestowanie: e.target.value,
          },
        });
        break;
      ////////////////////////////
      case "testDoswiadczenieKomunikacja":
        setAhpVariables({
          ...ahpVariables,
          testerVariables: {
            ...ahpVariables.testerVariables,
            testDoswiadczenieKomunikacja: e.target.value,
          },
        });
        break;
      case "doswiadczenieTestyManualne":
        setAhpVariables({
          ...ahpVariables,
          testerVariables: {
            ...ahpVariables.testerVariables,
            doswiadczenieTestyManualne: e.target.value,
          },
        });
        break;
      case "doswiadczenieTestyAutomatyczne":
        setAhpVariables({
          ...ahpVariables,
          testerVariables: {
            ...ahpVariables.testerVariables,
            doswiadczenieTestyAutomatyczne: e.target.value,
          },
        });
        break;
      case "testDoswiadczenieAdaptacja":
        setAhpVariables({
          ...ahpVariables,
          testerVariables: {
            ...ahpVariables.testerVariables,
            testDoswiadczenieAdaptacja: e.target.value,
          },
        });
        break;
      case "komunikacjaTestyManualne":
        setAhpVariables({
          ...ahpVariables,
          testerVariables: {
            ...ahpVariables.testerVariables,
            komunikacjaTestyManualne: e.target.value,
          },
        });
        break;
      case "komunikacjaTestyAutomatyczne":
        setAhpVariables({
          ...ahpVariables,
          testerVariables: {
            ...ahpVariables.testerVariables,
            komunikacjaTestyAutomatyczne: e.target.value,
          },
        });
        break;
      case "testKomunikacjaAdaptacja":
        setAhpVariables({
          ...ahpVariables,
          testerVariables: {
            ...ahpVariables.testerVariables,
            testKomunikacjaAdaptacja: e.target.value,
          },
        });
        break;
      case "testyManualneTestyAutomatyczne":
        setAhpVariables({
          ...ahpVariables,
          testerVariables: {
            ...ahpVariables.testerVariables,
            testyManualneTestyAutomatyczne: e.target.value,
          },
        });
        break;
      case "testyManualneAdaptacja":
        setAhpVariables({
          ...ahpVariables,
          testerVariables: {
            ...ahpVariables.testerVariables,
            testyManualneAdaptacja: e.target.value,
          },
        });
        break;
      case "testyAutomatyczneAdaptacja":
        setAhpVariables({
          ...ahpVariables,
          testerVariables: {
            ...ahpVariables.testerVariables,
            testyAutomatyczneAdaptacja: e.target.value,
          },
        });
        break;
    }
  };

  return (
    <Select
      defaultValue={1}
      onChange={(e) => {
        selectHandler(e, variableTag);
      }}
    >
      <MenuItem value={0.111}>1/9</MenuItem>
      <MenuItem value={0.125}>1/8</MenuItem>
      <MenuItem value={0.142857142}>1/7</MenuItem>
      <MenuItem value={0.1666666667}>1/6</MenuItem>
      <MenuItem value={0.2}>1/5</MenuItem>
      <MenuItem value={0.25}>1/4</MenuItem>
      <MenuItem value={0.333333333}>1/3</MenuItem>
      <MenuItem value={0.5}>1/2</MenuItem>
      <MenuItem value={1}>1</MenuItem>
      <MenuItem value={2}>2</MenuItem>
      <MenuItem value={3}>3</MenuItem>
      <MenuItem value={4}>4</MenuItem>
      <MenuItem value={5}>5</MenuItem>
      <MenuItem value={6}>6</MenuItem>
      <MenuItem value={7}>7</MenuItem>
      <MenuItem value={8}>8</MenuItem>
      <MenuItem value={9}>9</MenuItem>
    </Select>
  );
};
