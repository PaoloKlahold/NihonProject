
import React, { useState } from 'react';
import './PopoverTextです.css';

const PopoverText = ({ text, popoverContent, position, acton = () => {}}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
	setIsHovered(true);
  };

  const handleMouseLeave = () => {
	setIsHovered(false);
  };

  return (
	<div className="popover-container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
	  <span onClick={acton} className="popover-text">{text}</span>
	  {isHovered && (
		<div className={`popover ${position}`}>
		  {popoverContent}
		</div>
	  )}
	</div>
  );
};

export default PopoverText;