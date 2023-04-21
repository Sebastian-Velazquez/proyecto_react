import React from 'react';
import Logo from '../assets/images/logo-DH.png'
import Jordan from '../assets/images/jordan-walke.png'
import Mandalorian from '../assets/images/mandalorian.jpg'
import Menu from './Menu'
import Productos from './Productos';
import Footer from './Footer';
import Banner from './Banner';
import Header from './Header';

function App() {
  return (
    <React.Fragment>

      <div id="wrapper">

      <Menu/>

		{/* Content Wrapper */}
		<div id="content-wrapper" class="d-flex flex-column">

			{/* Main Content */}
			<div id="content">
			<Header/>
			<Banner/>

			<Productos/>
			</div>
			{/* End of MainContent */}


			<Footer/>

		</div>
		{/* End of Content Wrapper */}

	</div>

        
    </React.Fragment>
  );
}

export default App;
