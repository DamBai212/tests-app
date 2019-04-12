import React, {Component} from 'react'

import Conference from './Conference'

class ConferenceContainer extends Component {

state = {
    conferences: null,
    conferenceDetail: null
}

componentDidMount() {
    fetch("https://cors-anywhere.herokuapp.com/dev.flexionmobile.com/internship/challenge/conferences/")
     .then(resp => resp.json())
     .then(resp => this.setState({conferences: resp.conferences}))
  }

  
  
  handleClick = (event) => {
    console.log(event.target.innerText)
    let conference = this.state.conferences.find(conference => conference.name === event.target.innerText)
        this.setState({conferenceDetail: conference});
        return conference
        
  }

render() {

    if(!this.state.conferences){
        return <div>Loading...</div>
    }

    return(
        <div>
            <h1>{this.state.conferences.map((conference, i) => <button key={i} onClick={this.handleClick}> {conference.name}</button>)}</h1>
            {this.state.conferenceDetail && <Conference conference={this.state.conferenceDetail}/> }
        </div>
    )
}

}

export default ConferenceContainer