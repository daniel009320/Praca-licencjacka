import { Header } from "@/components/Header";
import { Select, MenuItem } from "@mui/material";
import { DesignerLabels } from "@/components/DesignerLabels";
function AddEmployee() {
  return (
    <div className="container mx-auto">
      <Header />
      <main>
        <form className="flex flex-row ">
          <div className="flex flex-col flex-wrap h-[250px] gap-4 space-x-20 ">
            {" "}
            <div className=" flex items-center gap-6 justify-end ml-6 mt-6">
              <label htmlFor="imie" className="text-xl font-semibold">
                Imie:
              </label>
              <input
                id="imie"
                className="bg-black text-white p-2 rounded-xl font-semibold outline-none "
              ></input>
            </div>
            <div className=" flex items-center gap-6 justify-end">
              <label htmlFor="nazwisko" className="text-xl font-semibold">
                Nazwisko:
              </label>
              <input
                id="nazwisko"
                className="bg-black text-white p-2 rounded-xl font-semibold outline-none "
              ></input>
            </div>
            <div className=" flex items-center gap-6 justify-end">
              <label htmlFor="pensja" className="text-xl font-semibold">
                Pensja
              </label>
              <input
                id="pensja"
                type="number"
                className="bg-black text-white p-2 rounded-xl font-semibold outline-none "
              ></input>
            </div>
            <div className=" flex items-center gap-6 justify-end">
              <label className="text-xl font-semibold">Stanowisko:</label>
              <Select defaultValue={"grafic designer"}>
                <MenuItem value={"grafic designer"}>Grafik</MenuItem>
                <MenuItem value={"project manager"}>Project Manager</MenuItem>
                <MenuItem value={"frontend developer"}>
                  Frontend Developer
                </MenuItem>
                <MenuItem value={"backend developer"}>
                  Backend Developer
                </MenuItem>
                <MenuItem value={"tester"}>Tester</MenuItem>
              </Select>
            </div>
            <DesignerLabels />
          </div>
        </form>
      </main>
    </div>
  );
}
export default AddEmployee;
