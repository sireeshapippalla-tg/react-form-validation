import React from 'react'
import { useState } from 'react'



function RegistrationForm() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstNameError, setFirstNameError] = useState(false);
    const [laseNameError, setLastNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault()
        if (!firstName) {
            setFirstNameError(true);
        }
// sireeshapippalla-tg/react-form-validation
// git remote set-url origin https://github.com/sireeshapippalla-tg/react-form-validation.git
// git remote set-url origin git@github.com:sireeshapippalla-tg/react-form-validation.git
        // ssh -T sireeshapippalla-tg@github.com
        // SHA256:dBwAEh+NkkYVnm11ox0Jp7XKGcRaeFKlmuyALPPyldA psireesha@tekgurusolutions.com
        // ssh-keygen -t rsa -C "psireesha@tekgurusolutions.com"
        //ssh-keygen -t ed25519 -C "psireesha@tekgurusolutions.com"
        // pbcopy < ~/.ssh/id_rsa.pub
        // git remote set-url origin https://github.com/sireeshapippalla-tg/react-form-validation.git
// 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
if (!lastName) {
            setLastNameError(true);
        }
        if (!email) {
            setEmailError(true);
        }
        if (!password) {
            setPasswordError(true)
        }

        console.log(`Submitting form with 
        firstName = ${firstName}, 
        lastName = ${lastName} 
        email = ${email} and 
        password = ${password} `)
    }

    const handleFnameChange = (e) => {
        setFirstName(e.target.value)
        //console.log(e.target.value)
    }
    const handleLnameChange = (e) => {
        setLastName(e.target.value)
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }


    return (
        <div className='create-form'>
            <h1>Registration Form</h1>
            <form onSubmit={handleSubmit}>

                <label htmlFor='firstName'>First Name</label>
                <input className='input-group' type='text' value={firstName} id='firstName' name='firstName'
                    onChange={handleFnameChange} />
                {firstNameError ?
                    <span style={{ color: 'red' }}>Please enter a first name</span>
                    : ''}

                <label htmlFor='lastName'>Last Name</label>
                <input className='input-group' type='text' value={lastName} id='lastName' name='lastName'
                    onChange={handleLnameChange} />
                {laseNameError ? <span style={{ color: 'red' }}>Please enter a last name</span> : ''}



                <label htmlFor='email'>E-mail</label>
                <input className='input-group' type='email' value={email} id='email' name='email'
                    onChange={handleEmailChange} />
                {emailError ? <span style={{ color: 'red' }}>Please enter an email</span> : ''}


                <label htmlFor='password'>Password</label>
                <input className='input-group' type='text' value={password} id='password' name='password'
                    onChange={handlePasswordChange} />
                {passwordError ? <span style={{ color: 'red' }}>Please enter password</span> : ''}

                <div className='btn'>
                    <button type='submit'>Register</button>
                </div>

            </form>


        </div>
    )
}

export default RegistrationForm