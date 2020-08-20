import React from 'react';
import Jpson from '../Json/FaunaCard.json'
import image from '../Imagens/Abacateiro.png'

const Card = (props) => {
 
 console.log(props.Imagem);

  return (   
    <div className="col-md-4">
        <div className="card mb-4 shadow-sm">        
          <img className="bd-placeholder-img card-img-top" src={image} alt={props.Descricao}/>
            <div className="card-body">
            <p className="card-text">
              {props.Text}
                </p>          
            
            </div>
        </div>
        </div>
  );
}

export default Card;


