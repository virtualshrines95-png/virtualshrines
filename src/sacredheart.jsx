import sacredheart from './assets/sacredheart2.gif'
import './App.css'
import Candle from './Candle'
import {Footer, MessageButton, MarqueeComponent} from './mycomponents'
import { useState, useRef } from 'react'




const sname="sacredheart";
const messageLength=130;

const Message =  () => {
	return ( <>
		<span>	"Do not let your hearts be troubled.
		</span>
		<HSpace />
		<span> You have faith in God; have faith also in me.
		</span>
		<HSpace  />
		<span>In my Father's house there are many dwelling places.</span>
		<HSpace  />
		<span>If there were not, would I have told you that I am going to prepare a place for you? </span>
		<HSpace  />
		<span>And if I go and prepare a place for you, I will come back again and take you to myself,</span>
		<span> so that where I am you also may be.</span>
		<HSpace  />
		<span>Where I am going you know the way."</span>
		<HSpace /><HSpace />
		</>
	)
}

function HSpace() {

		return ( <span> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>);
	
	
}




function SacredHeart() {
	
	const [marqueeOn, setMarqueeOn] = useState(false);
	const timeoutRef = useRef(null);

	const handleMessageButton = () => {

		if (timeoutRef.current) {
				clearTimeout(timeoutRef.current);
			}

		
	  if (!marqueeOn ) {

		timeoutRef.current = setTimeout(()=> {
			setMarqueeOn(false);
		}, messageLength*1000);
		
		setMarqueeOn(true);
		
		
	  }

	};
	
	
	return (
	    <>

	          <h1>Sacred Heart of Jesus</h1>
			  <h2>We Trust in You</h2>
	      <div className="iconcontainer">
	          <img src={sacredheart} className="messageicon" alt="sacred heart" />
	        


		<MarqueeComponent scrollOn={marqueeOn} duration={messageLength}>
		<Message />
		</MarqueeComponent>
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
		 <Footer  scrollOn={marqueeOn}  onDataReceived={handleMessageButton} />
	    
	    </>
	  )
	}

export default SacredHeart
