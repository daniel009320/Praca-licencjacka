import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
export const ManagerLabels = ({ employeeData, setEmployeeData }) => {
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
          value={employeeData.managerExperience}
        ></input>
        <div className="flex flex-col gap-2">
          <ChevronUpIcon
            className="w-4 h-4 cursor-pointer"
            onClick={() => {
              if (
                employeeData.managerExperience === undefined ||
                employeeData.managerExperience < 9
              ) {
                setEmployeeData({
                  ...employeeData,
                  managerExperience:
                    employeeData.managerExperience !== undefined
                      ? employeeData.managerExperience + 1
                      : 1,
                });
              }
            }}
          />
          <ChevronDownIcon
            className="w-4 h-4 cursor-pointer "
            onClick={() => {
              if (
                employeeData.managerExperience !== undefined &&
                employeeData.managerExperience > 1
              ) {
                setEmployeeData({
                  ...employeeData,
                  managerExperience: employeeData.managerExperience - 1,
                });
              }
            }}
          />
        </div>
      </div>
      <div className=" flex items-center gap-6 justify-end ">
        <label htmlFor="imie" className="text-xl font-semibold">
          Zarzadzanie zespołem:
        </label>
        <input
          id="imie"
          className="bg-black text-white p-2 rounded-xl font-semibold outline-none "
          type="number"
          disabled={true}
          value={employeeData.zarzadzanie}
        ></input>
        <div className="flex flex-col gap-2">
          <ChevronUpIcon
            className="w-4 h-4 cursor-pointer"
            onClick={() => {
              if (
                employeeData.zarzadzanie === undefined ||
                employeeData.zarzadzanie < 9
              ) {
                setEmployeeData({
                  ...employeeData,
                  zarzadzanie:
                    employeeData.zarzadzanie !== undefined
                      ? employeeData.zarzadzanie + 1
                      : 1,
                });
              }
            }}
          />
          <ChevronDownIcon
            className="w-4 h-4 cursor-pointer "
            onClick={() => {
              if (
                employeeData.zarzadzanie !== undefined &&
                employeeData.zarzadzanie > 1
              ) {
                setEmployeeData({
                  ...employeeData,
                  zarzadzanie: employeeData.zarzadzanie - 1,
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
          value={employeeData.managerComunication}
        ></input>
        <div className="flex flex-col gap-2">
          <ChevronUpIcon
            className="w-4 h-4 cursor-pointer"
            onClick={() => {
              if (
                employeeData.managerComunication === undefined ||
                employeeData.managerComunication < 9
              ) {
                setEmployeeData({
                  ...employeeData,
                  managerComunication:
                    employeeData.managerComunication !== undefined
                      ? employeeData.managerComunication + 1
                      : 1,
                });
              }
            }}
          />
          <ChevronDownIcon
            className="w-4 h-4 cursor-pointer "
            onClick={() => {
              if (
                employeeData.managerComunication !== undefined &&
                employeeData.managerComunication > 1
              ) {
                setEmployeeData({
                  ...employeeData,
                  managerComunication: employeeData.managerComunication - 1,
                });
              }
            }}
          />
        </div>
      </div>
      <div className=" flex items-center gap-6 justify-end ">
        <label htmlFor="imie" className="text-xl font-semibold">
          Organizacja pracy:
        </label>
        <input
          id="imie"
          className="bg-black text-white p-2 rounded-xl font-semibold outline-none "
          type="number"
          disabled={true}
          value={employeeData.organization}
        ></input>
        <div className="flex flex-col gap-2">
          <ChevronUpIcon
            className="w-4 h-4 cursor-pointer"
            onClick={() => {
              if (
                employeeData.organization === undefined ||
                employeeData.organization < 9
              ) {
                setEmployeeData({
                  ...employeeData,
                  organization:
                    employeeData.organization !== undefined
                      ? employeeData.organization + 1
                      : 1,
                });
              }
            }}
          />
          <ChevronDownIcon
            className="w-4 h-4 cursor-pointer "
            onClick={() => {
              if (
                employeeData.organization !== undefined &&
                employeeData.organization > 1
              ) {
                setEmployeeData({
                  ...employeeData,
                  organization: employeeData.organization - 1,
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
          value={employeeData.managerAdaptation}
        ></input>
        <div className="flex flex-col gap-2">
          <ChevronUpIcon
            className="w-4 h-4 cursor-pointer"
            onClick={() => {
              if (
                employeeData.managerAdaptation === undefined ||
                employeeData.managerAdaptation < 9
              ) {
                setEmployeeData({
                  ...employeeData,
                  managerAdaptation:
                    employeeData.managerAdaptation !== undefined
                      ? employeeData.managerAdaptation + 1
                      : 1,
                });
              }
            }}
          />
          <ChevronDownIcon
            className="w-4 h-4 cursor-pointer "
            onClick={() => {
              if (
                employeeData.managerAdaptation !== undefined &&
                employeeData.managerAdaptation > 1
              ) {
                setEmployeeData({
                  ...employeeData,
                  managerAdaptation: employeeData.managerAdaptation - 1,
                });
              }
            }}
          />
        </div>
      </div>
    </div>
  );
};
