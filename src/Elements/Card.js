import React from 'react';

const Card = (props) => {
  return (   
    <div className = "col-2 col-sm-4 p-4 b-5">
            <div class="row featurette">
      <div class="col-md-7">
    <h2 class="featurette-heading"> {props.Titulo}
    <span class="text-muted"> {props.Texto1}</span></h2>
            <p class="lead">{props.Texto2}</p>
      </div>
      <div class="col-md-5">
         <img class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" 
              src = {props.Imagem}/>
      </div>
    </div>
    </div>
  );
}

export default Card;