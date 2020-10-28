import React from 'react'
import PageTemplate from '../components/utilities/PageTemplate'
import photo1 from '../assets/page_photos/physio/page/1.jpg'
import photo2 from '../assets/page_photos/physio/page/2.jpg'
import photo3 from '../assets/page_photos/physio/page/3.jpg'
import photo4 from '../assets/page_photos/physio/page/4.jpg'
import photoGallery1 from '../assets/page_photos/physio/1.jpg'
import photoGallery2 from '../assets/page_photos/physio/2.jpg'
import photoGallery3 from '../assets/page_photos/physio/3.jpg'


const PhysioGoPage = () => {

  const content = {
    title: 'PhysioGo 500C',
    titleText:
      `Este un dispozitiv terapeutic activ, non-invaziv, proiectat pentru proceduri de tratament prin:`,
    titleList: ['curenți de joasă frecvență bipolari (bidirecționali) și unipolari (unidirecționali)', 'curenți de frecvență medie modulați prin forme de undă de frecvență joasă (bidirecționali) și unipolari (unidirecționali), câmp magnetic de frecvență joasă', 'radiații laser în game vizibile (lungime de undă 660 nm) și invizibile (lungime de undă 808 nm)'],
    titlePhoto: photo1,
    header1: 'Magnetoterapia',
    header2: 'Tens',
    header3: 'Laserterapia',
    section1Text: 'Reprezintă o metodă alternativă de tratament a unor afecțiuni inflamatorii (dureri articulare, reumatism) și de reducere a durerii asociate, prin acțiunea unui câmp magnetic pulsatil sau static asupra diferitelor părți ale corpului.',
    section1Text2: 'Testele clinice au demonstrat faptul că terapia cu magneți are efectul de reducere a senzației dureroase. Magneții penetrează adânc țesuturile și creează un câmp magnetic care energizează, alcalinizează și oxigenează îmbunătățind funcția sistemului imunitar și capacitățile de vindecare ale organismului.',
    section1Text3: 'Procedura de tratament este efectuată local, câmpul magnetic este concentrat doar pe partea corpului supusă terapiei. Energia magnetică are un efect benefic asupra circulației sângelui, a fluxului limfatic, a nervilor, a mușchilor și a producerii de hormoni.',
    text2: `Stresul, oboseala și durerile musculare pot fi tratate eficient. Pulsuri electrice foarte slabe stimulează, revitalizează și regenerează părțile corpului unde sunt plasate pad-urile electrostimulatoarelor.`,
    text2Part2: 'Avantajele terapiei Tens față de analgezicele tradiționale sunt numeroase, printre care reducerea aproape la zero a efectelor secundare, dar și faptul că un asemenea tratament este mai ieftin decât cumpărarea regulată a analgezicelor.',
    text3: 'Laserterapia este o procedură non-invazivă a fizioterapiei. Spre deosebire de electroterapie, aceasta are la bază efectul benefic al luminii care ajunge în organism.',
    text3Part2: 'Printre avantajele  utilizării laserterapiei se numără faptul că este non-toxică, nu are efecte adverse și nu interacționează cu alte medicamente.',
    text1Photo: photo2,
    text2Photo: photo3,
    text3Photo: photo4,
    section1Details: {
      indicatii: ['uniunea dificilă, prelungită a oaselor fracturate', 'pseudoartroză, osteoporoză', 'boli degenerative articulare', 'artrită reumatică', 'ulcerații ale gambelor, ulcerații trofice, infecții bacteriene ale pielii și a țesuturilor moi', 'cheloidă', 'condișii post-atac cerebral', 'migrene hemicraniene și vasomotoare', 'dereglări funcționale ale nervilor cranieni și periferici', 'scleroză multiplă', 'infecția corneei, atrofie optică', 'hipertensiune arterială', 'boli cardice ischemice aritmice', 'intestin gros hipersensibil', 'pancreatită cronică'],
      contraindicatii: ['sarcină', 'afecțiuni neoplastice', 'tuberculoză activă', 'diabet juvenil', 'tiroxicoză', 'sângerări ale sistemului digestiv', 'infecții severe', 'prezența implanturilor electronice (de exemplu, stimulator cardiac)']
    },
    section2Details: {
      indicatii: ['dureri de spate, în special lombare și cervicale', 'dureri articulare', 'nevralgii', 'dureri de cap', 'dureri menstruale', 'dureri care apar în urma afecțiunilor aparatului locomotor (sistemului musculare - scheletal)', 'dureri asociate cu probleme de circulație', 'dureri cronice din diverse cauze'],
      contraindicatii: ['pacieți cu dispozitive electronice implantate', 'proceduri la nivelul trunchiului și toracelui', 'pacienții cu implanturi (proteze interne, șuruburi osoase)', 'infecții acute și procese inflamatorii', 'tromboflebită', 'riscul unei embolii', 'boli cu posibilitatea hemoragiilor', 'sarcină', 'tulburări senzoriale', 'durere de etiologie necunoscută', 'tumoră activă în zona de tratament', 'tuberculoză activă', 'boli cu pirexic', 'implanturi metalice superficiale (se impune o atenție specială)', 'modificări cutanate în locurile de aplicare a electrodului', 'alte cazuri, atunci când pielea nu poate fi umezită']
    },
    section3Details: {
      indicatii: ['vindecarea dificilă a rănilor și a ulcerațiilor', 'răni post-operatorii, post-amputație', 'necroza pielii, vătămări ale pielii', 'ulcerații ale gambelor, ulcerații trofice', 'arsuri', 'degerături', 'ulcere de decubit', 'cicatrici fără fibroză', 'riduri', 'celulită', 'acnee simplă, herpes simplu', 'afte', 'psoriazis', 'condiții de artrită cronică', 'sindromul umărului dureros', 'sindromul de tunel carpian', 'hemoragii subcutanate (echimoze)', 'leziuni articulare, entorse, luxații', 'terticolis', 'sindromul Sudeck (stadiul I și II)', 'spondilită anchilozantă', 'artrită reumatoidă', 'spondiloartroze, coxartroze, gonartroză', 'sindrom de suprasarcină musculară', 'nevralgii ale nervilor periferici', 'nevralgii după herpes zoster', 'neuropatia diabetică'],
      contraindicatii: ['afecțiuni neuroplastice', 'tuberculoză activă', 'predispunere la sângerări', 'condiții de febră', 'sarcină', 'aritmie și insuficiență circulatorie', 'fotofobie', 'diabet necontrolat']
    },
    photos: [photoGallery1, photoGallery2, photoGallery3]
  };

  return (
    <div className='container physio'>
      <PageTemplate pageContent={content} />
    </div>
  )
}

export default PhysioGoPage
