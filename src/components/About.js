import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import data from '../yourdata';
import profile from '../Asset/Images/TestImage.png'

class About extends Component {
    state = {  }
    render() { 
        return (<div className='about'>
            <div className='about-content'>
            <h1><Fade bottom cascade>About.</Fade></h1>
            <Fade bottom>
                    <p>{data.abouttext}</p>
            </Fade>
            </div>
            <img src={profile} alt='about image' style={{height:500}}></img>
            

        </div>  
        );
    }
}
 
export default About;