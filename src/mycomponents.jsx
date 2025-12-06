import homebutton from "./assets/arrow.png";
import {NavLink} from "react-router";
import './mycomponents.css'


export function Home() {
	return (
		<nav>
		<NavLink to="/"  end>
		<img src={homebutton} className="homebutton" />
		</NavLink>
		</nav>
	)
}

export function HomeFooter() {
	return (
		<div className="homefooter">
		<Home />
		</div>
	)
}

export function Footer(props) {
	return (
		  <div className='footer'>
		  <div className="homediv">
		  <Home />
		  </div>
		  <div className='messagediv'>
		  <MessageButton scrollOn={props.scrollOn} onDataReceived={()=>props.onDataReceived()} />
		</div>
		</div>
		
	)
	
}


export function Header() {
	return (
		 <div className="header">
		<nav>
		<NavLink to="/"  end>
		<img src={homebutton} className="homebutton" />
		</NavLink>
		<DropdownMenu/>
		</nav>
		</div>
	
	)
}



export const MarqueeComponent = ({scrollOn, duration, children }) => {
     
	const messageTranslate='-'+(7*duration+300).toString()+'%';

	 return (


          <div className="marquee-container" style={{ overflow: 'hidden' }}>
            <div
              className="marquee-content"
              style={{ animationPlayState: scrollOn? 'running' : 'paused',
				visibility: scrollOn? 'visible' : 'hidden',
				animationDuration: `${duration}s`,
				'--finaltranslate': messageTranslate
			   }}
            >
              {children}
            </div>
          </div>

      );
    };



export function MessageButton(props) {
   
	
	 let buttonlabel = "Receive a message";
	if (props.scrollOn) {
		buttonlabel="Sending message";
	}
	
	return (
	   <button className = 'messagebutton' onClick={()=>props.onDataReceived()}>
				{buttonlabel}
	   </button>
	)
	
}
