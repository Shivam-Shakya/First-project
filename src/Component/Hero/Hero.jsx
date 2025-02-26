import React from 'react'
import './Hero.css';
import Header from '../Header/Header';
import hero_img from '../../assets/hero_image.png';
import hero_img_back from '../../assets/hero_image_back.png';
import heart from '../../assets/heart.png';
import calories from '../../assets/calories.png';
import NumberCounter from 'number-counter';

import {motion} from 'framer-motion';

const Hero = () => {
    const transition = {type: 'spring', duration : 3}
    const mobile = window.innerWidth <= 768 ? true :false;
    return (
        <div className='hero' id='home'>
            <div className='blur hero-blur'></div>
            <div className='left-h'>
                <Header />
                <div className='best-ad'>
                    <motion.div
                    initial = {{left: mobile ? '148px' : '238px'}}
                    whileInView={{left:'8px'}}
                    transition={{...transition, type: 'tween'}}
                    > </motion.div>
                    <span>The best fitness club in the town</span>
                </div>

                <div className='hero-text'>
                    <div>
                        <span className='stroke-text'>Shape </span>
                        <span>Your</span>
                    </div>
                    <div>
                        <span>Ideal Body</span>
                    </div>
                    <div>
                        <span>
                            In here we will help you to shape and build your ideal body and live up your life to fullest
                        </span>
                    </div>
                </div>

                <div className='figures'>
                    <div>
                        <span>
                            <NumberCounter end={140} start={50} delay='4' preFix='+' />
                        </span>
                        <span>expert coachs</span>
                    </div>
                    <div>
                        <span>
                        <NumberCounter end={978} start={800} delay='4' preFix='+' />
                        </span>
                        <span>member joined</span>
                    </div>
                    <div>
                        <span>
                        <NumberCounter end={50} start={10} delay='4' preFix='+' />
                        </span>
                        <span>fitness program</span>
                    </div>
                </div>

                <div className='hero-button'>
                    <button className='btn'>Get Started</button>
                    <button className='btn'>Learn More</button>
                </div>

            </div>
            <div className='right-h'>
                <button className='btn'>Join Now</button>
                <motion.div className='heart-rate'
                initial={{right:'-16px'}}
                whileInView={{right:'64px'}}
                transition={{...transition, type: 'tween'}}
                >
                    <img src={heart} alt='' />
                    <span>Heart Rate</span>
                    <span>116 bpm</span>
                </motion.div>

                <img src={hero_img} alt='' className='hero-img' />
                <motion.img 
                initial={{right:'176px'}}
                whileInView={{right:'320px'}}
                transition={{...transition, type: 'tween'}}
                 src={hero_img_back} alt='' className='hero-img-back' />

                <motion.div className='calories'
                initial={{right:'592px'}}
                whileInView={{right:'448px'}}
                transition={{...transition, type: 'tween'}}
                >
                    <img src={calories} alt='' />
                    <div>
                        <span>Calories Burned</span>
                        <span>220 keal</span>
                    </div>
                </motion.div>
            </div>

        </div>
    )
}

export default Hero