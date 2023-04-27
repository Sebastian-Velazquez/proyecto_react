import React, { Component } from 'react'
import Mandalorian from '../../../assets/images/mandalorian.jpg'

class UltimoProducto extends Component {

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
        this.apiCall("http://localhost:3001/api/products", this.mostrar)
    }
    

    mostrar = (data) =>{
    let ultimoProducto = data.product[data.product.length-1]
console.log(ultimoProducto)
        this.setState(
            {
                /* apiUsario: data.count */
                /* apiUsario: data.users.map( (imprimir, i) => imprimir =  */

                /* <p key={imprimir.first_name + i}>Nombre: {imprimir.first_name}<br></br>
                    Apellido: {imprimir.last_name}<br></br>
                    {imprimir.email}
                    <img src={imprimir.image}></img>
                </p> */
                    /* console.log(imprimir.first_name + " Hola") */
                    /* ) */
                apiUsario:  
                
                    <div class="col-lg-6 mb-4">
                    <div class="card shadow mb-4">
                        <div class="card-header py-3">
                            <h5 class="m-0 font-weight-bold text-gray-800">Ultimo Producto Agregado: {ultimoProducto.name}</h5>
                        </div>
                        <div class="card-body">
                            <div class="text-center">
                                <img class="img-fluid px-3 px-sm-4 mt-3 mb-4" src={ultimoProducto.image} alt=" Ultimo producto "/>
                            </div>
                            <p>{ultimoProducto.description}</p>
                            <a class="btn btn-danger" target="_blank" rel="nofollow" href="/">Ver detalles del producto</a>
                        </div>
                    </div>
                </div>
                
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

export default UltimoProducto