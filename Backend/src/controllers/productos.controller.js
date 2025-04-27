import getConenection from "../db/database.js"

const updateProductos = async (req, res) =>{
    try {
        const {id} = req.params
        const {ProductoNombre, PrecioUnitario} = req.body;
        const producto = {ProductoNombre, PrecioUnitario}
        const connection = await getConenection();
        const result = await connection.query("UPDATE productos SET ? WHERE ProductoID = ?", [producto,id])
        res.json(result)
    } catch (error) {
        console.error("Error 500");
        
    }
}

export const methodHTTP = {
    updateProductos,
}