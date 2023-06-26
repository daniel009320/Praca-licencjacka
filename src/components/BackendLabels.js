import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
export const BackendLabels = ({ employeeData, setEmployeeData }) => {
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
          value={employeeData.BackendExperience}
        ></input>
        <div className="flex flex-col gap-2">
          <ChevronUpIcon
            className="w-4 h-4 cursor-pointer"
            onClick={() => {
              if (
                employeeData.BackendExperience === undefined ||
                employeeData.BackendExperience < 9
              ) {
                setEmployeeData({
                  ...employeeData,
                  BackendExperience:
                    employeeData.BackendExperience !== undefined
                      ? employeeData.BackendExperience + 1
                      : 1,
                });
              }
            }}
          />
          <ChevronDownIcon
            className="w-4 h-4 cursor-pointer "
            onClick={() => {
              if (
                employeeData.BackendExperience !== undefined &&
                employeeData.BackendExperience > 1
              ) {
                setEmployeeData({
                  ...employeeData,
                  BackendExperience: employeeData.BackendExperience - 1,
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
          value={employeeData.backeneCodeWritingSpeed}
        ></input>
        <div className="flex flex-col gap-2">
          <ChevronUpIcon
            className="w-4 h-4 cursor-pointer"
            onClick={() => {
              if (
                employeeData.backeneCodeWritingSpeed === undefined ||
                employeeData.backeneCodeWritingSpeed < 9
              ) {
                setEmployeeData({
                  ...employeeData,
                  backeneCodeWritingSpeed:
                    employeeData.backeneCodeWritingSpeed !== undefined
                      ? employeeData.backeneCodeWritingSpeed + 1
                      : 1,
                });
              }
            }}
          />
          <ChevronDownIcon
            className="w-4 h-4 cursor-pointer "
            onClick={() => {
              if (
                employeeData.backeneCodeWritingSpeed !== undefined &&
                employeeData.backeneCodeWritingSpeed > 1
              ) {
                setEmployeeData({
                  ...employeeData,
                  backeneCodeWritingSpeed:
                    employeeData.backeneCodeWritingSpeed - 1,
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
          value={employeeData.backendCodeTesting}
        ></input>
        <div className="flex flex-col gap-2">
          <ChevronUpIcon
            className="w-4 h-4 cursor-pointer"
            onClick={() => {
              if (
                employeeData.backendCodeTesting === undefined ||
                employeeData.backendCodeTesting < 9
              ) {
                setEmployeeData({
                  ...employeeData,
                  backendCodeTesting:
                    employeeData.backendCodeTesting !== undefined
                      ? employeeData.backendCodeTesting + 1
                      : 1,
                });
              }
            }}
          />
          <ChevronDownIcon
            className="w-4 h-4 cursor-pointer "
            onClick={() => {
              if (
                employeeData.backendCodeTesting !== undefined &&
                employeeData.backendCodeTesting > 1
              ) {
                setEmployeeData({
                  ...employeeData,
                  backendCodeTesting: employeeData.backendCodeTesting - 1,
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
          value={employeeData.backendTeamwork}
        ></input>
        <div className="flex flex-col gap-2">
          <ChevronUpIcon
            className="w-4 h-4 cursor-pointer"
            onClick={() => {
              if (
                employeeData.backendTeamwork === undefined ||
                employeeData.backendTeamwork < 9
              ) {
                setEmployeeData({
                  ...employeeData,
                  backendTeamwork:
                    employeeData.backendTeamwork !== undefined
                      ? employeeData.backendTeamwork + 1
                      : 1,
                });
              }
            }}
          />
          <ChevronDownIcon
            className="w-4 h-4 cursor-pointer "
            onClick={() => {
              if (
                employeeData.backendTeamwork !== undefined &&
                employeeData.backendTeamwork > 1
              ) {
                setEmployeeData({
                  ...employeeData,
                  backendTeamwork: employeeData.backendTeamwork - 1,
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
          value={employeeData.backendComunication}
        ></input>
        <div className="flex flex-col gap-2">
          <ChevronUpIcon
            className="w-4 h-4 cursor-pointer"
            onClick={() => {
              if (
                employeeData.backendComunication === undefined ||
                employeeData.backendComunication < 9
              ) {
                setEmployeeData({
                  ...employeeData,
                  backendComunication:
                    employeeData.backendComunication !== undefined
                      ? employeeData.backendComunication + 1
                      : 1,
                });
              }
            }}
          />
          <ChevronDownIcon
            className="w-4 h-4 cursor-pointer "
            onClick={() => {
              if (
                employeeData.backendComunication !== undefined &&
                employeeData.backendComunication > 1
              ) {
                setEmployeeData({
                  ...employeeData,
                  backendComunication: employeeData.backendComunication - 1,
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
          value={employeeData.backendAdaptation}
        ></input>
        <div className="flex flex-col gap-2">
          <ChevronUpIcon
            className="w-4 h-4 cursor-pointer"
            onClick={() => {
              if (
                employeeData.backendAdaptation === undefined ||
                employeeData.backendAdaptation < 9
              ) {
                setEmployeeData({
                  ...employeeData,
                  backendAdaptation:
                    employeeData.backendAdaptation !== undefined
                      ? employeeData.backendAdaptation + 1
                      : 1,
                });
              }
            }}
          />
          <ChevronDownIcon
            className="w-4 h-4 cursor-pointer "
            onClick={() => {
              if (
                employeeData.backendAdaptation !== undefined &&
                employeeData.backendAdaptation > 1
              ) {
                setEmployeeData({
                  ...employeeData,
                  backendAdaptation: employeeData.backendAdaptation - 1,
                });
              }
            }}
          />
        </div>
      </div>
    </div>
  );
};
