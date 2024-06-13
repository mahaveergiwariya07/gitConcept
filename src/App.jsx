import React, { useState } from "react";
import Card from "./Components/Card";
import Navbar from "./Components/Navbar";

function App() {

   const data = [
    {image:"https://images.unsplash.com/photo-1578645635737-6a88e706e0f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D", name:"Challenger", artist:"Mahaveer", added: false},
    {image:" https://images.unsplash.com/photo-1585020430145-2a6b034f7729?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D", name:" One Day", artist:"Mahi", added: false},
    {image:"https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D ", name:"Rokey", artist:"Mahesh babu", added: false},
    {image:" https://plus.unsplash.com/premium_photo-1661678244954-d1d766c00a57?dpr=1&w=306&auto=format&fit=crop&q=60&crop=entropy&cs=tinysrgb&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Nnx8ZnJlZSUyMGltYWdlc3xlbnwwfDB8fHwxNzE4MjE1NzEwfDE&ixlib=rb-4.0.3", name:"Water pani pani", artist:"Veersha", added: false},
    {image:" https://media.istockphoto.com/id/1322104312/photo/freedom-chains-that-transform-into-birds-charge-concept.jpg?s=1024x1024&w=is&k=20&c=CoqB4hDuRFuxxEZ4Fu84uhLDftgeyAtl8TXEQq-JdtM=", name:"Jai ho", artist:"Janvi ", added:false}
   ];

   // we should use state because every thing will be change in react state not array/ object
  const [songData,setSongData] = useState(data);
  const handleClick = (index)=>{
         setSongData((prev)=>{
          return prev.map((item, itemindex)=>{
            if(itemindex === index) return {...item, added: !item.added};
            return item;
          })
         })
  }   
  return (
    <>
      <div className="w-full h-screen bg-zinc-300  ">
        <Navbar  data= {songData}/>
        <div className="px-20 gap-10 flex mt-10 flex-wrap" >
           {songData.map((obj,index)=>(
            
            <Card data={obj} handleClick={handleClick}  index={index} key={index}/>
            ))}
        </div>
       
      </div>
    </>
  );
}

export default App;

 