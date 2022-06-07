import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders';

import './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['M', 'a', 'r', 'a', 'm']
  const jobArray = [
    'W',
    'e',
    'b',
    ' ',
    ' ',
    'D',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
  ]

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])
  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass}_13`}>i,</span>
            <br />
            <span className={`${letterClass}_14`}>I</span>
            <span className={`${letterClass}_15`}>'m </span>
            {/* <img src={logo} alt='developer'/> */}
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={4}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
          <h2>
            Full-Stack Web Developer / React Js / Node Js / Express Js / MongoDB
            / MySQL
          </h2>
          <Link to="/contact" className="flat-button">
            {' '}
            Contact Me
          </Link>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}
export default Home