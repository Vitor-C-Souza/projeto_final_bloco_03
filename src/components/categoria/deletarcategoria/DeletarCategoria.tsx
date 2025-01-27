import React, { useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import { useNavigate, useParams } from "react-router-dom";
import Categoria from "../../../models/Categoria";
import { buscar, deletar } from "../../../service/Service";

function DeletarCategoria() {
  const navigate = useNavigate();

  const [categoria, setcategoria] = useState<Categoria>({} as Categoria);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { id } = useParams<{ id: string }>();

  async function buscarPorId(id: string) {
    await buscar(`/categorias/${id}`, setcategoria);
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  async function deletarcategoria() {
    setIsLoading(true);

    await deletar(`/categorias/${id}`);

    alert("categoria apagado com sucesso");

    setIsLoading(false);
    retornar();
  }

  function retornar() {
    navigate("/");
  }

  return (
    <div className="container mx-auto w-full text-white">
      <h1 className="text-4xl text-center my-4">Deletar categoria</h1>
      <p className="text-center font-semibold mb-4">
        Você tem certeza de que deseja apagar o categoria a seguir?
      </p>
      <div className="border flex flex-col rounded-2xl overflow-hidden justify-between">
        <header className="py-2 px-6 text-white font-bold text-2xl text-justify">
          categoria
        </header>
        <p className="p-8 text-3xl text-white h-full">{categoria.descricao}</p>
        <div className="flex">
          <button
            className="text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2 rounded-none"
            onClick={retornar}
          >
            Não
          </button>
          <button
            className="w-full text-slate-100 bg-purple-400 
                                     hover:bg-purple-900 flex items-center justify-center rounded-none"
            onClick={deletarcategoria}
          >
            {isLoading ? (
              <RotatingLines
                strokeColor="white"
                strokeWidth="5"
                animationDuration="0.75"
                width="24"
                visible={true}
              />
            ) : (
              <span>Sim</span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeletarCategoria;
