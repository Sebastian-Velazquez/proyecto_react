import React, {Component} from 'react';

class ApiUsers extends Component {
    constructor(props){
        super(props);
        this.state = {
            apiUsuario: []
        }
    }
    apiCall(url, consecuencia){
        fetch(url)
            .then(response => response.json())
            .then(data => consecuencia(data))
            .catch( e => console.log(e))
           
    }
    componentDidMount(){
        console.log("me monté")
        this.apiCall("http://localhost:3001/api/users",this.mostrarUsuario)
    }
    mostrarUsuario = (data) =>{
        console.log(data)
        this.setState(
            {
                apiUsuario: data.users.map((imprimir , i) => imprimir = <p key={imprimir.name + i}> {imprimir.name} </p>
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
        if(this.state.apiUsuario == ""){
            contenido = <p>Cargando ...</p>
        }else{
            contenido = this.state.apiUsuario
        }
     return(
    <div>
        {contenido} contenido
    </div>
  )
}
}
export default ApiUsers