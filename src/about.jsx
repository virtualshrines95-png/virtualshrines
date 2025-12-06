import { useState, useRef } from 'react';
import {NavLink} from "react-router";
import './App.css';




function About() {
	return (
		<>
		<Header />
		<h1> About Page </h1>

		</>
		)
}


function Header() {
	return (
		 
		<nav>
		<NavLink to="/" end>
		Home
		</NavLink>
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
          <button onClick={toggleDropdown} className="dropdown-toggle">
            Saints
          </button>
          {isOpen && (
            <div className="dropdown-content">
			<NavLink to = "/stterese" end>
			St. Terese
			</NavLink>
			<NavLink to = "/brcharles" end>
			Br. Charles
			</NavLink>
            </div>
          )}
        </div>
      );
    }


export default About
