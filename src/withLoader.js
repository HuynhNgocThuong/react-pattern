import React, { useState, useEffect } from "react";

export default function withLoader(Element, url) {
  return (props) => {
    const [data, setData] = useState(null);
    useEffect(() => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => setData(data));
    }, []);
    if (!data) {
      return <div>Loading...</div>;
    }
    console.log(data);
    return <Element {...props} data={data} />;
  };
}
