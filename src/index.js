import react from "react";
import reactDom from "react-dom";


class App extends react.Component {

   
    state = {lat: null, errorMessage: null};

    render(){
        if(this.state.lat && !this.state.errorMessage)       
        return <div>Latitude: {this.state.lat}</div>

        if(!this.state.lat &&  this.state.errorMessage)       
        return <div>error: {this.state.errorMessage}</div>

        if(!this.state.lat && ! this.state.errorMessage)       
        return <div>Loading..</div>
    
    }

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            (position)=>this.setState({lat: position.coords.latitude}),
            (error)=>this.setState({errorMessage : error.message})
            );

    }

    componentDidUpdate(){
        console.log('Component updated')
    }
}

reactDom.render(<App />,document.querySelector("#root"));