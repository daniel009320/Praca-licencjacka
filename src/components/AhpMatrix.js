import { useState } from "react";

export const AhpMatrix = ({ employees }) => {
  const [currentPosition, setCurrentPosition] = useState(0);
  return (
    <div>
      <div className="flex justify-center py-8 px-4 text-4xl font-semibold">
        <h2>{employees[currentPosition].type}</h2>
      </div>
      <div className="w-full justify-center items-center flex ">
        <table>
          <tr className="column">
            {employees[currentPosition].kryteria.map((element) => {
              return <th className="row">{element}</th>;
            })}
          </tr>
          <tr className="column">
            <th className="row">Doswiadczenie</th>
            <td className="row">Alfreds Futterkiste</td>
            <td className="row">Maria Anders</td>
            <td className="row">Germany</td>
            <td className="row">Francisco Chang</td>
            <td className="row">Mexico</td>
          </tr>
          <tr className="column">
            <th className="row"> Szybkość pracy</th>
            <td className="row">Centro c</td>
            <td className="row">Francisco Chang</td>
            <td className="row">Mexico</td>
            <td className="row">Francisco Chang</td>
            <td className="row">Mexico</td>
          </tr>
          <tr className="column">
            <th className="row">Komunikacja</th>
            <td className="row">Centro </td>
            <td className="row">Francisco Chang</td>
            <td className="row">Mexico</td>
            <td className="row">Francisco Chang</td>
            <td className="row">Mexico</td>
          </tr>
          <tr className="column">
            <th className="row">Kreatywność</th>
            <td className="row">Centro ca</td>
            <td className="row">Francisco Chang</td>
            <td className="row">Mexico</td>
            <td className="row">Francisco Chang</td>
            <td className="row">Mexico</td>
          </tr>
          <tr className="column">
            <th className="row">Responsywność</th>
            <td className="row">Centro </td>
            <td className="row">Francisco Chang</td>
            <td className="row">Mexico</td>
            <td className="row">Francisco Chang</td>
            <td className="row">Mexico</td>
          </tr>
        </table>
      </div>
      <div>
        <button
          className="border-2 border-pink-600 py-4 px-4 rounded-full"
          onClick={() => setCurrentPosition(currentPosition + 1)}
        >
          Kamil gej
        </button>
      </div>
    </div>
  );
};
