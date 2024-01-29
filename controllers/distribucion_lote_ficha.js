import Distribucion_lote_ficha from "../models/distribucion_lote_ficha.js";

const httpDistribucion_lote_ficha = {
    getAllDistribucion_lote_ficha: async (res, req) => {
        try {
            const dis_lote_ficha = await Distribucion_lote_ficha.find();

            if (dis_lote_ficha.length === 0){
                res.json({msg: "no hay distribucion lote ficha"})
            }else{
                res.json({dis_lote_ficha})
            }
        } catch (error) {
            res.status(400).json({ error })
        }
    },

    getAllDistribucion_lote_fichaid: async(req, res) =>{
        try {
            
        } catch (error) {
            
        }
    }
}
   