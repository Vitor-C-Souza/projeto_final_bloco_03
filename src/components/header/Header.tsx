import { Link } from "react-router-dom";

function Header() {
  return (
    <header
      className="w-full flex justify-center py-4
                   text-white"
    >
      <div className="container flex justify-between text-lg">
        <h1 className="text-2xl font-bold">
          <Link to={"./"}>Farmacia</Link>
        </h1>
        <ul className="flex gap-9">
          <li>
            <Link to={"/categoria"}>
              <i className="bx bx-book-content" /> Categoria
            </Link>
          </li>

          <li>
            <Link to={"/cadastrarcategoria"}>
              <i className="bx bx-purchase-tag-alt" /> Cadastrar categoria
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
