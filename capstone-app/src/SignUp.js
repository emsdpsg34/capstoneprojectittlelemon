import React from "react";

const SignUp = () => {
    return (
        <>
        <div>
            <h1>Sign Up</h1>
            <h2>Create your account!</h2>
        </div>
        <div className="sign-up">
            <form>
                <fieldset>
                    <div>
                    <label htmlFor="name-su">Name</label>
                    <input type="text" name="name-su" id="name-su" />
                    </div>
                    <div>
                        <label htmlFor="lastname-su">Last Name</label>
                        <input type="text" name="lastname-su" id="lastname-su" />
                    </div>
                    <div>
                        <label htmlFor="email-su">Email</label>
                        <input type="email" name="email-su" id="email-su" />
                    </div>
                    <div>
                        <label htmlFor="password-su">Create Password</label>
                        <input type="password" name="password-su" id="password-su" min="3" max="8" required />
                    </div>
                    <div>
                        <label htmlFor="password-su">Confirm Password</label>
                        <input type="password" name="confirm-pw" id="confirm-pw" min="3" max="8" required />
                    </div>
                    <div>
                        <button type="submit">Sign Up</button>
                    </div>
                </fieldset>
            </form>
        </div>
    </>
    )
}

export default SignUp;