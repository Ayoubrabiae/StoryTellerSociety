import { auth } from "../../api";
import { useState, useEffect } from "react";
import { signOut } from "firebase/auth"
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'

export default function AccountPage({ cart, setCart }) {
  const [theUser, setTheuser] = useState(null)

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setTheuser(user);
      } else {
        window.location.replace("/signup");
      }
    });
  }, []);

  function unAddToCartAndTable(book) {
    setCart(preCart => {
      const updatedCart = { ...preCart }
      updatedCart[book.id] = null
      return updatedCart
    })
  }

  function getTotalPrice() {
    const BOOKS = Object.keys(cart).filter(book => book !== null)
    let booksPrice = 0
    BOOKS.forEach(bookId => {
      booksPrice += cart[bookId] !== null ? parseFloat(cart[bookId].price) : 0
    })
    return Math.round(booksPrice)
  }

  const trBooks = Object.keys(cart)?.map(book => (
    cart[book] !== null && <tr key={book} >
      <td className="image"><img src={cart[book].imgSrc} alt="Book image" /></td>
      <td className="title">{cart[book].title}</td>
      <td className="price">${cart[book].price}</td>
      <td
        className="remove"
      ><FontAwesomeIcon onClick={() => unAddToCartAndTable(cart[book])} icon={faXmark} /></td>
    </tr >
  ))

  if (theUser) {
    return (
      <section className="account-page full-height">
        <div className="container">
          <FontAwesomeIcon className="user-icon" icon={faUser} />
          <h2 className="title">{theUser?.displayName ? theUser.displayName : theUser?.email}</h2>
          <button className="sign-out" onClick={() => signOut(auth)}>Sign out</button>
        </div>
        <div className="cart">
          <div className="container">
            <h2>Cart</h2>
            <table>
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Price</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody>
                {trBooks.map(book => book)}
              </tbody>
            </table>
          </div>
        </div>
        <div className="total-price">
          <p>Total Price: <strong>${getTotalPrice()}</strong></p>
          <button className="buy-btn normal-btn" onClick={() => setCart({})}>Buy</button>
        </div>
      </section>
    )
  } else {
    return (
      <h2>Loading...</h2>
    )
  }
}

AccountPage.propTypes = {
  cart: PropTypes.object,
  setCart: PropTypes.func
}
