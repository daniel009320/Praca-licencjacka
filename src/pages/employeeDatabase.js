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
import { useQuery } from "@tanstack/react-query";

function EmployeeDatabase(
  {
    // generalEmployess,
    // projectMenagers,
    // frontEndDevelopers,
    // uiDesigners,
    // backendDevelopers,
    // testers,
  }
) {
  const [category, setCategory] = useRecoilState(categoryState);
  const [generalEmployess,setGeneralEmployess]=useState('')
  const [frontEndDevelopers,setFrontEndDevelopers]=useState('')
  const [projectMenagers,setProjectMenagers]=useState('')
  const [testers,setTesters]=useState('')
  const [backendDevelopers,setBackendDevelopers]=useState('')
  const [uiDesigners,setUiDesigners]=useState('')
  const handleCategoryChange = (value) => {
    if (value !== category) {
      setCategory(value);
    }
  };
  const [modal, setModal] = useRecoilState(confirmationModal);

  async function fetchGeneralEmployees() {
    const res = await fetch("http://localhost:3000/api/getData");
    const response = await res.json();
    return response.results;
  }
  async function fetchDataFrontend() {
    const res = await fetch("http://localhost:3000/api/getDataFrontend");
    const response = await res.json();
    return response.results;
  }
  async function fetchDataMenagers() {
    const res = await fetch("http://localhost:3000/api/getDataManager");
    const response = await res.json();
    return response.results;
  }
  async function fetchDataTester() {
    const res = await fetch("http://localhost:3000/api/getDataTester");
    const response = await res.json();
    return response.results;
  }
  async function fetchDataBackend() {
    const res = await fetch("http://localhost:3000/api/getDataBackend");
    const response = await res.json();
    return response.results;
  }
  async function fetchDataDesigner() {
    const res = await fetch("http://localhost:3000/api/getDataDesigner");
    const response = await res.json();
    return response.results;
  }


    const {data:general}=useQuery(["general"], () => fetchGeneralEmployees(), {

      onSuccess:(general)=>{
        setGeneralEmployess(general)
      }
    });


    useQuery(["frontend"], () => fetchDataFrontend(), {
   
      onSuccess:(data)=>{
        setFrontEndDevelopers(data)
      }
    });
  const {data:projectManager}=  useQuery(["managers"], () => fetchDataMenagers(), {
      
      onSuccess:(projectManager)=>{
        setProjectMenagers(projectManager)
      }
    });
    const {data:frontend}=useQuery(["tester"], () => fetchDataTester(), {
    
      onSuccess:(frontend)=>{
        setTesters(frontend)
      }
    });
    const {data:backend}=useQuery(["backend"], () => fetchDataBackend(), {
  
      onSuccess:(backend)=>{
        setBackendDevelopers(backend)
      }

    });
    const {data:designers}=useQuery(["designer"], () => fetchDataDesigner(), {

      onSuccess:(designers)=>{
        setUiDesigners(designers)
      }
    });

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
     {modal&&<ConfirmationModal/>}
    </section>
  );
}
export default EmployeeDatabase;


