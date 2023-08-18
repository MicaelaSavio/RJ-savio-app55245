import { createContext, useState, useEffect } from "react";
import MOCK_DATA from '../../data/MOCK_data.json'

export const DataContext = createContext();

export const DataProvider = (props) => {
    const [productos, setProductos] = useState([])


    useEffect(() => {
        const producto = MOCK_DATA;
        if (producto) {
            setProductos(producto);
        }else{
            setProductos([]);
        }
        
    }, [])

    const value = {
        productos: productos
    }

    return (
        <DataContext.Provider value = {value}>
           {props.children}
        </DataContext.Provider>
    )

}

