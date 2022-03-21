import React, { useState } from 'react'


// Creating ThoughtForm for user to post new thoughts
const ThoughtForm = (props) => {

    const [thought, setThought] = useState('')


    // Prevents default for form
    const handleFormSubmit = (event) => {
    event.preventDefault()


    fetch("https://happy-thoughts-technigo.herokuapp.com/thoughts", {
        method: "POST",
        headers: {
        'Content-Type': "application/json",
        },
        body: JSON.stringify({ message: thought })
})
    .then((res) => res.json())
    .then((newThought) => props.setThoughts((thoughts) => [newThought, ...thoughts]))
}

    return (

        <form onSubmit={handleFormSubmit}>

            <input
            type="text"
            name="thought"
            onChange={event => setThought(event.target.value)}
            />
            
            <button type="submit">Submit</button>
        </form>
    )

    }


export default ThoughtForm