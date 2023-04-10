import React from 'react' 

function Header() {
  return (
    <section> 
      
      <div>
                <img src="./LogoIKA.png" alt="logoIKA" className='logoIka' />
              </div>
    <br />
    
             <div>
                <img src="./banner.jpg" alt="banner" className='banner' />
              </div>
             
              
           <div>
            <input placeholder="Buscar" type="search" className="input" name="search"/>
            </div><br />
            <div>
              <li><a href="/product/create">Crear Producto</a></li>
              <li><a href="/product/list">Todos los Productos</a></li>
            <br />
            </div>
            <div>
            <li><a href="/users/login">Ingresá</a></li>
            <li><a href="/users/register">Registrate</a></li>
            <li><a href="/product/productCart">Carrito</a></li>
            <li><a href="/users/logout">Salir</a></li>
            </div>

            
        

    </section>
    
    
    
  )
}

export default Header