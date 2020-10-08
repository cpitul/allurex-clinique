import React from 'react';
import PageTemplate from '../components/utilities/PageTemplate';
import photo1 from '../assets/page_photos/fiziowarm/page/1.JPG';
import photo2 from '../assets/page_photos/fiziowarm/page/2.JPG';
import photo3 from '../assets/page_photos/fiziowarm/page/3.JPG';
import '../css/tecar.css';

const TecarPage = () => {
  const content = {
    title: 'Terapia Tecar',
    titleText:
      'De ultimă generație, cu emisie de energie adaptată și țintită asupra țesutului afectat unde stimuleaza fluxul sangvin, îmbunătățește nutritia și oxigenarea celulară și accelerează  eliminarea toxinelor.',
    titlePhoto: photo1,
    header1: 'Se recomandă pentru:',
    header2: 'Cum functioneaza?',
    text1: [
      'Luxații/fracturi',
      'Rupturi musculare',
      'Tratament pre și post-operator în ligamentoplastii, proteze și osteosinteză',
      'Tratament post-operator în artroscopii',
      'Traumatisme osoase sau ligamentare, în procesele inflamatorii de la nivelul joncțiunii muschi-tendon',
      'Afecțiuni post traumatice, în care terapia are efect analgezic, antiinflamator și antidematos',
      'Afecțiuni cronice sau sechele post traumatice',
      'Prevenția evenimentaelor traumatice – reducerea și prevenirea accidentărilor sportive',
      'Eliminarea durerii',
    ],
    text2: `Cu ajutorul a doi electrozi si a unei creme conductoare în urmatorul mod:

    un electrod de tip placa electrodul negativ va fi așezat pe partea opusă zonei anatomice lucrată, acesta formează legatura cu electrodul mobil
    
    un electrod mobil electrodul activ prin care este transmis curentul care va fi plimbat prin mișcări circulare pe zona anatomica de tratat
    
    cremă conductoare`,
    text1Photo: photo2,
    text2Photo: photo3,
  };
  return (
    <div className='container tecar-page'>
      <PageTemplate pageContent={content} />
    </div>
  );
};

export default TecarPage;
