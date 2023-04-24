import React, { Component } from 'react'

class UserLogin extends Component {

    constructor(props){
        super(props);
        this.state = {
            apiUsario: []
        }
    }

    apiCall(url, consecuecia){
        fetch(url)
            .then( response =>  response.json())
            .then( data=> consecuecia(data))
            .catch( e => console.log(e))
    }

    componentDidMount(){
        console.log("Me monte!") /** https://api.giphy.com/v1/gifs/random?api_key=lp7wQ6914aPRmDI6HePRPpQeZXyxLFkU&tag=&rating=G */
        this.apiCall("http://localhost:3001/api/users", this.mostrar)
    }

    mostrar = (data) =>{
        console.log(data)
        this.setState(
            {

                apiUsario: 
                /* apiUsario: data.users.map( (imprimir, i) => imprimir =  */

                /* <p key={imprimir.first_name + i}>Nombre: {imprimir.first_name}<br></br>
                    Apellido: {imprimir.last_name}<br></br>
                    {imprimir.email}
                    <img src={imprimir.image}></img>
                </p> */
                    /* console.log(imprimir.first_name + " Hola") */
                    /* ) */
                    <li class="nav-item dropdown no-arrow">
                <a class="nav-link dropdown-toggle" href="/" id="userDropdown">
                    <span class="mr-2 d-none d-lg-inline text-gray-600 small">{data.users[0].name}</span>
                    <img class="img-profile rounded-circle" src={data.users[0].image} alt="Jordan Walke - Creador de React" width="60"/>
                </a>
            </li>
                
            }
        )
    }

    componentDidUpdate(){
        console.log("Me actualicé")
    }

    render(){
        console.log("estoy renderizando");
        /* por si la api esta cargando todavia */
        let contenido;
        if(this.state.apiUsario == ""){
            contenido = <p>Cargando...</p>
        }else{
            contenido = this.state.apiUsario
        }
    return (
        <div>
            {contenido}
        </div>
        )
    }

}

export default UserLogin