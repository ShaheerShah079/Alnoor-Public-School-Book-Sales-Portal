import express from 'express'
import BookModel from "../model/books.js";
const router = express.Router();


router.post("/", async (req,res)=>{
    try{
    const BookId= req.body.BookId.toString();
    const BookQuantity= parseInt(req.body.BookQuantity);
    
    const bookdata= await BookModel.find({"_id": `${BookId}`});

    const totalPreviousQuantity=parseInt(bookdata[0].TotalQuantity);
    const totalNewQuantity=(BookQuantity+totalPreviousQuantity).toString();

    const currentPreviousQuantity=parseInt(bookdata[0].Quantity);
    const currenNewQuantity=(BookQuantity+currentPreviousQuantity).toString();

    const UpdateData= await BookModel.updateOne({"_id": `${BookId}`},
    {$set:{
    "TotalQuantity":`${totalNewQuantity}`,
    "Quantity":`${currenNewQuantity}` 
    }});
    res.json(UpdateData);

    }catch(error){
        console.log("Update Book Not Saved...")
    }
});

export default router;