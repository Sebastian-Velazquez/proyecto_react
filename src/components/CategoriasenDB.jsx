import React, {Component} from 'react';

//Importar nuestro componente
import Categorias from './Categorias';

class CategoriasenDb extends Component{
    constructor(){
        super()
        this.state ={
            categoriasList : []
        }
    }
    //Compomentes Ciclo de vida - Montar - Actualizar - Desmontar
    //Montaje
    componentDidMount(){
        fetch('/api/categorias')
        .then(respuesta =>{
            return respuesta.json()
        })
        .then(genres =>{
            //console.log(genres)
            this.setState({categoriasList: categorias.data})
        })
        .catch(error => console.log(error))

    }


    fondo(){
        let fondoCaja = document.querySelector('.fondoCaja');
        fondoCaja.classList.toggle('bg-secondary');
    }


    render(){
        return (
            <React.Fragment>
                {/*<!-- Genres in DB -->*/}
                <div className="col-lg-6 mb-4">						
                    <div className="card shadow mb-4 " >
                        <div className="card-header py-3">
                            <h6  onMouseOver = { () => this.fondo()}  className="m-0 font-weight-bold text-gray-800 titulo">Categorias</h6>
                        </div>
                        <div className="card-body fondoCaja">
                            <div  className="row">
                                {
                                    //console.log(this.state.genresList)
                                    this.state.categoriasList.map((categorias,index)=>{
                                        return  <Categorias  {...categorias}  key={index} />
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
    
    </React.Fragment>
    )
    }
}
export default GenresInDb;

<div class="col-lg-6 mb-4">						
                    <div class="card shadow mb-4">
                        <div class="card-header py-3">
                            <h5 class="m-0 font-weight-bold text-gray-800">Categorias</h5>
                        </div>
                        <div class="card-body">
                            <div class="row">
                                 <div class="col-lg-6 mb-4">
                                    <div class="card bg-dark text-white shadow">
                                        <div class="card-body">
                                            AUTOS
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 mb-4">
                                    <div class="card bg-dark text-white shadow">
                                        <div class="card-body">
                                            CAMIONETAS
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 mb-4">
                                    <div class="card bg-dark text-white shadow">
                                        <div class="card-body">
                                            CAMIONES
                                        </div>
                                    </div>
                                </div>
                                </div>
                        </div>
                    </div>
                </div>