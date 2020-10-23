import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/utilities/Card';

const Servicii = () => {
  const content = [
    {
      id: '1',
      title: 'Terapie Tecar',
      text:
        'În timpul terapiei, corpul se folosește de propria energie, activând mecanismele de regenerare.',
      link: 'tecar',
    },
    {
      id: '2',
      title: 'Dermato-Estetică',
      text: 'Un ten mai proaspăt, mai tânăr, mai ferm și un corp mai tonifiat.',
      link: 'dermatoestetica',
    },
    {
      id: '3',
      title: 'Kinetoterapie',
      text:
        'Are ca scop menţinerea sau creșterea nivelului funcţional pentru a păstra starea optimă de sănătate.',
      link: 'kineto',
    },
    {
      id: '4',
      title: 'CrioUltrasound',
      text:
        'Terapie inovatoare non-invazivă de eliminare a durerii şi inflamaţiei.',
      link: 'crioultrasound',
    },
    {
      id: '5',
      title: 'PhysioGo 500C',
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
      link: 'physiogo',
    },
    {
      id: '6',
      title: 'Kinetoterapie pentru bebeluși și copii',
      text:
        'Din primele zile ale vieţii copilului, mama trebuie să înţeleagă necesitatea mişcării şi dezvoltării fizice armonioase a copilului.',
      link: 'kinetocopii',
    },
    // {
    //   id: '7',
    //   title: 'Lorem Ipsum',
    //   text:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
    //   link: 'lorem',
    // },
    // {
    // id: '8',
    //   title: 'Lorem Ipsum',
    //   text:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
    //   link: 'lorem',
    // },
  ];
  return (
    <section id='servicii' className='container'>
      <div id="servicii-anchor"></div>
      <h1>Servicii oferite</h1>
      <div className='cards-container'>
        {content.map((item) => (
          <Card key={item.id} cardContent={item} />
        ))}
      </div>
      <Link to='/afectiuni' className='btn btn-primary' id='buton-servicii'>
        Vezi ce tratăm
      </Link>
    </section>
  );
};

export default Servicii;
