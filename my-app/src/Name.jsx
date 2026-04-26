import React, { useState } from 'react'

export default function Name() {
    // let user = "Nithin";

    let[user, setName] = useState("Nithin");
    const change = () => {
        setName("Gamana");
    }
    return (
        <div>
           <h1>Hello {user}</h1>
           <button onclick={change}>Change name</button>
        </div>
    )
}