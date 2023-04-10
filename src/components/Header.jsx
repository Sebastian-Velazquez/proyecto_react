import React from 'react' 

function Header() {
  return (
    <section> 
      
      <div className='sectionLogoIka'>
                <img src="./LogoIKA.png" alt="logoIKA" className='logoIka' />
              </div>
   
    
             <div>
                <img src="./banner.jpg" alt="banner" className='banner' />
              </div>
            
         <div className='header2'>   
         <br />    
           <div>
            <input placeholder="Buscar" type="search" className="input" name="search"/>
            </div>
            <br /><br />
            <div> <ul>
              <li><a href="/product/create">Crear Producto</a></li>
              <li><a href="/product/list">Todos los Productos</a></li>
              </ul>
            </div>
            <br />
            <div> 
              <ul>
            <li><a href="/users/login">Ingresá</a></li>
            <li><a href="/users/register">Registrate</a></li>
            <li><a href="/product/productCart">Carrito</a></li>
            <li><a href="/users/logout">Salir</a></li>
            </ul>
            </div>
         </div>
            
        

    </section>
    
    
    
  )
}

export default Header