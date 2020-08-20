import React, { Component } from 'react'
import Navbar from '../Elements/Navbar'
import Rodape from '../Elements/Rodape'
import Card from '../Elements/CardFoto'
import Jpson from '../Json/FaunaCard.json'


export default class Fauna extends Component {
    render() {
       const card = {
            "image": '.'

       }
        return (
            <div>
                <Navbar/>
                <main>
                    <h3 className = "text-center "> Fauna:</h3>

                    <div className="album py-5 bg-light">
                        <div className = "container">
                            <div className = "row">     
                            <Card {...card}/>
                            
                             </div>                              
                        </div>
                    </div>
                </main>
                <Rodape/>
            </div>
        )
    }
}
