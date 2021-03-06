import React from 'react'
import PageTemplate from '../components/utilities/PageTemplate'
import photo1 from '../assets/page_photos/kineto/page/1.jpg'
import photo2 from '../assets/page_photos/kineto/page/2.jpg'
import photo3 from '../assets/page_photos/kineto/page/3.jpg'
import galleryPhoto1 from '../assets/page_photos/kineto/1.jpg'
import galleryPhoto2 from '../assets/page_photos/kineto/2.jpg'
import galleryPhoto3 from '../assets/page_photos/kineto/3.jpg'
import galleryPhoto4 from '../assets/page_photos/kineto/4.jpg'
import galleryPhoto5 from '../assets/page_photos/kineto/5.jpg'
import galleryPhoto6 from '../assets/page_photos/kineto/6.jpg'
import galleryPhoto7 from '../assets/page_photos/kineto/7.jpg'
import galleryPhoto8 from '../assets/page_photos/kineto/8.jpg'

const KinetoPage = () => {
  const content = {
    title: 'Kinetoterapie',
    titleText:
      `Kinetoterapia este terapie prin mișcare care ajută atât în recuperarea afecţiunilor locomotorii, cât și în tratarea unor afecţiuni ale organelor interne, boli cardiovasculare, respiratorii, metabolice și chiar digestive.`,
      titleText2: 'Prin kinetoterapie se îmbunătățesc forța și rezistența musculară, mobilitatea și coordonarea mișcărilor cu ajutorul programelor kinetice complexe de masaj terapeutic, gimnastică medicală și exerciții elaborate individual.',
    titlePhoto: photo1,
    header1: 'Se recomandă pentru:',
    header2: 'Indicații:',
    text1: [
      'deficiențele coloanei vertebrale (cifoză, scolioză, lordoză)',
      'deficiențele membrelor',
      'afecţiuni neurologice (lombosciatică, hernia de disc, accident vascular cerebral etc.)',
      'deficienţe nutriţionale',
      'tulburări de dezvoltare',
    ],
    text2: `Kinetoterapia poate fi utilizată și ca metodă de prevenţie și are ca scop menţinerea sau creșterea nivelului funcţional pentru a păstra starea optimă de sănătate prin prevenirea apariţiei unor afecţiuni. Ȋn cadrul ședințelor, kinetoterapeutul concepe un program personalizat de exerciții. Este foarte recomandată persoanelor de vârsta a treia; deoarece printr-un antrenament corespunzător,  aceștia pot să-și mărească rezistența la efort, să mențină sau chiar să crească mobilitatea articulară și să se bucure de o “stare generală de bine”.`,
    text2List: ['încetinește pierderea masei osoase și implicit reduce gradul de osteoporoză', 'corectează poziția corpului', 'îmbunătățește vizibil mobilitatea articulară, mai ales după o convalescență îndelungată sau după un mod de viață sedentar', 'îmbunătățește metabolismul și fluxul sangvin, dar și frecvența respiratorie'],
    text1Photo: photo2,
    text2Photo: photo3,
    photos: [galleryPhoto1, galleryPhoto2, galleryPhoto3, galleryPhoto4, galleryPhoto5, galleryPhoto6, galleryPhoto7, galleryPhoto8]
  };

  return (
    <div className='container tecar-page'>
      <PageTemplate pageContent={content} />
    </div>
  )
}

export default KinetoPage
