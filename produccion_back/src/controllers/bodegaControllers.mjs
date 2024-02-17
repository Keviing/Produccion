import Bodega from "../models/bodega.mjs";

export const obtenerBodegas = async (req, res) => {
  try {
    const bodegas = await Bodega.findAll();
    res.json(bodegas);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const crearBodega = async (req, res) => {
  try {
    const bodega = await Bodega.create(req.body);
    res.status(201).json(bodega);
  } catch (error) {
    res.status(500).send(error.message);
  }
};