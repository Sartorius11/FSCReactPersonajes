import React, { Component } from 'react';


//IMPORTAMOS  NAVLINK Y AXIOS
import { NavLink } from 'react-router-dom';
import axios from 'axios';


//IMPORTAMOS Global.js y el logo

import Global from '../Global';
import logoStranger from '../assets/images/stranger.png';



class Menu extends Component {


    //Ponemos el state el false  porque todavia no hemos hechos cambios en la pagina
    state = {
       series : [],
        statusGet : false
    }


    //funcion loadEquipos que dentro va, URL y el axios GET PARA RECOGER LOS DATOS DE LA API 
    loadSeries = () => {
        var url = Global.urlSeries + '/api/Series';
        axios.get(url).then(response => {
            this.setState({
                series : response.data,
                statusGet : true
            })
        });
    }


    //después de montar un componente (insertado en el árbol).
    // La inicialización que requiere nodos DOM debe ir aquí. 
    componentDidMount = () => {
        this.loadSeries();
    }



    //se pinta el componente Menu 
    render() {
        return (


            <div>
                <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">

                    {/* Navlink  className para  enviar las rutas con el router */}
                    <NavLink className="navbar-brand" to='/'>
                        <img src={logoStranger} style={{maxHeight:"100px"}}/> &nbsp;
                        
                    </NavLink>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/">
                                    Home
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link" to="/NuevoPersonaje">
                                    Nuevo Personaje
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link" to="/ModificarPersonaje">
                                    Modificar Personaje
                                </NavLink>
                            </li>

                            

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Series
                                </a>



                                {/* en este drop menu es donde se desliza la pagina web  */}
                                <ul className="dropdown-menu">

                                {/* si this.state.statusGet es verdad entonces pintame el item de idequipo (dentro la api) */}
                                    {
                                        (this.state.statusGet == true) && (
                                            this.state.series.map((serie, index) => {
                                                return (
                                                    <li key={serie.idSerie}>
                                                        <NavLink className="dropdown-item" to={'/series/ ' + serie.idSerie}>
                                                            {serie.nombre}
                                                        </NavLink>
                                                    </li>
                                                );
                                            })
                                        )
                                    }




                                </ul>
                            </li>

                        </ul>
                    </div>
                </div>
                </nav>
            </div>
        )
    }
}

//exportamos el Menu 
export default Menu;