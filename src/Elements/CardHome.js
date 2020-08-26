import React from 'react'
import Image1 from '../Imagens/Home/Capa1.jpg'
import Image2 from '../Imagens/Home/Capa2.JPG'
import Image3 from '../Imagens/Home/Capa3.jpg'
import Image4 from '../Imagens/Home/Capa4.jpg'

const CardHome = () =>{
    return (
        <div>                
           <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src={Image1} alt="Primeiro Slide"/>
                    </div>
                     <div className="carousel-item ">
                        <img className="d-block w-100" src={Image2} alt="Primeiro Segundo"/>
                    </div>
                     <div className="carousel-item ">
                        <img className="d-block w-100" src={Image3} alt="Primeiro Terceiro"/>
                    </div>
                     <div className="carousel-item ">
                        <img className="d-block w-100" src={Image4} alt="Primeiro Terceiro"/>
                    </div>
                </div>
                
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Anterior</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Próximo</span>
                </a>
            </div>
        </div>
    )
}



export default CardHome

