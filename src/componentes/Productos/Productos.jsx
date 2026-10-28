

function Productos({title , precio , imagen}){
    return(
        <div style={{ border: "1px solid #CCC", padding: "16px", margin: "10px", borderRadius: "8px", width: "200px" }}>
        <img src={imagen} alt={title} style={{width: "100px", height: "100px", objectFit: "contain"}} />
        <h3>{title}</h3>
        <p>{precio}</p>
        <button>Agregar al carrito</button>


        </div>
    )
}

export default Productos;