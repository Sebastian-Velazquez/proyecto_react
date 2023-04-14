import React, {Component} from 'react';

class ApiProducts extends Component {
    state ={
        usersList: [],
    }
    componentDidMount(){
        fetch("")
        .then((r) => r.json())
        .then((respuesta) => {
            this.setState({ usersList: respuesta.data })
        })
        .catch((error) => console.log(error));
    }
    render(){
     return(
    <div>
        <tbody>
            {this.state.productsList.map((users, index) => {
                return <p></p>
            })}
        </tbody>
    </div>
  )
}
}
export default ApiProducts