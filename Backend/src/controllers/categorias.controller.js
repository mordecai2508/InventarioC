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



const postCategorias = async (req, res) =>{
    try {
        const {CategoriaNombre, Descripcion, Imagen} = req.body;
        const category = {CategoriaNombre, Descripcion, Imagen}
        const connection = await getConenection();
        const result = await connection.query("INSERT INTO categorias SET ?", category)
        res.json(result)
    } catch (error) {
        console.error("Error 500");
        
    }
}

//consultar solo una fila de categoria
const getCategory = async (req,res)=>{
    try {
        console.log(req.param);
        const{id} = req.params
        const connection = await getConenection();
        const result = await connection.query("SELECT CategoriaID, CategoriaNombre, Descripcion, Imagen FROM categorias WHERE CategoriaID = ?",id)
        res.json(result)
    } catch (error) {
        console.error("ERROR 500, no conecta con la base de datos :(");
    }
}
export const methodHTTP = {
    getCategorias,
    postCategorias,
    getCategory
}