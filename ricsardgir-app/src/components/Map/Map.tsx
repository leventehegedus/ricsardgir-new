import { ILocation } from "../../types";
import './style.css';
import { Link } from "react-router-dom";
import { locations } from "../../data/locations";
import { concerts } from "../../data/concerts";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

export const Map: React.FC = () => {

  const listConcerts = (location: ILocation) => {
    let locationString = location.place ? location.place + ', ' + location.city : location.city
    let concertsInPlace = concerts.filter(concert => concert.locationId === location.id);

    return (
      <div>
      {locationString}
      <ul>
        {concertsInPlace.map(concert => {
          return (
            <li key={concert.id}>
              <Link to={`/buli/${concert.id}`} className="hover:text-black hover:font-black">
                {concert.id}. {concert.title}, {concert.year}. {concert.date}
              </Link>
            </li>
          )
        })}
      </ul>
      </div>
    )
  }

  return (
    <>
      <MapContainer center={[47.6672977, 19.0770616]} zoom={6} scrollWheelZoom={true} style={{ height: '500px' }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {locations.map(loc =>  {
          return (
            <Marker position={loc.latlng} key={loc.id}>
              <Popup>
                {listConcerts(loc)}
              </Popup>
            </Marker>
          )
        })
        }
      </MapContainer>
    </>
  )
}

export default Map;
