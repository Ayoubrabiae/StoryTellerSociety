import { Link } from "react-router-dom"

export default function Home() {
  return (
    <section className="home full-height">
      <div className="container">
        <q className="quote">
          Reading is an act of civilization; it’s
          one of the greatest acts of civilization
          because it takes the free raw material
          of the mind and builds castles of possibilities.
        </q>
        <Link className="normal-btn" to="books">Find your Book</Link>
      </div>
    </section>
  )
}
