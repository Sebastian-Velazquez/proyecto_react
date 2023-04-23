import React from 'react';
import Menu from './Menu'
import Productos from './Productos';
import Footer from './Footer';
import Banner from './Banner';
import Header from './Header';
import CategoriaModelos from './Apis/product/CategoriaModelos';
import UltimoProducto from './Apis/product/UltimoProducto';
import ProductList from './Apis/product/ProductsList';


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
		<ProductList/>
		</div>
		<Footer/>
		</div>
	</div>
		
    </React.Fragment>
);
}

export default App;
