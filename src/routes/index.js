import { Router } from 'express';
import { actualizarUsuario, eliminarUsuario, ingresarUsuario, obtenerUsuarioPorId, obtenerUsuarios } from '../controllers/controllers.js';
 const router = Router()

 //obetener usuarios
router.get('/usuarios', obtenerUsuarios)

//obtener un solo usuario
router.get('/usuarios/:id', obtenerUsuarioPorId)

//ingresar usuario
router.post('/usuarios', ingresarUsuario)

//eliminar usuario
router.delete('/usuarios/:id', eliminarUsuario)

//actualizar usuario
router.put('/usuarios/:id', actualizarUsuario)

 export default router