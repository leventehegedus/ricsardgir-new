import { useState, useEffect } from "react";
import { IConcert } from "../../types";
import { concerts } from "../../data/concerts";
import { useParams } from 'react-router';
import { Link } from "react-router-dom";
import { ErrorPage } from "../../pages/ErrorPage/ErrorPage";

export const Concert: React.FC<IConcert> = () => {

  const { id } = useParams();
  const [concert, setConcert] = useState<IConcert>();

  useEffect(() => {
    let concert = concerts.filter(conc => conc.id === Number(id));
    setConcert(concert[0]);
    window.scroll(0, 0);
  }, [id])

  return (
    <div className="max-w-5xl p-4 pt-8 m-auto">
      {concert ?
        <>
          <div className="mb-4">
            <div className="uppercase font-black text-black text-center">
              {concert ?.id}. {concert ?.title}
            </div>
            <div className="text-center mb-4">
              {concert ?.location}, {concert ?.year}. {concert ?.date}
            </div>
            <img src={"/concerts/" + concert.img} className="m-auto max-w-full rounded-lg mb-4" />
            <div>
              {concert.description}
            </div>
          </div>
          <div className="font-black text-black flex justify-between">
            {id && <Link to={`/buli/${+id - 1}`} className="hover:text-red-500">Előző bulikrumpli</Link>}
            <Link to={'/buli'} className="hover:text-red-500">Vissza az összes bulikrumplira</Link>
            {id && <Link to={`/buli/${+id + 1}`} className="hover:text-red-500">Következő bulikrumpli</Link>}
          </div>
        </>
        :
        <ErrorPage />
      }
    </div>
  )
}

export default Concert;
