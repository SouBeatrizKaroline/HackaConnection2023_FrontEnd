import React, { useEffect, useState } from "react";
import axios from "axios";

function HistoryComponent() {
  const [shippings, setShippings] = useState([]);

  useEffect(() => {
    axios
      .get("https://d73a-2804-14c-88-22bf-ddce-b78a-deca-5eed.ngrok-free.app/history")
      .then((response) => {
        const { shippings } = response.data;
        setShippings(shippings);
      })
      .catch((error) => {
        console.error("Error fetching shipping history:", error);
      });
  }, []);

  return (
    <div>
      <h1>Status</h1>
      {shippings.length > 0 ? (
        shippings.map((shipping) => (
          <div key={shipping.id}>
            <p>File Name: {shipping.fileName}</p>
            <p>Status: {shipping.status}</p>
            <p>Return Path: {shipping.returnpath}</p>
            <p>Created At: {shipping.createdAt}</p>
            <hr />
          </div>
        ))
      ) : (
        <p>No shipping history available.</p>
      )}
    </div>
  );
}

export default HistoryComponent;
