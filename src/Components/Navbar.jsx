import React from "react";
import  styles from "./style.module.css";

function Navbar({data}) {

const favouriteCount = data.filter(item => item.added).length;

    return(
        <div className="w-full px-4 py-3 flex justify-between items-center">
          <h3 className={`${styles.a}  ${styles.b}`}>Orange</h3>
          <div className=" flex py-2 px-4 bg-orange-600  rounded-md text-white text-sm gap-4">
            <h3>Favourites</h3>
            <h4>{favouriteCount}</h4>
          </div>
        </div> 
    )
}
export default Navbar; 



