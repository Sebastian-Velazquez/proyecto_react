import React from 'react'
import Mandalorian from '../assets/images/mandalorian.jpg'
import UserCantdad from './Apis/user/UserCantidad'
import ProductsCantidad from './Apis/product/ProductsCantidad'
import CategoriaCantidad from './Apis/product/CategoriaCantidad'


function Productos() {
  return (
    <React.StrictMode>

        {/* Content Row Top */}
        <div class="container-fluid">
            <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 class="h3 mb-0 text-gray-800">Concecionaria</h1>
            </div>
        
            {/* Content Row Movies*/}
            <div class="row">

                {/* Movies in Data Base */}
                <div class="col-md-4 mb-4">
                    <div class="card border-left-primary shadow h-100 py-2">
                        <div class="card-body">
                            <div class="row no-gutters align-items-center">
                                <div class="col mr-2">
                                    <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">Productos</div>
                                    <div class="h5 mb-0 font-weight-bold text-gray-800"><ProductsCantidad/></div>
                                </div>
                                <div class="col-auto">
                                    <i class="fas fa-film fa-2x text-gray-300"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Total awards */}
                <div class="col-md-4 mb-4">
                    <div class="card border-left-success shadow h-100 py-2">
                        <div class="card-body">
                            <div class="row no-gutters align-items-center">
                                <div class="col mr-2">
                                    <div class="text-xs font-weight-bold text-success text-uppercase mb-1"> Total Usuarios</div>
                                    <div class="h5 mb-0 font-weight-bold text-gray-800"> <UserCantdad/> </div>
                                </div>
                                <div class="col-auto">
                                    <i class="fas fa-award fa-2x text-gray-300"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Actors quantity */}
                <div class="col-md-4 mb-4">
                    <div class="card border-left-warning shadow h-100 py-2">
                        <div class="card-body">
                            <div class="row no-gutters align-items-center">
                                <div class="col mr-2">
                                    <div class="text-xs font-weight-bold text-warning text-uppercase mb-1">Total de categorias
                                    </div>
                                    <div class="h5 mb-0 font-weight-bold text-gray-800"> <CategoriaCantidad/> </div>
                                </div>
                                <div class="col-auto">
                                    <i class="fas fa-user fa-2x text-gray-300"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End movies in Data Base */}
            

            {/* Content Row Last Movie in Data Base */}
            <div class="row">
                {/* Last Movie in DB */}
                <div class="col-lg-6 mb-4">
                    <div class="card shadow mb-4">
                        <div class="card-header py-3">
                            <h5 class="m-0 font-weight-bold text-gray-800">Ultimo Producto</h5>
                        </div>
                        <div class="card-body">
                            <div class="text-center">
                                <img class="img-fluid px-3 px-sm-4 mt-3 mb-4" src={Mandalorian} alt=" Star Wars - Mandalorian "/>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, consequatur explicabo officia inventore libero veritatis iure voluptate reiciendis a magnam, vitae, aperiam voluptatum non corporis quae dolorem culpa citationem ratione aperiam voluptatum non corporis ratione aperiam voluptatum quae dolorem culpa ratione aperiam voluptatum?</p>
                            <a class="btn btn-danger" target="_blank" rel="nofollow" href="/">View movie detail</a>
                        </div>
                    </div>
                </div>
                {/* End content row last movie in Data Base */}

                {/* Genres in DB */}
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
            </div>
        </div>
        {/*End Content Row Top*/}

    </React.StrictMode>
  )
}

export default Productos
