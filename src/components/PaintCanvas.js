import React from 'react';
import { ReactPainter } from 'react-painter';
import './PaintCanvas.css';



const PaintCanvas = () => (
  
  <ReactPainter
  
  width={1200}
  height={850}
  onSave={blob => console.log(blob)}
  render={({ triggerSave, canvas }) => (

    <div className='Canvas' >
        <button className='save' onClick={triggerSave}>SAVE</button>
        <div>{canvas}</div>
      </div>
    )}
  />
);

export default PaintCanvas;