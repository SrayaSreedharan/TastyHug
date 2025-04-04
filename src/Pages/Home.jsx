import React from 'react'
import Navbars from '../Compoents/Navbars';
import '../Pages/Home.css'
import image3 from '../Pages/home1.png';
import image4 from '../Pages/home2.png';
import image5 from '../Pages/home3.png';

const Home = () => {
  return (
    <>
    <div className='home'>
    <Navbars/>
    <div className="imgs">
    <div className='d-flex'>
    <div>
        <img src={image3} style={{width:"180px" ,height:"180px",marginTop:'205px',marginLeft:'150px'}} />
    </div>
    <div >
        <img src={image4}  style={{width:"200px" ,height:"200px",marginLeft:'-30px'}}/>
    </div>
    <div >
        <img src={image5}  style={{width:"200px" ,height:"200px",marginTop:'190px',marginLeft:'-30px'}}/>
    </div>
    <div style={{marginLeft: '100px',marginTop: '60px',marginRight: '380px'}}>
        <h1 style={{color:'darkorange',marginLeft:'-50px'}}>Life Medicine</h1>
        <p style={{color:'white',textAlign:'justify'}}>Our nutritional needs change with different life stages. To be fit and healthy, it is important to take into account the extra demands placed on your body by these changes.</p>
    </div>
    </div>
</div>
</div>
                                            {/* responsive view */}
<div className='home2'>
    <Navbars/>
<div className="imgs">
    <div className='d-flex'>
    <div className='imgs2'>
    <div className='home1'>
        <img src={image3} style={{width:"180px" ,height:"180px",marginTop:'205px',marginLeft:'150px'}} />
    </div>
    <div className='home2'>
        <img src={image4}  style={{width:"200px" ,height:"200px",marginLeft:'-30px'}}/>
    </div>
    <div className='home3'>
        <img src={image5}  style={{width:"200px" ,height:"200px",marginTop:'190px',marginLeft:'-30px'}}/>
    </div>
    <div className='hme'>
    <div style={{marginLeft: '100px',marginTop: '60px',marginRight: '380px'}}>
        <h1 style={{color:'darkorange',marginLeft:'-50px'}}>Life Medicine</h1>
        <p style={{color:'white',textAlign:'justify'}}>Our nutritional needs change with different life stages. To be fit and healthy, it is important to take into account the extra demands placed on your body by these changes.</p>
    </div>
    </div>
    </div>
</div>
</div>
</div>
    </>
  )
}
export default Home
