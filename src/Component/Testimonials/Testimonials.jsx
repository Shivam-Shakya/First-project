import React, { useState } from 'react'
import './testimonials.css'
import { testimonialsData } from '../../data/testimonialsData';
import rightArrow from '../../assets/rightArrow.png'
import leftArrow from '../../assets/leftArrow.png'
import { motion } from 'framer-motion'


const Testimonials = () => {
    const transition = { type: 'spring', duration: 3 }
    const [select, setSelect] = useState(0)
    const tLength = testimonialsData.length

    return (
        <div className='testimonials'>
            <div className='left-t'>
                <span>Testimonials</span>
                <span className='stroke-text'>What they</span>
                <span>Say about us</span>
                <motion.span
                    key={select}
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 100 }}
                    transition={transition}
                >
                    {testimonialsData[select].review}
                </motion.span>
                <span>
                    <span style={{ color: '#f48915' }}>{testimonialsData[select].name}</span>{" "}
                    - {testimonialsData[select].status}
                </span>
            </div>
            <div className='right-t'>
                <motion.div
                    initial={{ left: '146px' }}
                    whileInView={{ left: '214px' }}
                    transition={{ ...transition, type: 'tween' }}
                ></motion.div>
                <motion.div
                    initial={{ right: '46px' }}
                    whileInView={{ right: '114px' }}
                    transition={{ ...transition, type: 'tween' }}
                ></motion.div>
                <motion.img
                    key={select}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={transition}
                    src={testimonialsData[select].image} alt='' />

                <div className='arrows'>
                    <img onClick={() => {
                        select === 0 ? setSelect(tLength - 1) : setSelect((prev) => prev - 1)
                    }} src={leftArrow} alt='' />
                    <img onClick={() => {
                        select === tLength - 1 ? setSelect(0) : setSelect((prev) => prev + 1)
                    }} src={rightArrow} alt='' />
                </div>
            </div>
        </div>
    )
}

export default Testimonials