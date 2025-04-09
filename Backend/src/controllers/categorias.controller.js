import getConenection from "../db/database.js"
const getCategorias = async (req,res)=>{
    try {
        const connection = await getConenection();
        const result = await connection.query("SELECT CategoriaID, CategoriaNombre, Descripcion, Imagen FROM categorias")
        res.json(result)
    } catch (error) {
        console.error("ERROR 500, no conecta con la base de datos :(");
    }
}

export const methodHTTP = {
    getCategorias
}