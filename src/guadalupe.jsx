import guadalupe from './assets/guadalupe2.jpg'
import './App.css'
import Candle from './Candle'
import {Footer, MessageButton, MarqueeComponent} from './mycomponents'
import { useState, useRef } from 'react'




const sname="guadalupe";
const messageLength=80;

const Message =  () => {
	return ( <>
		<span>	"Listen, put it in your heart, my child, to what I tell you now...
		</span>
		<HSpace /><HSpace />
		<span> Do not be frigthend or afflicted by anything.
		</span>
		<HSpace  />
		<span>Do not fear any illness or pain. </span>
		<HSpace  />
		<span>Am I not here, who am your mother? </span>
		<HSpace  />
		<span>Are you not in the folds of my mantel? </span>
		<HSpace />
		<span> Am I not life and health? </span>
		<HSpace  />
		<span>Are you not on my lap and under my care? </span>
		<HSpace  />
		<span>Do you need anything else?"</span>
		<HSpace /><HSpace />
		</>
	)
}

function HSpace() {

		return ( <span> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>);
	
	
}




function Guadalupe() {
	
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

	          <h1>Our Lady of Guadalupe</h1>
			  <h2>Pray for Us</h2>
	      <div className="iconcontainer">
	          <img src={guadalupe} className="messageicon" alt="mary" />
	        


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

export default Guadalupe

