import { createContext, useState, useEffect } from "react";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from '../../firebase/config'
export const DataContext = createContext();

export const DataProvider = (props) => {
    const [productos, setProductos] = useState([])
    const [menu, setMenu] = useState(false);
    const [carrito, setCarrito] = useState([])
    const [isLoadingCarrito, setIsLoadingCarrito] = useState(true);
    const [total, setTotal] = useState(0);


    const getData = async () => {
        const dataCollection = collection(db, 'productos')
        const res = await getDocs(dataCollection)
        const list = res.docs.map((prod) => {
            return {
                id: prod.id,
                ...prod.data()
            }
        })
        setProductos(list)
    }
    useEffect(() => {
        getData()
    }, [])


    const getOneProduct = async (id) => {
        const docReference = doc(db, 'productos', id);
        const res = await getDoc(docReference);
    
        if (res.exists()) {
            const prod = {
                id: res.id,
                ...res.data()
            };
            return prod;
        } else {
            // No se encontró ningún documento con el ID proporcionado
            return null;
        }
    };

    const addCarrito = (id) => {
        const check = carrito.every(item => {
            return item.id !== id;
        })
        if (check) {
            const data = productos.filter(producto => {
                return producto.id === id
            })
            setCarrito([...carrito, ...data])
        } else {
            alert("El producto ya se ha añadido al carrito")
        }
    }

    useEffect(() => {
        const dataCarrito = JSON.parse(localStorage.getItem('dataCarrito'))
        if (dataCarrito) {
            setCarrito(dataCarrito);
            setIsLoadingCarrito(false);
        }
    }, []);

    useEffect(() => {

        if (!isLoadingCarrito) {
            localStorage.setItem('dataCarrito', JSON.stringify(carrito));
        }
    }, [carrito, isLoadingCarrito]);


    useEffect(() => {
        const getTotal = () => {
            const res = carrito.reduce((prev, item) => {
                return prev + (item.precio * item.cantidad)
            }, 0)
            setTotal(res)
        }
        getTotal()
    }, [carrito])

    const value = {
        productos: productos,
        menu: [menu, setMenu],
        addCarrito: addCarrito,
        carrito: [carrito, setCarrito],
        total: [total, setTotal],
        getOneProduct: getOneProduct
        
        }

    return (
        <DataContext.Provider value={value}>
            {props.children}
        </DataContext.Provider>
    )

}

