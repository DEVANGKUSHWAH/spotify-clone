import React from 'react'
import { SearchList } from '../SearchList/SearchList';


const Search = () => {
    const searchalbums = [
      {
        name: "Your top genres",
        list: [
          {
            name: "Pop",
            src: "",
          },
          {
            name: "Bollywood",
            src: "",
          },
        ],
      },
      {
        name: "Browse all",
        list: [
          {
            name: "Podcasts",
            src: "",
          },
          {
            name: "chart",
            src: "",
          },
          {
            name: "New Releases",
            src: "",
          },
          {
            name: "Discover",
            src: "",
          },
          {
            name: "Concerts",
            src: "",
          },
          {
            name: "Punjabi",
            src: "",
          },
          {
            name: "Tamil",
            src: "",
          },
        ],
      },
    ];
  return (
    <div>
      {searchalbums.map((searchalbum) => (
        <div className="mt-16">
          <div className="text-white grid grid-cols-8 ml-8 mb-4">
            <h2 className="font-bold text-2xl mt-0 mb-2 col-span-7">
              {searchalbum.name}
            </h2>
          </div>
          <SearchList search={searchalbum.list} />
        </div>
      ))}
    </div>
  );
}

export default Search