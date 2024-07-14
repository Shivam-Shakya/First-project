import React from 'react'
import './Reasons.css'
import image1 from '../../assets/image1.png'
import image2 from '../../assets/image2.png'
import image3 from '../../assets/image3.png'
import image4 from '../../assets/image4.png'
import nb from '../../assets/nb.png'
import adidas from '../../assets/adidas.png'
import nike from '../../assets/nike.png'
import tick from '../../assets/tick.png'

const Reasons = () => {
  return (
    <div className='reasons' id='reasons'>
        <div className='left-r'>
            <img src={image1} alt=''/>
            <img src={image2} alt=''/>
            <img src={image3} alt=''/>
            <img src={image4} alt=''/>
        </div>
        <div className='right-r'>
            <span>Some reasons</span>

            <div>
                <span className='stroke-text'>Why </span>
                <span>chose us?</span>
            </div>

            <div className='details'>
                <div>
                    <img src={tick} alt='' /> <span></span>
                    <span>OVER 140+ EXPERT COACHS</span>
                </div>
                <div>
                    <img src={tick} alt='' /> <span></span>
                    <span>TRAIN SMARTER AND FASTER THAN </span>
                </div>
                <div>
                    <img src={tick} alt='' /> <span></span>
                    <span>I FREE PROGRAM FOR NEW MEMBER</span>
                </div>
                <div>
                    <img src={tick} alt='' /> <span></span>
                    <span>RELIABLE PARTNERS</span>
                </div>
            </div>

            <span style={{
                color : '#9c9c9c',
                fontWeight:'normal'
                }}>OUR PARTNERS</span>
                
            <div className='partners'>
                <img src={nb} alt='' />
                <img src={adidas} alt='' />
                <img src={nike} alt='' />
            </div>
        </div>
    </div>
  )
}

export default Reasons