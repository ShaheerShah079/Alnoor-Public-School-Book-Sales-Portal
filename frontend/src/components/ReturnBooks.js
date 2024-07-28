import React,{useState} from 'react'
import {ReturnBookthroughAxious} from "../Services/api.js"

export default function PurchaseBooks() {
    const Return = async(event)=>{
        event.preventDefault();
        await ReturnBookthroughAxious(returnBook);
        setReturnBook({ 
        billNo:"",
        quantity:""})
      }
  const[returnBook,setReturnBook]=useState({
    billNo:"",
    quantity:""
    })
  
  return (
    <div className="container">
      <input className="form-control my-3" type="text" value={returnBook.billNo}
        onChange={(e)=>{
        setReturnBook({
        billNo:e.target.value,
        quantity:returnBook.quantity
       })}} 
      placeholder="Bill No" aria-label="default input example"/>
        
        <input className="form-control my-3" type="text" value={returnBook.quantity}
        onChange={(e)=>{
        setReturnBook({
        billNo:returnBook.billNo,
        quantity:e.target.value})}} 
        placeholder="Quantity" aria-label="default input example"/>
       
        <button type="button" class="btn btn-light my-3 bg-success text-white"
        onClick={(e)=>Return(e)}>Return</button>
    </div>
  )
}
