import { useLoaderData, Link } from "react-router-dom"
import { db } from "../../api"
import { getDocs, collection } from "firebase/firestore"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types';


export async function loader() {
  const ref = collection(db, "books")

  try {
    const data = await getDocs(ref)
    const filteredData = data.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }))
    return filteredData
  } catch (err) {
    console.log(err.message)
    return null
  }

}


export default function Books({ cart, setCart }) {
  const booksData = useLoaderData()
  function addedToCart(book) {
    setCart(preCart => {
      const updatedCart = { ...preCart }
      updatedCart[book.id] = book
      return updatedCart
    })
  }
  function unAddToCart(book) {
    setCart(preCart => {
      const updatedCart = { ...preCart }
      updatedCart[book.id] = null
      return updatedCart
    })
  }

  const books = booksData?.map(e => {
    const authorsCheck = (e.author).split(",").length > 1

    return (
      <div
        key={e.id}
        className="book-box"
        style={{ backgroundImage: `url(${e.imgSrc})` }}
      >
        <span className="tag">{e.category}</span>
        <div className="box-container">
          <h3 className="title">{e.title}</h3>
          <span className="type">Type: {e.type}</span>
          <strong className="author">Author{authorsCheck && "s"}: {e.author}</strong>
          <strong className="price">price: ${e.price}</strong>
          <div className="btns">
            <button
              className="btn add-to-cart"
              onClick={() => cart[e.id] ? unAddToCart(e) : addedToCart(e)}
            >
              <FontAwesomeIcon icon={faCartPlus} />
              {cart[e.id] ? "Unadd" : "Add to cart"}
            </button>
            <Link
              to={e.id}
              className="btn more"
            >
              More
            </Link>
          </div>
        </div>
      </div>
    )
  })


  return (
    <section className="books full-height">
      <div className="header">
        <div className="container">
          <h2>Books</h2>
          <p>A room without books is like a body without a soul.</p>
        </div>
      </div>
      <div className="container">
        {books?.map(e => e)}
      </div>
    </section>
  )
}

Books.propTypes = {
  cart: PropTypes.object,
  setCart: PropTypes.func
}