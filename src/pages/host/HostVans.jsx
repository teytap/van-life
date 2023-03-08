import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
export default function HostVans() {
  const [vans, setVans] = useState([]);
  useEffect(() => {
    fetch("/api/host/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

  const hostVanElements = vans.map((hosted) => (
    <Link
      to={`/host/vans/${hosted.id}`}
      key={hosted.id}
      className="host-van-link-wrapper"
    >
      <div className="host-van-single" key={hosted.id}>
        <img
          src={hosted.imageUrl}
          alt={`Photo of ${hosted.name}`}
          width="140"
        />
        <div className="host-van-info">
          <h3>{hosted.name}</h3>
          <p>${hosted.price}/day</p>
        </div>
      </div>
    </Link>
  ));
  return (
    <div className="host-vans-container">
      <h1 className="host-vans-title">Your listed vans</h1>
      {hostVanElements}
    </div>
  );
}
