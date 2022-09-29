import React from "react";
import SeasonDisplay from "./components/SeasonDisplay";
import Spinner from "./components/Spinner";
import Error from "./components/Error";

class App extends React.Component {
  state = { lat: null, errMsg: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errMsg: err.message })
    );
  }

  getContent(state){
    if(state.lat && !state.errMsg){
      return <SeasonDisplay lat={this.state.lat} />
    }
    if(!state.lat && state.errMsg){
      return <Error />
    }
    return <Spinner />
  }

  render() {
    return (
      <div className="app">
        {this.getContent(this.state)}
      </div>
    );
  }
}

export default App;
