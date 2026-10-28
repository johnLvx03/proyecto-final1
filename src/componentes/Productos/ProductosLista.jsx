import Productos from "./Productos";

function ProductosLista({Productos: productos}){

return(
    <div style={{display: "flex", flexWrap: "wrap", gap: "20px"}}>
        {productos.map((Prod) => (
            <Productos
            key={Prod.id}
            title={Prod.title}
            precio={Prod.precio}
            imagen={Prod.imagen}
            
            />
        )
    )}

    </div>
)
}

export default ProductosLista;