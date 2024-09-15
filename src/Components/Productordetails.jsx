import React from "react";

export default function Productordetails(props) {
  return (
    <div className="Productor-detail-card my-3">
      <img
        src={props.photoD}
        alt=""
      />
      <div>
        <h1>{props.detailsTittle}</h1>
        <p className="detailsDescription">{props.detailsDescription}</p>
        <p className="price">{props.prise}</p>
        <input type="number" value="1" />
        <button>Add to Card</button>
      </div>
    </div>
  );
}
