import { useState } from "react";


function Buscador ({onBuscar}){
    const [texto, setTexto] = useState("")


    const manejarCambio = (e) => {
        const valor = e.target.value;
        setTexto(valor);
        onBuscar(valor);
    }

    return (
        <div style={{ marginBottom: "20px" }}> 

        
        <input type="text"
        placeholder="Buscar producto..."
        value={texto}
        onChange={manejarCambio}
        style={{ padding: "8px", width: "300px", borderRadius: "4px", border: "1px solid #ccc" }}
        />
        </div>
    )
}export default Buscador;