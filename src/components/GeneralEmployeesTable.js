import axios from "axios";
import { AiFillCloseCircle } from "react-icons/ai";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { ConfirmationModal } from "./ConfirmationModal";
import { confirmationModal } from "@/atoms/modalAtom";
import { useQueryClient } from "@tanstack/react-query";
export const GeneralEmployeesTable = ({ employees }) => {
  const queryClient = useQueryClient();

  console.log(employees);
  const handleDelete = async (id, type) => {
    await axios.post("http://localhost:3000/api/deleteEmployee", {
      id: id,
      type: type,
    });
    queryClient.invalidateQueries({ queryKey: "general", exact: true });
    setModal(true);
  };
  const [modal, setModal] = useRecoilState(confirmationModal);
  const router = useRouter();
  return (
    <div className="flex w-full justify-center items-center mt-7">
      <table className="border-2 border-black">
        <tr className="columnDatabase">
          <th className="columnDatabase">Imie</th>
          <th className="columnDatabase">Nazwisko</th>
          <th className="columnDatabase">Zawód</th>
          <th className="columnDatabase">Zarobki</th>
          <th className="columnDatabase">Usuń pracownika</th>
        </tr>
        {employees?.length > 0 &&
          employees?.map((element) => {
            return (
              <tr key={element.id} className="text-center">
                <td className="rowDatabase">{element.imie}</td>
                <td className="rowDatabase">{element.nazwisko}</td>
                <td className="rowDatabase">{element.zawod.toUpperCase()}</td>
                <td className="rowDatabase">{element.zarobki} zł</td>
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
