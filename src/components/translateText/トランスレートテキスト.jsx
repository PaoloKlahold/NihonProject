import React, { useState } from 'react';
import './トランスレートテキストです.css';

/**Translated Text */
const トランスレートテキスト = ({ defaultText, translatedText }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <span
      className="translated-text"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered ? translatedText : defaultText}
    </span>
  );
};

export default トランスレートテキスト;
