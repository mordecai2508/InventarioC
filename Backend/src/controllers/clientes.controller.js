import getConnection from "../db/database.js";

export const postCliente = async (req, res) => {
  try {
    const {
      ClienteID,
      Compania,
      Contacto,
      Titulo,
      Direccion,
      Ciudad,
      Regiones,
      CodigoPostal,
      Pais,
      Telefono,
      Fax,
    } = req.body;

    const connection = await getConnection();

    const result = await connection.query(
      `INSERT INTO clientes 
      (ClienteID, Compania, Contacto, Titulo, Direccion, Ciudad, Regiones, CodigoPostal, Pais, Telefono, Fax) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [ClienteID, Compania, Contacto, Titulo, Direccion, Ciudad, Regiones, CodigoPostal, Pais, Telefono, Fax]
    );

    res.json(result);
  } catch (error) {
    console.error(error);
  }
};

// Si deseas mantener el objeto methodHTTP, puedes incluirlo también
export const methodHTTP = {
  postCliente,
};