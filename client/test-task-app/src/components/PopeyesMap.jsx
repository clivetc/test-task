import React, { Component } from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import Routing from './RoutingRoutes';
import villageData from './../data/popeye-village-balluta.json';
import lunchData from './../data/lunch.json';
import { w3cwebsocket as W3WebSocket } from 'websocket';

const client = new W3WebSocket('ws://127.0.0.1:3300');

class PopeyesMap extends Component{
    constructor() {
        super();
        this.state = {
          lat: 35.917973,
          lng: 14.409943,
          zoom: 5,
          isMapInit: false
        };
      }
    
      saveMap = map => {
        this.map = map;
        this.setState({
          isMapInit: true
        });
      };
    componentDidMount() {
        client.onopen =() =>{
            console.log('WebSocket Client Connected')
        }
        console.log(villageData)
        console.log(lunchData)
    }
    
    render(){
        const { lat, lng, zoom } = this.state;
    const position = [lat, lng];
        return(
            <div>
                <h1 style={{textAlign:"center"}}>Popeyes Routes</h1>
                <MapContainer
                style={{height:"80vh"}}
                zoom = {zoom}
                center={position}
                scrollWheelZoom={true}
                ref={this.saveMap}
                >
                    <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
                    <GeoJSON data={villageData.features}/>
                    <Routing/>
                    <GeoJSON data={lunchData.features}/>
                    
                </MapContainer>
            </div>
        )
    }
}

export default PopeyesMap;