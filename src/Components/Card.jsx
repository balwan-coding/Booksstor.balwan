import React from 'react'
import { Link } from 'react-router-dom'
// import './App.css'
export default function Card(props) {
    return (
        <>
            <div className="card my-2 mx-3">
               <img className='card-img' src={props.photo} alt="" />
                <h1>{props.title}</h1>
                <p className="price">{props.price}</p>
                <p>{props.description}</p>
            <p><Link to={props.Detail}>View</Link></p>

            </div>

        </>
    )
}
