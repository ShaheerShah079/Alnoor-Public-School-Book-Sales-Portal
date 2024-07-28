import mongoose from 'mongoose'
export default mongoose.model("Purchasing",mongoose.Schema(
    {
        parentName:String,
        studentName:String,
        bookId:String ,
        bookQuantity:String
    }
)) 