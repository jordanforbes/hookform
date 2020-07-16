import React, { useState } from 'react';

const Form=props=>{
    const{inputs, setInputs} = props;
    const[fnameError,setFnameError]= useState("");
    const[lnameError,setLnameError]= useState("");
    const[emailError,setEmailError]= useState("");
    const[pwordError,setPwordError]= useState("");
  console.log(props.inputs.password)
    const onChange=e=>{
        // handleFName();
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
    }
    const handleFname=e=>{
      setInputs({
        ...inputs,
        [e.target.name]: e.target.value
      })
      if(e.target.value.length < 2){
        setFnameError("First Name must have at least 2 characters")
      }
    }
  const handleLname = e => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value
    })
    if (e.target.value.length < 2) {
      setLnameError("Last Name must have at least 2 characters")
    }
  }
  const handleEmail = e => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value
    })
    
    if (e.target.value.length < 5) {
      setEmailError("Email must have at least 5 characters")
    }
  }

  const handlePword=e=>{
    setInputs({
      ...inputs,
      [e.target.name]:e.target.value
    })
    if(e.target.value !== props.inputs.confirmPassword){
      setPwordError("Passwords must match")
      console.log("passwords must match")
    }

  }

    // const handleFName=e=>{
    //     setFname(e.target.value);
    //     if(e.target.value.length < 2){
    //         setFnameError("first name must be at least 2 characters long")
    //     }
    // }
    return (
      <form>
          <div className="form-group">
            <label htmlFor="fName">First Name</label>
            <input onChange={handleFname} type="text" name="fName" />
            {
              fnameError ? 
            <p style={{color:'red'}}>{ fnameError }</p> :''
            }
          </div>
          <div className="form-group">
            <label htmlFor="lName">Last Name</label>
            <input onChange={handleLname} type="text" name="lName" />
            {
              lnameError ?
                <p style={{ color: 'red' }}>{lnameError}</p> : ''
            }
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input onChange={ handleEmail } type="text" name="email" />
            {
              emailError ?
            <p style={{ color: 'red' }}>{emailError}</p>:''
            }
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input onChange={ handlePword } type="password" name="password" />
            {
              pwordError ?
            <p style={{ color: 'red' }}>{pwordError}</p>:''
            }
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input onChange={onChange} type="password" name="confirmPassword" />
          </div>
      </form>
    );
}
export default Form;