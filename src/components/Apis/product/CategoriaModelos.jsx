import React, { Component } from 'react'

class CategoriaModelos extends Component {

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
        console.log(data)
        this.setState(
            {
                    apiUsario: data.category_modelo.map( (imprimir, i) => imprimir =
                    <div class="card-body">
                        <div class="row">
                            <div class="col-lg-6 mb-4">
                                <div class="card bg-dark text-white shadow">
                                    {imprimir.tipo_de_modelo}
                            </div>
                        </div>
                    </div>
                </div>
                    )})}

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

export default CategoriaModelos







                //apiUsario: data.count_modelo
                /* apiUsario: data.users.map( (imprimir, i) => imprimir =  */

                /* <p key={imprimir.first_name + i}>Nombre: {imprimir.first_name}<br></br>
                    Apellido: {imprimir.last_name}<br></br>
                    {imprimir.email}
                    <img src={imprimir.image}></img>
                </p> */
                    /* console.log(imprimir.first_name + " Hola") */
                    /* ) */