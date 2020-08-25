import React, { Component } from 'react'
import Navbar from '../Elements/Navbar'
import Rodape from '../Elements/Rodape'

export default class Historia extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <h4 className = "text-center bg-light m-2 p-3 font-weight-bold" >História</h4>
                  <main className = "bg-light w-10 p-5 text-justify ">         
                    <p >  
                        &nbsp;O Museu da Fauna e Flora do ICMC foi criado em 2013, a partir do interesse em registrar e
                        difundir as espécies existentes no campus da USP em São Carlos, em particular, na região do ICMC. 
                        Essa região contém uma grande parte da área arborizada da área 1 do campus, compondo um ambiente com 
                        espécies arbóreas de grande, médio e pequeno portes e um conjunto de pequenos animais e pássaros não catalogados.
                        Conciliando ações da Superintendência de Gestão Ambiental da USP, apoiadora do projeto, e da
                        Comissão de Cultura e Extensão do ICMC, que aprovou a criação do Museu e enfatizou a importância da manutenção 
                        as áreas verdes e preservação das espécies que aqui se encontram, este é um espaço privilegiado para a convivência de 
                        comunidade da USP e de São Carlos.</p>
                   
                        <p>
                            <h6> Missão e Objetivos </h6>
                             &nbsp; O projeto do Museu da Fauna e Flora foi idealizado como parte das atividades de cultura e extensão do ICMC,
                            com o objetivo de promover a difusão da fauna e flora do Instituto. Este museu a céu aberto contempla a identificação das 
                            espécies em uma placa contendo o nome, suas características, origem e história dentro da Unidade, e possibilidade de acesso a 
                            informações por meio de mídias digitais.
                        </p>

                        <p>
                            &nbsp;O Museu da Fauna e Flora tem também o objetivo de associar as áreas de pesquisa do ICMC às questões ambientais,
                            sendo entendido também como uma importante iniciativa e contribuição para os aspectos relacionados à gestão ambiental da USP.
                            Esta proposta foi estruturada e documentada de modo a permitir e facilitar a sua implementação em outras unidades da USP e mesmo em
                            outros órgãos que queiram implementar esta idéia.
                        </p>      

                        <h6>Visite o Museu </h6>
                        <p> 
                        &nbsp; Venha visitar o ICMC e conhecer a bela fauna e flora aqui existente! Como se trata de um projeto diferenciado, os visitantes, ao
                            entrarem no ICMC, já estão no ambiente do Museu da Fauna e Flora. No ICMC como um todo, para qualquer lado que se olhe, é possível 
                            observar pássaros ou espécies de plantas nativas ou exóticas. Dessa forma, o Museu está sempre aberto.
                        </p>  
                        <p>
                            Instituto de Ciências Matemáticas e de Computação (ICMC) - Universidade de São Paulo (USP) <br/>
                            Avenida Trabalhador são-carlense, 400 - Centro <br/>
                            CEP: 13566-590 - São Carlos - SP<br/>
                            Tel.: (16) 3373-6626<br/>
                            E-mail: mff@icmc.usp.br<br/>
                        </p>
                </main>
                <Rodape/>
            </div>
        )
    }
}
