import { useState, useEffect } from "react";
import { IConcert } from "../../types";
import { concerts } from "../../data/concerts";
import { locations } from "../../data/locations";
import { useParams } from 'react-router';
import { Link } from "react-router-dom";
import { ErrorPage } from "../../pages/ErrorPage/ErrorPage";
import YouTube from 'react-youtube';

export const Concert: React.FC = () => {

  const { id } = useParams();
  const [concert, setConcert] = useState<IConcert>();
  const [location, setLocation] = useState("");

  useEffect(() => {
    let concert = concerts.filter(conc => conc.id === Number(id))[0];
    setConcert(concert);
    let locationObject = locations.filter(loc => loc.id === concert.locationId)[0];
    let locationString = locationObject.place ? locationObject.place + ', ' + locationObject.city : locationObject.city
    setLocation(locationString);
    window.scroll(0, 0);
  }, [id])


  return (
    <div className="max-w-5xl p-4 pb-8 pt-8 m-auto text-white">
      {concert ?
        <div>
          <div className="mb-4">
            <div className="uppercase font-black text-center">
              {concert ?.id}. {concert ?.title}
            </div>
            <div className="text-center mb-4">
              {location}, {concert ?.year}. {concert ?.date}
            </div>
            <img src={"/concerts/" + concert.img} className="m-auto max-w-full mb-4" />
            <div className="mb-4">
              {concert.description}
            </div>
            { concert.ytIds && <div className="mb-4">Koncertvideók:</div>}
            {concert.ytIds?.map(ytId => {
              return (
                <div className="flex justify-center mb-4">
                  <YouTube videoId={ytId} />
                </div>
              )
            })
            }
          </div>
          <div className="font-black flex justify-between">
            {id && <Link to={`/buli/${+id - 1}`} className="hover:text-red-500">Előző bulikrumpli</Link>}
            <Link to={'/buli'} className="hover:text-red-500">Vissza az összes bulikrumplira</Link>
            {id && <Link to={`/buli/${+id + 1}`} className="hover:text-red-500">Következő bulikrumpli</Link>}
          </div>
        </div>
        :
        <ErrorPage />
      }
    </div>
  )
}

export default Concert;
