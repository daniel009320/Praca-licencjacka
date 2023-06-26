import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
export const TesterLabels = ({ employeeData, setEmployeeData }) => {
  console.log(employeeData);
  return (
    <div className=" flex flex-col flex-wrap  gap-4 h-[250px] mt-6 space-x-16">
      <div className=" flex items-center gap-6 justify-end  ">
        <label htmlFor="imie" className="text-xl font-semibold">
          Doswiadczenie:
        </label>
        <input
          id="imie"
          className="bg-black text-white p-2 rounded-xl font-semibold outline-none "
          type="number"
          disabled={true}
          value={employeeData.testerExperience}
        ></input>
        <div className="flex flex-col gap-2">
          <ChevronUpIcon
            className="w-4 h-4 cursor-pointer"
            onClick={() => {
              if (
                employeeData.testerExperience === undefined ||
                employeeData.testerExperience < 9
              ) {
                setEmployeeData({
                  ...employeeData,
                  testerExperience:
                    employeeData.testerExperience !== undefined
                      ? employeeData.testerExperience + 1
                      : 1,
                });
              }
            }}
          />
          <ChevronDownIcon
            className="w-4 h-4 cursor-pointer "
            onClick={() => {
              if (
                employeeData.testerExperience !== undefined &&
                employeeData.testerExperience > 1
              ) {
                setEmployeeData({
                  ...employeeData,
                  testerExperience: employeeData.testerExperience - 1,
                });
              }
            }}
          />
        </div>
      </div>
      <div className=" flex items-center gap-6 justify-end ">
        <label htmlFor="imie" className="text-xl font-semibold">
          Komunikacja:
        </label>
        <input
          id="imie"
          className="bg-black text-white p-2 rounded-xl font-semibold outline-none "
          type="number"
          disabled={true}
          value={employeeData.testerComunication}
        ></input>
        <div className="flex flex-col gap-2">
          <ChevronUpIcon
            className="w-4 h-4 cursor-pointer"
            onClick={() => {
              if (
                employeeData.testerComunication === undefined ||
                employeeData.testerComunication < 9
              ) {
                setEmployeeData({
                  ...employeeData,
                  testerComunication:
                    employeeData.testerComunication !== undefined
                      ? employeeData.testerComunication + 1
                      : 1,
                });
              }
            }}
          />
          <ChevronDownIcon
            className="w-4 h-4 cursor-pointer "
            onClick={() => {
              if (
                employeeData.testerComunication !== undefined &&
                employeeData.testerComunication > 1
              ) {
                setEmployeeData({
                  ...employeeData,
                  testerComunication: employeeData.testerComunication - 1,
                });
              }
            }}
          />
        </div>
      </div>
      <div className=" flex items-center gap-6 justify-end ">
        <label htmlFor="imie" className="text-xl font-semibold">
          Testy manualne:
        </label>
        <input
          id="imie"
          className="bg-black text-white p-2 rounded-xl font-semibold outline-none "
          type="number"
          disabled={true}
          value={employeeData.manualTest}
        ></input>
        <div className="flex flex-col gap-2">
          <ChevronUpIcon
            className="w-4 h-4 cursor-pointer"
            onClick={() => {
              if (
                employeeData.manualTest === undefined ||
                employeeData.manualTest < 9
              ) {
                setEmployeeData({
                  ...employeeData,
                  manualTest:
                    employeeData.manualTest !== undefined
                      ? employeeData.manualTest + 1
                      : 1,
                });
              }
            }}
          />
          <ChevronDownIcon
            className="w-4 h-4 cursor-pointer "
            onClick={() => {
              if (
                employeeData.manualTest !== undefined &&
                employeeData.manualTest > 1
              ) {
                setEmployeeData({
                  ...employeeData,
                  manualTest: employeeData.manualTest - 1,
                });
              }
            }}
          />
        </div>
      </div>
      <div className=" flex items-center gap-6 justify-end ">
        <label htmlFor="imie" className="text-xl font-semibold">
          Testy automatyczne:
        </label>
        <input
          id="imie"
          className="bg-black text-white p-2 rounded-xl font-semibold outline-none "
          type="number"
          disabled={true}
          value={employeeData.automaticTest}
        ></input>
        <div className="flex flex-col gap-2">
          <ChevronUpIcon
            className="w-4 h-4 cursor-pointer"
            onClick={() => {
              if (
                employeeData.automaticTest === undefined ||
                employeeData.automaticTest < 9
              ) {
                setEmployeeData({
                  ...employeeData,
                  automaticTest:
                    employeeData.automaticTest !== undefined
                      ? employeeData.automaticTest + 1
                      : 1,
                });
              }
            }}
          />
          <ChevronDownIcon
            className="w-4 h-4 cursor-pointer "
            onClick={() => {
              if (
                employeeData.automaticTest !== undefined &&
                employeeData.automaticTest > 1
              ) {
                setEmployeeData({
                  ...employeeData,
                  automaticTest: employeeData.automaticTest - 1,
                });
              }
            }}
          />
        </div>
      </div>
      <div className=" flex items-center gap-6 justify-end ">
        <label htmlFor="imie" className="text-xl font-semibold">
          Adaptacja:
        </label>
        <input
          id="imie"
          className="bg-black text-white p-2 rounded-xl font-semibold outline-none "
          type="number"
          disabled={true}
          value={employeeData.testerAdaptation}
        ></input>
        <div className="flex flex-col gap-2">
          <ChevronUpIcon
            className="w-4 h-4 cursor-pointer"
            onClick={() => {
              if (
                employeeData.testerAdaptation === undefined ||
                employeeData.testerAdaptation < 9
              ) {
                setEmployeeData({
                  ...employeeData,
                  testerAdaptation:
                    employeeData.testerAdaptation !== undefined
                      ? employeeData.testerAdaptation + 1
                      : 1,
                });
              }
            }}
          />
          <ChevronDownIcon
            className="w-4 h-4 cursor-pointer "
            onClick={() => {
              if (
                employeeData.testerAdaptation !== undefined &&
                employeeData.testerAdaptation > 1
              ) {
                setEmployeeData({
                  ...employeeData,
                  testerAdaptation: employeeData.testerAdaptation - 1,
                });
              }
            }}
          />
        </div>
      </div>
    </div>
  );
};
