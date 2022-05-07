import React from 'react'

export const SearchCard = (props) => {
  return (
    <div className="w-44 h-66 bg-neutral-800 hover:bg-stone-800 rounded-lg pb-4">
      <div className="w-44 h-44 p-2">
        <img
          className="h-full w-full rounded-lg "
          alt=""
          src={
            props.search.src ||
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXbX070soPUjAKA4UFXPDoaaSHGEiKu4RNEiTtyUiFrBoGttilPAmPp3o7vekcoJwpdKk&usqp=CAU"
          }
        />
      </div>
      <div className="text-white mx-3 mt-2">
        <h3> {(props.search.name)}</h3>
        <p className="text-sm">{(props.search.name)}</p>
      </div>
    </div>
  );
}
