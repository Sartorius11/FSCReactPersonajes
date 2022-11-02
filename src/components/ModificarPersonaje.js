import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import Global from '../Global';

// En esta clase vamos a colocar dos select para cambiar los personajes dentro de las series
class ModificarPersonaje extends Component {


        state = {
            mpersonaje: {},
            statusGet: false
        }

    //  para modificar los personajes 
    loadModificarPersonaje = () => {
        var url = Global.urlSeries + '/api/Personajes/' + this.props.idPersonajes;
        axios.post(url).then(response => {
            this.setState({
                mpersonaje: response.data,
                statusGet: true
            });
        });
    }

    componentDidMount = () => {
        this.loadModificarPersonaje();
        this.loadModificarSerie();
    }


    //para modificar las series
    stateSerie = {
        mserie: [],
        statusGet: false
    }


    loadModificarSerie = () => {
        var url = Global.urlSeries + '/api/Series/' + this.props.idSerie;
        axios.post(url).then(response => {
            this.setState({
                serie: response.data,
                statusGet: true
            });
        });
    }
    


    //actualizamos las propiedades tanto de Personaje como de serie
    componentDidUpdate = (oldProps) => {
        if (oldProps.idPersonajes != this.props.idPersonajes) {
            this.loadModificarPersonaje();
        }

        if (oldProps.idSerie != this.props.idSerie) {
            this.loadModificarSerie();
        }

    }



    render() {
        return (


            <div>
                <h1 className='py-2 bg-info text-white'>Modificar Personaje y Serie</h1>

                <form onSubmit={this.loadModificarPersonaje} className='w-75' style={{ margin: "10px auto" }}>
                    

                <label>Personaje:</label>
                    <select id="serie" name="serielist" form="serieform">
                        {/* aqui irian los Personajes modificados */}

                        {
                           this.state.mpersonaje.map(elemento => {

                            <option key={elemento.idPersonaje}value={elemento.idPersonaje}>{elemento.nombre},{elemento.imagen}</option>
                           } 
                        )}
                  
                    </select>


                    <label>Serie:</label>
                    <select id="serie" name="serielist" form="serieform">
                    {
                           this.stateSerie.map(elemento => {

                            <option key={elemento.idSerie}value={elemento.idSerie}>{elemento.nombre},{elemento.imagen}</option>
                           
                           } 
                        )}
                    </select>
                  

                       
                    <button  className='btn btn-primary my-2'>
                       Guardar Cambios
                    </button>

                </form>
            </div>

        )
    }
}

export default ModificarPersonaje;