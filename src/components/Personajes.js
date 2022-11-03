import React, { Component } from 'react';

//importamos  global , axios, navlink
import Global from '../Global';
import axios from 'axios';

class Personajes extends Component {

    state = {
        personajes: [],
        statusGet: false
    }

    //Cargo las url's de personajes de la API
    loadPersonajes = () => {
        var url = Global.urlSeries + 'api/Personaje'
        axios.get(url).then(response => {
            this.setState({
                perso: response.data,
                statusGet: true
            });
        });
    }

    //las monto 
    componentDidMount = () => {
        this.loadPersonajes();
    }

    render() {
        return (
            <div className='border'>
                {/* creamos una tabla para los personajes */}
                <table className='table table-bordered'>
                    <thead>
                        <tr>
                            <th>Personaje</th>
                            <th>Imagen</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* si statusGet es verdadero entonces imprimeme la tabla  */}
                        {
                            this.state.statusGet == true && (
                                this.state.perso.map((person, index) => {
                                    return (
                                        <tr key={person.idPersonaje}>
                                            <td>{person.nombre}</td>
                                            <td>{person.imagen}</td>
                                        </tr>
                                    );
                                })
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}
export default Personajes;