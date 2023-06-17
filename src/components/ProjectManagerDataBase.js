import { useState, useEffect } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import axios from "axios";
import { useRouter } from "next/router";
import { useQueryClient } from "@tanstack/react-query";
import { useRecoilState } from "recoil";
import { confirmationModal } from "@/atoms/modalAtom";
export const ProjectManagerDataBase = ({ employess, projectMenagers }) => {
  const queryClient = useQueryClient()
  const [filteredTable, setFilteredTable] = useState("");
  const [modal,setModal]=useRecoilState(confirmationModal)
  const handleDelete = async (id, type) => {
    await axios.post("http://localhost:3000/api/deleteEmployee", {
      id: id,
      type: type,
    });
    queryClient.invalidateQueries({queryKey:'general',exact:true,})
    queryClient.invalidateQueries({queryKey:'menagers',exact:true,})
    setModal(true)
  };

  useEffect(() => {
    let array = [];
    projectMenagers.map((projectManager) => {
      employess.map((employee) => {
        if (employee.id === projectManager.employee_id) {
          array.push({
            name: employee.imie,
            surname: employee.nazwisko,
            experience: projectManager.doswiadczenie,
            management: projectManager.zarzadzanie_zespolem,
            communication: projectManager.komunikacja,
            workPerformance: projectManager.organizacja_pracy,
            flexAbility: projectManager.elastycznosc,
            id: projectManager.employee_id,
            zawod: employee.zawod,
          });
        }
      });
    });
    setFilteredTable(array);
  }, [employess]);
  console.log(filteredTable);

  return (
    <div className="flex w-full justify-center items-center mt-7">
      <table className="border-2 border-black">
        <tr className="columnDatabase">
          <th className="columnDatabase">Imie</th>
          <th className="columnDatabase">Nazwisko</th>
          <th className="columnDatabase">Doswiadczenie</th>
          <th className="columnDatabase">Adaptacja</th>
          <th className="columnDatabase">Komunikacja</th>
          <th className="columnDatabase">Zarzadzanie zespolem</th>
          <th className="columnDatabase">Organizacja pracy</th>
          <th className="columnDatabase">Usuń pracownika</th>
        </tr>
        {filteredTable.length > 0 &&
          filteredTable?.map((element) => {
            return (
              <tr key={element.id} className="text-center">
                <td className="rowDatabase">{element.name}</td>
                <td className="rowDatabase">{element.surname}</td>

                <td className="rowDatabase">{element.experience} </td>
                <td className="rowDatabase">{element.flexAbility} </td>
                <td className="rowDatabase">{element.communication} </td>
                <td className="rowDatabase">{element.management} </td>
                <td className="rowDatabase">{element.workPerformance} </td>
                <td className="rowDatabase">
                  <AiFillCloseCircle
                    className="h-8 w-8 mx-auto cursor-pointer"
                    onClick={() => handleDelete(element.id, element.zawod)}
                  />
                </td>
              </tr>
            );
          })}
      </table>
    </div>
  );
};
