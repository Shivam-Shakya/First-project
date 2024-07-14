import React, { useState } from 'react'
import './Header.css';
import logo from '../../assets/logo.png'
import bars from '../../assets/bars.png'
import { Link } from 'react-scroll';

const Header = () => {

  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false)

  return (
    <div className='header'>
      <img className='logo' src={logo} alt='' />
      {menuOpened === false && mobile === true ? (
        <div onClick={() => setMenuOpened(true)}>
          <img src={bars} alt='' style={{ width: '24px', height: '24px' }} />
        </div>
      ) : (<ul className='header-menu'>
        <li><Link onClick={() => setMenuOpened(false)}
          to='home'
          span={true}
          smooth={true}
        >Home </Link></li>
        <li><Link onClick={() => setMenuOpened(false)}
          to='programs'
          span={true}
          smooth={true}
        >Programs </Link></li>
        <li><Link onClick={() => setMenuOpened(false)}
          to='reasons'
          span={true}
          smooth={true}
        >Why us </Link></li>
        <li><Link onClick={() => setMenuOpened(false)}
          to='plans'
          span={true}
          smooth={true}
        >Plans </Link></li>
        <li><Link onClick={() => setMenuOpened(false)}
          to='testimonials'
          span={true}
          smooth={true}
        >Testimonials </Link></li>
      </ul>)}

    </div>
  )
}

export default Header