import mongoose from 'mongoose'
export default mongoose.model("Books",mongoose.Schema(
    {
        Name:String,
        Grade:String,
        Quantity:String ,
        PurchaseRate:String ,
        SellRate:String ,
        TotalQuantity:String ,
        PublisherId:String
    }
)) 