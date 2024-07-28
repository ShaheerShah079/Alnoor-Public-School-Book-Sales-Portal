import React, { useState,useEffect } from 'react'
import {addPublisher,getPublisher} from "../Services/api.js"

export default function Publisher() {
  
  const [publisher,setPublisher]= useState({
    PubisherName: "",
    PubisherCell: ""
  })
const addPub= async (event)=>{
  event.preventDefault();
  await addPublisher(publisher);
  setPublisher({PubisherCell:"",PubisherName:""}) 
  getPublisherDetail();
}

const [data,setData]=useState([]);
useEffect(()=>{
  getPublisherDetail();
},[]);
const getPublisherDetail=async()=>{
  const result = await getPublisher();
  setData(result.data);
}
  return (
    <div className="container text-white">
        <form id="form1"action="">

        <input className="form-control my-3" type="text" value={publisher.PubisherName} 
        onChange={(e)=>{setPublisher({
          PubisherCell:publisher.PubisherCell,
          PubisherName:e.target.value});}} 
        placeholder="Publiser Name"/>
        
        <input className="form-control my-3" type="text" value={publisher.PubisherCell} 
        onChange={(e)=>{ setPublisher({
          PubisherName:publisher.PubisherName,
          PubisherCell:e.target.value})}} 
        placeholder="Publisher Cell"/>
      
        <button type="button" className="btn btn-light my-3 bg-success text-white" 
        onClick={(e)=>addPub(e)}>Add Publisher</button>
        </form>

         <h2 className='my-3'>Publishers</h2>   
         <table className="table  text-white">
            <thead>
                <tr>
                <th scope="col">Publisher id</th>
                <th scope="col">Publisher Name</th>
                <th scope="col">Publisher Cell</th>
                </tr>
            </thead>
            <tbody>
                {data.map((details)=>(
                  <tr>
                    <td>{details._id}</td>
                    <td>{details.PubisherName}</td>
                    <td>{details.PublisherCell}</td>
                  </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}
