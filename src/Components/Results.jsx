import React from 'react';

const Results=props=>{
    const { fName, lName, email, password, confirmPassword } = props.data;
    return(
        <div>
            <h2>Results</h2>
            <p>First Name: {fName}</p>
            <p>Last Name: {lName}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Confirm Password: {confirmPassword}</p>
        </div>
    )
}

export default Results;