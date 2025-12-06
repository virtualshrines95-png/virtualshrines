import { useState, useRef } from 'react'
import brcharles from './assets/brcharles.jpg'
import './App.css'
import Candle from './Candle'
import {HomeFooter} from './mycomponents'

const sname="brcharles";

function BrCharles() {
	return (
	    <>

	          <h1>St. Charles de Foucault </h1>
			  <h2>Pray for Us</h2>
	      <div>
	          <img src={brcharles} className="icon" alt="brcharles image" />
	        
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

export default BrCharles
