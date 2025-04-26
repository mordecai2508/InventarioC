import getConnection from "../db/database.js";

const postCliente = async (req, res) => {
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

export default {
  postCliente,
};