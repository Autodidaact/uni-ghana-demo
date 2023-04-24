import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';  
import {Container ,Dropdown,  DropdownButton} from 'react-bootstrap';
import './styles/herosection.css'

export default function HeroSection(){
   
    return (
        <div className="hero">
            <div className="col typography">
                <h1 className="title">What Are We About</h1>
                <p className="info">DelicaciesCrib is a place where you can <i><b>pamper</b></i> your soul and tummy with delicious food recipes. And our service is absolutely free. So start exploring now.</p>
            </div>
        </div>
    )
}
