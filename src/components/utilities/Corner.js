import React from 'react';

const Corner = ({ location, color, image }) => {
  const leftStyles = {
    div1Styles: {
      position: 'relative',
      backgroundColor: color,
      width: '100%',
      height: '100%',
      borderRadius: '10px',
    },
    div2Styles: {
      position: 'absolute',
      width: '75%',
      height: '100%',
      left: '35%',
      backgroundColor: '#f4f4f4',
    },
    div3Styles: {
      position: 'absolute',
      width: '100%',
      height: '75%',
      top: '35%',
      backgroundColor: '#f4f4f4',
    },
    div4Styles: {
      position: 'absolute',
      width: '97%',
      height: '97%',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: '#f4f4f4',
      borderRadius: '5px',
    },
    content: {
      position: 'absolute',
      zIndex: 1,
      top: '50%',
      left: '55%',
      transform: 'translate(-50%, -55%)',
      padding: '1rem',
      width: '100%',
    },
  };

  const rightStyles = {
    div1Styles: {
      position: 'relative',
      backgroundColor: color,
      width: '100%',
      height: '100%',
      borderRadius: '10px',
    },
    div2Styles: {
      position: 'absolute',
      width: '75%',
      height: '100%',
      right: '35%',
      backgroundColor: '#f4f4f4',
    },
    div3Styles: {
      position: 'absolute',
      width: '100%',
      height: '75%',
      top: '35%',
      backgroundColor: '#f4f4f4',
    },
    div4Styles: {
      position: 'absolute',
      width: '96%',
      height: '96%',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: '#f4f4f4',
      borderRadius: '5px',
    },
    content: {
      position: 'absolute',
      zIndex: 1,
      top: '50%',
      left: '40%',
      transform: 'translate(-50%, -40%)',
      padding: '1rem',
      width: '100%',
    },
  };

  switch (location) {
    case 'left':
      return (
        <div
          className={`${location}-about-container`}
          style={leftStyles.div1Styles}
        >
          <div style={leftStyles.div2Styles}></div>
          <div style={leftStyles.div3Styles}></div>
          <div style={leftStyles.div4Styles}>
            <img
              src={image}
              alt='poza indisponibila'
              style={leftStyles.content}
            />
          </div>
        </div>
      );
    case 'right':
      return (
        <div
          className={`${location}-about-container`}
          style={rightStyles.div1Styles}
        >
          <div style={rightStyles.div2Styles}></div>
          <div style={rightStyles.div3Styles}></div>
          <div style={rightStyles.div4Styles}>
            <img
              src={image}
              alt='poza indisponibila'
              style={rightStyles.content}
            />
          </div>
        </div>
      );
    default:
      return (
        <div>
          <h1>Error...</h1>
        </div>
      );
  }
};

export default Corner;
