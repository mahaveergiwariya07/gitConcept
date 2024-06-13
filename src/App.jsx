 import React, { useState } from "react"; 
// import Slider from "./Components/Slider";
import Card from "./Components/Card";
import { MdDescription } from "react-icons/md";
 
 function App() {
  const raw = [
    {name:"John", proffession:"Painter", image:"https://images.unsplash.com/photo-1587468543056-bf5e74fbca72?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", friends: false},
    {name:"Rohn", proffession:"Artist", image:"https://plus.unsplash.com/premium_photo-1707816501018-91c16faf4dc2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",friends: false},
    {name:"Mohn", proffession:"Docter", image:"https://plus.unsplash.com/premium_photo-1707816508053-be84dd1a27aa?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",friends: false},
    {name:"Lohn", proffession:"Shopkeper", image:"https://images.unsplash.com/photo-1590943312905-ea3a8ad75a8d?q=80&w=1577&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",friends: false},
    {name:"Pohn", proffession:"Tailor", image:"https://media.istockphoto.com/id/1802463502/photo/a-young-man-with-silver-hair-wearing-a-musk-covering-his-face.jpg?s=1024x1024&w=is&k=20&c=njnGmAAcl1LlFnUOIMHbXWSTIkeoK1lgec9RaHaeOhI=",friends: false},

  ];

 const [data, setData] = useState(raw)
const handleClick = (changingIndex)=>{
  setData((prev)=>{
     return prev.map((item,index)=>{
      if(index === changingIndex) return {...item, friends: !item.friends };
      return item;
     })
  })
}

  return (
    <>
       <div className="w-full h-screen bg-zinc-300 flex gap-4 items-center justify-center">
           {data.map((item,index)=>(
             <Card key={index} index={index} handleClick={handleClick} values ={item}/> 
           ))}
        </div> 
      
    </> 
  )
 }

 export default App; 