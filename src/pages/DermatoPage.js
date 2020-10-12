import React from 'react'
import PageTemplate from '../components/utilities/PageTemplate'
// import photo1 from '../assets/page_photos/'
// import photo2 from ''
// import photo3 from ''

const DermatoPage = () => {
  const content = {
    title: 'Dermato-Estetică',
    titleText:
      'Nu este o coincidență că terapia cu Tecar s-a dovedit a fi extrem de eficientă în domeniul medicinei cosmetice. Datorită capacității sale de reoxigenare, ajută la repararea pielii, la curățarea cicatricilor post-acneice și la consolidarea pielii feței și a corpului.',
    // titlePhoto: photo1,
    header1: 'Se recomandă pentru:',
    header2: 'Cum functioneaza?',
    text1: ['tulburările dermatologice funcționale (de cauze metabolice, circulatorii, endocrine), având ca obiect refacerea țesutului cutanat și reducerea ridurilor și a liniilor de expresie.'],
    text2: 'Este o soluție neinvazivă pentru tratamentul celulitei. Prin creșterea vitezei fluxului sanguin, generează o creștere a producției de oxigen care stimulează metabolismul și eliminarea toxinelor, reducând astfel inflamația.',
    // text1Photo: photo2,
    // text2Photo: photo3,
  };
  return (
    <div className='container tecar-page'>
      <PageTemplate pageContent={content} />
    </div>
  )
}

export default DermatoPage
