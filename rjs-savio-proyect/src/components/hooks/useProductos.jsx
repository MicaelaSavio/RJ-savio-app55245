import { useEffect, useState } from "react";
import { pedirDatos } from "../../utils/pedirDatos";
import { useParams } from "react-router-dom";

export const useProductos = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pageTitle, setPageTitle] = useState("Productos");

  const { categoryId } = useParams();
  console.log(categoryId);

  useEffect(() => {
    setLoading(true);

    pedirDatos()
      .then((r) => {
        if (categoryId === "sale") {
          setProductos(r.filter((prod) => prod.category === categoryId));
        } else {
          setProductos(r);
        }
      })
      .catch((e) => console.log(e))
      .finally(() => {
        setLoading(false);
        if (categoryId === "sale") {
          setPageTitle("Pagina de Ofertas"); 
        }
      });
  }, [categoryId]);

  return { productos, loading, pageTitle }; 
};
