import React, {Component} from 'react';

class ApiProducts extends Component {
    state ={
        productsList: [],
    }
    componentDidMount(){
        fetch("")
        .then((r) => r.json())
        .then((respuesta) => {
            this.setState({ productsList: respuesta.data })
        })
        .catch((error) => console.log(error));
    }
    render(){
     return(
    <div>ApiProducts</div>
  )
}
}
export default ApiProducts