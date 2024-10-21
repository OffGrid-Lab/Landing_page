import React from 'react'

type Props = {}

const ForgotPassword = (props: Props) => {
  return (
    <div>
        <h1>Forgot Password</h1>
        <p>Please enter your email address to reset your password.</p>
        <form>
          <label>Email Address:</label>
          <input type="email" required />
          <button type="submit">Reset Password</button>
        </form>
      <p></p>
    </div>
  )
}


export default ForgotPassword