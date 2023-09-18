import { getDoc, doc } from "firebase/firestore"
import { db } from "../../api"
import { useLoaderData, Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types';

export async function loader({ params }) {
  const bookId = params.id
  const ref = doc(db, "books", bookId)
  try {
    const data = await getDoc(ref)
    const filteredData = { ...data.data(), id: bookId }
    return filteredData
  } catch (err) {
    return null
  }
}

export default function BookDetails({ cart, setCart }) {
  const bookData = useLoaderData()
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

  return (
    <section className="book-details full-height">
      <Link
        to=".."
        relative="path"
        className="go-back-link"
      ><FontAwesomeIcon icon={faArrowLeft} /> Return to books</Link>
      <div className="container">
        <div className="image">
          <img src={bookData.imgSrc} alt="book image" />
          <span className="tag">{bookData.category}</span>
        </div>
        <div className="info">
          <h2 className="title">{bookData.title}</h2>
          <p className="description">
            {
              bookData.description ? bookData.description :
                `            Lorem ipsum dolor sit amet consectetur adipisicing
  elit. Quaerat soluta at dolore quibusdam, enim voluptas
  pariatur ea repellendus suscipit nam.            Lorem ipsum dolor sit amet consectetur adipisicing
  elit. Quaerat soluta at dolore quibusdam, enim voluptas
  pariatur ea repellendus suscipit nam.`
            }
          </p>
          <div className="type"><span>Type: </span>{bookData.type}</div>
          <div className="author"><span>Author: </span>{bookData.author}</div>
          <button
            className="add-to-cart"
            onClick={() => cart[bookData.id] ? unAddToCart(bookData) : addedToCart(bookData)}
          >
            <FontAwesomeIcon icon={faCartPlus} />
            {cart[bookData.id] ? "Unadd" : "Add to card"}
          </button>
        </div>
      </div>
    </section>
  )
}

BookDetails.propTypes = {
  cart: PropTypes.object,
  setCart: PropTypes.func
}