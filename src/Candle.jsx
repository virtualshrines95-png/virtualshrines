import { useState, useRef, useEffect } from 'react'
import candle from './assets/candle.gif'
import unlit from './assets/unlitcandle.png'
import './Candle.css'
import { supabase } from './supabaseClient';
import {preload} from 'react-dom';


function Candle({cname, sname}) {

	preload('./assets/candle.gif', {as : "image"});
	const [isActive, setIsActive] = useState(false);
	const timeoutRef = useRef(null);
	const [wasActive, setWasActive] = useState(0);
	
	const BURN_TIME = 3600000; // how long in milliseconds the candle should burn

	useEffect(()=>{reactivate();},[]);

	
	const reactivate = async () => {
		const { data, error } = await supabase.from('ShrineCandles')
			.select(cname)
			.eq('name',sname)
			.single();
		   if (error) console.error('Error fetching candle time', error);
		   else {
			setWasActive(data[cname]);}

		  };
		  
	const updateCandleStatus = async (newTimeStamp) => {

		    // Use the 'from' method to specify the table, 'update' to provide new data,
		    // and 'eq' to filter which row to update based on its ID.
		    const { data, error } = await supabase
		      .from('ShrineCandles') // Replace 'todos' with your table name
		      .update({[cname]: newTimeStamp }) // Object with the column(s) to update and their new value(s)
		      .eq('name', sname) // Filter the row where the 'id' column matches the provided ID
		      .select(); // Optional: use select() to return the updated data (recommended in v2 of the JS SDK)

		    if (error) {
		      console.error('Error updating candle status:', error);
		    } else {
		      console.log('Candle status updated:', data);
		      // You might want to update local state here to reflect the change in the UI
		    }
		  };
		  
	const increaseCandleCount = async () => {
		const { data, error } = await supabase.from('ShrineCandles')
			.select('candles_lit')
			.eq('name',sname)
			.single();
		   if (error) console.error('Error fetching candle times lit', error);
		   else {
			console.log(data.candles_lit);
		}
		let times = data.candles_lit+1;

		await supabase.from('ShrineCandles') 
		  .update({ candles_lit: times}) // Object with the column(s) to update and their new value(s)
		  .eq('name', sname) // Filter the row where the 'id' column matches the provided ID
		  .select(); // Optional: use select() to return the updated data (recommended in v2 of the JS SDK)

		if (error) {
		  console.error('Error updating number of times lit', error);
		} else {
		  console.log('number of times updated increased', data);
		  // You might want to update local state here to reflect the change in the UI
		}
	}
		  
	const handleClick = (timeRemaining=BURN_TIME) => {

		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
		}
	
		setIsActive(true);
		if (wasActive==0) {
			updateCandleStatus((new Date()).getTime());
			increaseCandleCount(); //update number of times candle lit
			
		}
	
	
	
	timeoutRef.current = setTimeout(()=> {
		updateCandleStatus(0);
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
			updateCandleStatus(0);
			setWasActive(0);
			
		}
	}
	

	let myimage = unlit;
	if (isActive) {
		myimage=candle;

	}
	
	return (
		<button className="candlebutton" onClick={()=>handleClick()}>
		<img src={myimage} className="candle"/>
		</button>
	)
	
}




export default Candle
