import React from 'react'
import Conference from "./Conference";

const ConferenceList = ({conferences}) => {
return (
    <div className="container">
      <div className ="section">
      <ul>
        {conferences.map((conference, index) => <Conference key={index} conference={conference}/> )}
      </ul>
      </div>
    </div>
)
}

export default ConferenceList
