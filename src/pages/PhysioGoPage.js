import React from 'react'
import PageTemplate from '../components/utilities/PageTemplate'
import photo1 from '../assets/page_photos/physio/page/1.JPG'
import photo2 from '../assets/page_photos/physio/page/2.JPG'
import photo3 from '../assets/page_photos/physio/page/3.JPG'

const PhysioGoPage = () => {

  const content = {
    title: 'PhysioGo 500C',
    titleText:
      ``,
    titlePhoto: photo1,
    header1: 'Se recomandă pentru:',
    header2: '',
    text1: [
      '',
      '',
      '',
      '',
      '',
    ],
    text2: ``,
    text2List: ['', '', '', ''],
    text1Photo: photo2,
    text2Photo: photo3,
  };

  return (
    <div className='container tecar-page'>
      <PageTemplate pageContent={content} />
    </div>
  )
}

export default PhysioGoPage
