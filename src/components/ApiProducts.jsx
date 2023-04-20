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
    <div>
        <tbody>
            {this.state.productsList.map((products, index) => {
                return <p></p>
            })}
        </tbody>
    </div>
  )
}
}
export default ApiProducts