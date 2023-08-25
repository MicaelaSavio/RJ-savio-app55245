import { useContext, useState } from "react"
import './Checkout.scss'
import { DataContext } from "../hooks/DataContext"

const Checkout = () => {
    const { Carrito, getTotal } = useContext(DataContext)


    const [values, setValues] = useState({
        nombre: '',
        direccion: '',
        email: ''
    })

    const handleInputChange = (e) => {

        setValues({
            ...values,
            [e.target.name]: e.target.value
        })

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(values)

        const orden = {
            cliente: values,
            item: Carrito,
            total: getTotal(),
            
            }

            console.log(orden)
            
    }

    return (
        <div className="container">
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

            <h2>Termina tu compra</h2>
            <hr />

            <form onSubmit={handleSubmit}>

                <input

                    onChange={handleInputChange}
                    value={values.nombre}
                    type="text"
                    className=""
                    placeholder="Ingresa tu nombre"
                    name="nombre"
                />
                <input

                    onChange={handleInputChange}
                    value={values.direccion}
                    type="text"
                    className=""
                    placeholder="Ingresa tu direccion"
                    name="direccion"
    
                />
                <input

                    onChange={handleInputChange}
                    value={values.email}
                    type="email"
                    className=""
                    placeholder="Ingresa tu email"
                    name="email"
                />

                <button className="btnchkt">Enviar</button>

            </form>
        </div>
    )
}


export default Checkout