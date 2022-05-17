import React, { useEffect, useState } from 'react'
const Colors = ["#ba5d07", "#8d67ab", "#a0c3d2","#ffc864","#1e3264","#e61e32","#f037a5",];
export const SearchCard = (props) => {
  const [bgColor,setBgColor] = useState(Colors);
  useEffect(()=>{
    const item = bgColor[
      Math.floor(Math.random() * bgColor.length)
    ];
    setBgColor(item);
  },[])
  return (
    <div className={`w-44 h-66 overflow-hidden rounded-lg pb-4 mb-3`} style={{
      backgroundColor: bgColor
    }}>
      <div className="text-white mx-3 mt-3">
        <h3> {(props.search.name)}</h3>
        <p className="text-sm">{(props.search.name)}</p>
      </div>
      <div className="w-32 rotate-45 h-32 ml-20">
        <img
          className="h-full w-full rounded-lg "
          alt=""
          src={
            props.search.src ||
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXbX070soPUjAKA4UFXPDoaaSHGEiKu4RNEiTtyUiFrBoGttilPAmPp3o7vekcoJwpdKk&usqp=CAU"
          }
        />
      </div>
      
    </div>
  );
}
