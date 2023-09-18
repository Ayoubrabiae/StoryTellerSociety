import { Link } from "react-router-dom"

export default function NotFoundPage() {
  return (
    <>
      <div className="not-found-page full-height">
        <p>404 - Page not found</p>
        <Link to="/">Return to home</Link>
      </div>
    </>
  )
}
