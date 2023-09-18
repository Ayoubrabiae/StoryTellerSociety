import { createBrowserRouter, createRoutesFromChildren, Route, RouterProvider } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact, { action as contactAction } from "./pages/Contact"
import Books, { loader as booksLoader } from "./pages/books/Books"
import Layout from "./component/Layout"
import SignUp, { action as SignUpAction } from "./pages/auth/SignUp"
import SignIn, { action as SignInAction } from "./pages/auth/SignIn"
import AccountPage from "./pages/auth/AccountPage"
import "./index.css"
import BookDetails, { loader as BookDetailsLoader } from "./pages/books/BookDetails"
import NotFoundPage from "./pages/NotFoundPage"
import { useState } from "react"

export default function App() {
  const [cart, setCart] = useState({})

  const router = createBrowserRouter(createRoutesFromChildren(
    <>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route
          path="contact"
          element={<Contact />}
          action={contactAction}
        />
        <Route
          path="books"
          element={<Books cart={cart} setCart={setCart} />}
          loader={booksLoader}
        />
        <Route
          path="books/:id"
          element={<BookDetails cart={cart} setCart={setCart} />}
          loader={BookDetailsLoader}
        />
        <Route
          path="signup"
          element={<SignUp />}
          action={SignUpAction}
        />
        <Route
          path="signin"
          element={<SignIn />}
          action={SignInAction}
        />
        <Route
          path="account"
          element={<AccountPage cart={cart} setCart={setCart} />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </>
  ))

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}
