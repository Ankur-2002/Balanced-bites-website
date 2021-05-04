import React from 'react';
import './Component.css';
import EmailIcon from '@material-ui/icons/Email';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import FacebookIcon from '@material-ui/icons/Facebook';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import InstagramIcon from '@material-ui/icons/Instagram';
const Header = () =>{
return (
<>

<div className="container-fluid ">
<div className="row head d-flex">
 
<div className="col-lg-3 text-center p-2">
    <WhatsAppIcon className="whatsapp"/><a><span className="p-2">98761431736</span></a>
    </div>

    <div className="col-lg-5 text-center p-2">
    <EmailIcon className="mail" /><a> balancedbites10@gmail.com</a>
    </div>
  

<div className="col-lg-4 p-2 d-flex gap-3 justify-content-center">
<FacebookIcon />
<MailOutlineIcon/>
<InstagramIcon />
<EmailIcon/>
</div>
</div> 
</div>

</>
);


}
/*
<ul class="nav justify-content-around">
  <li class="nav-item">
    <NavLink class="nav-link " aria-current="page" to="/">LOCATION</NavLink>
  </li>
  <li class="nav-item">
    <NavLink class="nav-link" to="/">WhatsApp NO.</NavLink>
  </li>
  <li class="nav-item">
    <NavLink class="nav-link" to="/">SOCIAL WEB</NavLink>
  </li>
  <li class="nav-item">
   <NavLink class="nav-link" to="/">E-MAIL</NavLink>
  </li>
</ul>


*/


export default Header;