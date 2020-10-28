import React from 'react'
import PageTemplate from '../components/utilities/PageTemplate'
import photo1 from '../assets/page_photos/kineto-copii/page/1.jpg'
import photo2 from '../assets/page_photos/kineto-copii/page/2.jpg'
import photo3 from '../assets/page_photos/kineto-copii/page/3.jpg'
import galleryPhoto1 from '../assets/page_photos/kineto-copii/1.jpg'
import galleryPhoto2 from '../assets/page_photos/kineto-copii/2.jpg'
import galleryPhoto3 from '../assets/page_photos/kineto-copii/3.jpg'
import galleryPhoto4 from '../assets/page_photos/kineto-copii/4.jpg'
import galleryPhoto5 from '../assets/page_photos/kineto-copii/5.jpg'
import galleryPhoto6 from '../assets/page_photos/kineto-copii/6.jpg'
import galleryPhoto7 from '../assets/page_photos/kineto-copii/7.jpg'
import galleryPhoto8 from '../assets/page_photos/kineto-copii/8.jpg'

const KinetoCopiiPage = () => {
  const content = {
    title: 'Kinetoterapie pentru bebeluși și copii',
    titleText:
      `Pentru a da nou-născutului aceste informaţii, familia are rol predominant, nivelul ei educaţional fiind definitoriu, fiind, pe de o parte, reflexiv individual, de unitate schematică familială şi, pe de altă parte, social, ca spaţiul în care se transmit şi se învaţă manifestările relaţionale, deprinderi şi obiceiuri.`,
      titleText2: 'Din primele zile ale vieţii copilului, mama trebuie să înţeleagă necesitatea mişcării şi dezvoltării fizice armonioase a copilului. Copilul nu trebuie neapărat să aibă probleme de sănătate pentru a face kinetoterapie – pentru că mişcarea este cea mai neinvazivă şi ieftină formă de terapie.',
    titlePhoto: photo1,
    header1: 'Kinetoterapia îmbunătățește:',
    header2: 'Beneficii:',
    text1: [
      'mobilitatea şi stabilitatea articulaţiilor',
      'digestia, circulaţia',
      'respiraţia',
      'tonusul muscular',
      'modul în care se descurcă un copil în mediul natural (se descurcă mult mai uşor decât un copil nestimulat',
    ],
    text2: `Stimularea motorie va atrage stimularea psihică, iar noile informaţii primite îl vor face pe copil să se adapteze şi să depăşească noile provocări ale vieţii, pentru că dezvoltarea psihică este un proces treptat şi complex care se derulează în strânsă legătură cu dezvoltarea motorie, fiind influenţată şi de fenomenul maturizării biologice. Programele de exerciţii fizice executate de kinetoterapeutul specializat în dezvoltarea copilului mic vor avea în vedere continuarea acestora şi cu mijloace ajutătoare (masaj, hidrokinetoterapie) şi adaptarea lor în funcţie de stadiul de dezvoltare al copilului:`,
    text2List: ['vârsta acestuia', 'starea lui de sănătate', 'dispoziţia la şedinţa de kinetoterapie', 'capacitatea lui de adaptare la efort', 'de calităţile motrice ale copilului'],
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

export default KinetoCopiiPage
