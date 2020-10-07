import React from 'react';

const Contact = () => {
  return (
    <section id='contact' className='container'>
      <h1>Contact</h1>
      <div id='contact-content'>
        <form action='post'>
          <label htmlFor='nume'>Nume și prenume:</label>
          <input
            type='text'
            name='nume'
            id='input-nume'
            className='input-field'
            required
          />
          <label htmlFor='email'>Email:</label>
          <input
            type='email'
            name='email'
            id='input-email'
            className='input-field'
            required
          />
          <label htmlFor='mesaj'>Mesaj:</label>
          <textarea
            name='mesaj'
            id='input-mesaj'
            cols='38'
            rows='8'
            className='input-field'
          ></textarea>
          <input
            type='submit'
            value='Trimite Mesajul'
            className='btn btn-primary btn-block'
          />
        </form>
        <div id='contact-info'>
          <div id='contact-adresa'>
            <h4>Adresa:</h4>
            <p>
              Str Sevastopol nr 13-17, Diplomat Business Center, birou 101,
              Sector 1, Bucuresti
            </p>
          </div>
          <div id='contact-telefon'>
            <h4>Telefon:</h4>
            <p>
              Mobil: <a href='tel:+40748072072'>0748-072-072</a>
            </p>
          </div>
          <div id='contact-email'>
            <h4>Email:</h4>
            <a href='mailto:office@allurex-clinique.ro'>
              office@allurex-clinique.ro
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
