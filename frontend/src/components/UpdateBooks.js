import React, { useState } from 'react'
import {UpdateThroughAxious} from "../Services/api.js"

export default function UpdateBooks() {

    const [updateBook,setUpdateBook]= useState({
      BookId: "",
      BookQuantity: ""
    })
    const Update= async(event)=>{
      event.preventDefault();
      await UpdateThroughAxious(updateBook);
      setUpdateBook({BookId:"",BookQuantity:""}) 
    }
  return (
    <div className="container">
      <input className="form-control my-3" type="text" value={updateBook.BookId}
      onChange={(e)=>{
        setUpdateBook({
        BookQuantity:updateBook.BookQuantity,
        BookId:e.target.value});}}
      placeholder="Book Id" aria-label="default input example"/>
      <input className="form-control my-3" type="text" value={updateBook.BookQuantity}
      onChange={(e)=>{
        setUpdateBook({
        BookQuantity:e.target.value,
      BookId:updateBook.BookId});}}
        placeholder="Book Quantity" aria-label="default input example"/>

        <button type="button" class="btn btn-light my-3 bg-success text-white"
        onClick={(e)=>Update(e)}>Update</button>
    </div>
  )
}
