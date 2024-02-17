import { Router } from "express";
import { obtenerProveedores, crearProveedor } from "../controllers/proveedorControllers.mjs";
import { obtenerProductos, crearProducto } from "../controllers/productoControllers.mjs";
const router = Router();

router.get("/", (req, res) =>{
    res.send("HOLA");
});

// Proveedores
router.get("/proveedores",obtenerProveedores);
router.post("/proveedores",crearProveedor);

//PRODUCTOS 
router.get("/productos",obtenerProductos);
router.post("/productos",crearProducto);
//TIPOBODEGA

//ENCARGADO BODEGA 

//BODEGA 

//INVENTARIO


export default router;
