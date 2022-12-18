import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Actions } from '../../Action/actions';
import { SearchList } from '../SearchList/SearchList';


const Search = () => {
  const [searchAlbums,setSearchAlbums] = useState([])
  const search = useSelector((state)=>state.playListReducer.categories)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(Actions.getCategories())
  },[])
  useEffect(()=>{
    if(search?.data?.length){
      console.log(search)
      setSearchAlbums(search)
    }
  },[search])
  return (
    <div>
        <div className="mt-2">
          <div className="text-white grid grid-cols-8 ml-8 mb-4">
            <h2 className="font-bold text-2xl mt-0 mb-2 col-span-7">
              Search 
            </h2>
          </div>
      {searchAlbums?.data &&
          <SearchList search={searchAlbums.data} />
          }
          </div>
    </div>
  );
}

export default Search