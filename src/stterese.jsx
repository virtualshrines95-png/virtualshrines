import terese from './assets/Teresa-de-Lisieux.jpg'
import './App.css'
import Candle from './Candle'
import {HomeFooter} from './mycomponents'

const sname="stterese";

function StTerese() {
	return (
	    <>
	
	          <h1>St. Th&eacute;r&egrave;se of Lisieux</h1>

	        <div>
	          <img src={terese} className="icon" alt="terese image" />
	        
	        </div>
	

		  
		
	      <div>
		  <Candle cname={"candle1"} sname={sname} />
		  <Candle cname={"candle2"} sname={sname}/>
		  <Candle  cname={"candle3"} sname={sname}/>
		  <Candle cname={"candle4"} sname={sname}/>
		  <Candle cname={"candle9"} sname={sname}/>
		  </div>

		  <div>

		  <Candle cname={"candle5"} sname={sname} />
		    <Candle cname={"candle6"} sname={sname} />
		  <Candle cname={"candle7"} sname={sname} />
		    <Candle cname={"candle8"} sname={sname} />
		    <Candle cname={"candle10"} sname={sname}/>
		  </div>
		  

		  <HomeFooter />




	    
	    </>
	  )
	}

export default StTerese

