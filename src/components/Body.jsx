import React from 'react'

function Body() {
  return (
    <body>
      
    <div className="content-servicios">
        <div className="content-servicios__div">           
            <i className="fa fa-users ico"></i>
            <h2>Sobre IKA</h2>
            
            <p className="parrafo">Dinámica, profesionalismo y tecnología a su servicio. Orientados en la atención al cliente y en su satisfacción total.</p>
            <a href="#"><i className="fa fa-angle-right"></i> Conozcanos</a>
        </div>
        <div className="content-servicios__div">
            <i className="fa fa-car ico"></i>
            <h2>IKA Auto</h2>
       
            <p className="parrafo">Ika Plan te permite acceder a tu Auto 0KM totalmente en cuotas sin interés.</p>
            <a href="#"><i className="fa fa-angle-right"></i> Ver modelos</a>
        </div>
    </div>
    </body>
  )
}

export default Body