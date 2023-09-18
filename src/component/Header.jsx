import { NavLink } from "react-router-dom"
import { useEffect, useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [showNav, setShowNav] = useState(false)

  useEffect(() => {
    function resizeWindow() {
      setWindowWidth(window.innerWidth)
    }
    window.addEventListener("resize", resizeWindow)

    return () => window.removeEventListener("resize", resizeWindow)
  }, [])

  function handleShowNav() {
    setShowNav(preVal => !preVal)
  }

  const toggleMenu = (
    <div
      className={`toggle-menu ${showNav ? "active-menu" : ""}`}
      onClick={handleShowNav}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  )

  return (
    <header>
      <div className="container">
        <h1 className="title"><NavLink to="/">StoryTellerSociety</NavLink></h1>
        {windowWidth < 778 && toggleMenu}
        <nav
          className={windowWidth < 778 ? "phone-nav" : ""}
          style={showNav ? { opacity: 1, zIndex: 1 } : {}}
        >
          <NavLink to="about">About</NavLink>
          <NavLink to="books">Books</NavLink>
          <NavLink to="contact">Contact</NavLink>
          <NavLink to="account" className="sign-up">
            <FontAwesomeIcon className="user-icon" icon={faUser} />
          </NavLink>
        </nav>
      </div>
    </header>
  )
}
