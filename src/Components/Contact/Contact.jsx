import React from 'react'
import './Contact.css'
import Walmart from '../../assets/walmart.png'
import microsoft from '../../assets/microsoft.png'
import adobe from '../../assets/adobe.png'
import facebook from '../../assets/facebook.png'
import fbicon from '../../assets/facebook-icon.png'
import tticon from '../../assets/twitter.png'
import yticon from '../../assets/youtube.png'
import igicon from '../../assets/instagram.png'



const Contact = () => {
  return (
    <section id="contactPage">
        <div id="clients">
            <h1 className='contactPageTitle'>My Clients</h1>
            <p className='clientDesc'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure molestias quasi temporibus exercitationem quas rem odio possimus unde itaque voluptatibus.
            </p>
            <div className="clientImgs">
                <img src={Walmart} alt="" className="clientImg" />
                <img src={adobe} alt="" className="clientImg" />
                <img src={microsoft} alt="" className="clientImg" />
                <img src={facebook} alt="" className="clientImg" />
            </div>
        </div>
        <div id="contact">
             <h1 className='contactPageTitle'>Contact Me</h1>
             <span className="contactDesc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id, suscipit?</span>
            <form action="" className="contactForm">
            <input type="text" placeholder='Your name' className="name" />
            <input type="email" placeholder='Your email' className="email" />
            <textarea className='msg' name="msg" id=""  rows="5" placeholder='Your Message'></textarea>
            <button className="submitBtn" type='Submin' value='send'>Submit</button>
            <div className="links">
            <img src={fbicon} alt="" className="link" />
            <img src={tticon} alt="" className="link" />
            <img src={yticon} alt="" className="link" />
            <img src={igicon} alt="" className="link" />
            </div>
            </form>
        </div>
    </section>
  )
}

export default Contact