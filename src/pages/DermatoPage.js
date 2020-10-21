import React from 'react'
import PageTemplate from '../components/utilities/PageTemplate'
import photo1 from '../assets/page_photos/dermato/page/1.jpeg'
import photo2 from '../assets/page_photos/dermato/page/2.jpeg'
import photo3 from '../assets/page_photos/dermato/page/3.jpeg'
import galleryPhoto1 from '../assets/page_photos/dermato/1.jpg'
import galleryPhoto2 from '../assets/page_photos/dermato/2.jpg'
import galleryPhoto3 from '../assets/page_photos/dermato/3.jpeg'
import galleryPhoto4 from '../assets/page_photos/dermato/4.jpg'
import galleryPhoto5 from '../assets/page_photos/dermato/5.jpg'

const DermatoPage = () => {
  const content = {
    title: 'Dermato-Estetică',
    titleText:
      'Nu este o coincidență că terapia cu Tecar s-a dovedit a fi extrem de eficientă în domeniul medicinei cosmetice. Datorită capacității sale de reoxigenare, ajută la repararea pielii, la curățarea cicatricilor post-acneice și la consolidarea pielii feței și a corpului.',
    titlePhoto: photo1,
    header1: 'Se recomandă pentru:',
    header2: 'Cum functioneaza?',
    text1: ['tulburările dermatologice funcționale (de cauze metabolice, circulatorii, endocrine), având ca obiect refacerea țesutului cutanat și reducerea ridurilor și a liniilor de expresie.'],
    text2: 'Este o soluție neinvazivă pentru tratamentul celulitei. Prin creșterea vitezei fluxului sanguin, generează o creștere a producției de oxigen care stimulează metabolismul și eliminarea toxinelor, reducând astfel inflamația.',
    text1Photo: photo2,
    text2Photo: photo3,
    photos: [galleryPhoto1, galleryPhoto2, galleryPhoto3, galleryPhoto4, galleryPhoto5]
  };
  return (
    <div className='container tecar-page'>
      <PageTemplate pageContent={content} />
    </div>
  )
}

export default DermatoPage
