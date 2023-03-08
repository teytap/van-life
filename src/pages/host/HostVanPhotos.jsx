import React from "react";
import { useOutletContext } from "react-router-dom";

export default function HostVanPhotos() {
  const { vanDetail } = useOutletContext();
  return (
    <img src={vanDetail.imageUrl} width="120" className="host-van-photos" />
  );
}
