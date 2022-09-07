import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function Fetch() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData(); // whenever the page loads the data will be fetched
  }, []);
  const url = "https://jsonplaceholder.typicode.com/posts";
  const fetchData = () => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((fetchedData) => {
        setData(fetchedData);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      {/* <button onClick={fetchData}>Click</button> */}
      {data.map((value, ind) => {
        return <h4 key={ind}>{value.title}</h4>;
      })}
    </div>
  );
}

export default Fetch;
