import React from 'react'
import ProductList from './ProductsList'
import './Tabla.css'

function Tabla
    () {
  return (
    <div>
               <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4 ">
        <h2 style={{display:"flex" ,borderColor:"black", border:"black", justifyContent:"center" , Border:"3px" }}>Lista De Autos </h2>
        <div style={{display:"flex",justifyContent:"center", textAlign:"center", borderColor:"black"}}>
        <table>
            
            <thead>
                <tr>
                    <th>ID</th>
                    <th>MARCA</th>
                    <th>MODELO</th>
                    <th>PRECIO</th>
                    <th>DESCRIPCION</th>
                    <th>IMAGEN</th>
                </tr>
            </thead>
                <ProductList/>
            </table>
            
        </div>
        </div>
        </div>
    </div>
  )
}

export default Tabla
    