import { useState, useEffect } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import axios from "axios";
import { useRouter } from "next/router";
import { useQueryClient } from "@tanstack/react-query";
import { confirmationModal } from "@/atoms/modalAtom";
import { useRecoilState } from "recoil";
export const FrontendDataBase = ({ employess, frontEndDevelopers }) => {
  const [filteredTable, setFilteredTable] = useState("");
  const [modal,setModal]=useRecoilState(confirmationModal)
  const queryClient = useQueryClient()
  const handleDelete = async (id, type) => {
    await axios.post("http://localhost:3000/api/deleteEmployee", {
      id: id,
      type: type,
    });
    queryClient.invalidateQueries({queryKey:'general',exact:true,})
    queryClient.invalidateQueries({queryKey:'frontend',exact:true,})
    setModal(true)
  };
  const router = useRouter();
  useEffect(() => {
    let array = [];
    frontEndDevelopers.map((frontEndDeveloper) => {
      employess.map((employee) => {
        if (employee.id === frontEndDeveloper.employee_id) {
          array.push({
            name: employee.imie,
            surname: employee.nazwisko,
            experience: frontEndDeveloper.doswiadczenie,
            codeWritingSpeed: frontEndDeveloper.szybkosc_pisania_kodu,
            communication: frontEndDeveloper.komunikacja,
            testing: frontEndDeveloper.testowanie_wlasnego_kodu,
            teamWork: frontEndDeveloper.praca_zespolowa,
            adaptation: frontEndDeveloper.adaptacja,
            styling: frontEndDeveloper.stylowanie,
            id: frontEndDeveloper.employee_id,
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
          <th className="columnDatabase">Stylowanie</th>
          <th className="columnDatabase">Usuń pracownika</th>
        </tr>
        {filteredTable.length > 0 &&
          filteredTable?.map((element) => {
            console.log(element, element.zawod);
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
                <td className="rowDatabase">{element.styling} </td>
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
