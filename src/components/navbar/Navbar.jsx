import './Navbar.css'
import { SvgGitHub, SvgEnvelope, SvgInstagram } from '../../assets/SVGs'
import { menuItems } from './Constants'
import { Link, useLocation } from 'react-router-dom'

export function Navbar() {
  return (
    <nav>
      <div>
        <Logo />
        <ItemsNav />
        <Social />
      </div>
    </nav>
  )
}

function Logo() {
  return <a className='nav__logo' href="/">Carlos <span className='logo__spam'>Vivas</span></a>

}

function ItemsNav() {
  const location = useLocation()
  return (
    <ul className='nav__items'>
      {
        menuItems.map((item, index) => {
          return <li className='li_item' key={index}>{
            location.pathname === item.Url
              ? <Link className='location__items' to={item.Url}>{`<${item.Title}>`}</Link>
              : <Link to={item.Url}> {item.Title} </Link>
          }</li>
        })
      }
    </ul>
  )
}

function Social() {
  return (
    <div className='nav__social'>
      <div className='nav__socialContainer'>
        <div className='nav__divLinkSocial'>
          <Link className='nav__linkSocial' target='_blank' to='https://www.instagram.com/'>
            <SvgInstagram className='nav__socialSvg' />
            Instagram
          </Link>

          <Link className='nav__linkSocial' target='_blank' to='https://github.com/VivasCarlosDev'>
            <SvgGitHub className='nav__socialSvg' />
            GitHub
          </Link>
        </div>
        <button className='nav__button'>
          <SvgEnvelope className='nav__envelope' />
        </button>
      </div>
    </div >
  )
}