import React, { Component } from 'react';
import ImgSeries from '../assets/images/series-tv.jpg'

class Home extends Component {
    render() {
        return (
            <div>
               
                <img src={ImgSeries} style={{maxWidth:"80vw"}}/>
            </div>
        )
    }
}

export default Home;