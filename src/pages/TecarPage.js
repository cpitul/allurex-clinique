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
      'luxații/fracturi',
      'rupturi musculare',
      'tratament pre și post-operator în ligamentoplastii, proteze și osteosinteză',
      'tratament post-operator în artroscopii',
      'traumatisme osoase sau ligamentare, în procesele inflamatorii de la nivelul joncțiunii muschi-tendon',
      'afecțiuni post traumatice, în care terapia are efect analgezic, antiinflamator și antidematos',
      'afecțiuni cronice sau sechele post traumatice',
      'prevenția evenimentaelor traumatice – reducerea și prevenirea accidentărilor sportive',
      'eliminarea durerii',
    ],
    text2: 'Cu ajutorul a doi electrozi si a unei creme conductoare în urmatorul mod:',
    text2List: ['un electrod de tip placa electrodul negativ va fi așezat pe partea opusă zonei anatomice lucrată, acesta formează legatura cu electrodul mobil', 'un electrod mobil electrodul activ prin care este transmis curentul care va fi plimbat prin mișcări circulare pe zona anatomica de tratat', 'cremă conductoare'],
    text1Photo: photo2,
    text2Photo: photo3,
    header3: 'Contraindicații:',
    contraindicatii: ['pacienților care nu au împlinit încă vârsta de 14 ani', 'femeilor gravide', 'pacienților care au probleme de coagulare a sângelui', 'pacienților cu sensibilitate la căldură', 'pacienților care au tulburări de sensibilitate periferică', 'pacienților care au cancer, epilepsie sau procese infecțioase']
  };
  return (
    <div className='container tecar-page'>
      <PageTemplate pageContent={content} />
    </div>
  );
};

export default TecarPage;
