import { useContext, useState } from "react"
import './Checkout.scss'
import { DataContext } from "../hooks/DataContext"
import { collection, addDoc } from "firebase/firestore"
import { db } from "../../firebase/config"
import { Link } from "react-router-dom"
import Swal from 'sweetalert2';

const Checkout = () => {
    const { carrito, getTotal, vaciarCarrito } = useContext(DataContext)

    const [orderId, setOrderId] = useState(null)

    const [values, setValues] = useState({
        nombre: '',
        direccion: '',
        email: ''
    })

    const [validations, setValidations] = useState({
        nombre: true,
        direccion: true,
        email: true
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setValues({
            ...values,
            [name]: value
        })

        setValidations({
            ...validations,
            [name]: true
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        let allValid = true;


        // Validar campos requeridos


        if (!values.nombre) {
            setValidations({
                ...validations,
                nombre: false
            });
            allValid = false;
        }

        if (!values.direccion) {
            setValidations({
                ...validations,
                direccion: false
            });
            allValid = false;


        }


        // Validar formato de email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(values.email)) {
            setValidations({
                ...validations,
                email: false
            });
            allValid = false;
        }

        if (!allValid) {


            Swal.fire({
                icon: 'error',
                title: 'Campos Incompletos',
                text: 'Por favor, completa todos los campos antes de enviar el formulario.'
            });
            return;
        }

        const orden = {
            cliente: values,
            item: carrito[0].map(item => ({ id: item.id, nombre: item.nombre, precio: item.precio })),
            total: getTotal(),
            fyh: new Date()
        };

        try {
            const orderRef = collection(db, "orders");
            const docRef = await addDoc(orderRef, orden);

            console.log(docRef.id);
            vaciarCarrito();
            setOrderId(docRef.id);
        } catch (error) {
            console.error("Error al enviar la orden:", error);
        }


    }

    if (orderId) {
        return (
            <div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />

                <h2>Tu orden ha sido enviada!</h2>
                <hr />

                <p className="order">Tu numero de pedido es: <strong>{orderId}</strong></p>

                <Link to="/"><button className="btnchkt">Volver a inicio</button></Link>
            </div>
        )
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
                {!validations.nombre && <p className="error-message">El nombre es requerido</p>}

                <input
                    onChange={handleInputChange}
                    value={values.direccion}
                    type="text"
                    className=""
                    placeholder="Ingresa tu direccion"
                    name="direccion"
                />
                {!validations.direccion && <p className="error-message">La dirección es requerida</p>}

                <input
                    onChange={handleInputChange}
                    value={values.email}
                    type="email"
                    className=""
                    placeholder="Ingresa tu email"
                    name="email"
                />
                {!validations.email && <p className="error-message">Ingresa un email válido</p>}

                <button
                    className="btnchkt"

                    disabled={!validations.nombre || !validations.direccion || !validations.email}
                >
                    Enviar
                </button>
            </form>

        </div>

    )
}

export default Checkout;