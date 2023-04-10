import React from 'react' 

function Header() {
  return (
    <section> 
      
    <div>Header
    </div><br />
        <div>
      <button className='button-burger'>
      </button ><br />
            <div>
            <i className="fa-sharp fa-solid fa-bars lista-hamburguesa"> Lista hamburguesa </i>
            </div><br />
           <div>
            <input placeholder="Buscar" type="search" className="input" name="search"/>
            </div><br />
            <div>
              <li><a href="/product/create">Crear Producto</a></li>
              <li><a href="/product/list">Todos los Productos</a></li>
            <br />
            </div>
            <div>
            <li><a href="/users/logout">Salir</a></li>
            <li><a href="/users/register">Registrate</a></li>
            <li><a href="/users/login">Ingresá</a></li>
            <li><a href="/product/productCart">Carrito</a></li>
            </div>
        </div>

    </section>
    
    
    
  )
}

export default Header