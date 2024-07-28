import express from 'express'
import BookModel from "../model/books.js";
import PurchaseBook from "../model/PurchaseBook.js";

const router = express.Router();

router.post("/", async (req,res)=>{
    try{
    const billNo= req.body.billNo.toString();
    const quantity= parseInt(req.body.quantity); 
    
    const purchasedata= await PurchaseBook.find({"_id": `${billNo}`});
    
    const currentPreviousQuantity=parseInt(purchasedata[0].bookQuantity);
    const currenNewQuantity=(currentPreviousQuantity-quantity).toString();
    
    const UpdatepurchaseData= await PurchaseBook.updateOne({"_id": `${billNo}`},
    {$set:{
    "bookQuantity":`${currenNewQuantity}` 
    }});
    
    const bookdata=await BookModel.find({"_id": `${purchasedata[0].bookId}`});

    const currentPreQuantity=parseInt(bookdata[0].Quantity);
    const currenNQuantity=(currentPreQuantity+quantity).toString();
    console.log("new Quantity"+currenNQuantity+" prev quantity "+currentPreQuantity);
    
     await BookModel.updateOne({"_id": `${purchasedata[0].bookId}`},
    {$set:{
    "Quantity":`${currenNQuantity}` 
    }});
    
    res.json(UpdatepurchaseData);
    }catch(error){
        console.log("Return Book Not Saved...")
    }
});

export default router;