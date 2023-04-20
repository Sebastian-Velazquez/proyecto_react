import React, {Component} from 'react';

class ApiProducts extends Component {
    constructor(props){
        super(props);
        this.state = {
            ApiProducts: []
        }
    }
    
    apiCall(){
        
        fetch("https:/catfact.ninja/fact")
            .then(res => res.json())
            .then(data => console.log(data.fact))
          
            /* .catch( e => console.log(e)) */
            
    }
   
    componentDidMount(){
        console.log("me monté")
        this.apiCall("http://localhost:3000/api/users",this.mostrarProducto)
    }
    mostrarProducto = (data) =>{
        console.log(data)
        this.setState(
            {
                ApiProducts: data.data.map((imprimir ,i) => imprimir = <p key={imprimir.first_name + i}></p>
                )
            }
        )
    }
    componentDidUpdate(){
        console.log("me actualicé")
    }
    render(){
        console.log("estoy renderizando")
        let contenido ;
        if(this.state.ApiProducts == ""){
            contenido = <p>Cargando ...</p>
        }else{
            contenido = this.state.ApiProducts
        }
     return(
    <div>
        {contenido} 
        
        <p>{this.state.data}</p>
    </div>
  )
}
}
export default ApiProducts









/* import React, {Component} from 'react';

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
export default ApiProducts */ 