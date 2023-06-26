import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
export const FrontendLabels = ({ employeeData, setEmployeeData }) => {
  console.log(employeeData);
  return (
    <div className=" flex flex-col flex-wrap  gap-4 h-[250px] mt-6 space-x-8">
      <div className=" flex items-center gap-6 justify-end  ">
        <label htmlFor="imie" className="text-xl font-semibold">
          Doswiadczenie:
        </label>
        <input
          id="imie"
          className="bg-black text-white p-2 rounded-xl font-semibold outline-none "
          type="number"
          disabled={true}
          value={employeeData.frontendExperience}
        ></input>
        <div className="flex flex-col gap-2">
          <ChevronUpIcon
            className="w-4 h-4 cursor-pointer"
            onClick={() => {
              if (
                employeeData.frontendExperience === undefined ||
                employeeData.frontendExperience < 9
              ) {
                setEmployeeData({
                  ...employeeData,
                  frontendExperience:
                    employeeData.frontendExperience !== undefined
                      ? employeeData.frontendExperience + 1
                      : 1,
                });
              }
            }}
          />
          <ChevronDownIcon
            className="w-4 h-4 cursor-pointer "
            onClick={() => {
              if (
                employeeData.frontendExperience !== undefined &&
                employeeData.frontendExperience > 1
              ) {
                setEmployeeData({
                  ...employeeData,
                  frontendExperience: employeeData.frontendExperience - 1,
                });
              }
            }}
          />
        </div>
      </div>
      <div className=" flex items-center gap-6 justify-end ">
        <label htmlFor="imie" className="text-xl font-semibold">
          Szybkość pisania kodu:
        </label>
        <input
          id="imie"
          className="bg-black text-white p-2 rounded-xl font-semibold outline-none "
          type="number"
          disabled={true}
          value={employeeData.codeWritingSpeed}
        ></input>
        <div className="flex flex-col gap-2">
          <ChevronUpIcon
            className="w-4 h-4 cursor-pointer"
            onClick={() => {
              if (
                employeeData.codeWritingSpeed === undefined ||
                employeeData.codeWritingSpeed < 9
              ) {
                setEmployeeData({
                  ...employeeData,
                  codeWritingSpeed:
                    employeeData.codeWritingSpeed !== undefined
                      ? employeeData.codeWritingSpeed + 1
                      : 1,
                });
              }
            }}
          />
          <ChevronDownIcon
            className="w-4 h-4 cursor-pointer "
            onClick={() => {
              if (
                employeeData.codeWritingSpeed !== undefined &&
                employeeData.codeWritingSpeed > 1
              ) {
                setEmployeeData({
                  ...employeeData,
                  codeWritingSpeed: employeeData.codeWritingSpeed - 1,
                });
              }
            }}
          />
        </div>
      </div>
      <div className=" flex items-center gap-6 justify-end ">
        <label htmlFor="imie" className="text-xl font-semibold">
          Testowanie własnego kodu:
        </label>
        <input
          id="imie"
          className="bg-black text-white p-2 rounded-xl font-semibold outline-none "
          type="number"
          disabled={true}
          value={employeeData.codeTesting}
        ></input>
        <div className="flex flex-col gap-2">
          <ChevronUpIcon
            className="w-4 h-4 cursor-pointer"
            onClick={() => {
              if (
                employeeData.codeTesting === undefined ||
                employeeData.codeTesting < 9
              ) {
                setEmployeeData({
                  ...employeeData,
                  codeTesting:
                    employeeData.codeTesting !== undefined
                      ? employeeData.codeTesting + 1
                      : 1,
                });
              }
            }}
          />
          <ChevronDownIcon
            className="w-4 h-4 cursor-pointer "
            onClick={() => {
              if (
                employeeData.codeTesting !== undefined &&
                employeeData.codeTesting > 1
              ) {
                setEmployeeData({
                  ...employeeData,
                  codeTesting: employeeData.codeTesting - 1,
                });
              }
            }}
          />
        </div>
      </div>
      <div className=" flex items-center gap-6 justify-end ">
        <label htmlFor="imie" className="text-xl font-semibold">
          Praca zespołowa:
        </label>
        <input
          id="imie"
          className="bg-black text-white p-2 rounded-xl font-semibold outline-none "
          type="number"
          disabled={true}
          value={employeeData.teamwork}
        ></input>
        <div className="flex flex-col gap-2">
          <ChevronUpIcon
            className="w-4 h-4 cursor-pointer"
            onClick={() => {
              if (
                employeeData.teamwork === undefined ||
                employeeData.teamwork < 9
              ) {
                setEmployeeData({
                  ...employeeData,
                  teamwork:
                    employeeData.teamwork !== undefined
                      ? employeeData.teamwork + 1
                      : 1,
                });
              }
            }}
          />
          <ChevronDownIcon
            className="w-4 h-4 cursor-pointer "
            onClick={() => {
              if (
                employeeData.teamwork !== undefined &&
                employeeData.teamwork > 1
              ) {
                setEmployeeData({
                  ...employeeData,
                  teamwork: employeeData.teamwork - 1,
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
          value={employeeData.comunication}
        ></input>
        <div className="flex flex-col gap-2">
          <ChevronUpIcon
            className="w-4 h-4 cursor-pointer"
            onClick={() => {
              if (
                employeeData.comunication === undefined ||
                employeeData.comunication < 9
              ) {
                setEmployeeData({
                  ...employeeData,
                  comunication:
                    employeeData.comunication !== undefined
                      ? employeeData.comunication + 1
                      : 1,
                });
              }
            }}
          />
          <ChevronDownIcon
            className="w-4 h-4 cursor-pointer "
            onClick={() => {
              if (
                employeeData.comunication !== undefined &&
                employeeData.comunication > 1
              ) {
                setEmployeeData({
                  ...employeeData,
                  comunication: employeeData.comunication - 1,
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
          value={employeeData.adaptation}
        ></input>
        <div className="flex flex-col gap-2">
          <ChevronUpIcon
            className="w-4 h-4 cursor-pointer"
            onClick={() => {
              if (
                employeeData.adaptation === undefined ||
                employeeData.adaptation < 9
              ) {
                setEmployeeData({
                  ...employeeData,
                  adaptation:
                    employeeData.adaptation !== undefined
                      ? employeeData.adaptation + 1
                      : 1,
                });
              }
            }}
          />
          <ChevronDownIcon
            className="w-4 h-4 cursor-pointer "
            onClick={() => {
              if (
                employeeData.adaptation !== undefined &&
                employeeData.adaptation > 1
              ) {
                setEmployeeData({
                  ...employeeData,
                  adaptation: employeeData.adaptation - 1,
                });
              }
            }}
          />
        </div>
      </div>
      <div className=" flex items-center gap-6 justify-end ">
        <label htmlFor="imie" className="text-xl font-semibold">
          Stylowanie:
        </label>
        <input
          id="imie"
          className="bg-black text-white p-2 rounded-xl font-semibold outline-none "
          type="number"
          disabled={true}
          value={employeeData.styling}
        ></input>
        <div className="flex flex-col gap-2">
          <ChevronUpIcon
            className="w-4 h-4 cursor-pointer"
            onClick={() => {
              if (
                employeeData.styling === undefined ||
                employeeData.styling < 9
              ) {
                setEmployeeData({
                  ...employeeData,
                  styling:
                    employeeData.styling !== undefined
                      ? employeeData.styling + 1
                      : 1,
                });
              }
            }}
          />
          <ChevronDownIcon
            className="w-4 h-4 cursor-pointer "
            onClick={() => {
              if (
                employeeData.styling !== undefined &&
                employeeData.styling > 1
              ) {
                setEmployeeData({
                  ...employeeData,
                  styling: employeeData.styling - 1,
                });
              }
            }}
          />
        </div>
      </div>
    </div>
  );
};
