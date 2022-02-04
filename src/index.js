import react from "react";
import reactDom from "react-dom";


class App extends react.Component {

    constructor(props){
        super(props);
        this.state = {lat: null, errorMessage: null} //this is the only time when we allow direct assignment to a state

        window.navigator.geolocation.getCurrentPosition(
            (position)=>this.setState({lat: position.coords.latitude}),
            (error)=>this.setState({errorMessage : error.message})
            );

       
    }
    

    render(){
        if(this.state.lat && !this.state.errorMessage)       
        return <div>Latitude: {this.state.lat}</div>

        if(!this.state.lat &&  this.state.errorMessage)       
        return <div>error: {this.state.errorMessage}</div>

        if(!this.state.lat && ! this.state.errorMessage)       
        return <div>Loading..</div>
    
    }
}

reactDom.render(<App />,document.querySelector("#root"));