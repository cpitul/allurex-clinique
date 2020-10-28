import React from 'react'
import '../../css/details.css'

const Details = ({indicatii, contraindicatii}) => {
  return (
    <div className='details-container'>
      {indicatii && <details className='indicatii'>
        <summary>Indicații:</summary>
        <div className="content-details">
          <ul className="indicatii-list">
            {indicatii.map((item, index) => <li key={index} className="indicatii-list-item">{item}</li> )}
          </ul>
        </div>
      </details>}
      {contraindicatii && <details className='contraindicatii'>
        <summary>Contraindicații:</summary>
        <div className="content-details">
          <ul className="contraindicatii-list">
            {contraindicatii.map((item, index) => <li key={index} className="contraindicatii-list-item">{item}</li> )}
          </ul>
        </div>
      </details>}
    </div>
  )
}

export default Details
