import React from "react";
import { useParams, Link, useLocation } from "react-router-dom";

export default function VanDetail() {
  const params = useParams();
  // when click on back button these helps to remember filters
  const location = useLocation();
  //if there is a state then use search else null
  const search = location.state?.search || "";
  const backTo = location.state?.type || "all";

  const [details, setDetails] = React.useState(null);
  React.useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setDetails(data.vans));
  }, [params.id]);

  return (
    <div className="van-detail-container">
      {details ? (
        <div className="van-detail">
          {/* when click on back button these helps to remember filters */}
          <Link to={`..${search}`} relative="path" className="back-button">
            {" "}
            &larr; <span>Back to {backTo} vans</span>
          </Link>
          <img src={details.imageUrl} />
          <i className={`van-type ${details.type} selected`}>{details.type}</i>
          <h2>{details.name}</h2>
          <p className="van-price">
            <span>${details.price}</span>/day
          </p>
          <p>{details.description}</p>
          <button className="link-button">Rent this van</button>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
}
