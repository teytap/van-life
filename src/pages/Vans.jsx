import React from "react";

import { Link } from "react-router-dom";

export default function About() {
  const [vansData, setVansData] = React.useState([]);
  React.useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVansData(data.vans));
  }, []);

  const vansDataElements = vansData.map((van) => {
    return (
      <div key={van.id} className="van-card">
        <Link to={`/vans/${van.id}`}>
          <img src={van.imageUrl} />
          <div className="van-info">
            <h3>{van.name}</h3>
            <p>
              ${van.price}
              <span>/day</span>
            </p>
          </div>
          <i className={`van-type ${van.type} selected`}>{van.type}</i>
        </Link>
      </div>
    );
  });
  return (
    <div className="van-list-container">
      <h1>Explore our van options</h1>
      <div className="van-list">{vansDataElements}</div>
    </div>
  );
}
