export const DesignerLabels = () => {
  return (
    <main className="flex flex-col items-center  ">
      <form className="space-y-6 mt-10 space-x-6 w-[450px] justify-evenly flex flex-col">
        <div className=" flex items-center gap-6 justify-between ml-6 mt-6">
          <label htmlFor="imie" className="text-xl font-semibold">
            Imie:
          </label>
          <input
            id="imie"
            className="bg-black text-white p-2 rounded-xl font-semibold outline-none "
          ></input>
        </div>
        <div className=" flex items-center gap-6 justify-between">
          <label htmlFor="nazwisko" className="text-xl font-semibold">
            Nazwisko:
          </label>
          <input
            id="nazwisko"
            className="bg-black text-white p-2 rounded-xl font-semibold outline-none "
          ></input>
        </div>

        <div className=" flex items-center gap-6 justify-between">
          <label htmlFor="pensja" className="text-xl font-semibold">
            Pensja
          </label>
          <input
            id="pensja"
            type="number"
            className="bg-black text-white p-2 rounded-xl font-semibold outline-none "
          ></input>
        </div>
      </form>
    </main>
  );
};
