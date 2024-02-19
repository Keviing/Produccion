import { Router } from "express";
import { obtenerProveedores, crearProveedor, eliminarProveedor, editarProveedor } from "../controllers/proveedorControllers.mjs";
import { obtenerProductos, crearProducto, eliminarProducto, editarProducto } from "../controllers/productoControllers.mjs";
const router = Router();

router.get("/", (req, res) =>{
    res.send("HOLA");
});

// Proveedores
router.get("/proveedores",obtenerProveedores);
router.post("/proveedores",crearProveedor);
router.delete('/proveedores/:id', eliminarProveedor); // Eliminar un producto por su ID
router.put('/proveedores/:id', editarProveedor); 
//PRODUCTOS 
router.get("/productos",obtenerProductos);
router.post("/productos",crearProducto);
router.delete('/productos/:id', eliminarProducto); // Eliminar un producto por su ID
router.put('/productos/:id', editarProducto); // Editar un producto por su ID
//TIPOBODEGA

//ENCARGADO BODEGA 

//BODEGA 

//INVENTARIO


export default router;
