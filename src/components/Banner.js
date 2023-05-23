import Image from "next/image";
import Team from "./../assets/images/team.jpg";
import Link from "next/link";
export const Banner = () => {
  return (
    <div className="font-['LATO']">
      <div className="flex justify-between items-center  border-y-black py-10 mt-8 lg:flex-row flex-col">
        <div className="lg:px-10 space-y-5 w-full flex flex-col">
          <h1 className="text-6xl  ">
            <span className="  tracking-normal  font-semibold italic ">
              Formularz
            </span>
            <br />
          </h1>
          <div className="text-4xl  text-custom-gray italic  ">
            konfiguracji zespołu projektowego
          </div>
          <br />
          <p className="text-xl">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
            sed quia non numquam eius modi tempora incidunt ut labore et dolore.
          </p>
          <div className="flex gap-4 lg:justify-start justify-center">
            <button className="rounded-full  px-6 py-2 mt-4  text-white bg-black text-2xl btn-hover">
              Learn more
            </button>

            <Link
              href="/ahp"
              className="rounded-full  px-6 py-2 mt-4  text-white bg-black text-2xl btn-hover"
            >
              {" "}
              AHP
            </Link>

            <Link
              href="/saw"
              className="rounded-full  px-6 py-2 mt-4  text-white bg-black text-2xl btn-hover"
            >
              {" "}
              SAW
            </Link>
          </div>
        </div>
        <div className="flex justify-center lg-pt-0 pt-10">
          <Image
            className="lg:w-4/5 object-contain  rounded-lg shadow-md shadow-black "
            src={Team}
            alt="team"
          />
        </div>
      </div>
    </div>
  );
};
