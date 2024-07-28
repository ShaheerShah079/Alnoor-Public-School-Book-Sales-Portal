import React,{useState} from 'react'
import {PurchaseBookthroughAxious} from "../Services/api.js"

export default function PurchaseBooks() {
  const [bill,setBill]=useState("");
  
  const[purchaseBook,setPurchaseBook]=useState({
    parentName:"",
    studentName:"",
    bookName:"",
    bookGrade:"",
    bookQuantity:""
  })
  const Purchase = async(event)=>{
    event.preventDefault();
    const result=await PurchaseBookthroughAxious(purchaseBook);
    setBill("Bill No : "+result.data);
    setPurchaseBook({ 
    parentName:"",
    studentName:"",
    bookName:"",
    bookGrade:"",
    bookQuantity:""})
  }
  return (
    <div className="container">
      <input className="form-control my-3" type="text" value={purchaseBook.parentName}
        onChange={(e)=>{
        setPurchaseBook({
        parentName:e.target.value,
        studentName:purchaseBook.studentName,
        bookName:purchaseBook.bookName,
        bookGrade:purchaseBook.bookGrade,
        bookQuantity:purchaseBook.bookQuantity})}} 
      placeholder="Parent Name" aria-label="default input example"/>
        
        <input className="form-control my-3" type="text" value={purchaseBook.studentName}
        onChange={(e)=>{
          setPurchaseBook({
          parentName:purchaseBook.parentName,
          studentName:e.target.value,
          bookName:purchaseBook.bookName,
          bookGrade:purchaseBook.bookGrade,
          bookQuantity:purchaseBook.bookQuantity})}} 
        placeholder="Student Name" aria-label="default input example"/>
       
        <input className="form-control my-3" type="text" value={purchaseBook.bookName}
        onChange={(e)=>{
          setPurchaseBook({
          parentName:purchaseBook.parentName,
          studentName:purchaseBook.studentName,
          bookName:e.target.value,
          bookGrade:purchaseBook.bookGrade,
          bookQuantity:purchaseBook.bookQuantity})}} 
        placeholder="Book Name" aria-label="default input example"/>
        
        <input className="form-control my-3" type="text" value={purchaseBook.bookGrade}
        onChange={(e)=>{
          setPurchaseBook({
          parentName:purchaseBook.parentName,
          studentName:purchaseBook.studentName,
          bookName:purchaseBook.bookName,
          bookGrade:e.target.value,
          bookQuantity:purchaseBook.bookQuantity})}} 
        placeholder="Book Grade" aria-label="default input example"/>
       
        <input className="form-control my-3" type="text" value={purchaseBook.bookQuantity}
        onChange={(e)=>{
          setPurchaseBook({
          parentName:purchaseBook.parentName,
          studentName:purchaseBook.studentName,
          bookName:purchaseBook.bookName,
          bookGrade:purchaseBook.bookGrade,
          bookQuantity:e.target.value})}} 
        placeholder="Book Quantity" aria-label="default input example"/>
        
        <button type="button" class="btn btn-light my-3 bg-success text-white"
        onClick={(e)=>Purchase(e)}>Purchase</button>

        <h3>{bill}</h3>
    </div>
  )
}
