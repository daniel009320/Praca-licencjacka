import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { GeneralEmployeesTable } from "@/components/GeneralEmployeesTable";
import { ProjectManagerDataBase } from "@/components/ProjectManagerDataBase";
import useHasMounted from "@/hooks/useHasMounted";
import { GraficDataBase } from "@/components/GraficDataBase";
import { FrontendDataBase } from "@/components/FrontendDataBase";
import { BackendDataBase } from "@/components/BackendDataBase";
import { TesterDataBase } from "@/components/TesterDataBase";
import { useRecoilState } from "recoil";
import { categoryState } from "@/atoms/modalAtom";
import { ConfirmationModal } from "@/components/ConfirmationModal";
import { confirmationModal } from "@/atoms/modalAtom";

function employeeDatabase({
  generalEmployess,
  projectMenagers,
  frontEndDevelopers,
  uiDesigners,
  backendDevelopers,
  testers,
}) {
  const [category, setCategory] = useRecoilState(categoryState);
  console.log(category);
  const handleCategoryChange = (value) => {
    if (value !== category) {
      setCategory(value);
    }
  };
  const [modal, setModal] = useRecoilState(confirmationModal);
  const returnSelectedEmployees = () => {
    switch (category) {
      case "general":
        return <GeneralEmployeesTable employees={generalEmployess} />;
      case "projectManager":
        return (
          <ProjectManagerDataBase
            employess={generalEmployess}
            projectMenagers={projectMenagers}
          />
        );
      case "grafic":
        return (
          <GraficDataBase
            employess={generalEmployess}
            uiDesigners={uiDesigners}
          />
        );
      case "frontend":
        return (
          <FrontendDataBase
            employess={generalEmployess}
            frontEndDevelopers={frontEndDevelopers}
          />
        );
      case "backend":
        return (
          <BackendDataBase
            employess={generalEmployess}
            backendDevelopers={backendDevelopers}
          />
        );
      case "tester":
        return (
          <TesterDataBase employess={generalEmployess} testers={testers} />
        );
    }
  };
  const hasMounted = useHasMounted();
  return (
    <section className="container mx-auto relative">
      <Header />
      <div className="flex gap-3 items-center justify-center p-6 mt-5">
        <button
          className="button"
          onClick={() => handleCategoryChange("general")}
        >
          Wszyscy Pracownicy
        </button>
        <button
          className="button"
          onClick={() => handleCategoryChange("projectManager")}
        >
          Projekt Managerowie
        </button>
        <button
          className="button"
          onClick={() => handleCategoryChange("grafic")}
        >
          Grafik Designerzy
        </button>
        <button
          className="button"
          onClick={() => handleCategoryChange("frontend")}
        >
          Frontend Developerzy
        </button>
        <button
          className="button"
          onClick={() => handleCategoryChange("backend")}
        >
          Backend Developerzy
        </button>
        <button
          className="button"
          onClick={() => handleCategoryChange("tester")}
        >
          Testerzy
        </button>
      </div>
      {hasMounted && <div>{returnSelectedEmployees()}</div>}
      {modal && <ConfirmationModal />}
    </section>
  );
}
export default employeeDatabase;

export async function getServerSideProps() {
  const [
    generalEmployess,
    projectMenagers,
    frontEndDevelopers,
    uiDesigners,
    backendDevelopers,
    testers,
  ] = await Promise.all([
    fetch("http://localhost:3000/api/getData").then((res) => res.json()),
    fetch("http://localhost:3000/api/getDataManager").then((res) => res.json()),
    fetch("http://localhost:3000/api/getDataFrontend").then((res) =>
      res.json()
    ),
    fetch("http://localhost:3000/api/getDataDesigner").then((res) =>
      res.json()
    ),
    fetch("http://localhost:3000/api/getDataBackend").then((res) => res.json()),
    fetch("http://localhost:3000/api/getDataTester").then((res) => res.json()),
  ]);

  return {
    props: {
      generalEmployess: generalEmployess.results,
      projectMenagers: projectMenagers.results,
      frontEndDevelopers: frontEndDevelopers.results,
      uiDesigners: uiDesigners.results,
      backendDevelopers: backendDevelopers.results,
      testers: testers.results,
    },
  };
}
