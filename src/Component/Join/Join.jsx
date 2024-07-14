import React, { useRef } from 'react'
import './Join.css'
import emailjs from '@emailjs/browser'

const Join = () => {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_xm4xash', 'template_isxn9gg', form.current, {
            publicKey: 'P80tRJugOg8IGurzxyqDf',
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };
  return (
    <div className='join' id='join-us'>
        <div className='left-j'>
        <hr />
        <div>
            <span className='stroke-text'>READY TO</span>
            <span> LEVEL UP</span>
        </div>
        <div>
            <span>YOUR BODY</span>
            <span className='stroke-text'> WITH US?</span>
        </div>
        </div>
        <div className='right-j'>
            <form ref={form} className='email-container' onSubmit={sendEmail}>
                <input type='text' placeholder='Enter Your Email'/>
                <button className='btn btn-j'>Join Now</button>
            </form>
        </div>
    </div>
  )
}

export default Join