import express from 'express'
import bodyParser from 'body-parser';
import mongoose from 'mongoose'
import cors from 'cors'
import publisher from './routes/publisher.js'
import books from './routes/books.js'
import UpdateBook from './routes/UpdateBook.js'
import PurchaseBooks from './routes/PurchaseBooks.js'
import ReturnBooks from './routes/ReturnBooks.js'
import GenerateBill from './routes/GenerateBill.js'


const app=express();
const url ="mongodb+srv://shaheeralishah2:123@cluster0.lg6vg1w.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
// const url ="mongodb+srv://shaheer:123@cluster0.7rll4dm.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true}).then(
    ()=>console.log("Connect to database")
)

app.listen(5000);

app.use(cors());
app.use(bodyParser.json({extend:true}));
app.use(bodyParser.urlencoded({extend:true}));

app.use("/getPublisers",publisher);
app.use("/Publisers",publisher);

app.use("/AddBooks",books);
app.use("/ViewBooks",books);

app.use("/UpdateBooks",UpdateBook);

app.use("/PurchaseBooks",PurchaseBooks);

app.use("/ReturnBooks",ReturnBooks);

app.use("/GenerateBill",GenerateBill);