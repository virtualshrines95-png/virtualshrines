import { useState, useRef } from 'react'
import candle from './assets/candle.gif'
import unlit from './assets/unlitcandle.png'
import './Candle.css'
import { supabase } from './supabaseClient';


function Candle({cname}) {

	const [isActive, setIsActive] = useState(false);
	const timeoutRef = useRef(null);
	const [wasActive, setWasActive] = useState(sessionStorage.getItem(cname));
	
	const BURN_TIME = 10000; // how long in milliseconds the candle should burn


	
	const handleClick = (timeRemaining=BURN_TIME) => {

		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
		}
	
	setIsActive(true);
	if (wasActive==0) {
		sessionStorage.setItem(cname, (new Date()).getTime());
	}
	
	
	
	timeoutRef.current = setTimeout(()=> {
		sessionStorage.setItem(cname,0);
		setWasActive(0);
		setIsActive(false);


	}, timeRemaining);
	
	
	};
	

	if (wasActive!=0 && !isActive) {
		
		
		let d = (new Date()).getTime()-wasActive;
		console.log(d);
		if (d<BURN_TIME) {
			handleClick(BURN_TIME-d);
		}
		else {
			sessionStorage.setItem(cname,0);
			setWasActive(0);
			
		}
	}
	

	let myimage = unlit;
	if (isActive) {
		myimage=candle;

	}
	
	return (
		<button onClick={()=>handleClick()}>
		<img src={myimage} className="candle"/>
		</button>
	)
	
}




export default Candle
