import express from 'express'
import PurchaseBook from "../model/PurchaseBook.js";
import BookModel from "../model/books.js";

const router = express.Router();

router.post("/", async (req,res)=>{
    try{
    const billData= await PurchaseBook.find({"_id":`${req.body.billno.toString()}`});
    
    const bookData=await BookModel.find({"_id":`${billData[0].bookId.toString()}`}); 
    
    const bills={
        parentName:billData[0].parentName,
        studentName:billData[0].studentName,
        bookId:billData[0].bookId,
        bookName:bookData[0].Name,
        bookGrade:bookData[0].Grade,
        SellRate:bookData[0].SellRate,
        bookQuantity:billData[0].bookQuantity
    }
    res.json(bills);
    }catch(error){
        console.log("Can't Generate bill");
    }
});
export default router;

