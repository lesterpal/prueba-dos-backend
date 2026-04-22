import { constants } from "node:buffer";
import departamentoModel from "../models/departamentos.js";
import { log } from "node:console";

const departamentosController = {
create: async (req, res)=>{
  try {
    const {codigo, nombre} = req.body;
    const newdepartamento = new departamentoModel({
    codigo, 
    nombre, 
    });
    await newdepartamento.save();
    res.status(201).json({message: "departamento creado"});
  } catch (error) {
    res.status(500).json({message: "Error al crear el departamento"});
  }
},
readAll: async (req, res)=>{
  try {
    const allDepartamentos = await departamentoModel.find();
    res.status(201).json({data: allDepartamentos});
  } catch (error) {
    res.status(500).json({message: "Error al leer todos departamentos"});
  }  
},
read: async (req, res)=>{
  try {
    const {id} = req.params;
    const departamentoFound = await departamentoModel.findById(id);
    if (!departamentoFound) {
      res.status(404).json({massage: "departamnto no encontrado"})
    }else{
      res.status(201).json({data: departamentoFound});
    }
  } catch (error) {
    res.status(500).json({message: "Error al leer departamento"});
  }
},
update: async (req, res)=>{
 try {
    const {id} = req.params;
    const {codigo, nombre} = req.body;
    const departamentoUpdate = await departamentoModel.findByIdAndUpdate(id,{
    codigo, 
    nombre, 
    });
    if (!departamentoUpdate) {
      res.status(404).json({massage: "departamento no encontrado"})
    }else{
      res.status(201).json({massage:'departamento actualizado'});
    }
  } catch (error) {
    res.status(500).json({message: "Error al leer departamento"});
  }  
},
delete: async (req, res)=>{
  try { 
  const {id} = req.params;
  const departamentoDeleted = await departamentoModel.findByIdAndDelete(id);
      if (!departamentoDeleted) {
      res.status(404).json({massage: "departamento no encontrado"})
    }else{
      res.status(201).json({message: "departamento eliminado"});
    }
  } catch (error) {
    res.status(500).json({message: "Error al eliminar el departamento"});
  }  
},

readEmpleados: async (req, res) => {
        try {
            const { codigo } = req.params;
            const departamento = await departamentosModelo.findOne({ codigo });
            if (!departamento) {
                return res.status(404).json({ error: 'Departamento no encontrado' });
            }
            const empleados = await empleadosModelo.find({ codigo_departamento: codigo });
            res.status(200).json(empleados);
        } catch (error) {
            res.status(500).json({ error: 'Error al obtener los empleados' });
        }
    }

};

export default departamentosController;