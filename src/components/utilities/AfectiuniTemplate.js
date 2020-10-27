import React, {useEffect} from 'react'



const AfectiuniTemplate = ({content, id}) => {
  const {header, text, list, photo} = content;

  useEffect(() => {
    const html = document.querySelector('html');
    html.scrollTop = 0;
    // eslint-disable-next-line
  }, []);

  return (
    <div className={`afectiuni-section-${id} afectiuni-sections`}>
 
      <div className={`afectiuni-text-${id} afectiuni-text`}>
        <div className='afectiuni-text-header-container'>
          <h1 className='afectiuni-text-header'>{header}</h1>
        </div>
        <p>{text}</p>
        <ul className='afectiuni-list'>
          {list.map((item, index) => <li key={index} className="afectiuni-list-item">{item}</li>)}
        </ul>
      </div>
      <div className={`afectiuni-photo-${id} afectiuni-photos`}>
        <img src={photo} alt="poza"/>
      </div>
    </div>
  )
}

export default AfectiuniTemplate
