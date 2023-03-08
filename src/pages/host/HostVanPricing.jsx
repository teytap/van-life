import React from "react";
import { useOutletContext } from "react-router-dom";

export default function HostVanPricing() {
  const { vanDetail } = useOutletContext();
  return (
    <h3 className="host-van-price">
      ${vanDetail.price}
      <span>/day</span>
    </h3>
  );
}
