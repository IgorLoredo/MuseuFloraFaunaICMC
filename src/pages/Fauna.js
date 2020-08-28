import React, { Component } from 'react'
import Navbar from '../Elements/Navbar'
import Rodape from '../Elements/Rodape'
import Card from '../Elements/CardFoto'


export default class Fauna extends Component {
    render() {
      
        return (
            <div>
                <Navbar/>
                <main>
                <h4 className = "text-center bg-light m-2 p-3 font-weight-bold" >Fauna</h4>

                    <div className="album py-5 bg-light">
                        <div className = "container">
                            <div className = "row">     
                          
                            
                             </div>                              
                        </div>
                    </div>
                </main>
                <Rodape/>
            </div>
        )
    }
}
