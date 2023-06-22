import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
export const DesignerLabels = () => {
  return (
    <div className=" flex flex-col flex-wrap  gap-4 h-[250px] mt-6 space-x-20">
      <div className=" flex items-center gap-6 justify-end  ">
        <label htmlFor="imie" className="text-xl font-semibold">
          Doswiadczenie:
        </label>
        <input
          id="imie"
          className="bg-black text-white p-2 rounded-xl font-semibold outline-none "
          type="number"
          disabled={true}
        ></input>
        <div className="flex flex-col gap-2">
          <ChevronUpIcon className="w-4 h-4 cursor-pointer" />
          <ChevronDownIcon className="w-4 h-4 cursor-pointer " />
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
        ></input>
        <div className="flex flex-col gap-2">
          <ChevronUpIcon className="w-4 h-4 cursor-pointer" />
          <ChevronDownIcon className="w-4 h-4 cursor-pointer " />
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
        ></input>
        <div className="flex flex-col gap-2">
          <ChevronUpIcon className="w-4 h-4 cursor-pointer" />
          <ChevronDownIcon className="w-4 h-4 cursor-pointer " />
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
        ></input>
        <div className="flex flex-col gap-2">
          <ChevronUpIcon className="w-4 h-4 cursor-pointer" />
          <ChevronDownIcon className="w-4 h-4 cursor-pointer " />
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
        ></input>
        <div className="flex flex-col gap-2">
          <ChevronUpIcon className="w-4 h-4 cursor-pointer" />
          <ChevronDownIcon className="w-4 h-4 cursor-pointer " />
        </div>
      </div>
    </div>
  );
};
