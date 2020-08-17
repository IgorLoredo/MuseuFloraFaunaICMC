import React, { Component } from 'react'

export default class Navbar extends Component {
    render() {
        return (
            <div>
               <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <a className="navbar-brand" href="/">Museu da Flora e Fauna</a>
                    <ul className="navbar-nav mr-auto ">
                        <li className="nav-item ">
                            <a className="nav-link text-light" href="/Flora">Árvores e Flores</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="/Fauna">Animais</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="/Historia">História</a>
                        </li>
                    </ul>
                </div>
               </nav>
            </div>
        )
    }
}


