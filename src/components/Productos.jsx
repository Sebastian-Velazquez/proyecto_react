import React from 'react'
import Mandalorian from '../assets/images/mandalorian.jpg'
import UserCantdad from './Apis/user/UserCantidad'
import ProductsCantidad from './Apis/product/ProductsCantidad'
import CategoriaCantidad from './Apis/product/CategoriaCantidad'
import CategoriaModelos from './Apis/product/CategoriaModelos'
import UltimoProducto from './Apis/product/UltimoProducto'


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
                                    <div class="text-xs font-weight-bold text-warning text-uppercase mb-1">Total de modelos
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
                <UltimoProducto/>

            {/* Content Row Last Movie in Data Base */}
            <div class="row">
                {/* Last Movie in DB */}
                
                {/* End content row last movie in Data Base */}

                {/* Genres in DB */}
                <div class="col-lg-6 mb-4">						
                    <div class="card shadow mb-4">
                        <div class="card-header py-3">
                            <h5 class="m-0 font-weight-bold text-gray-800">Modelos:</h5>
                        </div>
                                <CategoriaModelos/>
                    </div>
                </div>
            </div>
        </div>
        {/*End Content Row Top*/}

    </React.StrictMode>
  )
}

export default Productos
