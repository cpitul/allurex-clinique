import React from 'react'
import PageTemplate from '../components/utilities/PageTemplate'
import photo1 from '../assets/page_photos/crio/page/1.jpg'
import photo2 from '../assets/page_photos/crio/page/3.jpg'
import photo3 from '../assets/page_photos/crio/page/2.jpg'
import galleryPhoto1 from '../assets/page_photos/crio/1.jpg'
import galleryPhoto2 from '../assets/page_photos/crio/2.jpg'
import galleryPhoto3 from '../assets/page_photos/crio/3.jpg'
import galleryPhoto4 from '../assets/page_photos/crio/4.jpg'
import galleryPhoto5 from '../assets/page_photos/crio/5.jpg'

const CrioPage = () => {

  const content = {
    title: 'CrioUltrasound II',
    titleText:
      `Este un aparat inovativ care are la bază sinergia a două tehnici terapeutice: crioterapia (terapia cu gheață) și terapia cu ultrasunet. Aparatul permite atât folosirea simultană a celor 2 terapii, cât și folosirea separată a criogeniei și/sau a terapiei cu ultrasunte.`,
    titleText2: 'O şedină de CRIOULTRASUNETE durează între 10 şi 30 de minute. Aplicarea se poate face prin mişcarea aplicatorului pe zona afectată, dar şi într-un singur punct fix, prin folosirea pantografului.',
    titlePhoto: photo1,
    header1: 'Cum funcționează:',
    section1Text: '',
    header2: 'Beneficii:',
    text1: [
      'se distribuie gel pe zona care urmează să fie tratată',
      'terapeutul mișcă aplicatorul în zona cu adipozitate localizată',
      'adipocitele sunt cristalizate, începând procesul de criolipoliză care se evidențiază prin formarea unei zone mai palide',
      'se poate observa o roșeață crescută datorită procesului compensator de vasodilatație',
    ],
    text2: `Posibilitatea de intervenţie imediată şi efectul terapeutic al ultrasunetelor, dublat de efectul criogenic scad imediat durerea sau inflamaţia şi accelerază procesul de vindecare şi de recuperare al pacientului, crescând semnificativ probabilitatea succesului terapeutic. Pentru sportivii de performanţă accidentaţi este cea mai eficientă, rapidă şi recomandată terapie de reabilitare. Se recomandă pentru:`,
    text2List: ['celulita (PEFS, adică paniculopatie edemato-fibroasa- sclerotica)', 'patologii degenerative și acute ale țesuturilor moi', 'inflamații acute: bursite, capsulite, tendinite, epicondilite, sinovite', 'mialgii acute și cronice, traume și leziuni musculare', 'artralgie post traumatică', 'periostite', 'spondiloze anchilozate', 'rupturi tendoane', 'hematoame în faze inițiale', 'sindrom tunel carpian', 'spasticitate musculară'],
    text1Photo: photo2,
    text2Photo: photo3,
    header3: 'Contraindicații:',
    contraindicatii: ['osteoporoza cu turnover crescut', 'prezența fragmentelor metalice', 'proteze articulare', 'vene varicoase', 'flebita și tromboflebita', 'prezența unui stimulator cardiac (peace-maker)', 'arteriopatie obliterantă', 'hemoragii, menstruații', 'țesuturi neoplastice și zone limitrofe', 'tuberculoze', 'femei însărcinate', 'subiecți în faza de dezvoltare (copii, adolescenți)', 'pacienții care nu au posibilitatea de a comunica în mod clar terapeutului despre orice senzație dureroasă', 'Boala Reynaud – la subiecții care suferă de această boală crioterapia poate declanșa criza vasospastică', 'arteriopatii obliterante – crioterapia, provocând vasoconstricție, poate agrava ischemia țesuturilor', 'hipersensibilitate la rece'],
    photos: [galleryPhoto1, galleryPhoto2, galleryPhoto3, galleryPhoto4, galleryPhoto5]
  };

  return (
    <div className='container tecar-page'>
      <PageTemplate pageContent={content} />
    </div>
  )
}

export default CrioPage
