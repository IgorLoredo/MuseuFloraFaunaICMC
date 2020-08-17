import React from 'react';

const Card = (props) => {
  return (   
    <div className = "col-2 col-sm-4 p-4 b-5">
        <div className="card bg-dark " style={{width:'18rem'}}>
            <img className="card-img-top" src="" alt="Imagem de capa do card"/>
         <div className="card-body">
                <h5 className="card-title text-light">{props.Titulo1}</h5>
                <p className="card-text text-light">{props.Texto1}</p>
            <a href="#" className="btn btn-primary">Visitar</a>
            </div>
        </div>
    </div>
  );
}

export default Card;