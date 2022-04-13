import React                        from 'react';
import ReactDOM                     from 'react-dom';
import {BrowserRouter}              from 'react-router-dom';
import './assets/css/index.css';
import {App}                        from './App';
import {Header}                     from './Components/Header/Header';
import {GlobalStyle}                from './Utils/globalStyle';
import reportWebVitals              from './Utils/reportWebVitals';
import {unregister as SWUnregister} from './serviceWorkerRegistration';
import {Footer}                     from './Components/Footer/Footer';


(() => {
	
	
	ReactDOM.render(
	  <GlobalStyle>
		  <Header/>
		  <BrowserRouter>
			  <App/>
		  </BrowserRouter>
		  <Footer/>
		  
	  </GlobalStyle>,
	  document.getElementById('root'),
	);
})();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
SWUnregister();