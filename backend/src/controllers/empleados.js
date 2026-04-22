import { constants } from "node:buffer";
import empleadoModel from "../models/empleados.js";
import { log } from "node:console";

const empleadosController = {
create: async (req, res)=>{
  try {
    const {codigo, nombre, apellido1, apellido2, codigo_departamento} = req.body;
    const newEmpleado = new empleadoModel({
    codigo, 
    nombre, 
    apellido1, 
    apellido2, 
    codigo_departamento,
    });
    await newEmpleado.save();
    res.status(201).json({message: "empleado creado"});
  } catch (error) {
    res.status(500).json({message: "Error al crear el empleado"});
  }
},
readAll: async (req, res)=>{
  try {
    const allEmpleados = await empleadoModel.find();
    res.status(201).json({data: allEmpleados});
  } catch (error) {
    res.status(500).json({message: "Error al leer todos empleados"});
  }  
},
read: async (req, res)=>{
  try {
    const {id} = req.params;
    const empleadoFound = await empleadoModel.findById(id);
    if (!empleadoFound) {
      res.status(404).json({massage: "empleado no encontrado"})
    }else{
      res.status(201).json({data: empleadoFound});
    }
  } catch (error) {
    res.status(500).json({message: "Error al leer empleado"});
  }
},
update: async (req, res)=>{
 try {
    const {id} = req.params;
    const {codigo, nombre, apellido1, apellido2, codigo_departamento} = req.body;
    const empleadoUpdate = await empleadoModel.findByIdAndUpdate(id,{
    codigo, 
    nombre, 
    apellido1, 
    apellido2, 
    codigo_departamento,
    });
    if (!empleadoUpdate) {
      res.status(404).json({massage: "empleado no encontrado"})
    }else{
      res.status(201).json({massage:'empleado actualizado'});
    }
  } catch (error) {
    res.status(500).json({message: "Error al leer empleado"});
  }  
},
delete: async (req, res)=>{
  try { 
  const {id} = req.params;
  const empleadoDeleted = await empleadoModel.findByIdAndDelete(id);
      if (!empleadoDeleted) {
      res.status(404).json({massage: "empleado no encontrado"})
    }else{
      res.status(201).json({message: "empleado eliminado"});
    }
  } catch (error) {
    res.status(500).json({message: "Error al eliminar el empleado"});
  }  
},
};

export default empleadosController;