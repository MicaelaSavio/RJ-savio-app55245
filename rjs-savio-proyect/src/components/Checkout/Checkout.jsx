import { useContext, useState } from "react"
import './Checkout.scss'
import { DataContext } from "../hooks/DataContext"
import { collection, addDoc } from "firebase/firestore"
import { db } from "../../firebase/config"

const Checkout = () => {
    const { carrito, getTotal } = useContext(DataContext)


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
            item: carrito[0].map(item => ({id: item.id, nombre: item.nombre, precio: item.precio})),
            total: getTotal(),
            fyh: new Date()
            }

            console.log(orden)

            const orderRef = collection(db, "orders")

            addDoc(orderRef, orders)
            .then((doc) => {
                console.log(doc.id)
            })
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