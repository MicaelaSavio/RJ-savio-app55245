import { useState } from "react";

export const Carrito = () => {
    const [carrito, setCarrito] = useState (0)


const clickear = () => {
    setCarrito(carrito + 1)
    console.log (carrito)
    
}

return (
    <div>
        <h2>Click</h2>
        <button onClick= {clickear}>Haz click</button>
        <p>Clicks: {carrito}</p>
    </div>
)

}