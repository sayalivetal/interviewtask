import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, userLoginData } from "../slice/userSlice";
import { DragDropContext, DropResult } from "react-beautiful-dnd";

const TableStructure = () => {
  const { publicData, privateData } = useSelector(selectUser);
  console.log(publicData);

  const initialColumns = {
    Public: {
      id: "public",
      list: publicData,
    },
    Private: {
      id: "private",
      list: privateData,
    },
  };
  const [columns, setColumns] = useState(initialColumns);
  
  const onDragEnd = () => {};
  return (
    <div className="container">
      <div className="row">
        <DragDropContext onDragEnd={onDragEnd}>
          {Object?.values(columns)?.map((col) => {
            console.log(col);
            return (
              <div className="col-6 border">
                <div className="w-full border">{col.id}</div>
                {col?.list?.map((item, index) => {
                  return <div key={col.id}>{item.name}</div>;
                })}
              </div>
            );
          })}
        </DragDropContext>
        {/* <div className="col-6 border">
            <div className="w-full border">Private</div>
            {privateData.map((item1, index) => {
              return (
                <div key={index} onDragEnd={onDragEnd}>
                  {item1.name}
                </div>
              );
            })}
          </div> */}
      </div>
    </div>
  );
};

export default TableStructure;
