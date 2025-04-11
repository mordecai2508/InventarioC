const url = "http://localhost:5000/api/categorias"

export const obtainCategorias = async ()=>{
    try {
        const resultado = await fetch(url);// 1then
        const categorias = await resultado.json();// 2then
        return categorias
    } catch (error) {
        console.log("¡Ocurrio un Error!");
        
    }
}

