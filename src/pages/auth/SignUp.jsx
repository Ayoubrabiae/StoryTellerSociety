import { Form, Link, redirect, useActionData } from "react-router-dom"
import { auth, googleProvider } from "../../api"
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth"

// eslint-disable-next-line react-refresh/only-export-components
export async function action({ request }) {
  const formData = await request.formData()
  const email = formData.get("email")
  const password = formData.get("password")
  const passwordConfirm = formData.get("password-confirm")

  if (password !== passwordConfirm) {
    return "Please Enter the same password"
  }

  try {
    await createUserWithEmailAndPassword(auth, email, password)
  } catch (err) {
    return err.msg
  }

  return redirect("/account")
}

export default function SignUp() {
  const errorMsg = useActionData()

  async function signUpWithGoogle() {
    try {
      await signInWithPopup(auth, googleProvider)
      window.location.replace("/account")
    } catch (err) {
      console.log(err.message)
    }
  }

  return (
    <div className="main-auth-form full-height">
      <div className="container">
        {errorMsg && <h2 className="error-msg">{errorMsg}</h2>}
        <h2 className="title">Sign Up</h2>
        <Form
          method="post"
          replace
        >
          <input type="email" name="email" placeholder="Email..." />
          <input type="password" name="password" placeholder="Password..." />
          <input type="password" name="password-confirm" placeholder="Confirm your password..." />
          <button
            className="normal-btn"
          >Sign up</button>
        </Form>
        <Link to="/signin">Alerady have an account?</Link>
        <button
          className="google"
          onClick={signUpWithGoogle}
        >Sign up with Google</button>
      </div>
    </div>
  )
}
