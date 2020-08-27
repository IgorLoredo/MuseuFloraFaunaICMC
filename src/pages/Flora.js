import React, { Component } from 'react'
import Navbar from '../Elements/Navbar'
import Rodape from '../Elements/Rodape'
import Card from '../Elements/CardFoto'
import Jpson from '../Json/FaunaCard.json'
import Imagens from '../Imagens/index'


export default class Fauna extends Component {
    
    render() {
       const card = { 
           'Flora': [
               {
                Imagem:''    ,     
                Texto: "Igor",
                Descricao: "iojojos"
               }
           ]
       }

    
    function ImageList(props){        
        for(let i =0; i < Jpson.Flora.length; i++){
            props.Flora[i].Imagem =Imagens(Jpson.Flora[i].Texto);
            props.Flora.push(Jpson.Flora[i]);
       }
       const content = Jpson.Flora.map((card)=>
           <Card  {...card}/>
       );

       return (
         <>{content}</>
       );
        
    }
       /*for(let i =0; i < Jpson.Flora.length; i++){
            card.Flora.push(Jpson.Flora[i]);
            card.Flora[i].Imagem =Imagens(Jpson.Flora[i].Texto) ;
       }
       const content = Jpson.Flora.map((card)=>
        <Card{...card} Imagem = {card.Imagem} />      
       ); */
       console.log(card);


        return (
            <div>
                <Navbar/>
                <main>
                <h4 className = "text-center bg-light m-2 p-3 font-weight-bold" >
                            Flora</h4>                
                
                    <div className="album py-5 bg-light">
                        <div className = "container">
                            <div className = "row">                              
                                {ImageList(card)}     
                                                         
                             </div>                              
                        </div>
                    </div>
                </main>
                <Rodape/>
            </div>
        )
    }
}
