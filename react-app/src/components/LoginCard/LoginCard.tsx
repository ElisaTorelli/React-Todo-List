import React, { useState } from 'react'
import styles from '../LoginCard/loginCard.module.css'


const LoginCard = () => {

    //set LoginCard state for error message
    const [errorMessage, setErrorMessage] = useState({});
    // set LoginCard state for successfully submitted or not
    const [isSubmitted, setIsSubmitted] = useState(false);


    return (
        <div className={styles.cardContainer}>
            <form>
                <div className={styles.userInput}>
                    <label>Username</label>
                    <input type="text" name="uname" placeholder='Username' required />
                    {/* {displayErrorMessage('uname')} */}
                </div>
                <div className={styles.passwordInput}>
                    <label>Password</label>
                    <input type="text" name="uname" placeholder='Password' required />
                    {/* {displayErrorMessage('pass')} */}
                </div>
                <div className={styles.signInBtn}>
                    <input type="submit" value="Sign In"/>
                </div>
                <div className={styles.signUpBtn}>
                    <input type="submit" value="Sign Up"/>
                </div>
            </form>
        </div>
    )
}

export default LoginCard