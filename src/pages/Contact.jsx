import { Form } from "react-router-dom"

// eslint-disable-next-line react-refresh/only-export-components
export async function action({ request }) {
  const formData = await request.formData()
  const data = {
    firstName: formData.get("first-name"),
    familyName: formData.get("family-name"),
    country: formData.get("country"),
    phoneNumber: formData.get("phone-number"),
    email: formData.get("email"),
    subject: formData.get("subject"),
    message: formData.get("message")
  }
  return data
}

export default function Contact() {
  return (
    <section className="contact full-height">
      <div className="header">
        <div className="container">
          <h2>#Contact</h2>
          <p>{"Let's"} talk Now!</p>
        </div>
      </div>
      <div className="container">
        <Form
          method="post"
        >
          <div>
            <input type="text" name="first-name" placeholder="First name *" required />
            <input type="text" name="family-name" placeholder="Family name *" required />
            <input type="text" name="country" placeholder="country" />
            <input type="number" name="phone-number" placeholder="phone number" />
            <input type="email" name="email" placeholder="email *" required />
            <input type="text" name="subject" placeholder="Subject *" required />
          </div>
          <textarea name="message" placeholder="message..." required></textarea>
          <button className="normal-btn">Submit</button>
        </Form>
      </div>
    </section>
  )
}
