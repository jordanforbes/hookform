import React, { useState } from 'react';

const PersonForm =props=>{
    const[fName, setFname] = useState("");
    const[lName, setLname] = useState("");
    const[email, setEmail] = useState("");
    const[pWord,setPWord] = useState("");

    const addPerson=e=>{
        e.preventDefault();
        props.onNewPerson({fName,lName,email,pWord})
        setFname("");
        setLname("");
        setEmail("");
        setPWord("");
    }
}