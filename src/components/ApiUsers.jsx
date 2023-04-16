import React, {Component} from 'react';

class ApiUsers extends Component {
    constructor(props){
        super(props);
        this.state = {
            ApiUsuario: []
        }
    }
    apiCall(url , consecuencia){
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
                ApiUsuario: data.data.map((imprimir ,i) => imprimir = <p key={imprimir.first_name + i}></p>
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
        if(this.state.ApiUsuario == ""){
            contenido = <p>Cargando ...</p>
        }else{
            contenido = this.state.apiUsuario
        }
     return(
    <div>
        {contenido}
    </div>
  )
}
}
export default ApiUsers