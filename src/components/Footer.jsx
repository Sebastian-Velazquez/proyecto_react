import React from 'react'

function Footer() {
  return (
    <footer>
    <div class="content-servicios__div-footer">
        <i class="fa fa-globe ico"></i>
        <h2>Donde estamos?</h2>
        <p class="direccion">Nos puede encontrar en Lavalle 1101 | Ezquina Cerrito - Frente al Obelisco, Ciudad de Buenos Aires, Argentina</p>
    
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.0168878895347!2d-58.38375908524316!3d-34.603734465005004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4aa9f0a6da5edb%3A0x11bead4e234e558b!2sObelisco!5e0!3m2!1ses!2sar!4v1678333330051!5m2!1ses!2sar" 
    allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
    </iframe>

    <ul classname="wrapper">
        <li classname="icon facebook">
            <span classname="tooltip"><a href="https://www.facebook.com/" target="_blank"></a>Facebook</span>
            <span><i classname="fab fa-facebook-f"></i></span>
        </li>
        <li classname="icon whatsapp">
            <span classname="tooltip"><a href="https://web.whatsapp.com/" target="_blank"></a>Whatsapp</span>
            <span><i classname="fab fa-whatsapp"></i></span>
        </li>
        <li classname="icon instagram">
            <span classname="tooltip"><a href="https://www.instagram.com/" target="_blank"></a>Instagram</span>
            <span><i classname="fab fa-instagram"></i></span>
        </li>
    </ul>
    </div>
    <div classname="div-footer-derechos">
        <button classname="button-footer">
            <div classname="text">
                <span>Volver</span>
                <span>arriba</span>
            </div>
            <div classname="clone">
                <span>Volver</span>
                <span>arriba</span>
            </div>
            
            <svg width="20px" xmlns="http://www.w3.org/2000/svg" classname="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
        </button>
        <p classname="copy-footer">- 2023 Concesionaria Torino - Todos los derechos reservados</p>
        <span classname="copy-footer">
            Pagina Web realizada por 
            <span classname="creators">
                <p>~ Franco Sanchez</p>
                <p>~ Thomás Manzone</p>
                <p>~ Nico Abdala</p>
                <p>~ Mauro Sanchez</p>
                <p>~ Sebastian Velazquez</p>
            </span>
        </span>
    </div>
    </footer>
  )
}

export default Footer