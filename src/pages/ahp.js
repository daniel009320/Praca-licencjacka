import { AhpHours } from "@/components/AhpHours";
import { AhpDesignerMatrix } from "@/components/AhpDesignerMatrix";
import { Formahp } from "@/components/Formahp";
import { Header } from "@/components/Header";
import { useState, useEffect } from "react";
import { AhpProjectManagerMatrix } from "@/components/AhpProjectManagerMatrix";
import { AhpFrontendMatrix } from "@/components/AhpFrontednMatrix";
import { AhpBackendMatrix } from "@/components/AhpBackendMatrix";
import { AhpTesterMatrix } from "@/components/AhpTesterMatrix";
import { ResultsAhp } from "@/components/ResultsAhp";

const ahp = () => {
  const [sortedEmployeesArray, setSortedEmployeesArray] = useState({
    designer: { bestDesigners: [] },
    frontend: { bestFrontends: [] },
    backend: { bestBackend: [] },
    tester: { bestTester: [] },
    manager: { bestManger: [] },
  });
  const [employeesData, setEmployeesData] = useState();
  useEffect(() => {
    async function getPageData() {
      const apiUrlEndPoint = "http://localhost:3000/api/getData";
      const response = await fetch(apiUrlEndPoint);
      const res = await response.json();
      setEmployeesData(res.results);
    }
    getPageData();
  }, []);

  const [ahpVariables, setAhpVariables] = useState({
    budget: 0,
    hours: 0,
    frontend: 0,
    backend: 0,
    tester: 0,
    designer: false,
    currentPage: 0,
    pmHours: 1,
    designerHours: 1,
    frontHours: 1,
    backendHours: 1,
    testerHours: 1,
    designerVariables: {
      doswiadczenieSzybkoscPracy: 1,
      doswiadczenieKomunikacja: 1,
      doswiadczenieKreatywnosc: 1,
      doswiadczenieResponsywnosc: 1,
      szybkoscPracyKomunikacja: 1,
      szybkoscPracyKreatywnosc: 1,
      szybkoscPracyResponsywnosc: 1,
      komunikacjaKreatywnosc: 1,
      komunikacjaResponsywnosc: 1,
      kreatywnoscResponsywnosc: 1,
    },
    pmVariables: {
      doswiadczenieZarzadzanieZespolem: 1,
      pmDoswiadczenieKomunikacja: 1,
      doswiadczenieOrganizacjaPracy: 1,
      doswiadczenieAdaptacja: 1,
      ZarzadzanieZespolemKomunikacja: 1,
      ZarzadzanieZespolemOrganizacjaPracy: 1,
      ZarzadzanieZespolemAdaptacja: 1,
      komunikacjaOrganizacjaPracy: 1,
      komunikacjaAdaptacja: 1,
      organizacjaPracyAdaptacja: 1,
    },
    frontendVariables: {
      frontDoswiadczenieSzybkoscPracy: 1,
      forntDoswiadczenieKomunikacja: 1,
      doswiadczeniePracaZespolowa: 1,
      forntDoswiadczenieAdaptacja: 1,
      doswiadczenieTestowanie: 1,
      doswiadczenieStylowanie: 1,
      szybkoscPisaniaKoduKomunikacja: 1,
      szybkoscPisaniaKoduPracaZespolowa: 1,
      szybkoscPisaniaKoduAdaptacja: 1,
      szybkoscPisaniaKoduTesowanieWlasnegoKodu: 1,
      szybkoscPisaniaKoduStylowanie: 1,
      komunikacjaPracaZespolowa: 1,
      frontKomunikacjaAdaptacja: 1,
      komunikacjaTestowanie: 1,
      komunikacjaStylowanie: 1,
      pracaZespolowaAdaptacja: 1,
      pracaZespolowaTestowanie: 1,
      pracaZespolowaStylowanie: 1,
      adaptacjaTestowanie: 1,
      adaptacjaStylowanie: 1,
      testowanieStylowanie: 1,
    },
    backendVariables: {
      backDoswiadczenieSzybkoscPracy: 1,
      backDoswiadczenieKomunikacja: 1,
      backDoswiadczeniePracaZespolowa: 1,
      backendDoswiadczenieAdaptacja: 1,
      backDoswiadczenieTestowanie: 1,
      backSzybkoscPisaniaKoduKomunikacja: 1,
      backSzybkoscPisaniaKoduPracaZespolowa: 1,
      backSzybkoscPisaniaKoduAdaptacja: 1,
      backSzybkoscPisaniaKoduTesowanieWlasnegoKodu: 1,
      backKomunikacjaPracaZespolowa: 1,
      backendKomunikacjaAdaptacja: 1,
      backKomunikacjaTestowanie: 1,
      backPracaZespolowaAdaptacja: 1,
      backPracaZespolowaTestowanie: 1,
      backAdaptacjaTestowanie: 1,
    },
    testerVariables: {
      testDoswiadczenieKomunikacja: 1,
      doswiadczenieTestyManualne: 1,
      doswiadczenieTestyAutomatyczne: 1,
      testDoswiadczenieAdaptacja: 1,
      komunikacjaTestyManualne: 1,
      komunikacjaTestyAutomatyczne: 1,
      testKomunikacjaAdaptacja: 1,
      testyManualneTestyAutomatyczne: 1,
      testyManualneAdaptacja: 1,
      testyAutomatyczneAdaptacja: 1,
    },
  });
  const [employees, setEmployees] = useState([
    {
      type: "Grafik",
      kryteria: [
        "",
        "Doswiadczenie",
        "Szybkość pracy",
        "Komunikacja",
        "Kreatywność",
        "Responsywność",
      ],
    },
    {
      type: "Programista frontendowy",
      kryteria: [
        "",
        "Doswiadczenie",
        "Szybkość pisania kodu",
        "Komunikacja",
        "Praca zespołowa",
        "Adaptacja",
        "Testowanie wlasnego kod",
        "Stylowanie",
      ],
    },
    {
      type: "Programista backendowy",
      kryteria: [
        "",
        "Doswiadczenie",
        "Szybkość pisania kodu",
        "Komunikacja",
        "Praca zespołowa",
        "Adaptacja",
        "Testowanie wlasnego kod",
      ],
    },
    {
      type: "Tester oprogramowania",
      kryteria: [
        "",
        "Doswiadczenie",
        "Komunikacja",
        "Testy manualne",
        "Testy automatyczne",
        "Adaptacja",
      ],
    },
    {
      type: "Projekt Manager",
      kryteria: [
        "",
        "Doswiadczenia",
        "Zarzadzanie zespołem",
        "Komunikacja",
        "Organizacja pracy",
        "Adaptacja i elastyczność",
      ],
    },
  ]);
  const returnCorectComponent = () => {
    switch (ahpVariables.currentPage) {
      case 0:
        return (
          <Formahp
            ahpVariables={ahpVariables}
            setAhpVariables={setAhpVariables}
          />
        );
      case 1:
        return (
          <AhpHours
            ahpVariables={ahpVariables}
            setAhpVariables={setAhpVariables}
          />
        );
      case 2:
        return (
          <AhpDesignerMatrix
            ahpVariables={ahpVariables}
            setAhpVariables={setAhpVariables}
            employees={employees}
            sortedEmployeesArray={sortedEmployeesArray}
            setSortedEmployeesArray={setSortedEmployeesArray}
          />
        );
      case 3:
        return (
          <AhpProjectManagerMatrix
            ahpVariables={ahpVariables}
            setAhpVariables={setAhpVariables}
            employees={employees}
            sortedEmployeesArray={sortedEmployeesArray}
            setSortedEmployeesArray={setSortedEmployeesArray}
          />
        );
      case 4:
        return (
          <AhpFrontendMatrix
            ahpVariables={ahpVariables}
            setAhpVariables={setAhpVariables}
            employees={employees}
            sortedEmployeesArray={sortedEmployeesArray}
            setSortedEmployeesArray={setSortedEmployeesArray}
          />
        );
      case 5:
        return (
          <AhpBackendMatrix
            ahpVariables={ahpVariables}
            setAhpVariables={setAhpVariables}
            employees={employees}
            sortedEmployeesArray={sortedEmployeesArray}
            setSortedEmployeesArray={setSortedEmployeesArray}
          />
        );
      case 6:
        return (
          <AhpTesterMatrix
            ahpVariables={ahpVariables}
            setAhpVariables={setAhpVariables}
            employees={employees}
            sortedEmployeesArray={sortedEmployeesArray}
            setSortedEmployeesArray={setSortedEmployeesArray}
          />
        );
      case 7:
        return (
          <ResultsAhp
            ahpVariables={ahpVariables}
            setAhpVariables={setAhpVariables}
            employees={employees}
            sortedEmployeesArray={sortedEmployeesArray}
            setSortedEmployeesArray={setSortedEmployeesArray}
            employeesData={employeesData}
          />
        );
    }
  };

  return (
    <div className="container mx-auto">
      <Header />
      {returnCorectComponent()}
    </div>
  );
};

export default ahp;
