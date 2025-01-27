import Categoria from "../../../models/Categoria";
import { Link } from "react-router-dom";

interface CardCategoriaProps {
  categoria: Categoria;
}

function CardCategoria({ categoria }: CardCategoriaProps) {
  return (
    <section className="border flex flex-col rounded-2xl overflow-hidden justify-between">
      <header className="py-2 px-6 text-white font-bold text-2xl">
        {categoria.nome}
      </header>
      <p className="p-8 text-3xl text-white h-full text-justify">
        {categoria.descricao}
      </p>

      <ul className="flex flex-row w-full">
        <li className="w-full hover:no-underline">
          <Link
            to={`/editarcategoria/${categoria.id}`}
            className="flex items-center justify-center bg-purple-400 hover:bg-purple-900 py-2"
          >
            <button className="text-white">Editar</button>
          </Link>
        </li>
        <li className="w-full hover:no-underline">
          <Link
            to={`/deletarcategoria/${categoria.id}`}
            className="text-slate-100 bg-red-400 hover:bg-red-700 w-full 
          flex items-center justify-center py-2"
          >
            <button>Deletar</button>
          </Link>
        </li>
      </ul>
    </section>
  );
}

export default CardCategoria;
