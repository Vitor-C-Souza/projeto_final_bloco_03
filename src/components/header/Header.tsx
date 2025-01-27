function Header() {
  return (
    <header
      className="w-full flex justify-center py-4
                   text-white"
    >
      <div className="container flex justify-between text-lg">
        <h1 className="text-2xl font-bold">Farmacia</h1>
        <ul className="flex gap-9">
          <li>
            <i className="bx bx-book-content" /> Categoria
          </li>

          <li>
            <i className="bx bx-purchase-tag-alt" /> Cadastrar categoria
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
