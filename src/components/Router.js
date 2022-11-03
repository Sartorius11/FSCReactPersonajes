import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

import Menu from './Menu';
import Home from './Home';
import NuevoPersonaje from './NuevoPersonaje';
import Personajes from './Personajes';
import Series from './Series';
import ModificarPersonaje from './ModificarPersonaje';

class Router extends Component {

    render() {
        function SerieElement() {
            var { idSerie } = useParams();
            return (
                <Series idSerie={idSerie} />
            )
        }

        function ModificarPersonajeElement() {
            var { idPersonaje, idSerie } = useParams();
            return (
                <><ModificarPersonaje idPersonaje={idPersonaje} /><Series idSerie={idSerie} /></>
            )
        }

        function PersonajesElement() {
            var { idPersonaje } = useParams();
            return (
                <Personajes idPersonaje={idPersonaje} />
            )
        }

        function PersonajesElementSerie() {
            var { idSerie } = useParams();
            return (
                <Personajes idSerie={idSerie} />
            )
        }

        return (
            <BrowserRouter>
                <Menu />
                <Routes>
                    {/* <Route path='/' element={<Menu/>}/> */}
                    <Route path='/' element={<Home />} />
                    <Route path='/NuevoPersonaje' element={<NuevoPersonaje />} />
                    <Route path='/ModificarPersonaje/:idPersonaje/:idSerie' element={<ModificarPersonajeElement />} />
                    <Route path='/Personajes' element={<PersonajesElement />} />
                    <Route path='/Personajes/:idSerie' element={<PersonajesElementSerie />} />
                    <Route path='/series/:idSerie' element={<SerieElement />} />
                </Routes>
            </BrowserRouter>
        )
    }
}

export default Router;