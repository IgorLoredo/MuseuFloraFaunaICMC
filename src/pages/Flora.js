import React, { Component } from 'react'
import Navbar from '../Elements/Navbar'
import Rodape from '../Elements/Rodape'
import Card from '../Elements/CardFoto.js'
import Jpson from '../Json/FloraCard.json'
import Imagens from '../Imagens/index'


export default class Fauna extends Component {
    
    render() {
       const card = { 
           'Flora': [
               {
                Imagem:''    ,     
                Texto: "",
                Descricao: ""
               }
           ]
       }

    
    function ImageList(props){ 
            
        for(let i =0; i < Jpson.Flora.length; i++){
            props.Flora[i].Imagem =Imagens(Jpson.Flora[i].Texto);
            props.Flora.push(Jpson.Flora[i]);
       }  
       
         console.log( "tiranod: "+props.Flora.shift());         
        console.log(props.Flora.pop());
         
          props.Flora.sort();
       const content = card.Flora.map((card)=>
           <Card  {...card}/>
       );
      
       return (
         <>{content}</>
       );
        
    }    
      
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
