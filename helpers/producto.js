import Producto from "../models/producto.js";

export const checkExistingProductCode = async (codigo) => {
  try {
    const existingProduct = await Producto.findOne({ codigo });
    return !!existingProduct; 
  } catch (error) {
    throw new Error(error.message);
  }
};

export default checkExistingProductCode