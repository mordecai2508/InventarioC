import getConenection from "../db/database.js"
const getEmpleados = async (req,res)=>{
    try {
        const connection = await getConenection();
        const result = 
        await connection.query(
            "SELECT EmpleadoID, Apellido, Nombre, Titulo, FechaContratacion, Direccion, Ciudad, CodigoPostal,Telefono FROM empleados")
        res.json(result)
    } catch (error) {
        console.error("ERROR 500, no conecta con la base de datos :(");
    }
}

export const methodHTTP = {
    getEmpleados
}