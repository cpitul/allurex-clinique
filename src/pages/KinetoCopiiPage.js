import React from 'react'
import PageTemplate from '../components/utilities/PageTemplate'
import photo1 from '../assets/page_photos/kineto-copii/page/1.JPG'
import photo2 from '../assets/page_photos/kineto-copii/page/2.JPG'
import photo3 from '../assets/page_photos/kineto-copii/page/3.JPG'

const KinetoCopiiPage = () => {
  const content = {
    title: 'Kinetoterapie pentru bebeluși și copii',
    titleText:
      `Pentru a da nou-născutului aceste informaţii, familia va avea rol predominant, nivelul ei educaţional fiind definitoriu, fiind, pe de o parte, reflexiv individual, de unitate schematică familială şi, pe de altă parte, social, ca spaţiul în care se transmit şi se învaţă manifestările relaţionale, deprinderi şi obiceiuri. Din primele zile ale vieţii copilului, mama trebuie să înţeleagă necesitatea mişcării şi dezvoltării fizice armonioase a copilului. Copilul nu trebuie neapărat să aibă probleme de sănătate pentru a face kinetoterapie – pentru că mişcarea este cea mai neinvazivă şi ieftină formă de terapie.`,
    titlePhoto: photo1,
    header1: 'Kinetoterapia îmbunătățește:',
    header2: 'Beneficii:',
    text1: [
      'mobilitatea şi stabilitatea articulaţiilor',
      'digestia, circulaţia',
      'respiraţia',
      'tonusul muscular',
      'îl va ajuta să se descurce mult mai uşor în mediul natural decât un copil nestimulat',
    ],
    text2: `Stimularea motorie va atrage stimularea psihică, iar noile informaţii primite îl vor face pe copil să se adapteze şi să depăşească noile provocări ale vieţii, pentru că dezvoltarea psihică este un proces treptat şi complex care se derulează în strânsă legătură cu dezvoltarea motorie, fiind influenţată şi de fenomenul maturizării biologice. Programele de exerciţii fizice executate de kinetoterapeutul specializat în dezvoltarea copilului mic vor avea în vedere continuarea acestora şi cu mijloace ajutătoare (masaj, hidrokinetoterapie) şi adaptarea lor în funcţie de stadiul de dezvoltare al copilului:`,
    text2List: ['vârsta acestuia', 'starea lui de sănătate', 'dispoziţia la şedinţa de kinetoterapie', 'capacitatea lui de adaptare la efort', 'de calităţile motrice ale copilului'],
    text1Photo: photo2,
    text2Photo: photo3,
  };

  return (
    <div className='container tecar-page'>
      <PageTemplate pageContent={content} />
    </div>
  )
}

export default KinetoCopiiPage
