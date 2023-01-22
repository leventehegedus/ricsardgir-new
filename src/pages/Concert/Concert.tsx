import { useState, useEffect } from "react";
import { IConcert } from "../../types";
import { concerts } from "../../data/concerts";
import { locations } from "../../data/locations";
import { useParams } from 'react-router';
import { Link } from "react-router-dom";
import { ErrorPage } from "../../pages/ErrorPage/ErrorPage";
import YouTube from 'react-youtube';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useMediaQuery } from 'react-responsive'


const emptyImages: string[] = [
  "/concerts/empty.jpg",
  "/concerts/empty_2.jpg",
  "/concerts/empty_3.jpg",
  "/concerts/empty_4.jpg",
  "/concerts/empty_5.jpg",
  "/concerts/empty_6.jpg",
  "/concerts/empty_7.jpg"
]

export const Concert: React.FC = () => {

  const { id } = useParams();
  const [concert, setConcert] = useState<IConcert>();
  const [location, setLocation] = useState("");
  const randomEmptyImg = Math.floor(Math.random() * emptyImages.length);
  const isTabletOrBigger = useMediaQuery({ minWidth: 768 })

  useEffect(() => {
    let concert = concerts.filter(conc => conc.id === Number(id))[0];
    setConcert(concert);
    let locationObject = locations.filter(loc => loc.id === concert.locationId)[0];
    let locationString = locationObject.place ? locationObject.place + ', ' + locationObject.city : locationObject.city
    setLocation(locationString);
    window.scroll(0, 0);
  }, [id])


  return (
    <div className="max-w-5xl pb-8 pt-8 ">
      {concert ?
        <div>
          <div className="mb-4">
            <div className="uppercase font-black text-center">
              {concert ?.id}. {concert ?.title}
            </div>
            <div className="text-center mb-4">
              {location}, {concert ?.year}. {concert ?.date}
            </div>
            <div className="relative">
              <img src={"/concerts/" + concert.img} className="m-auto max-w-full mb-4"
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null; // prevents looping
                  currentTarget.src = emptyImages[randomEmptyImg];
                }}
              />
              {id && <Link to={`/buli/${+id - 1}`} className="absolute top-[50%] translate-y-[-50%] left-0 transition-all duration-1000 ease-in-out hover:text-red-500 hover:scale-125"><FaChevronLeft size={"3em"} /></Link>}
              {id && <Link to={`/buli/${+id + 1}`} className="absolute top-[50%] translate-y-[-50%] right-0 transition-all duration-1000 ease-in-out hover:text-red-500 hover:scale-125"><FaChevronRight size={"3em"} /></Link>}
            </div>
            <div className="mb-4">
              {concert.description}
            </div>
            {concert.ytIds && <div className="mb-4">Koncertvideók:</div>}
            {concert.ytIds ?.map(ytId => {
              return (
                <div className="flex justify-center mb-4">
                  {isTabletOrBigger ?
                    <YouTube videoId={ytId} className="max-w-full" />
                    :
                    <YouTube videoId={ytId} className="max-w-full" opts={{ width: '100%' }} />
                  }
                </div>
              )
            })
            }
          </div>
          <div className="font-black flex justify-between items-center">
            <Link to={'/buli'} className="hover:text-red-500">Vissza</Link>
          </div>
        </div>
        :
        <ErrorPage />
      }
    </div>
  )
}

export default Concert;
