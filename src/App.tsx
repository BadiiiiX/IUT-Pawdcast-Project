import * as React      from 'react';
import {Route, Routes} from 'react-router-dom';
import {Home}          from './Components/Home/Home';
import {Story}         from './Components/Story/Story';
import {Shop}          from './Components/Shop/Shop';
import {Item}          from './Components/Shop/Components/Item/Item';
import {List}          from './Components/Shop/Components/List/List';

export const App = () => {
	
	return (
	  <Routes>
		  <Route path="/"  element={<Home/>}/>
		  <Route path="/story" element={<Story/>}/>
		  <Route path="/shop" element={<Shop/>} />
		  <Route path="/shop/list" element={<List/>}/>
		  <Route path="/shop/:itemId" element={<Item/>}/>
	  </Routes>
	);
};