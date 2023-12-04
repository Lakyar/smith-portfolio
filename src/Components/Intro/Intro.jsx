import React from 'react'
import './Intro.css'
import bg from '../../assets/image.png'
import btnImg from '../../assets/hireme.png'
import { Link } from 'react-scroll'



const Intro = () => {
  return (
    <section id="intro">
        <div className="introContent">
            <span className="hello">
                Hello,
            </span>
            <span className="introTest">I'm <span className="introName">Smith</span> <br />Web Designer</span>
            <p className='introPara'>I'm a skilled and passionate web designer with experience in creating <br /> visually and user friendly websites.</p>
            <Link><button className='btn'><img className='btnImg' src={btnImg} alt="" />Hire Me</button></Link>
        </div>
        <img src={bg} alt="" className="bg" />
    </section>
  )
}

export default Intro;