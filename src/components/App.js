import React from 'react';
import Menu from './Menu'
import Productos from './Productos';
import Footer from './Footer';
import Banner from './Banner';
import Header from './Header';
import CategoriaModelos from './Apis/product/CategoriaModelos';


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
