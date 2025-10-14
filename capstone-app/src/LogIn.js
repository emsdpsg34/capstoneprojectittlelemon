import React from "react";

function LogIn() {
    return (
        <div id="login">
            <h1>Log In</h1>
            <form className="loginform">
                <fieldset>
                    <div>
                <label htmlFor="email">Email</label>
                <input type="email" name="email-li" id="email-li" required/>
                </div>
                <div>
                <label htmlFor="password">Enter your Password</label>
                <input type="password" name="password-li" id="password-li" min="3" max="8" required/>
                </div>
                <div>
                    <button type="submit">Log In</button>
                </div>
                </fieldset>
            </form>
            </div>
    );
}

export default LogIn;