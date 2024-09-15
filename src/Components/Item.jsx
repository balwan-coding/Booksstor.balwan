import React from 'react'
export default function Item() {
  return (
    <div id="carouselExample" className="carousel slide itemBox">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="https://www.bookswagon.com/bannerimages/80_inr.jpg?v=5.4" className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src="https://www.bookswagon.com/bannerimages/79_inr.jpg?v=5.4" className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src="https://www.bookswagon.com/bannerimages/83_inr.jpg?v=5.4" className="d-block w-100" alt="..." />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  )
}
