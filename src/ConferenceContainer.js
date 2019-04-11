import React, {Component} from 'react'
import ConferenceList from './ConferenceList';
// import Conference from './Conference'

class ConferenceContainer extends Component {

state = {
    conferences: [],
    conferenceDetail: []
}

componentDidMount() {
    fetch("https://cors-anywhere.herokuapp.com/dev.flexionmobile.com/internship/challenge/conferences/")
     .then(resp => resp.json())
     .then(resp => this.setState({conferences: resp.conferences}))
  }

  
  
  handleClick = (event) => {
    console.log(event)
    let conference = this.state.conferences.find(conference => conference.name === 
        event.target.value)
        this.setState({conferenceDetail: conference});
        return conference
        
  }

render() {

    return(
        <div>
            <h1>{this.state.conferences.map(conference => <button onClick={this.handleClick}> {conference.name}</button>)}</h1>
            <ConferenceList conferences={this.state.conferences} conferenceDetail = {this.state.conferenceDetail}/>
            
        </div>
    )
}

}

export default ConferenceContainer