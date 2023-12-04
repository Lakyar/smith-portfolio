import React from 'react'
import './Skills.css'
import UIDesign from '../../assets/ui-design.png'
import WebDesign from '../../assets/website-design.png'
import AppDesign from '../../assets/app-design.png'


const Skills = () => {
  return (
    <section id="skills">
        <span className="skillTitle">What I do</span>
        <span className="skillDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut provident dolorem dicta commodi vitae magni! Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ad facere, porro quaerat consequatur aut.</span>
        <div className="skillBars">
        <div className="skillBar">
                <img src={UIDesign} alt="" className="skillBarImg" />
                <div className="skillBarTest">
                    <h2>UIDesign</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae doloribus alias blanditiis quis?</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={WebDesign} alt="" className="skillBarImg" />
                <div className="skillBarTest">
                    <h2>WebDesign</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae doloribus alias blanditiis quis?</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={AppDesign} alt="" className="skillBarImg" />
                <div className="skillBarTest">
                    <h2>AppDesign</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae doloribus alias blanditiis quis?</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills;