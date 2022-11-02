import React, { Component } from 'react';
import axios from 'axios';
import Global from '../Global';
import { Navigate } from 'react-router-dom';

class NuevoPersonaje extends Component {

    //creamos las caja para meter los datos que queremos cambiar
    cajaNombre = React.createRef();
    cajaImagen = React.createRef();
    cajaSerie = React.createRef();

    state = {
        statusPut: false
    }

    postPersonaje = (e) => {
        

        var nombre = this.cajaNombre.current.value;
        var imagen = this.cajaImagen.current.value;
        var serie = this.cajaSerie.current.value;

        var personaje = {
            idPersonaje: 1,
            nombre: nombre,
            imagen : imagen,
            fecha: serie
        }

        var url = Global.urlSeries + "/api/Series";
        axios.post(url, personaje).then(response => {
            this.setState({
                statusPut: true
            })
        })
    }

    render() {
        if (this.state.statusPut == true) {
            return (
               <Navigate to='/personajes' />
            );
        }

        return (
            <div>
                <h1 className='py-2 bg-info text-white'>Nuevo personaje</h1>

                <form onSubmit={this.postPersonaje} className='w-75' style={{ margin: "10px auto" }}>
                    <label>Nombre:</label>
                    <input type='text' className='form-control' required ref={this.cajaUsuario} />

                    <label>Imagen:</label>
                    <input type='url' className='form-control' required ref={this.cajaResultado} />

                    <label>Serie:</label>
                    <select id="serie" name="serielist" form="serieform">
                       {/* aqui irian las series recogidas por la api  */}

                       {/* estoy imprimiendo en el select los nombres de las series con la key idSerie   */}
                       {
                           this.state.map(elemento => {

                            <option key={elemento.idSerie}value={elemento.idSerie}>{elemento.nombre}</option>
                           } 
                        )}

                      
                    </select>
                    <button className='btn btn-primary my-2'>
                        Insertar Personaje
                    </button>
                </form>
            </div>
        );
    }
}

export default NuevoPersonaje;