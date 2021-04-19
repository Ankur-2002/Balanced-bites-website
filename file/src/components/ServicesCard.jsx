import React, { Component } from 'react';
import $ from 'jquery';
import { findDOMNode } from 'react-dom';
import { NavLink, Link, Route} from 'react-router-dom';
import Program from './Program';
import { ThreeSixty } from '@material-ui/icons';

class ServicesCards extends Component{

  hand = () =>{     
      const e = findDOMNode(this.refs.toggle);
      const img = findDOMNode(this.refs.img);
      $(e).addClass('animate');
      $(img).addClass('opacity');
  }

  leave =()=>{
    const img = findDOMNode(this.refs.img);
    const e = findDOMNode(this.refs.toggle);
      $(e).removeClass('animate');
      $(img).removeClass('opacity');
  }

  c = () =>{
    console.log(this.props.num);
  }

  render(){
      return (
          <>
  <div className="col-12 col-lg-4 mb-5">



  
  <div class="card " onMouseLeave={this.leave} onMouseOver={this.hand} style={{ border:"2px solid greenyellow",Width:"18rem",height:"50vh",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundImage:`url(${this.props.imgsrc})`}}>
  
  <div class="card-body servicecards">
    <p class="title" style={{fontSize:"20px",fontWeight:"700",color:"purple"}}>{this.props.title}</p>
  </div>
  <div className="content d-flex flex-column justify-content-center" ref="toggle">
        <h1 className="text-center " style={{fontSize:"25px",fontWeight:"700",color:"red"}}>{this.props.title}</h1>
        <span>Diet therapy for diabetes mellitus involves a well-balanced diet plan to manage blood glucose levels as well as stress</span>
        <Link className="btn btn-primary" to={{pathname:'/Program',state:{key : this.props.num}}} ><span >Go More</span></Link>
  </div>
</div>








{/*
  <div className="maincards"  onMouseLeave={this.leave} > 
  <div >
  <img className="card-img-top " onMouseOver={this.hand} ref="img" src={this.props.imgsrc} alt="Card image cap"  />
  </div>
  <div className="card-body servicecards"  onMouseOver={this.hand}>
  <h5 className=" text-center" >{this.props.title}</h5>
  
  
  <div className="Cardbody" >
  <div className="textforprogram" not use anywhere > 
  <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus architecto inventore hic blanditiis commodi, perferendis illum voluptatibus at nostrum rem asperiores totam facilis eaque nesciunt impedit recusandae maxime! Quas, accusamus.</span>
  </div>
  <div className="buttomonservice">
  
  </div>
  </div>

  </div>
  </div>
  */}
</div>


      
</>
)
}
}

export default ServicesCards;

// <Link className="btn btn-primary" to={{pathname:'/Program',
//state:{key : this.props.num}
//}} ><span >Go More</span></Link>