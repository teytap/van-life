import React from "react";
import { useParams } from "react-router-dom";

export default function VanDetail() {
  const params = useParams();
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
