import { useState, useEffect } from "react";

export const ProjectManagerDataBase = ({ employeesData }) => {
  const [projectManagerData, setProjectManagerData] = useState("");
  useEffect(() => {
    async function getPageData() {
      const apiUrlEndPoint = "http://localhost:3000/api/getDataManager";
      const response = await fetch(apiUrlEndPoint);
      const res = await response.json();
      if (employeesData?.length > 1) {
        setProjectManagerData(
          res.results.map((projectManager) => {
            employeesData.map((employee) => {
              if (employee.id === projectManager.employee_id) {
                return {
                  name: employee.imie,
                  last_name: employee.nazwisko,
                  doswiadczenie: projectManager.doswiadczenie,
                  adaptacja: projectManager.adaptacja,
                  elastycznosc: projectManager.elastycznosc,
                  organizacja: projectManager.organizacja_pracy,
                  zarzadzanie: projectManager.zarzadzanie_zespolem,
                };
              }
            });
          })
        );
      }
    }
    getPageData();
  }, [employeesData]);
  console.log(projectManagerData);

  return (
    <div className="flex w-full justify-center items-center mt-7">
      {/* <table className="border-2 border-black">
    <tr className="columnDatabase">
      <th className="columnDatabase">Imie</th>
      <th className="columnDatabase">Nazwisko</th>
      <th className="columnDatabase">Adaptacja</th>
      <th className="columnDatabase">Zarobki</th>
      <th className="columnDatabase">Usuń pracownika</th>
      <th className="columnDatabase">Usuń pracownika</th>
      <th className="columnDatabase">Usuń pracownika</th>
    </tr>
    {employees.length > 1 &&
      employees?.map((element) => {
        return (
          <tr className="text-center">
            <td className="rowDatabase">{element.imie}</td>
            <td className="rowDatabase">{element.nazwisko}</td>
            <td className="rowDatabase">{element.zawod.toUpperCase()}</td>
            <td className="rowDatabase">{element.zarobki} zł</td>
            <td className="rowDatabase">{element.zarobki} zł</td>
            <td className="rowDatabase">{element.zarobki} zł</td>
            <td className="rowDatabase">{element.zarobki} zł</td>
            <td className="rowDatabase">
              <AiFillCloseCircle className="h-8 w-8 mx-auto cursor-pointer" />
            </td>
          </tr>
        );
      })}
  </table> */}
    </div>
  );
};
