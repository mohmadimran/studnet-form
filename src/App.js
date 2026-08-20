import { useState } from "react"

export default function App() {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    address: "",
    collage: ""
  })

  const [error, setError] = useState("")
  const [showPopup, setShowPopup] = useState(false)
  const [submittedUser, setSubmittedUser] = useState(null)

  const handleInput = (e) => {
    const { name, value } = e.target

    setFormData(prev => ({
      ...prev,
      [name]: value
    }))

    setError("")
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!formData.userName.trim()) {
      setError("Required user name")
      return
    }

    const userEmail = formData.email.includes("@")

    if (!formData.email || !userEmail) {
      setError("Invalid email")
      return
    }

    if (!formData.password || formData.password.length < 6) {
      setError("Password must be at least 6 characters")
      return
    }

    // Save submitted user information
    setSubmittedUser(formData)

    // Show popup
    setShowPopup(true)

    // Reset form
    setFormData({
      userName: "",
      email: "",
      password: "",
      address: "",
      collage: ""
    })
  }

  const closePopup = () => {
    setShowPopup(false)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="userName"
          value={formData.userName}
          onChange={handleInput}
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInput}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleInput}
        />

        <label htmlFor="address">Address</label>
        <input
          type="text"
          id="address"
          name="address"
          value={formData.address}
          onChange={handleInput}
        />

        <label htmlFor="collage">College</label>
        <input
          type="text"
          id="collage"
          name="collage"
          value={formData.collage}
          onChange={handleInput}
        />

        <button type="submit">Submit</button>
      </form>

      {error && <h2>{error}</h2>}

      {/* Popup */}
      {showPopup && submittedUser && (
        <div>
          <div>
            <h2>Registration Successful 🎉</h2>

            <p>
              <strong>Name:</strong> {submittedUser.userName}
            </p>

            <p>
              <strong>Email:</strong> {submittedUser.email}
            </p>

            <p>
              <strong>Address:</strong> {submittedUser.address}
            </p>

            <p>
              <strong>College:</strong> {submittedUser.collage}
            </p>

            <p>
              <strong>Password:</strong> {submittedUser.password}
            </p>

            <button onClick={closePopup}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
