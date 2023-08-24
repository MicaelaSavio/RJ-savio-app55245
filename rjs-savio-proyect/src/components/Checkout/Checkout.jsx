import { useState } from "react"
import './Checkout.scss'

const Checkout = () => {
    const [values, setValues] = useState({
        nombre: '',
        direccion: '',
        email: ''
    })

    const handleInputChange = (e) => {

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(values)
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
                />
                <input

                    onChange={handleInputChange}
                    value={values.direccion}
                    type="text"
                    className=""
                    placeholder="Ingresa tu direccion"
                />
                <input

                    onChange={handleInputChange}
                    value={values.email}
                    type="email"
                    className=""
                    placeholder="Ingresa tu email"
                />

                <button className="btnchkt">Enviar</button>

            </form>
        </div>
    )
}


export default Checkout