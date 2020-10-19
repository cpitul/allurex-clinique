import React from 'react'
import '../css/afectiuni.css'
import AfectiuniTemplate from '../components/utilities/AfectiuniTemplate';
import photoCot from '../assets/page_photos/afectiuni/cot.jpg'
import photoUmar from '../assets/page_photos/afectiuni/umar.jpg'
import photoGenunchi from '../assets/page_photos/afectiuni/genunchi.jpg'
import photoSpasticitate from '../assets/page_photos/afectiuni/spasticitate.jpg'
import photoDistonii from '../assets/page_photos/afectiuni/distonii.jpg'
import BackButton from '../components/utilities/BackButton'

const CeTratam = () => {
  const pageContent = [
    {
      header: 'Durerile cervicale, de umeri și de spate',
      text: 'Aceștia sunt cunoscuți ca mușchii stresului și adesea suferă de slăbiciuni, contracturi și dezechilibru de forțe. Vă putem aduce la zero disconfortul creat de acestea printr-o multitudine de tehnici, printre care:',
      list: ['Terapia Trigger Points', 'Masajul miofascial', 'Terapia Tecar FizioWarm 7.0', 'Exerciții active', 'Învățarea menținerii unei posturi corecte'],
      photo: photoUmar
    },
    {
      header: 'Gonartrozele, coxartrozele',
      text: 'Durerile de genunchi și de șold sunt tratate în mod natural de scăderea în greutate deoarece reduc presiunea. Noi putem interveni în schimb cu următoarele',
      list: ['Folosirea aparatului de ultimă generație Tecar Fisiowarm 7.0', 'Folosirea terapiei CrioUltraSound II', 'Aplicarea de benzi kinesiologice pentru drenajul limfatic al atriculației dar și pentru creșterea stabilității ei'],
      photo: photoGenunchi
    },
    {
    header: 'Tendinitele',
    text: 'Cazurile cele mai comune de tendinite care se manifestă prin sensibilitate la palpare si durere la mișcare sunt întâlnite atât la cotul unui jucător de tenis sau de golf, cât și la persoanele cu tendințe Achiliene. Noi vă putem ajuta prin folosirea proprietăților puternic antiinflamatorii a:',
    list: ['Terapiei Tecar FisioWarm 7.0', 'Terapiei UltraCrio II'],
    photo: photoCot
    },
    {
      header: 'Distoniile',
      text: 'Din această categorie a afecțiunilor neurologice fac parte torticolis, retrocolis, antecolis, laterocolis, blefarospasmul, spasmul hemifacial. Acestea se tratează cu:',
      list: ['Injecții care conțin toxină botulinică', 'Terapia Tecar FisioWrm 7.0, care completează tratamentul contracturilor și a durerii', 'Procedee kinetoterapeutice specifice (masaj miofascial, cupping, exerciții active și de stretching)'],
      photo: photoDistonii
    },
    {
      header: 'Spasticitatea',
      text: 'În acest spectru se încadrează rezultatele accidentelor vasculare cerebrale, a  traumatismelor cerebrale și vertebromedulare sau a sclerozelor. Fiind afectată motricitatea, atunci când spasmele sunt prelungite și au o intensitate mare, durerea provocată este tratată cu tratamente antialgice.',
      list: ['Injecțiile cu toxină botulinică relaxează timp de până la 3-4 luni musculatura hiperactivă', 'Exercițiile de kinetoterapie specifice pot îmbunătăți schemele de mișcare'],
      photo: photoSpasticitate
    }
  ];

  return (
    <div className='container ce-tratam-container'>

        <BackButton />
        {
          pageContent.map((section, index) => <AfectiuniTemplate key={index} content={section} id={index} /> )
        }
        <a href="/#contact" className="btn btn-primary afectiuni-button">Contactează-ne</a>

    </div>
  )
}

export default CeTratam
