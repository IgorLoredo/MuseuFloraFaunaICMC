import React, { Component } from 'react';

export class BarraSuperior extends Component {
    render() {
        return (
            <div>
               <ul class="nav justify-content-front">
                  <li class="nav-item">
                    <a class="nav-link active" href="#">Página principal</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Árvores e Flores</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Animais</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#" >Historia</a>
                  </li>
                </ul>
            </div>
        )
    }
}

export default BarraSuperior;