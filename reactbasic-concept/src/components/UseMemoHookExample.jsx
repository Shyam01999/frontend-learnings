import React from "react";
import useFetch from "../hooks/useFetch";
import { useState } from "react";
import { useMemo } from "react";

function UseMemoHookExample() {
  const { data, loading, error } = useFetch("https://dummyjson.com/products");
  const [textcolor, setTextColor] = useState(false);

  function filterProducts() {
    console.log("this function filter the data again")
    return data ? data.filter((item) => item.rating > 4) : [];
  }

  const memoriseproductdata = useMemo(() => filterProducts(), [data]);

  if (loading) {
    return <h3>loading...</h3>;
  }

  if (error) {
    return <h5>Error</h5>;
  }

  return (
    <>
      <h1 style={{ color: textcolor ? "green" : "red" }}>
        Use Memo hook Example
      </h1>
      <button onClick={() => setTextColor(!textcolor)}>Click Me</button>
      <h3>All products whose rating is greater than 4</h3>
      <ul>
        {memoriseproductdata?.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </>
  );
}

export default UseMemoHookExample;

//By using usememo hook memorise the value and does not return any call again when the state value changes.
