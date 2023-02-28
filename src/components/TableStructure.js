import React, { useState, useEffect } from "react";
import {  useSelector } from "react-redux";
import { selectUser } from "../slice/userSlice";


const TableStructure = () => {
  const { publicData, privateData } = useSelector(selectUser);
  const [position, setPosition] = useState("");
  const [list1, setList1] = useState([]);
  const [list2, setList2] = useState([]);
 
  const [initialColumns, setInitialColumns] = useState({ });

  useEffect(()=>{
    setInitialColumns({
      Public: {
        id: "public",
        list: publicData,
      },
      Private: {
        id: "private",
        list: privateData,
      },
    })
  },[publicData, privateData])

  const handleDragEnter = (e, position) => {
    setPosition(position);
  };



  const handleDragEnd = (e, item) => {
    let a, b;
    if (position == "private") {
      a = initialColumns.Public.list.filter((elem) => {

        return elem !== item;
      });
      b = initialColumns.Public.list.filter((elem) => {
    
        return elem == item;
      });
      setInitialColumns((state) => {
        return {
          ...state,
          Public: {
            ...state.Public,
            list: a,
          },
          Private: {
            ...state.Private,
            list: [...list1, ...b],
          },
        };
      });
    } else if (position == "public") {
      a = initialColumns.Private.list.filter((elem) => {
        return elem !== item;
      });
      b = initialColumns.Private.list.filter((elem) => {
        return elem == item;
      });
      setInitialColumns((state) => {
        return {
          ...state,
          Public: {
            ...state.Public,
            list: [...list2, ...b],
          },
          Private: {
            ...state.Private,
            list: a,
          },
        };
      });
    }

  };

  useEffect(() => {
    if (initialColumns?.Private?.list?.length > 0) {
      setList1([...initialColumns?.Private?.list]);
    } else{
      setList1([])
    }
     if (initialColumns?.Public?.list?.length > 0) {
      setList2([...initialColumns?.Public?.list]);
    }
    else{
      setList2([])
    }
  }, [initialColumns]);

  return (
    <>
      <div className="row h-100">
        {Object?.values(initialColumns)?.map((col,index) => {
          return (
            <div
             key={index}
              className="col-6"
              onDragEnter={(e) => handleDragEnter(e, col.id)}
            >
              <div className="card h-100">
              <h5 className="card-header text-capitalize">{col.id}</h5>
                
              <div className="card-body p-0">
              {col?.list?.map((item, index) => {
                return (
                  <div className="card-item p-2 border-bottom cursor-pointer"
                    onDragEnd={(e) => handleDragEnd(e, item)}
                    key={index}
                    draggable
                  >
                    {item}
                  </div>
                );
              })}
              </div>
              </div>
            </div>
          );
        })}

       
      </div>
      </>
  );
};

export default TableStructure;
