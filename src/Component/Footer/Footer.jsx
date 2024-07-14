import React from 'react'
import './Footer.css'
import Github from '../../assets/github.png'
import Instagrem from '../../assets/instagram.png'
import Linkedin from '../../assets/linkedin.png'
import Logo from '../../assets/logo.png'

const Footer = () => {
    return (
        <div className='footer-container'>
            <hr />
            <div className='footer'>
                <div className='social-link'>
                    <img src={Github} alt='' />
                    <img src={Instagrem} alt='' />
                    <img src={Linkedin} alt='' />
                </div>
                <div className='logo-footer'>
                    <img src={Logo} alt='' />
                </div>
            </div>
            <div className='blur f-blur-1'></div>
            <div className='blur f-blur-2'></div>
        </div>
    )
}

export default Footer