import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Formsaw } from "@/components/Formsaw";
import { Sawhours } from "@/components/Sawhours";
import { SawDesigner } from "@/components/SawDesigner";
import { SawProjectManager } from "@/components/SawProjectManager";
import { SawFrontend } from "@/components/SawFrontend";
import { SawBackend } from "@/components/SawBackend";
import { SawTester } from "@/components/SawTester";
import { ResultsSaw } from "@/components/ResultsSaw";

const saw = () => {
  const [sawVariables, setSawVariables] = useState({
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
      doswiadczenie: 1,
      szybkoscPracy: 1,
      komunikacja: 1,
      kreatywnosc: 1,
      responsywnosc: 1,
    },
    pmVariables: {
      pmDoswiadczenie: 1,
      zarzadzanieZespolem: 1,
      pmKomunikacja: 1,
      organizacjaPracy: 1,
      adaptacja: 1,
    },
    frontendVariables: {
      frontDoswiadczenie: 1,
      szybkoscPisaniaKodu: 1,
      frontKomunikacja: 1,
      frontPracaZespolowa: 1,
      frontAdaptacja: 1,
      testowanieWlasnegoKodu: 1,
      stylowanie: 1,
    },
    backendVariables: {
      backDoswiadczenie: 1,
      backSzybkoscPisaniaKodu: 1,
      backKomunikacja: 1,
      backPracaZespolowa: 1,
      backAdaptacja: 1,
      backTestowanieWlasnegoKodu: 1,
    },
    testerVariables: {
      testDoswiadczenie: 1,
      testKomunikacja: 1,
      testTestyManualne: 1,
      testTestyAutomatyczne: 1,
      testAdaptacja: 1,
    },
  });

  const returnCorectComponent = () => {
    switch (sawVariables.currentPage) {
      case 0:
        return (
          <Formsaw
            sawVariables={sawVariables}
            setSawVariables={setSawVariables}
          />
        );
      case 1:
        return (
          <Sawhours
            sawVariables={sawVariables}
            setSawVariables={setSawVariables}
          />
        );
      case 2:
        return (
          <SawDesigner
            sawVariables={sawVariables}
            setSawVariables={setSawVariables}
          />
        );
      case 3:
        return (
          <SawProjectManager
            sawVariables={sawVariables}
            setSawVariables={setSawVariables}
          />
        );
      case 4:
        return (
          <SawFrontend
            sawVariables={sawVariables}
            setSawVariables={setSawVariables}
          />
        );
      case 5:
        return (
          <SawBackend
            sawVariables={sawVariables}
            setSawVariables={setSawVariables}
          />
        );
      case 6:
        return (
          <SawTester
            sawVariables={sawVariables}
            setSawVariables={setSawVariables}
          />
        );
      case 7:
        return (
          <ResultsSaw
            sawVariables={sawVariables}
            setSawVariables={setSawVariables}
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

export default saw;
