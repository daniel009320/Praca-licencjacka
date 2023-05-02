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
  });

  return (
    <div className="container mx-auto">
      <Header />
      <Formahp ahpVariables={ahpVariables} setAhpVariables={setAhpVariables} />
    </div>
  );
};

export default ahp;
