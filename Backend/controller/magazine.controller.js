import Magazine from "../model/magazine.model.js";

export const getMagazine=async(req,res)=>{
    try {
        const magazine=await Magazine.find()
        res.status(200).json(magazine)
    } catch (error) {
        console.log("Error", error)
        res.status(500).json(error)
    }
     
};