import React from 'react';
import Logo from '../assets/images/logo-DH.png'
import Jordan from '../assets/images/jordan-walke.png'
import Mandalorian from '../assets/images/mandalorian.jpg'
import Menu from './Menu'
import Productos from './Productos';
import Footer from './Footer';
import Banner from './Banner';
import Header from './Header';
import User from './Apis/user/UserCantidad';
import ProductsCantidad from './Apis/product/ProductsCantidad';
import CategoriaCantidad from './Apis/product/CategoriaCantidad';

function App() {
	return (
    <React.Fragment>
    <div id="wrapper">
    <Menu/>
	<div id="content-wrapper" class="d-flex flex-column">
		<div id="content">
		<Header/>
		<Banner/>
		<Productos/>
		</div>
		<Footer/>
		</div>
	</div>
    </React.Fragment>
);
}

export default App;
