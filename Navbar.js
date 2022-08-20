import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import '../stylesheets/Navbar.css'
import BurguerButton from './BurguerButton'


function Navbar() {

  const [clicked, setClicked] = useState(false)
  const handleClick = () => {
    setClicked(!clicked)
  }
  
  return(
    <div className='hero'>
			<nav>
				<div className='logo'>LOGO</div>
        <NavContainer>
          <ul className={`links ${clicked ? 'active' : ''} `} id='nav-list'>
            <li><a onClick={handleClick} href='#about-me'>About me</a></li>
            <li><a onClick={handleClick} href='#project'>Project</a></li>
            <li><a onClick={handleClick} href='#skillset'>Skillset</a></li>
            <li><a onClick={handleClick} href='#contact-me'>Contact me</a></li>
          </ul>
          <div className='burguer'>
            <BurguerButton clicked={clicked} handleClick={handleClick}/>
          </div>
          <BgDiv className={`initial ${clicked ? ' active' : ''}`}></BgDiv>
        </NavContainer>
      </nav>
      <div className='hero-area'>
        <div className='hero-text'>
          <h1>Ricardo Morales</h1>
          <p>Front End Developer</p>
          <div className='button'><a href='#about-me'>About me</a></div>
        </div>
        <div className='socials'>
          <div>
            <a href='https://www.twitter.com' className='social'>
              <svg xmlns="http://www.w3.org/2000/svg" fill='#ffffff'width="50" height="50" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
            </a>
          </div>
          <div>
            <a href='https://www.github.com'className='social'>
              <svg xmlns="http://www.w3.org/2000/svg" fill='#fff'width="50" height="50" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 6c-3.313 0-6 2.686-6 6 0 2.651 1.719 4.9 4.104 5.693.3.056.396-.13.396-.289v-1.117c-1.669.363-2.017-.707-2.017-.707-.272-.693-.666-.878-.666-.878-.544-.373.041-.365.041-.365.603.042.92.619.92.619.535.917 1.403.652 1.746.499.054-.388.209-.652.381-.802-1.333-.152-2.733-.667-2.733-2.965 0-.655.234-1.19.618-1.61-.062-.153-.268-.764.058-1.59 0 0 .504-.161 1.65.615.479-.133.992-.199 1.502-.202.51.002 1.023.069 1.503.202 1.146-.776 1.648-.615 1.648-.615.327.826.121 1.437.06 1.588.385.42.617.955.617 1.61 0 2.305-1.404 2.812-2.74 2.96.216.186.412.551.412 1.111v1.646c0 .16.096.347.4.288 2.383-.793 4.1-3.041 4.1-5.691 0-3.314-2.687-6-6-6z"/></svg>
            </a>
          </div>
          <div>
            <a href='https://www.Linkedin.com'className='social'>
              <svg xmlns="http://www.w3.org/2000/svg" fill='#fff'width="50" height="60" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 8c0 .557-.447 1.008-1 1.008s-1-.45-1-1.008c0-.557.447-1.008 1-1.008s1 .452 1 1.008zm0 2h-2v6h2v-6zm3 0h-2v6h2v-2.861c0-1.722 2.002-1.881 2.002 0v2.861h1.998v-3.359c0-3.284-3.128-3.164-4-1.548v-1.093z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </div>
    )
}

export default Navbar

const NavContainer = styled.nav`
  padding: .4rem;
  background-color: black;
  display: flex;
  
  a{
    color: white;
    margin-right: 1rem
  }

  .links {
    position: absolute;
    top: -700px;
    left: -2000px;
    right: 0
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all ease;
    a {
      color: white;
      font-size: 2rem;
      display: block;
    }

    @media(min-width: 900px) {
      position: initial;
      margin: 0
      a{
        font-size: 1rem;
        color: white;
        display: inline;
      }
    }
  }

  .links.active {
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 0;
    left: 0;
    right: 0;
    text-align: center;
    a{
      font-size: 2rem;
      margin-top: 1rem;
      color: white;
    }
  }

  .burguer {
    @media(min-width: 900px){
      display: none;
    }
  }
  
`

const BgDiv = styled.div`

background-color: #fff;
position: absolute;
top: -1000px;
left: -1000px;
width: 100%;
z-index: -1;
transition: all .6s ease;

&.active {
  border-radius: 0 0 80% 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%
}

`