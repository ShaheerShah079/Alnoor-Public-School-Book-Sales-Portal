import express from 'express'
import publisherModel from "../model/publisher.js"
const router = express.Router();

router.get("/", async(req,res)=>{
    try{
    const PublisherData= await publisherModel.find();
    res.json(PublisherData);
    }catch(error){
        console.log("Can't Find Publisher Data");
    }
    
});


router.post("/", async (req,res)=>{
    try{
    const PName= req.body.PubisherName.toString();
    const PCell= req.body.PubisherCell.toString();

    const newpub=new publisherModel({
        PubisherName: PName,
        PublisherCell : PCell   
    });
        await newpub.save();
        res.json(newpub);
    }catch(error){
        console.log("Publisher Not saved...")
    }
});

export default router;
