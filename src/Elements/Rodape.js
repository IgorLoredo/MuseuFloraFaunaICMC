import React, { Component } from 'react'

export default class Rodapé extends Component {
    render() {
        return (
            <div className = "pr-100 container-fluid bg-light">
                 <footer className="text-muted">
                     <div className="container">
                         <hr></hr>
                        <p className = "text-center">Museu da Fauna e Flora</p>
                        <p className = "text-center" >Instituto de Ciências Matemáticas e de Computação da Universidade de São Paulo</p>
                        <hr></hr>
                    </div>
                </footer>
            </div> 
        )
    }
}
