import React, { useEffect, useState } from "react";
import CheckOutData from "../CheckOutData/CheckOutData";
import './CheckOut.css';

const CheckOut = () => {
  const [checkOutDatas, setCheckOutDatas] = useState([]);
  useEffect(() => {
    fetch("checkOut.json")
      .then((res) => res.json())
      .then((data) => setCheckOutDatas(data));
  }, []);

  return (
    <div>
      <h1 className="mt-5 ">You can Book Hear</h1>
      <div className="check-cart-container">
        {checkOutDatas.map((checkOutData) => (
          <CheckOutData
            key={checkOutData.id}
            checkOutData={checkOutData}
          ></CheckOutData>
        ))}
      </div>
    </div>
  );
};

export default CheckOut;
