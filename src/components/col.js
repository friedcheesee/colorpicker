// ColorPicker.js
import React, { useState } from 'react';

const ColorPicker = ({ colors }) => {
  const [showColors, setShowColors] = useState(false);
  const [selectedColor, setSelectedColor] = useState(null);

  const handleButtonClick = () => {
    setShowColors(!showColors);
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
    setShowColors(false);
  };

  return (
    
    <div style={{ textAlign: 'center', marginTop: '20vh' }}>
        <h1>Color Picker App</h1>
      <div style={{ display: 'inline-block',width :"500px", padding: '200px', borderRadius: '20px', backgroundColor: selectedColor || '#ecf0f1' }}>
        <h1 style={{ marginBottom: '20px' }}></h1>
        <button onClick={handleButtonClick} style={{ padding: '10px', backgroundColor: selectedColor || '#3498db', color: 'black', cursor: 'pointer', borderRadius: '5px' }}>
          {selectedColor ? `Selected Color: ${selectedColor}` : 'Pick a color'}
        </button>

        {showColors && (
          <div style={{ marginTop: '10px', position: 'relative', zIndex: 1 }}>
            {colors.map((color, index) => (
              <div
                key={index}
                onClick={() => handleColorClick(color)}
                style={{
                  display: 'inline-block',
                  width: '30px',
                  height: '30px',
                  backgroundColor: color,
                  margin: '0 5px',
                  cursor: 'pointer',
                  borderRadius: '5px',
                }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ColorPicker;
