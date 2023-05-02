import logo from "./../assets/images/form.png";
import Image from "next/image";

export const Header = () => {
  return (
    <div className=" pt-6 pb-6  border-b-2 border-black ">
      <div className="flex items-center justify-between">
        <div>
          <Image
            className="w-16 object-contain cursor-pointer"
            src={logo}
            alt="logo"
          />
        </div>
        <div className="flex ">
          <div></div>
          <div>
            <button className="px-6 py-3 btn-hover-menu font-semibold drop-shadow-2xl">
              Baza danych pracowników
            </button>
          </div>
          <div>
            <button className="px-6 py-3 btn-hover-menu font-semibold drop-shadow-2xl">
              Dodaj pracownika
            </button>
          </div>
          <button className="text-white bg-black font-semibold px-6 py-3 rounded-full ">
            Strona główna
          </button>
        </div>
      </div>
    </div>
  );
};
