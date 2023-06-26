import { Header } from "@/components/Header";
import { Select, MenuItem } from "@mui/material";
import { DesignerLabels } from "@/components/DesignerLabels";
import { useEffect, useState } from "react";
import { ManagerLabels } from "@/components/ManagerLabels";
import { FrontendLabels } from "@/components/FrontendLabels";
import { BackendLabels } from "@/components/BackendLabels";
import { TesterLabels } from "@/components/TesterLabels";
import { useQueryClient, useQuery, useMutation } from "@tanstack/react-query";
import axios from "axios";
import { ModalAddEmployee } from "@/components/ModalAddEmploye";
import { useRecoilState } from "recoil";
import { modalAddEmployee } from "@/atoms/modalAtom";

function AddEmployee() {
  const [modal, setModal] = useRecoilState(modalAddEmployee);
  const [employeeData, setEmployeeData] = useState("");
  const queryClient = useQueryClient();
  const [generalEmployess, setGeneralEmployess] = useState([]);
  useEffect(() => {
    if (employeeData?.type !== undefined) {
      setEmployeeData({
        type: employeeData.type,
        name: employeeData.name,
        surname: employeeData.surname,
        salary: employeeData.salary,
      });
      console.log("asdas");
    }
  }, [employeeData.type]);
  console.log(generalEmployess);

  const addNewEmployee = async () =>
    await axios.post("http://localhost:3000/api/addEmployee", {
      data: employeeData,
      id: generalEmployess[generalEmployess.length - 1].id,
      type:
        employeeData.type === undefined
          ? "grafic_designer_skills"
          : employeeData.type,
    });

  const { mutate: mutateNewEmployee } = useMutation(addNewEmployee, {
    onSuccess: () => {
      console.log("xd");
      queryClient.invalidateQueries({ queryKey: ["general"], exact: true });
      refetch();
    },
  });
  async function fetchGeneralEmployees() {
    const res = await fetch("http://localhost:3000/api/getData");
    const response = await res.json();
    return response.results;
  }
  const { data: general, refetch } = useQuery(
    ["general"],
    () => fetchGeneralEmployees(),
    {
      onSuccess: (general) => {
        setGeneralEmployess(general);
      },
    }
  );

  const returnValideComponent = () => {
    switch (
      employeeData.type === undefined
        ? "grafic_designer_skills"
        : employeeData.type
    ) {
      case "grafic_designer_skills":
        return (
          <DesignerLabels
            employeeData={employeeData}
            setEmployeeData={setEmployeeData}
          />
        );
      case "project_manager_skills":
        return (
          <ManagerLabels
            employeeData={employeeData}
            setEmployeeData={setEmployeeData}
          />
        );
      case "frontend_developer_skills":
        return (
          <FrontendLabels
            employeeData={employeeData}
            setEmployeeData={setEmployeeData}
          />
        );
      case "backend_developer_skills":
        return (
          <BackendLabels
            employeeData={employeeData}
            setEmployeeData={setEmployeeData}
          />
        );
      case "tester_skills":
        return (
          <TesterLabels
            employeeData={employeeData}
            setEmployeeData={setEmployeeData}
          />
        );
    }
  };
  return (
    <div className="container mx-auto">
      <Header />
      <main>
        <form className="flex flex-row ">
          <div className="flex flex-col flex-wrap h-[250px] gap-4 space-x-20 ">
            {" "}
            <div className=" flex items-center gap-6 justify-end ml-6 mt-6">
              <label htmlFor="imie" className="text-xl font-semibold">
                Imie:
              </label>
              <input
                id="imie"
                className="bg-black text-white p-2 rounded-xl font-semibold outline-none "
                onChange={(e) =>
                  setEmployeeData({ ...employeeData, name: e.target.value })
                }
              ></input>
            </div>
            <div className=" flex items-center gap-6 justify-end">
              <label htmlFor="nazwisko" className="text-xl font-semibold">
                Nazwisko:
              </label>
              <input
                id="nazwisko"
                className="bg-black text-white p-2 rounded-xl font-semibold outline-none "
                onChange={(e) =>
                  setEmployeeData({ ...employeeData, surname: e.target.value })
                }
              ></input>
            </div>
            <div className=" flex items-center gap-6 justify-end">
              <label htmlFor="pensja" className="text-xl font-semibold">
                Pensja
              </label>
              <input
                id="pensja"
                type="number"
                className="bg-black text-white p-2 rounded-xl font-semibold outline-none "
                onChange={(e) =>
                  setEmployeeData({ ...employeeData, salary: e.target.value })
                }
              ></input>
            </div>
            <div className=" flex items-center gap-6 justify-end">
              <label className="text-xl font-semibold">Stanowisko:</label>
              <Select
                defaultValue={"grafic_designer_skills"}
                onChange={(e) =>
                  setEmployeeData({ ...employeeData, type: e.target.value })
                }
                sx={{
                  width: 210,
                }}
              >
                <MenuItem value={"grafic_designer_skills"}>Grafik</MenuItem>
                <MenuItem value={"project_manager_skills"}>
                  Project Manager
                </MenuItem>
                <MenuItem value={"frontend_developer_skills"}>
                  Frontend Developer
                </MenuItem>
                <MenuItem value={"backend_developer_skills"}>
                  Backend Developer
                </MenuItem>
                <MenuItem value={"tester_skills"}>Tester</MenuItem>
              </Select>
            </div>
            {returnValideComponent()}
          </div>
        </form>
        <div className="flex justify-center items-center mt-8 ">
          <button
            className=" rounded-xl  px-6 py-2 mt-4  text-white bg-black text-xl hover:text-black hover:bg-white transition-all duration-150 cursor-pointer ease-in-out"
            onClick={() => {
              mutateNewEmployee();
              setModal(true);
            }}
          >
            Dodaj pracownika
          </button>
        </div>
        {modal && <ModalAddEmployee />}
      </main>
    </div>
  );
}
export default AddEmployee;
