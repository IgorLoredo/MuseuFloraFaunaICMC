import React from 'react';

const Card = (props) => {
  return (   
    <a className = "btn" href= {props.Link}>
      <div className = " p-4 b-5 bg-light m-3">    
      <div class="row featurette">
        <div class="col-md-7 order-md-2">
          <h2 class="featurette-heading">{props.Titulo}</h2>
      <p class="lead text-justify" style = {{fontSize: '16px'}}>{props.Texto}</p>
        </div>
        <div class="col-md-5 order-md-1">
          <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto " style = {{width :'500'}, {height: '600'}}
                src = {props.Imagem} alt = {props.Titulo}/>
        </div>
      </div>
      </div>
  </a>
    
  );
}

export default Card;