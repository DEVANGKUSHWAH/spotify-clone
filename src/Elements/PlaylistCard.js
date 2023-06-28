import React from "react";
import { truncateString } from "../utils";
import { useDispatch } from "react-redux";
import { Actions } from "../Action/actions";

export const PlaylistCard = (props) => {
  const dispatch = useDispatch();
  const getSongs = (e) => {
    dispatch(Actions.getSongs(props.song._id));
  };
  return (
    <div className="cursor-pointer" onClick={getSongs}>
      <div className="w-44 h-66 bg-neutral-800 hover:bg-stone-800 rounded-lg pb-4">
        <div className="w-44 h-44 p-2">
          <img
            className="h-full w-full rounded-lg "
            alt=""
            src={
              props.song.imageUrl ||
              `data:image/jpeg;base64,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`
            }
          />
        </div>
        <div className="text-white mx-3 mt-2">
          <h3> {truncateString(props.song.name, 14)}</h3>
          <p className="text-sm">
            {truncateString(props.song.category.name, 20)}
          </p>
        </div>
      </div>
    </div>
  );
};
