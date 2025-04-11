import { obtainCategorias } from "../apiConnection/consumApi.js";

document.addEventListener("DOMContentLoaded",()=>{
    getCategorias();
})

async function getCategorias(){
const categoriasObtained = await obtainCategorias();
const container = document.querySelector('tbody')
categoriasObtained.forEach((category) => {
    const {CategoriaID, CategoriaNombre, Descripcion, Imagen} = category
    const row = document.createElement("tr");
    row.innerHTML = `
    <td>
     ${CategoriaID}
    </td>
    <td>
     ${CategoriaNombre}
    </td>
    <td>
     ${Descripcion}
    </td>
    <td>
    <img src="${Imagen}" width="100px" class="cuenta">
    </td>
    <td>
    <button class="btn color3" >Details</button>
    </td>
    <td>
    <button class="btn color2" >Edit</button>
    </td>
    <td>
    <button class="btn color7" >Delete</button>
    </td>
    `;
    container.appendChild(row)
});
}