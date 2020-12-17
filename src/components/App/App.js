import React, { Component } from 'react';


class App extends Component {

  state = {
    gifSearch: ''
  }

  // TODO -- DISPATCH TO SAGA 

  handleChange = (event) => {
    this.setState({
      gifSearch: event.target.value
    })
  }

  render() {
    return (
      <div>
        <h1>Giphy Search!</h1>
        <input onChange={this.handleChange} type='text' placeholder='Search for a gif!' />
      </div>
    );
  }

}

export default App;
