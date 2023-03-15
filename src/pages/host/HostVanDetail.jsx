import React, { useState, useEffect } from "react";
import {
  useParams,
  Link,
  NavLink,
  Outlet,
  useOutletContext,
} from "react-router-dom";
import { Oval } from "react-loader-spinner";
export default function HostVanDetail() {
  const params = useParams();
  const [vanDetail, setVanDetail] = useState(null);
  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };
  useEffect(() => {
    fetch(`/api/host/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setVanDetail(data.vans[0]));
  }, [params.id]);

  return (
    <div className="van-detail-container">
      <Link to="../vans" className="back-button">
        {" "}
        &larr; <span>Back to all vans</span>
      </Link>
      {vanDetail ? (
        <div className="host-van-detail">
          <div className="host-van-card">
            <img src={vanDetail.imageUrl} width="200" />
            <div className="host-van-card-desc">
              <i className={`van-type van-type-${vanDetail.type}`}>
                {vanDetail.type}
              </i>
              <h2>{vanDetail.name}</h2>
              <p className="van-price">
                <span>${vanDetail.price}</span>/day
              </p>
            </div>
          </div>
          <hr />
          <nav className="host-van-detail-nav">
            <NavLink
              to="."
              end
              style={({ isActive }) => (isActive ? activeStyle : null)}
            >
              Details
            </NavLink>
            <NavLink
              to="pricing"
              style={({ isActive }) => (isActive ? activeStyle : null)}
            >
              Pricing
            </NavLink>
            <NavLink
              to="photos"
              style={({ isActive }) => (isActive ? activeStyle : null)}
            >
              Photos
            </NavLink>
          </nav>

          <Outlet context={{ vanDetail }} />
        </div>
      ) : (
        <Oval
          height={60}
          width={60}
          color="grey"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="oval-loading"
          secondaryColor="grey"
          strokeWidth={3}
          strokeWidthSecondary={3}
        />
      )}
    </div>
  );
}
