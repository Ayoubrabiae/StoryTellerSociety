import { Link } from "react-router-dom"

export default function About() {
  return (
    <section className="about full-height">
      <div className="header">
        <div className="container">
          <h2>#About Us</h2>
          <p>We can {"don't"} Know you but you are should be know who we are</p>
        </div>
      </div>
      <div className="container">
        <div className="our-story">
          <h2>Our Story</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Nemo quas exercitationem recusandae maxime
            quae molestiae facilis optio, perferendis eveniet
            assumenda in nulla laboriosam sed quisquam ipsa
            velit fugiat consectetur amet?
            Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Nemo quas exercitationem recusandae maxime
            quae molestiae facilis optio, perferendis eveniet
            assumenda in nulla laboriosam sed quisquam ipsa
            velit fugiat consectetur amet?
            Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Nemo quas exercitationem recusandae maxime
            quae molestiae facilis optio, perferendis eveniet
            assumenda in nulla laboriosam sed quisquam ipsa
            velit fugiat consectetur amet?
          </p>
        </div>
        <div className="action-area">
          <p>
            Lorem ipsum dolor, sit amet con sectetur
            adipisicing elit. Perferendis adipisicing elit. Perferendis
          </p>
          <Link to="./books" className="normal-btn">Find your lovely book</Link>
        </div>
      </div>
    </section>
  )
}
