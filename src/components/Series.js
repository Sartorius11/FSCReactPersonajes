import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import Global from '../Global';

class Series extends Component {
    state = {
        series : {},
        status : false
    }

    loadSeries = () => {
        var url = Global.urlSeries + '/api/Series' + this.props.idSerie;
        axios.get(url).then(response => {
            this.setState({
                series : response.data,
                status : true
            });
        });
    }

    componentDidMount = () => {
        this.loadSeries();
    }

    componentDidUpdate = (oldProps) => {
        if (oldProps.idSerie != this.props.idSerie) {
            this.loadSeries();
        }
    }

    render() {
        if (this.state.status != true) {
            return (<h1 className='my-2'>La página está cargando..</h1>);
        } else {
            return (
                <div className='w-75 border' style={{margin:"10px auto"}}>
                    
                    
                    <img src={this.state.series.imagen} style={{maxHeight:"25vh"}}/>

                    <h1 className='bg-light border py-2 font-monospace'>
                        {this.state.series.nombre}
                    </h1>

                    <p className='font-monospace'>
                        IMBD
                        {this.state.series.puntuacion}
                    </p>



                    <NavLink className='btn btn-success' style={{marginBottom:"10px"}}
                             to={'/personajes/' + this.state.series.idSerie}>
                        Personajes
                    </NavLink> &nbsp;




                    
                </div>
            );
        }
    }
}

export default Series;