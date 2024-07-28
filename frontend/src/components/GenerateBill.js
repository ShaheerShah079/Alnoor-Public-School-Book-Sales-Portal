import React,{useState} from 'react'
import {generateBillThroughAxious} from "../Services/api.js"

export default function GenerateBill() {

  const [bill,setbill]= useState({billno:""});
  const [display,setdisplay]= useState({
    parentName:"",
    studentName:"",
    bookId:"",
    bookName:"",
    bookGrade:"",
    SellRate:"",
    bookQuantity:"",
    totalAmmout:""
  });

  let result;
  const generateBill= async (event)=>{
    event.preventDefault();
    result=await generateBillThroughAxious(bill);
     setdisplay({
      studentName:result.data.studentName,
      parentName:"Parent Name     :    "+result.data.parentName,
      bookId:"Book Id    : "+result.data.bookId,
      bookName:"Book Name : "+result.data.bookName,
      bookGrade:"Book Grade : "+result.data.bookGrade,
      SellRate:" Book Sell : "+result.data.SellRate,
      bookQuantity:"Book Quantity    : "+result.data.bookQuantity, 
      totalAmmout:"Total Amount : "+parseInt(result.data.SellRate)*parseInt(result.data.bookQuantity)
     });
     setbill({billno:""});
  }
  return (
    <div>
    <form id="form1"action="">
      <input className="form-control my-3" type="text" value={bill.billno}
       onChange={(e)=>{setbill({billno:e.target.value})}} placeholder="Bill no"/>

      <button type="button" className="btn btn-light my-3 bg-success text-white" 
      onClick={(e)=>generateBill(e)}>Generate Bill</button>
    </form>

      <div className="bill text-dark bg-white col-md-4 position-absolute  start-50 
                      translate-middle-x ">
         <h1 className='text-center'>{display.studentName}</h1>
         <p>{display.parentName}</p>
         <p>{display.bookId}</p>
         <p>{display.bookName}</p>
         <p>{display.bookGrade}</p>
         <p>{display.SellRate}</p>
         <p>{display.bookQuantity}</p>
         <p>{display.totalAmmout}</p>
          
      </div>
    </div>
  )
}
