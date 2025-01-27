import { useEffect, useState } from "react";
import { DNA } from "react-loader-spinner";

import { buscar } from "../../../service/Service";
import CardCategoria from "../cardcategoria/CardCategoria";
import { ResponseModel } from "../../../models/ResponseModel";
import Categoria from "../../../models/Categoria";

function ListarCategoria() {
  const [categoria, setCategoria] = useState<ResponseModel<Categoria> | null>(
    null
  );

  async function buscarCategorias() {
    await buscar("/categorias", setCategoria);
  }

  useEffect(() => {
    buscarCategorias();
  }, []);

  return (
    <>
      {categoria?.content.length === 0 && (
        <DNA
          visible={true}
          height="200"
          width="200"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper mx-auto"
        />
      )}
      <div className="flex justify-center w-full my-4">
        <div className="container flex flex-col">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoria?.content.map((categoria) => (
              <CardCategoria key={categoria.id} categoria={categoria} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ListarCategoria;
