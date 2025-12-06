import React, { useRef, useState } from 'react';

const ScrollingScriptGenerator = () => {
  const contentRef = useRef(null);
  const [scriptLines, setScriptLines] = useState([
    "Welcome to the script generator!",
    "Click the buttons to scroll the script.",
    "More content will be added below.",
  ]);

  // Function to add a new line to the script
  const generateNewLine = () => {
    const newLine = `Line ${scriptLines.length + 1}: Generated at ${new Date().toLocaleTimeString()}`;
    setScriptLines(prevLines => [...prevLines, newLine]);
  };

  // Function to scroll the content up or down
  const handleScrollButton = (direction) => {
    if (contentRef.current) {
      const scrollAmount = direction === 'down' ? 100 : -100; // Scroll by 100 pixels
      contentRef.current.scrollBy({
        top: scrollAmount,
        behavior: 'smooth' // Smooth scrolling animation
      });
    }
  };

  return (
    <div>
      <button onClick={generateNewLine}>Generate New Script Line</button>
      <button onClick={() => handleScrollButton('up')}>Scroll Up ⇑</button>
      <button onClick={() => handleScrollButton('down')}>Scroll Down ⇓</button>
      
      {/* Scrollable container */}
      <div
        ref={contentRef}
        style={{
          height: '200px', // Fixed height to enable vertical scrolling
          overflowY: 'auto', // Add vertical scrollbar when content overflows
          border: '1px solid #ccc',
          padding: '10px',
          marginTop: '10px',
        }}
      >
        {scriptLines.map((line, index) => (
          <p key={index} style={{ margin: 0, padding: '2px 0' }}>
            {line}
          </p>
        ))}
      </div>
    </div>
  );
};

export default ScrollingScriptGenerator;
