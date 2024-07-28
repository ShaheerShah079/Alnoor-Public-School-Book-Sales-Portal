import React from 'react'
import {Link} from 'react-router-dom'

export default function Navabr() {
  return (
    <div>
       <nav className="navbar navbar-expand-lg bg-warning">
            <div className="container-fluid">
            <Link className="navbar-brand " to="/">Books Shop</Link>
            <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav"> 
                    <li className="nav-item">
                    <Link className="nav-link active mx-3"  to="/ViewBooks">View Books</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link active mx-3"  to="/PurchaseBooks">Purchase Book</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link active mx-3"  to="/ReturnBooks">Return Book</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link active mx-3"  to="/Publisers">Publisers</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link active mx-3" to="/AddBooks">Add Book</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link active mx-3" to="/UpdateBooks">Update Book</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link active mx-3" to="/GenerateBill">Generate Bill</Link>
                    </li> 
                    <li className="nav-item">
                    <Link className="nav-link active mx-3" to="/editbook">EDIT BOOK</Link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}
