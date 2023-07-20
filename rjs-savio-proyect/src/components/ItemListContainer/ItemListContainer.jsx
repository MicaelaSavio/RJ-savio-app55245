import './ItemListContainer.scss'
import { useEffect, useState } from "react";
import { pedirDatos } from "../../utils/pedirDatos";
import ItemList from "../ItemList/ItemList";
import { useProductos } from '../hooks/useProductos'
import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {
  const { categoryId } = useParams();
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pageTitle, setPageTitle] = useState();

  useEffect(() => {
    setLoading(true);

    pedirDatos()
      .then((r) => {
        if (categoryId === "sale") {
          setProductos(r.filter((prod) => prod.category === categoryId));
          setPageTitle("Nuestras Ofertas");
        } else {
          setProductos(r);
          setPageTitle("Productos");
        }
      })
      .catch((e) => console.log(e))
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId]);

  return (
    <div className="catalogo__contenedor">
      <h1>{pageTitle}</h1>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <ItemList productos={productos} />
      )}
    </div>
  );
};

export default ItemListContainer;
