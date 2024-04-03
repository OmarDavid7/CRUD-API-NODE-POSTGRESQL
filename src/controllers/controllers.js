import { response } from "express";
import pkg from "pg";
const { Pool } = pkg;

const pool = new Pool({
  host: "localhost",
  user: "personal",
  password: "personal123456",
  database: "crud",
});

//obtener usuarios
export const obtenerUsuarios = async (req, res) => {
  const resultado = await pool.query("SELECT * FROM usuarios");
  res.json(resultado.rows);
  //res.json(resultado.rows)
};

//obtener usuario por id
export const obtenerUsuarioPorId = async (req, res) => {
  const id = req.params.id;
  const resultado = await pool.query("SELECT * FROM usuarios WHERE id = $1", [
    id,
  ]);
  res.json(resultado.rows);
};

//ingresar usuario
export const ingresarUsuario = async (req, res) => {
  const { nombre, email } = req.body;
  const resultado = await pool.query(
    "INSERT INTO usuarios(nombre,email) VALUES($1,$2)",
    [nombre, email]
  );
  console.log(resultado);
  res.json({
    message: "usuario agregado satisfactoriamente",
    body: {
      user: { nombre, email },
    },
  });
};

//eliminar usuario
export const eliminarUsuario = async (req, res) => {
  const id = req.params.id;
  try {
    const resultado = await pool.query("DELETE FROM usuarios WHERE id = $1", [id]);
    res.json(`Usuario ${id} eliminado satisfactoriamente`)
  } catch (error) {
    console.log(error);
  }
};

//actualizar usuario
export const actualizarUsuario = (async(req,res)=>{
    const id = req.params.id
    const {nombre,email} = req.body
    const resultado = await pool.query('UPDATE usuarios SET nombre=$1, email=$2 WHERE id = $3', [nombre,email,id])
    res.json(`Usuario ${id} actualizado satisfactoriamente`)  
})
