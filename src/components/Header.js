export const Header = () => {
  return (
    <div className=" pt-6 pb-6  flex  justify-between items-center">
      <div>
        <button className="text-white bg-black font-semibold px-6 py-3 rounded-full">
          Strona główna
        </button>
      </div>
      <div>
        <button className="font-semibold rounded-full border-2 px-6 py-3 border-black ">
          AHP
        </button>
      </div>
      <div>
        <button className="font-semibold rounded-full border-2 px-6 py-3 border-black">
          SAW
        </button>
      </div>
      <div>
        <button className="font-semibold rounded-full border-2 px-6 py-3 border-black">
          Baza danych pracowników{" "}
        </button>
      </div>
      <div>
        <button className="font-semibold rounded-full border-2 px-6 py-3 border-black">
          Dodaj pracownika
        </button>
      </div>
    </div>
  );
};
