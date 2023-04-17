import React, { useState, useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "leaflet.heat";
import { locations } from "../../data/locations";
import { concerts } from "../../data/concerts";
import { Link } from "react-router-dom";

// const heatmapData = locations.map(loc => [loc.latlng[0], loc.latlng[1]]);
const heatmapData = locations.map((loc) => [
  loc.latlng[0],
  loc.latlng[1],
  concerts.filter((concert) => concert.locationId === loc.id).length,
]);

export const Map = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    const map = L.map(mapRef.current, { zoomControl: false }).setView([47.6672977, 19.0770616], 6);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
    }).addTo(map);
    var koalaIcon = L.icon({
      iconUrl: 'fav_mini.png',
      iconSize: [30, 18], // size of the icon
      iconAnchor: [15, 9], // point of the icon which will correspond to marker's location
      popupAnchor: [-15, -9] // point from which the popup should open relative to the iconAnchor
    });

    L.heatLayer(heatmapData, {
      radius: 35,
      blur: 25,
      maxZoom: 8,
      max: 10,
      minOpacity: 0.5
    }).addTo(map);
    {
      locations.map(loc => L.marker(loc.latlng, { icon: koalaIcon }).bindPopup(listConcerts(loc)).openPopup().addTo(map))
    }
    return () => {
      map.remove();
    };
  }, []);

  const listConcerts = (location) => {
    let locationString = location.place ? location.place + ', ' + location.city : location.city
    let concertsInPlace = concerts.filter(concert => concert.locationId === location.id);
    let returnString = "<div>";
    returnString += `<b>${locationString}</b>`
    returnString += "<ul>"

    concertsInPlace.map(concert => {
      returnString += "<li>"
      returnString += `<a href="/buli/${concert.id}">${concert.id}. ${concert.title}, ${concert.year}. ${concert.date}</a>`
      returnString += "</li>"
    }
    )
    returnString += "</ul></div>"

    return returnString
  }

  return <div ref={mapRef} style={{ height: "500px" }}>
    <MapContainer whenCreated={() => { }} center={[47.6672977, 19.0770616]} zoom={6} scrollWheelZoom={true} style={{ height: '500px' }}>
    </MapContainer>
  </div>;
}

export default Map;