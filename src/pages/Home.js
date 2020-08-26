import React, { Component } from 'react'
import Navbar from '../Elements/Navbar'
import CardHome from '../Elements/CardHome'
import Card from '../Elements/Card'
import Rodape from '../Elements/Rodape'

import Imagem1 from '../Imagens/Home/bem-te-vi.jpg'
import Imagem2 from '../Imagens/Home/Passaro.JPG'
import Imagem3 from '../Imagens/Home/Foto1.JPG'

export default class Home extends Component {
    
    render() { 
        const TextoCard = {
            card :[
                {
                    "Imagem":Imagem1,
                    "Titulo": "Historia",
                    "Texto1":"......",
                    "Texto2": " ..... "
                },
                {
                    "Imagem": Imagem2,
                    "Titulo": "Fauna",
                    "Texto1": " .....",
                    "Texto2": " ...... "
                },
                {
                    "Imagem": Imagem3,
                    "Titulo": "Flora",
                    "Texto1":" ..... ",
                    "Texto2": " ;...... "
                }
            
            ]
            
        }
        

        return (
            <div>
                <div className = "">
                    <Navbar/> 
                    <CardHome/>
                </div>
                
               <div className = "container">
                   <div className = "featurette-divider">     
                        <Card {...TextoCard.card[0]}/>
                        <Card {...TextoCard.card[1]}/>
                        <Card {...TextoCard.card[2]}/>
                   </div>
               
                   
               </div>
                <Rodape/>
            </div>
        )
    }
}
 