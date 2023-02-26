import React from 'react'

const loginPage = () => {
  return (
      <div className="box-form">
        <div className="left">
            <div className="overlay">
                <h1>Meal Planner</h1>
                <h2>Just try it</h2>

            </div>
        </div>
            <div className="right">
            <h5>Login</h5>
            <p>Don't have an account? <a href="#">Create Your Account</a> it takes less than a minute</p>
            <div className="inputs">
                <input type="text" placeholder="username" />
                <br />
                <input type="password" placeholder="password" />
            </div>

            <br /><br />

            <div className="remember-me--forget-password">

                <label>
                    <input type="checkbox" name="item" checked />
                    <span className="text-checkbox">Remember me</span>
                </label>
                <p>Forgot password?</p>
            </div>

            <br />
            <button type="submit">Sign In</button>
        </div>

    </div>
      
  )
}

export default loginPage
