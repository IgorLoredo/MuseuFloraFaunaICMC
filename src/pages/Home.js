import React, { Component } from 'react'
import Navbar from '../Elements/Navbar'
import CardHome from '../Elements/CardHome'
import Card from '../Elements/Card'
import Rodape from '../Elements/Rodape'
var  JsonProps = require( '../Json/Card.json');



export default class Home extends Component {
    
    render() {          
        return (
            <div>
                <div className = "">
                    <Navbar/> 
                    <CardHome/>
                </div>
                
               <div className = "container">
                   <div className = "row">                    
                   </div>
               
                   
               </div>
                <Rodape/>
            </div>
        )
    }
}
 