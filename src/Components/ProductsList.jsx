import React from 'react'
import Card from './Card.jsx'
import Item from './Item.jsx'


export default function ProductsList() {
    return (
        <>
            <Item />

            <div className="books-container ">
            {/* <p><button><a href={props.Detail}></a></button></p> */}
                <Card photo="https://m.media-amazon.com/images/I/51j1nrM7ETL._AC_UY327_FMwebp_QL65_.jpg" title="React js" price="$100" description="this a ract book make your code eassy and fast" Detail="/ProductsdetailsPage" /> 
                <Card photo="https://m.media-amazon.com/images/I/61x2yYzyAzL._AC_UY327_FMwebp_QL65_.jpg" title="java" price="$430" description="This books write by jacs row  this java master books" />
                <Card photo="https://m.media-amazon.com/images/I/41t-pVrGX8L._SY445_SX342_.jpg" title="Web view" price="$120" description=" Reading books is a good habit. We bring you a different   " />
                <Card photo="https://m.media-amazon.com/images/I/71KghBQBnvL._SY466_.jpg" title="PAYTHON" price="$140" description="Learn the nitty-gritty of Python 3 programming language by " />
                <Card photo="https://m.media-amazon.com/images/I/71SEZqzWmGL._AC_UY327_FMwebp_QL65_.jpg" title="C+" price="$600" description=" The book is designed for students studying at the  The book is designed for students studying at the The book is designed for students studying at the" />
                <Card photo="https://m.media-amazon.com/images/I/71xVWN7st9L._AC_UY327_FMwebp_QL65_.jpg" title="JAVASCRIPT" price="$100" description="this a ract book make your code eassy and fast The book is designed for students studying at the The book is designed for students studying at the" />
                <Card photo="https://m.media-amazon.com/images/I/71OMPF7vzmL._AC_UY327_FMwebp_QL65_.jpg" title="NODE.JS" price="$430" description="This books write by jacs row  this java master books The book is designed for students studying at the The book is designed for students studying at the" />
                <Card photo="https://m.media-amazon.com/images/I/71whevleuhL._AC_UY327_FMwebp_QL65_.jpg" title="React Negative" price="$120" description=" Reading books is a good habit. We bring you a different   " />
                <Card photo="https://m.media-amazon.com/images/I/71G3bSWBs-L._AC_UY327_FMwebp_QL65_.jpg" title="Machine learning" price="$140" description="Learn the nitty-gritty of Python 3 programming language by The book is designed for students studying at the " />
                <Card photo="https://m.media-amazon.com/images/I/81RB3sHo5-L._AC_UY327_FMwebp_QL65_.jpg" title="DSA & C++" price="$600" description=" The book is designed for students studying at the The book is designed for students studying at the The book is designed for students studying at the The book is designede " />
                <Card photo="https://m.media-amazon.com/images/I/51A2iElWfZL._AC_UY327_FMwebp_QL65_.jpg" title="DSA & PAYTHON" price="$140" description="Learn the nitty-gritty of Python 3 programming language by The book is designed for students studying at the" />
                <Card photo="https://m.media-amazon.com/images/I/61LLB1geD4L._AC_UY327_FMwebp_QL65_.jpg" title="Django" price="$600" description=" The book is designed for students studying at the  The book is designed for students studying at the The book is designed for students studying at the  THE  BOOK IS BEST"  />
            </div>

          

        </>
    )
}
