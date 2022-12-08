import React, {Component} from "react";

class ErrorBoundry extends Component {
    constructor(props){
        super(props)
        this.state = {
            hasError: false
        }
    }
    componentDidCatch(error, info){
        this.setState({hasError: true})
    }

    render(){
        if (this.state.hasError){
            return <div>Ooops didnt work...</div>
        }
        else{
            return this.props.children;
        }
             
        
    }
}

export default ErrorBoundry;