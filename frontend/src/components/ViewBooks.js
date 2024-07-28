import React, { useState,useEffect } from 'react';
import {ViewBookthroughAxious} from "../Services/api.js";

export default function ViewBooks() {

  const [book,setBook]=useState([]);

useEffect(()=>{
  getBookDetail();
},[]);

const getBookDetail=async()=>{
  const result = await ViewBookthroughAxious();
  setBook(result.data);
  }

  return (
    <div className="container">
        <table class="table text-white mt-4">
              <thead>
                <tr>
                <th scope="col">Book id</th>
                <th scope="col">Book Name</th>
                <th scope="col">Book Grade</th>
                <th scope="col">Book Current Quantity</th>
                <th scope="col">Book Purchase Rate </th>
                <th scope="col">Book Sell Rate</th>
                <th scope="col">Book Total Quantity</th>
                <th scope="col">Publisher id</th>
                </tr>
                </thead>
                <tbody>
                {book.map((details)=>(
                  
                  <tr>
                    <td>{details._id}</td>
                    <td>{details.Name}</td>
                    <td>{details.Grade}</td>
                    <td>{details.Quantity}</td>
                    <td>{details.PurchaseRate}</td>
                    <td>{details.SellRate}</td>
                    <td>{details.TotalQuantity}</td>
                    <td>{details.PublisherId}</td>
                  </tr>
                ))}
            </tbody>

        </table>
    </div>
  )
}
