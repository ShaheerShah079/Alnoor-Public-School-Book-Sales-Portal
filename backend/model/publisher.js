import mongoose from 'mongoose'
export default mongoose.model("publisher",mongoose.Schema(
    {
        PubisherName: String,
        PublisherCell : String
    }
)) 