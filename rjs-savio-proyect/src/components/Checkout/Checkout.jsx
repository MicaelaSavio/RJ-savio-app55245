

const Checkout = () => {

    const handleSubmit = () => {
        e.preventDefault()
        console.log ("Submit")
    }

    return (
        <div className="container my-5">
            <br />
            <br />
            <br />
            <br />
            <br />

            <br />

            <h2>Termina tu compra</h2>
            <hr />

            <form onSubmit={handleSubmit}>

                <input type="text"
                    className="form-control my-2"
                    placeholder="Ingresa tu nombre"
                />
                <input type="text"
                    className="form-control my-2"
                    placeholder="Ingresa tu direccion"
                />
                <input type="email"
                    className="form-control my-2"
                    placeholder="Ingresa tu email"
                />

                <button className="btn">Enviar</button>

            </form>
        </div>
    )
}


export default Checkout