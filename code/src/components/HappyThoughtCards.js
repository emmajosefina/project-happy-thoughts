import React, { useState, useEffect } from 'react'
import ThoughtForm from './ThoughtForm'

// Creating HappyThoughtsCards, fetching thoughts data
const HappyThoughtCards = () => {
    const [thoughts, setThoughts] = useState([])

    useEffect (() => {
        fetch("https://happy-thoughts-technigo.herokuapp.com/thoughts")
        .then(res => res.json())
        .then(thoughts => setThoughts(thoughts))
}, [])

console.log('thoughts', thoughts)
console.log('setThoughts', setThoughts)

// Adding ThoughtForm, getting all the latest thoughts through mapping
return (

    <>
    <ThoughtForm setThoughts={setThoughts} />

<div className="thought-container">
    {thoughts.map(thought => (
        <section className="thought-box" key={thought._id}>
                <p>
                    {thought.message}
                </p>

            <div className="details-wrapper">

            <div>
                <button className={(thought.hearts === 0 ? "heart-btn" : "heart-btn red-heart-btn")} type="submit">
                <span role="img" aria-label="heart icon">❤️</span>
                </button>

                <p className="likes">X {thought.hearts}</p>
            </div>
            </div>
        
        </section>
                 ))}
    </div>
</>
)    
}

export default HappyThoughtCards
