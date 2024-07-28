import express from 'express'
import BookModel from "../model/books.js";
import publisherModel from "../model/publisher.js"
const router = express.Router();

router.get("/", async(req,res)=>{
    try{
    const BookData= await BookModel.find();
    res.json(BookData);
    }catch(error){
        console.log("Can't Find Book Data");
    }
});

router.post("/", async (req,res)=>{
    
    const Name= req.body.Name.toString();
    const Grade= req.body.Grade.toString();
    const Quantity= req.body.Quantity.toString();
    const PurchaseRate= req.body.PurchaseRate.toString();
    const SellRate= req.body.SellRate.toString();
    const PublisherName= req.body.PublisherName.toString();

    const PublisherData= await publisherModel.find({"PubisherName": `${PublisherName}`});

    const newBook=new BookModel({
        Name:Name,
        Grade:Grade,
        Quantity:Quantity,
        PurchaseRate:PurchaseRate,
        SellRate:SellRate,
        TotalQuantity:Quantity,
        PublisherId:PublisherData[0]._id   
    });
    try{
        await newBook.save();
        res.json(newBook);

    }catch(error){
        console.log("Book Data Not Saved...")
    }
});


export default router;