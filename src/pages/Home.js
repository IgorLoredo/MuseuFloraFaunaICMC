import React, { Component } from 'react'
import Navbar from '../Elements/Navbar'
import CardHome from '../Elements/CardHome'
import Card from '../Elements/Card'
import Rodape from '../Elements/Rodape'




export default class Home extends Component {
    
    render() { 
        const TextoCard = {
            {
                "Imagem":,
                "Titulo":,
                "Texto1":,
                "Texto2":
            },
        }
        

        return (
            <div>
                <div className = "">
                    <Navbar/> 
                    <CardHome/>
                </div>
                
               <div className = "container">
                   <div className = "featurette-divider">     
                        <Card/>
                        <Card/>
                        <Card/>
                   </div>
               
                   
               </div>
                <Rodape/>
            </div>
        )
    }
}
 