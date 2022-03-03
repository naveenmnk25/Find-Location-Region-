import React from 'react';
import northpic from './images/North.png';
import southpic from './images/South.png';
import './LocationDisplay.css'

const LocationDisplay=(props)=>{
    var region=props.latitude>0? 'North':'South'
    var picture=props.latitude>0? northpic:southpic;
    return(
    <div className={region}>
       <div className='ui teal bottom attached label'> 
            <h1>hi,you are currently in {region} region .</h1>
       </div>
       <div className='ui raised text container segment'>
           <div className='image'>
           <img src={picture} alt="location pic"/>
           </div></div>
           </div>
    )
}

export default LocationDisplay;