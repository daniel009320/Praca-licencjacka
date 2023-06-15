import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { GeneralEmployeesTable } from "@/components/GeneralEmployeesTable";
import { ProjectManagerDataBase } from "@/components/ProjectManagerDataBase";
import useHasMounted from "@/hooks/useHasMounted";

function employeeDatabase() {
  const hasMounted = useHasMounted();
  const [employeesData, setEmployeesData] = useState("");
  const [category, setCategory] = useState("general");
  const returnSelectedEmployees = () => {
    switch (category) {
      case "general":
        return <GeneralEmployeesTable employees={employeesData} />;
      case "projectManager":
        return <ProjectManagerDataBase />;
    }
  };
  useEffect(() => {
    async function getPageData() {
      const apiUrlEndPoint = "http://localhost:3000/api/getData";
      const response = await fetch(apiUrlEndPoint);
      const res = await response.json();
      setEmployeesData(res.results);
    }
    getPageData();
  }, []);
  console.log(employeesData);
  return (
    <section className="container mx-auto relative">
      <Header />
      <div className="flex gap-3 items-center justify-center p-6 mt-5">
        <button className="button" onClick={() => setCategory("general")}>
          Wszyscy Pracownicy
        </button>
        <button
          className="button"
          onClick={() => setCategory("projectManager")}
        >
          Projekt Managerowie
        </button>
        <button className="button" onClick={() => setCategory("grafic")}>
          Grafik Designerzy
        </button>
        <button className="button" onClick={() => setCategory("frontend")}>
          Frontend Developerzy
        </button>
        <button className="button" onClick={() => setCategory("backend")}>
          Backend Developerzy
        </button>
        <button className="button" onClick={() => setCategory("tester")}>
          Testerzy
        </button>
      </div>
      {hasMounted && employeesData.length > 1 && (
        <div>{returnSelectedEmployees()}</div>
      )}
    </section>
  );
}
export default employeeDatabase;
