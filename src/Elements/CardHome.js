import React from 'react'
import Image1 from '../Imagens/Home/1.png'
import Image2 from '../Imagens/Home/2.png'
import Image3 from '../Imagens/Home/3.png'
import Image4 from '../Imagens/Home/4.png'




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

