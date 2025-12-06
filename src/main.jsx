import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import {BrowserRouter, Routes, Route} from "react-router";
import App from './App.jsx';
import StTerese from './stterese.jsx';
import BrCharles from './brcharles.jsx';
import Guadalupe from './guadalupe.jsx';
import SacredHeart from './sacredheart.jsx';



createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  	<Routes>  
		<Route index element = {<App />} />
		<Route path = "sacredheart" element = {<SacredHeart />} />
		<Route path = "stterese" element = {<StTerese />} />
		<Route path = "brcharles" element = {<BrCharles />} />
		<Route path = "guadalupe" element = {<Guadalupe/>} />
	</Routes>
  </BrowserRouter>
)
