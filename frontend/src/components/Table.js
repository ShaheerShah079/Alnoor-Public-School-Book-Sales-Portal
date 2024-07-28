import React, { useState,useEffect } from 'react'
import {getPublisher} from "../Services/api.js"
export default function Table() {
  const [data,setData]=useState([]);

  useEffect(()=>{
    getPublisherDetail();
  },[]);

  const getPublisherDetail=async()=>{
    console.log("call get publisher");
    const result = await getPublisher();
    console.log("data reached");
    setData(result.data);
    console.log("assignmed data");
  }
  return (
    <div>
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
