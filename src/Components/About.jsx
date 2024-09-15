import React from 'react'


export default function About() {
    return (
        <>

            <section className="team">
                <h1>Creator</h1>
                <div className="team-cards">

                    <div className="AboutCard">
                        <div className="Aboutcard-img">
                            <img src=
                                "https://scontent.fbho1-3.fna.fbcdn.net/v/t1.6435-9/67623704_167395304306345_9089638102560931840_n.jpg?stp=dst-jpg_s206x206&_nc_cat=106&ccb=1-7&_nc_sid=fe5ecc&_nc_ohc=6CKzrr5VtBEQ7kNvgHNk2xj&_nc_ht=scontent.fbho1-3.fna&oh=00_AYCpiID_lsKmP9jgwXUfLyfy1Sx_G_ETxEGL5sBs90N7fg&oe=66F79D63" alt="User 1" />
                        </div>
                        <div className="card-info">
                            <h2 className="card-name">Balwan singh rajput</h2>
                            <p className="card-role">CEO and Founder</p>
                            <p className="card-email">Balwansinghrajput@gmil.com</p>
                            <p><button className="Aboutbutton">Contact</button></p>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}
