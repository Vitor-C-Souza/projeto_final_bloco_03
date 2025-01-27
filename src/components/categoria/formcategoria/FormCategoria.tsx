import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Categoria from "../../../models/Categoria";
import { atualizar, buscar, cadastrar } from "../../../service/Service";
import { RotatingLines } from "react-loader-spinner";

function FormCategoria() {
  const navigate = useNavigate();

  const [categoria, setCategoria] = useState<Categoria>({} as Categoria);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { id } = useParams<{ id: string }>();

  async function buscarPorId(id: string) {
    await buscar(`/categorias/${id}`, setCategoria);
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setCategoria({
      ...categoria,
      [e.target.name]: e.target.value,
    });
  }

  function retornar() {
    navigate("/categoria");
  }

  async function gerarNovoCategoria(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    if (id !== undefined) {
      await atualizar(`/categorias/${categoria.id}`, categoria, setCategoria);
      alert("O Categoria foi atualizado com sucesso!");
    } else {
      await cadastrar(`/categorias`, categoria, setCategoria);
      alert("O Categoria foi cadastrado com sucesso!");
    }
    retornar();
  }

  return (
    <div className="container flex flex-col items-center justify-center mx-auto text-white min-h-96 ">
      <h1 className="text-4xl text-center my-8">
        {id === undefined ? "Cadastrar Categoria" : "Editar Categoria"}
      </h1>

      <form
        className="w-1/2 flex flex-col gap-6 bg-slate-800"
        onSubmit={gerarNovoCategoria}
      >
        <div className="flex flex-col w-full relative">
          <input
            type="text"
            placeholder=" "
            name="nome"
            className="peer bg-slate-800 text-white"
            required
            value={categoria.nome}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
          <label
            htmlFor="nome"
            className="bg-slate-800 text-white peer-focus:text-white peer-placeholder-shown:text-white"
          >
            Nome da Categoria
          </label>
        </div>
        <div className="flex flex-col w-full relative">
          <input
            type="text"
            placeholder=" "
            name="descricao"
            className="peer bg-slate-800 text-white"
            required
            value={categoria.descricao}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
          <label
            htmlFor="descricao"
            className="bg-slate-800 text-white peer-focus:text-white peer-placeholder-shown:text-white"
          >
            Descrição do Categoria
          </label>
        </div>
        <button
          className="rounded-full text-slate-100 bg-purple-400 
                                 hover:bg-purple-800 w-1/2 py-2 mx-auto flex justify-center"
          type="submit"
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
            <span>{id === undefined ? "Cadastrar" : "Atualizar"}</span>
          )}
        </button>
      </form>
    </div>
  );
}

export default FormCategoria;
