import React, { Component } from 'react';
import { connect } from 'react-redux';


class App extends Component {

  state = {
    gifSearch: ''
  }

  componentDidMount() {
    console.log('compnent did mount');

  };

  // TODO -- DISPATCH TO SAGA 

  handleChange = (event) => {
    this.setState({
      gifSearch: event.target.value
    })
  }

  sendSearch() {
    this.props.dispatch({ type: 'POST_SEARCH', payload: this.state });
    this.props.dispatch({ type: 'FETCH_SEARCH' });
  }



  render() {
    console.log('This is redux state', this.props.reduxState)
    return (
      <div>
        <h1>Giphy Search!</h1>
        <input onChange={this.handleChange} type='text' placeholder='Search for a gif!' />
        <button onClick={(event) => this.sendSearch(event)}>SEARCH</button>
        <ul>
          {
            this.props.reduxState.searchReducer.map((gif, pos) => {
              return (
                <>
                  <img key={gif.pos} alt='Gif' src={gif.images.fixed_height_small.url} />
                </>
              )
            })
          }
        </ul>
      </div>
    );
  }

}

//export default App;
const putReduxStateOnProps = (reduxState) => ({
  reduxState
});

export default connect(putReduxStateOnProps)(App);