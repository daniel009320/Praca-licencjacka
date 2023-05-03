import { AhpHours } from "@/components/AhpHours";
import { AhpMatrix } from "@/components/AhpMatrix";
import { Formahp } from "@/components/Formahp";
import { Header } from "@/components/Header";
import { useState } from "react";

const ahp = () => {
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
          <AhpMatrix
            ahpVariables={ahpVariables}
            setAhpVariables={setAhpVariables}
            employees={employees}
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
