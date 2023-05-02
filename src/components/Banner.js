export const Banner = () => {
  return (
    <div>
      <div className="flex justify-between items-center bg-yellow-400 border-y-black py-10 mt-8">
        <div className="px-10 space-y-5 w-full flex flex-col">
          <h1 className="text-6xl font-serifS text-center ">
            <span className="text-white  tracking-normal font-semibold ">
              Formularz
            </span>
            <br />
          </h1>
          <div className="text-6xl font-serifS text-center">
            konfiguracji zespołu projektowego
          </div>
          <br />
          <p className="text-center">
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
            sed quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
            nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
            aliquid ex ea commodi consequatur? Quis autem vel eum iure
            reprehenderit qui in ea voluptate velit esse quam nihil molestiae
            consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
            pariatur?"
          </p>
        </div>
      </div>
      <div className="flex justify-evenly py-6">
        <div>
          <button className="font-semibold rounded-full border-2 px-16 py-4 border-black text-white bg-black text-2xl">
            AHP
          </button>
        </div>
        <div>
          <button className="font-semibold rounded-full border-2 px-16 py-4 border-black text-white bg-black text-2xl">
            SAW
          </button>
        </div>
      </div>
    </div>
  );
};
