import React from 'react'
import { SearchCard } from '../../Elements/SearchCard';

export const SearchList = (props) => {
  return (
    <div className="mx-6">
      <div className=" flex flex-row flex-wrap">
        {props.search.map((search) => (
          <div className="ml-5">
            <SearchCard search={search}/>
          </div>
        ))}
      </div>
    </div>
  );
}
