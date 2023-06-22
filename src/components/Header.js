import logo from "./../assets/images/form.png";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export const Header = () => {
  const router = useRouter();
  return (
    <div className=" pt-6 pb-6  border-b-2 border-black ">
      <div className="flex items-center justify-between">
        <div>
          <Link href="/">
            <Image
              className="w-16 object-contain cursor-pointer"
              src={logo}
              alt="logo"
            />
          </Link>
        </div>
        <div className="flex ">
          <div></div>
          <div>
            <button
              className="px-6 py-3 btn-hover-menu font-semibold drop-shadow-2xl"
              onClick={() => router.push("/employeeDatabase")}
            >
              Baza danych pracowników
            </button>
          </div>
          <div>
            <button
              className="px-6 py-3 btn-hover-menu font-semibold drop-shadow-2xl"
              onClick={() => router.push("/addEmployee")}
            >
              Dodaj pracownika
            </button>
          </div>
          <Link
            href="/"
            className="text-white bg-black font-semibold px-6 py-3 rounded-full "
          >
            Strona główna
          </Link>
        </div>
      </div>
    </div>
  );
};
