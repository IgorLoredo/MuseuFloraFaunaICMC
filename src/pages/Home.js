import React, { Component } from 'react'
import Navbar from '../Elements/Navbar'
import CardHome from '../Elements/CardHome'
import Card from '../Elements/Card'
import Rodape from '../Elements/Rodape'

import Imagem1 from '../Imagens/Home/a.png'
import Imagem2 from '../Imagens/Home/e.png'
import Imagem3 from '../Imagens/Home/c.png'

export default class Home extends Component {
    
    render() { 
        const TextoCard = {
            card :[
                {
                    "Imagem":Imagem1,
                    "Titulo": "História",
                    "Texto":"O	Museu da Fauna e Flora	do	ICMC é	um Museu a céu	aberto que	faz	parte do Programa de Gestão	Socioambiental	 e	 está	 vinculado à Comissão	 de	 Cultura	 e	 Extensão	 do	 ICMC.	 Está	 também	contemplado	no	Projeto	Acadêmico	do	ICMC	como	ação	transversal	no	capítulo	de	Sustentabilidade	Ambiental,	Econômica	e	Social.	Foi	concebido	para	pesquisar, reunir e	disseminar	informações	sobre o	conjunto	da	 fauna	e	da	 flora	da	 região	do	Campus	onde	se	encontra	o	ICMC.	Seus objetivos	são: promover a difusão da	fauna e flora o Instituto	 de	 Ciências	 Matemáticas	 e	 de	 Computação, promover	 conscientização	 da	 comunidade	 para	 o	 conhecimento	 e	 preservação	 dos	 recursos	ambientais	 do	campus	e	 da	 região,	associar	as	áreas	 de	ensino	e	pesquisa	da	unidade	às	questões ambientais. ",
                    "Link" : "/Historia" 
                    
                },
                {
                    "Imagem": Imagem3,
                    "Titulo": "Fauna",
                    "Texto": "Fauna é composta	principalmente	por	aves e	pássaros e apresenta uma grande	variedade	de	espécies,	atraídas pela flora existente",
                    "Link" : "/Fauna"                   
                },
                {
                    "Imagem": Imagem2,
                    "Titulo": "Flora",
                    "Texto":" A	 flora é composta de espécies	nativas	como pau-brasil,	 araucária,	 ipê,	 canela	 e	 pau-ferro,	 e	 exóticas como	 palmeiras,	 eucaliptos,	 pinus,	além	de	espécies	arbustivas	e	 forrações" ,
                    "Link" : "/Flora"                  
                }
            
            ]
            
        }
        

        return (
            <div>
                <div className = "">
                    <Navbar/> 
                    <CardHome/>
                </div>
                
               <div className = "container marketing">
                   <div className = "featurette-divider">     
                        <Card {...TextoCard.card[0]}/>
                        <Card {...TextoCard.card[1]}/>
                        <Card {...TextoCard.card[2]}/>
                   </div>
               
                   
               </div>
                <Rodape/>
            </div>
        )
    }
}
 