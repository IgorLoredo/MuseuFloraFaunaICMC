import React from 'react';

const Card = (props) => {
  return (   
    <div className = "col-2 col-sm-4 p-4 b-5 bg-light m-3">
            <div className="row featurette">
      <div className="col-md-7">
    <h2 className="featurette-heading"> {props.Titulo}
    <span className="text-muted"> {props.Texto1}</span></h2>
            <p className="lead">{props.Texto2}</p>
      </div>
      <div className="col-md-9">
         <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" style = {{width :'700'}, {height: '500'}}
              src = {props.Imagem}/>
      </div>
    </div>
    </div>
  );
}

export default Card;