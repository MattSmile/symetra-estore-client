import React, { useState } from 'react'

function Admin() {
  const [n, setN] = useState(0)
  const [discountCode, setDiscountCode] = useState('')

  const handleNChange = (event) => {
    setN(event.target.value)
  }

  const handleDiscountCodeChange = (event) => {
    setDiscountCode(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    // Submit the n and discount code to the server
  }

  return (
    <div>
      <h1>Admin Page</h1>
      <form onSubmit={handleSubmit}>
        <label>
          N:
          <input type="number" value={n} onChange={handleNChange} />
        </label>
        <label>
          Discount Code:
          <input
            type="text"
            value={discountCode}
            onChange={handleDiscountCodeChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default Admin
