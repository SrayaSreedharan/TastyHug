import React from 'react'
import image4 from '../Pages/about.jpg';
import image5 from '../Pages/about 2.jpg';
import '../Pages/About.css'
import Navbarwe from '../Compoents/Navbarwe';

const About = () => {
  return (
    <div className='about'>
      <Navbarwe/>
      <div className='aboutus' style={{ height:'400px'}}>
        <h1 > About us</h1>
        <p style={{color:'white'}}>
        TASTYHUG opened on Thanks giving Day 2000. Chef / Owner sraya sreedharan began baking pies and selling them to restaurants and his neighbors out of a small kitchen at the corner of Hudson and North Moore St. in Tribeca. Today, NYC’s beloved restaurant and tastyhug celebrates 25 years of classic, made from scratch American cooking.
        </p>
       <div> <img src={image4} alt="img" style={{height:'200px',width:'300px'}} /></div>
       <div style={{marginTop:'-200px'}}> <img src={image5} className='abt' style={{height:'200px',width:'300px'}} /></div>
      </div>
    </div>
  )
}
export default About
