import { useState, useRef } from 'react'
import stfrancis from './assets/stfrancis.jpg'
import './App.css'
import Candle from './Candle'
import {HomeFooter} from './mycomponents'

const sname="stfrancis";

function StFrancis() {
	return (
	    <>

	          <h1>St. Francis of Assissi</h1>

	      <div>
	          <img src={stfrancis} className="icon" alt="stfrancis image" />
	        
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

export default StFrancis
