import React,{useState}from 'react'
import {AddBookthroughAxious} from "../Services/api.js"
export default function AddBooks() {

  const[addBooks,setAddBooks]=useState({
    Name:"",
    Grade:"",
    Quantity:"",
    PurchaseRate:"",
    SellRate:"",
    PublisherName:""
  })
  const addBook = async(event)=>{
    event.preventDefault();
    await AddBookthroughAxious(addBooks);
    setAddBooks({
      Name:"",
      Grade:"",
      Quantity:"",
      PurchaseRate:"",
      SellRate:"",
      PublisherName:""      
    })
  }
  return (
    <div className="container">
        <input className="form-control my-3" type="text" value={addBooks.Name}
        onChange={(e)=>{
          setAddBooks({
          Name:e.target.value,
          Grade:addBooks.Grade,
          Quantity:addBooks.Quantity,
          PurchaseRate:addBooks.PurchaseRate,
          SellRate:addBooks.SellRate,
          PublisherName:addBooks.PublisherName})}} 
        placeholder="Book Name" aria-label="default input example"/>
        
        <input className="form-control my-3" type="text" value={addBooks.Grade} 
        onChange={(e)=>{
          setAddBooks({
          Name:addBooks.Name,
          Grade:e.target.value,
          Quantity:addBooks.Quantity,
          PurchaseRate:addBooks.PurchaseRate,
          SellRate:addBooks.SellRate,
          PublisherName:addBooks.PublisherName})}} 
        placeholder="Book Grade" aria-label="default input example"/>
       
        <input className="form-control my-3" type="text" value={addBooks.Quantity}
        onChange={(e)=>{
          setAddBooks({
          Name:addBooks.Name,
          Grade:addBooks.Grade,
          Quantity:e.target.value,
          PurchaseRate:addBooks.PurchaseRate,
          SellRate:addBooks.SellRate,
          PublisherName:addBooks.PublisherName})}}
        placeholder="Book Quantity" aria-label="default input example"/>
        
        <input className="form-control my-3" type="text" value={addBooks.PurchaseRate}
        onChange={(e)=>{
          setAddBooks({
          Name:addBooks.Name,
          Grade:addBooks.Grade,
          Quantity:addBooks.Quantity,
          PurchaseRate:e.target.value,
          SellRate:addBooks.SellRate,
          PublisherName:addBooks.PublisherName})}}
        placeholder="Book Purchase Rate" aria-label="default input example"/>
       
        <input className="form-control my-3" type="text" value={addBooks.SellRate}
        onChange={(e)=>{
          setAddBooks({
          Name:addBooks.Name,
          Grade:addBooks.Grade,
          Quantity:addBooks.Quantity,
          PurchaseRate:addBooks.PurchaseRate,
          SellRate:e.target.value,
          PublisherName:addBooks.PublisherName})}}
        placeholder="Book Sell Rate" aria-label="default input example"/>
        
        <input className="form-control my-3" type="text" value={addBooks.PublisherName}
        onChange={(e)=>{
          setAddBooks({
          Name:addBooks.Name,
          Grade:addBooks.Grade,
          Quantity:addBooks.Quantity,
          PurchaseRate:addBooks.PurchaseRate,
          SellRate:addBooks.SellRate,
          PublisherName:e.target.value})}}
        placeholder="Publisher name" aria-label="default input example"/>
       
       
        <button type="button" class="btn btn-light my-3 bg-success text-white"
        onClick={(e)=>addBook(e)}>Add Book</button>
    </div>
  )
}
