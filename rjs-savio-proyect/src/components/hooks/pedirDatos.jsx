import { createContext, useState, useEffect } from "react";
import MOCK_DATA from '../../data/MOCK_data.json'

export const DataContext = createContext();

export const DataProvider = (props) => {
    const [productos, setProductos] = useState([])
    const [menu, setMenu] = useState(false);
    const [carrito, setCarrito] = useState([])
    const [isLoadingCarrito, setIsLoadingCarrito] = useState(true); 
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const producto = MOCK_DATA;
        if (producto) {
            setProductos(producto);
        }else{
            setProductos([]);
        }
        
    }, [])

    const addCarrito = (id) =>{
        const check = carrito.every(item=>{
            return item.id !== id;
        })
        if(check){
            const data = productos.filter(producto => {
                return producto.id === id
            })
            setCarrito([...carrito,...data])
        }else {
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

    
    useEffect(() =>{
		const getTotal = () =>{
			const res = carrito.reduce((prev, item) =>{
				return prev + (item.precio * item.cantidad)
			},0)
			setTotal(res)
		}
		getTotal()
	},[carrito])



    const value = {
        productos: productos,
        menu: [menu, setMenu],
        addCarrito: addCarrito,
        carrito: [carrito, setCarrito],
        total: [total, setTotal],
        
    }

    return (
        <DataContext.Provider value = {value}>
           {props.children}
        </DataContext.Provider>
    )

}

