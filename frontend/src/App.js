import Navbar from './components/Navbar';
import './App.css';
import  Publishers from './components/Publishers';
import { Routes,Route } from 'react-router-dom';
import Intro from './components/Intro';
import  AddBooks from './components/AddBooks';
import UpdateBooks from './components/UpdateBooks';
import ViewBooks from './components/ViewBooks';
import PurchaseBooks from './components/PurchaseBooks';
import ReturnBooks from './components/ReturnBooks';
import GenerateBill from './components/GenerateBill';
import EditBook from './components/EditBook';

import pic from './images/bookPicture.jpg';
import {RemoveScroll} from 'react-remove-scroll';
//import Table from './components/Table';

function App() {
  return (
    <div className="app text-white">
    <Navbar/>
    <div style={{ backgroundImage: `url(${pic})`,
      // height: "100vh",
      fontSize: "20px",
      backgroundAttachment: "scroll",
      }}>
    <h1 className="d-flex justify-content-center">Alnoor Books Center </h1>
    
    <Routes>
      <Route path="/" element={<Intro/>}/>
      <Route path="/Publisers" element={<Publishers/>}/>
      <Route path="/AddBooks" element={<AddBooks/>}/>
      <Route path="/UpdateBooks" element={<UpdateBooks/>}/>

      <Route path="/ViewBooks" element={<ViewBooks/>}/>
      <Route path="/PurchaseBooks" element={<PurchaseBooks/>}/>
      <Route path="/ReturnBooks" element={<ReturnBooks/>}/>
      <Route path="/GenerateBill" element={<GenerateBill/>}/>
      <Route path="/editbook" element={<EditBook/>}/>
    </Routes>
    </div>
    {/* <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/> */}
    </div>
  );
}

export default App;
