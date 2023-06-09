import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
export const DesignerLabels = ({ employeeData, setEmployeeData }) => {
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
          value={employeeData.designerExperience}
        ></input>
        <div className="flex flex-col gap-2">
          <ChevronUpIcon
            className="w-4 h-4 cursor-pointer"
            onClick={() => {
              if (
                employeeData.designerExperience === undefined ||
                employeeData.designerExperience < 9
              ) {
                setEmployeeData({
                  ...employeeData,
                  designerExperience:
                    employeeData.designerExperience !== undefined
                      ? employeeData.designerExperience + 1
                      : 1,
                });
              }
            }}
          />
          <ChevronDownIcon
            className="w-4 h-4 cursor-pointer "
            onClick={() => {
              if (
                employeeData.designerExperience !== undefined &&
                employeeData.designerExperience > 1
              ) {
                setEmployeeData({
                  ...employeeData,
                  designerExperience: employeeData.designerExperience - 1,
                });
              }
            }}
          />
        </div>
      </div>
      <div className=" flex items-center gap-6 justify-end ">
        <label htmlFor="imie" className="text-xl font-semibold">
          Kreatywnosc:
        </label>
        <input
          id="imie"
          className="bg-black text-white p-2 rounded-xl font-semibold outline-none "
          type="number"
          disabled={true}
          value={employeeData.creativity}
        ></input>
        <div className="flex flex-col gap-2">
          <ChevronUpIcon
            className="w-4 h-4 cursor-pointer"
            onClick={() => {
              if (
                employeeData.creativity === undefined ||
                employeeData.creativity < 9
              ) {
                setEmployeeData({
                  ...employeeData,
                  creativity:
                    employeeData.creativity !== undefined
                      ? employeeData.creativity + 1
                      : 1,
                });
              }
            }}
          />
          <ChevronDownIcon
            className="w-4 h-4 cursor-pointer "
            onClick={() => {
              if (
                employeeData.creativity !== undefined &&
                employeeData.creativity > 1
              ) {
                setEmployeeData({
                  ...employeeData,
                  creativity: employeeData.creativity - 1,
                });
              }
            }}
          />
        </div>
      </div>
      <div className=" flex items-center gap-6 justify-end ">
        <label htmlFor="imie" className="text-xl font-semibold">
          Szybkosc pracy:
        </label>
        <input
          id="imie"
          className="bg-black text-white p-2 rounded-xl font-semibold outline-none "
          type="number"
          disabled={true}
          value={employeeData.workSpeed}
        ></input>
        <div className="flex flex-col gap-2">
          <ChevronUpIcon
            className="w-4 h-4 cursor-pointer"
            onClick={() => {
              if (
                employeeData.workSpeed === undefined ||
                employeeData.workSpeed < 9
              ) {
                setEmployeeData({
                  ...employeeData,
                  workSpeed:
                    employeeData.workSpeed !== undefined
                      ? employeeData.workSpeed + 1
                      : 1,
                });
              }
            }}
          />
          <ChevronDownIcon
            className="w-4 h-4 cursor-pointer "
            onClick={() => {
              if (
                employeeData.workSpeed !== undefined &&
                employeeData.workSpeed > 1
              ) {
                setEmployeeData({
                  ...employeeData,
                  workSpeed: employeeData.workSpeed - 1,
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
          value={employeeData.designerComunication}
        ></input>
        <div className="flex flex-col gap-2">
          <ChevronUpIcon
            className="w-4 h-4 cursor-pointer"
            onClick={() => {
              if (
                employeeData.designerComunication === undefined ||
                employeeData.designerComunication < 9
              ) {
                setEmployeeData({
                  ...employeeData,
                  designerComunication:
                    employeeData.designerComunication !== undefined
                      ? employeeData.designerComunication + 1
                      : 1,
                });
              }
            }}
          />
          <ChevronDownIcon
            className="w-4 h-4 cursor-pointer "
            onClick={() => {
              if (
                employeeData.designerComunication !== undefined &&
                employeeData.designerComunication > 1
              ) {
                setEmployeeData({
                  ...employeeData,
                  designerComunication: employeeData.designerComunication - 1,
                });
              }
            }}
          />
        </div>
      </div>
      <div className=" flex items-center gap-6 justify-end ">
        <label htmlFor="imie" className="text-xl font-semibold">
          Responsywnosc:
        </label>
        <input
          id="imie"
          className="bg-black text-white p-2 rounded-xl font-semibold outline-none "
          type="number"
          disabled={true}
          value={employeeData.responsiveness}
        ></input>
        <div className="flex flex-col gap-2">
          <ChevronUpIcon
            className="w-4 h-4 cursor-pointer"
            onClick={() => {
              if (
                employeeData.responsiveness === undefined ||
                employeeData.responsiveness < 9
              ) {
                setEmployeeData({
                  ...employeeData,
                  responsiveness:
                    employeeData.responsiveness !== undefined
                      ? employeeData.responsiveness + 1
                      : 1,
                });
              }
            }}
          />
          <ChevronDownIcon
            className="w-4 h-4 cursor-pointer "
            onClick={() => {
              if (
                employeeData.responsiveness !== undefined &&
                employeeData.responsiveness > 1
              ) {
                setEmployeeData({
                  ...employeeData,
                  responsiveness: employeeData.responsiveness - 1,
                });
              }
            }}
          />
        </div>
      </div>
    </div>
  );
};
