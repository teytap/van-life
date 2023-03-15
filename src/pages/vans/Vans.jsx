import React from "react";
import { getVans } from "../../api";
import { Link, useSearchParams } from "react-router-dom";
import { Oval } from "react-loader-spinner";

export default function About() {
  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");
  const [vansData, setVansData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    async function loadVans() {
      setLoading(true);
      try {
        const data = await getVans();
        setVansData(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    loadVans();
  }, []);

  // condition of displaying filtered types
  const displayedVans = typeFilter
    ? vansData.filter((van) => van.type.toLowerCase() === typeFilter)
    : vansData;

  const vansDataElements = displayedVans.map((van) => {
    return (
      <div key={van.id} className="van-tile">
        <Link
          to={van.id}
          state={{ search: `?${searchParams.toString()}`, type: typeFilter }}
        >
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

  // function handleFilterChange(key, value) {
  //   setSearchParams((prevParams) => {
  //     if (value === null) {
  //       prevParams.delete(key);
  //     } else {
  //       prevParams.set(key, value);
  //     }
  //     return prevParams;
  //   });
  // }
  if (loading) {
    return (
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
    );
  }
  if (error) {
    return <h1>There was an error: </h1>;
  }
  return (
    <div className="van-list-container">
      <h1>Explore our van options</h1>
      <div className="van-list-filter-buttons">
        {/* <button
           onClick={() => handleFilterChange("type", "simple")}
          className="van-type simple"
        >
          Simple
        </button> */}
        <Link
          to="?type=simple"
          className={`van-type simple ${
            typeFilter === "simple" ? "selected" : ""
          }`}
        >
          Simple
        </Link>
        <Link
          to="?type=luxury"
          className={`van-type luxury ${
            typeFilter === "luxury" ? "selected" : ""
          }`}
        >
          Luxury
        </Link>
        <Link
          to="?type=rugged"
          className={`van-type rugged ${
            typeFilter === "rugged" ? "selected" : ""
          }`}
        >
          Rugged
        </Link>
        {/* show clear filters if type filter selected */}
        {typeFilter ? (
          <Link to="" className="van-type clear-filters">
            Clear filters
          </Link>
        ) : null}
      </div>
      <div className="van-list">{vansDataElements}</div>
    </div>
  );
}
