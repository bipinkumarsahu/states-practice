import react from "react";
import reactDom from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";


class App extends react.Component {

   
    state = {lat: null, errorMessage: null};

     renderContent() {

        if(this.state.lat && !this.state.errorMessage)       
        return <SeasonDisplay lat={this.state.lat} />

        if(!this.state.lat &&  this.state.errorMessage)       
        return <div>error: {this.state.errorMessage}</div>

        if(!this.state.lat && ! this.state.errorMessage)       
        return <Spinner message=" Please Allow  Location when propmpted"/>

    }

    render(){
        return(<div >
        {this.renderContent()}
    </div>);
    
    }

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            (position)=>this.setState({lat: position.coords.latitude}),
            (error)=>this.setState({errorMessage : error.message})
            );

    }

   
}

reactDom.render(<App />,document.querySelector("#root"));