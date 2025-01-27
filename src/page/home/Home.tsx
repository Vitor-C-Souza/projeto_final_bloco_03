import ListarCategoria from "../../components/categoria/listarcategoria/ListarCategoria";

function Home() {
  return (
    <>
      <div className="flex justify-center">
        <div className="container grid grid-cols-2 text-white">
          <div className="flex flex-col gap-4 items-center justify-center py-4">
            <h2 className="text-5xl font-bold">Seja Bem Vindo!</h2>
            <p className="text-xl">Encontre seus produtos aqui na farmacia</p>

            <div className="flex justify-around gap-4">
              <button
                className="rounded text-white 
                         border-white border-solid border-2 py-2 px-4 
                          hover:scale-105 hover:text-purple-300 hover:border-violet-400
                          hover:bg-gray-500 hover:bg-opacity-25 transition-all"
              >
                Nova Categoria
              </button>
            </div>
          </div>

          <div className="flex justify-center ">
            <img
              src="https://ik.imagekit.io/kjefwstje/HH%20Farmacia%20-%20Tecnyfarma.jpg?updatedAt=1737989345875"
              alt="Imagem Página Home"
              className="w-2/3 rounded-full"
            />
          </div>
        </div>
      </div>
      <ListarCategoria />
    </>
  );
}

export default Home;
