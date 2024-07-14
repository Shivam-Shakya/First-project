import React from 'react'
import './Plan.css'
import { plansData } from '../../data/plansData';
import whitetike from '../../assets/whiteTick.png'

const Plan = () => {
  return (
    <div className='plan-container' id='plans'>
    <div className='blur plan-blur-1'></div>
    <div className='blur plan-blur-2'></div>
        <div className='programs-header'>
            <span className='stroke-text'>READY TO START</span>
            <span>YOUR JOURNEY</span>
            <span className='stroke-text'>NOW WITHUS</span>
        </div>

        <div className='plans'>
            {plansData.map((plan)=>(
                <div className='plan'>
                    {plan.icon}
                    <span>{plan.name}</span>
                    <span>{plan.price}</span>

                    <div className='features'>
                        {plan.features.map((features)=>(
                            <div className='feature'>
                                <img src={whitetike} alt='' />
                                <span key={1}>{features}</span>
                            </div>
                        ))}
                    </div>

                    <div>
                        <span>See More Benefits</span>
                    </div>
                    <button className='btn'>Join Now</button>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Plan