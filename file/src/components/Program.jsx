import React, {useState} from 'react'; 
import { Link } from 'react-router-dom';
import Photo from '../Image/pics/program-4.jpg'
import Newdata from '../Data/Newdata';
import Sdata from '../Data/Sdata';
import ProgramsFeatures from './ProgramFeatures';
import VisibilitySensor from 'react-visibility-sensor';
const Program =(props)=>{ 
 
    const [showB, setB]=useState(false);
    
    const [showC, setC]=useState(false);
var title,description,logo,second,third;

    Newdata.map( (value,key)=>{
        if(key===(props.location.state.key))
        {
        title = value.title;
        description = value.description;
        second = value.second;
        third = value.third
        logo = value.imgsrc;
        return ("");
    }
    return ("");
    })
return (
<>
<div>
<div className=" container-fluid">
    <div className="row p-0"  >
    <div className="col-lg-12 p-0  col-12">
    <img className="IMAGEFORPROGRAM" src={Photo} alt="sorry"></img>
    </div>
    </div>
 
        <div className=" text-center program-header" >
        <span className="OurStyle">Our</span><VisibilitySensor
               partialVisibility 
               onChange={(isVisible) => {
                 
                 setB(isVisible?true:false);
                 
            
          
        }}>
        <span  className={showB?'serviceStyle borderbottom':'serviceStyle'} >Service</span></VisibilitySensor>
        </div>
    <div className="row mt-5">  
        
        <div className="col-lg-3 col-md-12 col-sm-12 col-12 d-flex">
        <div className="alllink d-flex flex-column">
            
            {
                Sdata.map( (value,key) =>{
                    return (
                        <Link   className="link" to={{pathname:'/Program',
                        state:{key : key}}} key={key}><span dangerouslySetInnerHTML={{__html: value.title}}></span> </Link>
                    );
                })
            }
        </div>
        </div> 



        <div className="col-lg-9 col-sm-12 col-md-12 col-12 d-flex">
        <div className="program-photo">

        <img src={logo} className="" alt="BalancedBites" style={{backgroundColor:"no-repeat", backgroundSize:"cover",backgroundPosition:"center",objectFit:"contain",width:"100%"}}></img>

        <img  alt="alt"src={logo} className="PROGRAMS-PHOTO" ></img>
        </div>
        
      
        </div>
        </div>



        <div className="row text-black   d-flex justify-content-center">
         
           <div  className="text-center PROGRAM-HEADING"><VisibilitySensor
               partialVisibility 
               onChange={(isVisible) => {
                 
                 setC(isVisible?true:false);
                 
            
          
        }}>
           <span className={showC?'borderbottom':''} dangerouslySetInnerHTML={{__html:title}}></span></VisibilitySensor>
             </div>
         
        <div className="col-lg-12 pt-3" style={{padding:"0px 10px"}}>
            <ul style={{listStyle:"none"}}>
            
            
            <li> 
            <p className="program-text" dangerouslySetInnerHTML={{__html: description}}>
             
            </p></li>
            <li><p className="program-text1" dangerouslySetInnerHTML={{__html : second}}>
            
            </p></li>
            <li><p className="program-text2" dangerouslySetInnerHTML={{__html : third}}>
            
            </p></li>
            </ul>
        </div>
        </div>

        </div>
     
        <ProgramsFeatures/>

    </div>

</>
);
}
export default Program;