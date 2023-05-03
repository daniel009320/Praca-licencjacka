import { AhpHours } from "@/components/AhpHours";
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
