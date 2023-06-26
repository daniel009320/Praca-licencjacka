import { useState, useEffect } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import axios from "axios";
import { useRouter } from "next/router";
import { useQueryClient } from "@tanstack/react-query";
import { useRecoilState } from "recoil";
import { confirmationModal } from "@/atoms/modalAtom";
export const BackendDataBase = ({ employess, backendDevelopers }) => {
  const queryClient = useQueryClient();
  const [filteredTable, setFilteredTable] = useState("");
  const [modal, setModal] = useRecoilState(confirmationModal);
  const handleDelete = async (id, type) => {
    await axios.post("http://localhost:3000/api/deleteEmployee", {
      id: id,
      type: type,
    });
    queryClient.invalidateQueries({ queryKey: "general", exact: true });
    queryClient.invalidateQueries({ queryKey: "backend", exact: true });
    setModal(true);
  };
  const router = useRouter();
  useEffect(() => {
    let array = [];
    backendDevelopers?.map((backendDeveloper) => {
      employess?.map((employee) => {
        if (employee.id === backendDeveloper.employee_id) {
          array.push({
            name: employee.imie,
            surname: employee.nazwisko,
            experience: backendDeveloper.doswiadczenie,
            codeWritingSpeed: backendDeveloper.szybkosc_pisania_kodu,
            communication: backendDeveloper.komunikacja,
            testing: backendDeveloper.testowanie_wlasnego_kodu,
            teamWork: backendDeveloper.praca_zespolowa,
            adaptation: backendDeveloper.adaptacja,
            id: backendDeveloper.employee_id,
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
          <th className="columnDatabase">Szybkosc pisania kodu</th>
          <th className="columnDatabase">Komunikacja</th>
          <th className="columnDatabase">Testowanie wlasnego kodu</th>
          <th className="columnDatabase">Praca zespolowa</th>
          <th className="columnDatabase">Adaptacja</th>

          <th className="columnDatabase">Usuń pracownika</th>
        </tr>
        {filteredTable.length > 0 &&
          filteredTable?.map((element) => {
            return (
              <tr key={element.id} className="text-center">
                <td className="rowDatabase">{element.name}</td>
                <td className="rowDatabase">{element.surname}</td>

                <td className="rowDatabase">{element.experience} </td>
                <td className="rowDatabase">{element.codeWritingSpeed} </td>
                <td className="rowDatabase">{element.communication} </td>
                <td className="rowDatabase">{element.testing} </td>
                <td className="rowDatabase">{element.teamWork} </td>
                <td className="rowDatabase">{element.adaptation} </td>

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
