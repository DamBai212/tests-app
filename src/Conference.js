import React from 'react'

const Conference = ({conference}) => {
    return (
        <div className="row">
            <h1>{conference.name}</h1>
            
            <ul>
            <h5>Date:{conference.date}</h5>
            <h3>Speakers</h3>
             {conference.speakers.map(speaker => (<ul key={speaker}>{speaker}</ul>))}
            </ul>
            
        </div>
    )
}

export default Conference