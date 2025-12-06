import { useState, useRef } from 'react';
import {NavLink} from "react-router";
import './App.css';

	  
function App() {


	return (
		<>
		<h1> Virtual Shrines </h1>
		<SaintsDropdown />
	<p>
	This site contains virtual prayer spaces which you can visit and 
	where you can light a candle.
	You can select a shrine from the drop down menu by clicking 
	the "Select a Shrine" button above.
	</p>
	<p>
	At the shrine you can light a candle by clicking on the candle you 
	wish to light. Feel free
	to stay awhile and say a prayer after lighting the candle.  
	The candle will "burn" for one hour (even if you leave the site)
	and then be extinguished.
	</p>
	<p>
	If you would like to leave a prayer request with me 
	<a href="mailto:virtualshrines95@gmail.com"> send me an email.</a>
	</p>

		</>
		)
}




export function SaintsDropdown() {
	return (

	<nav>
	<DropdownMenu/>
	</nav>
	
	)
}

function DropdownMenu() {
      const [isOpen, setIsOpen] = useState(false);

      const toggleDropdown = () => {
        setIsOpen(!isOpen);
      };

      return (
        <div className="dropdown">
          <button onClick={toggleDropdown} className="bbgradient">
            Select a Shrine
          </button>
          {isOpen && (
            <div className="dropdown-content">
			<NavLink to = "/sacredheart" end>
			Sacred Heart
			</NavLink>
			<NavLink to = "/stterese" end>
			St. Terese
			</NavLink>
			<NavLink to = "/brcharles" end>
			Br. Charles
			</NavLink>
			<NavLink to = "/guadalupe" end>
			Our Lady of Guadalupe
			</NavLink>
			<NavLink to = "/francis" end>
			St. Francis of Assisi
			</NavLink>
            </div>
          )}
        </div>
      );
    }


	
	
export default App


