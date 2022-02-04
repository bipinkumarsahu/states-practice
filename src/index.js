import react from "react";
import reactDom from "react-dom";


class App extends react.Component {

    constructor(props){
        super(props);
        this.state = {lat: null} //this is the only time when we allow direct assignment to a state

        window.navigator.geolocation.getCurrentPosition(
            (position)=>this.setState({lat: position.coords.latitude}),
            (error)=>this.setState({lat : error.message})
            );

       
    }
    

    render(){
       
        return <div>Latitude: {this.state.lat}</div>
    
    }
}

reactDom.render(<App />,document.querySelector("#root"));