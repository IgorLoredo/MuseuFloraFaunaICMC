import React from 'react';

const Card = (props) => {
 console.log(props);
  return (   
    <div className="col-md-4">
        <div className="card mb-4 shadow-sm">        
          <img className="bd-placeholder-img card-img-top" 
          src={props.Imagem} alt={props.Texto}/>
            <div className="card-body">
            <p className="card-text">
                <h6>{props.Texto}</h6>
               {props.Descricao}              
                </p>          
            
            </div>
        </div>
        </div>
  );
}

export default Card;


