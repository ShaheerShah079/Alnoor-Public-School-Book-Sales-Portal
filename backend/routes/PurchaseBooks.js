import express from 'express'
import BookModel from "../model/books.js";
import PurchaseBook from "../model/PurchaseBook.js";

const router = express.Router();

router.post("/", async (req,res)=>{
    try{
    const parentName= req.body.parentName.toString();
    const studentName= req.body.studentName.toString();
    const bookName= req.body.bookName.toString();
    const bookGrade= req.body.bookGrade.toString();
    const bookQuantity= parseInt(req.body.bookQuantity); 
    
    const bookdata= await BookModel.find({"Name": `${bookName}`,"Grade": `${bookGrade}`});
    
    const currentPreviousQuantity=parseInt(bookdata[0].Quantity);
    const currenNewQuantity=(currentPreviousQuantity-bookQuantity).toString();
    await BookModel.updateOne({"Name": `${bookName}`,"Grade": `${bookGrade}`},
    {$set:{
    "Quantity":`${currenNewQuantity}` 
    }});
    
    const newPurchase=new PurchaseBook({
        parentName:parentName,
        studentName:studentName,
        bookId:bookdata[0]._id ,
        bookQuantity:bookQuantity 
    });
    
    await newPurchase.save();
    res.json(newPurchase._id);
    }catch(error){
        console.log("Purchase Book Not saved...")
    }
});


export default router;

