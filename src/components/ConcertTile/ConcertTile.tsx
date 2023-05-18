import { useState, useEffect } from "react";
import { IConcert } from "../../types";
import { Link } from "react-router-dom";
import { animations } from "../../data/animations";
import { locations } from "../../data/locations";
import { useMediaQuery } from 'react-responsive'
import { FaVideo } from "react-icons/fa";
import { useRandomEmptyImage } from '../../hooks/useRandomEmptyImage';

const imgSizes: string[] = [
  "item-original",
  "item-small",
  "item-medium",
  "item-rect-left",
  "item-rect-middle",
  "item-rect-right"
]

export const ConcertTile: React.FC<IConcert> = (props) => {
  const isTabletOrBigger = useMediaQuery({ minWidth: 768 })
  const isDesktop = useMediaQuery({ minWidth: 1024 })

  const randomImg = Math.floor(Math.random() * imgSizes.length);
  const randomAnimation = Math.floor(Math.random() * animations.length);
  const emptyImage = useRandomEmptyImage();


  const [location, setLocation] = useState("");

  useEffect(() => {
    let locationObject = locations.filter(loc => loc.id === props.locationId)[0];
    let locationString = locationObject.place ? locationObject.place + ', ' + locationObject.city : locationObject.city
    setLocation(locationString);
  }, [])


  return (
    <>
      <Link to={`/buli/${props.id}`} className={`flex mb-8 md:mb-0 flex-col border border-black bg-white p-4 overflow-hidden shadow-lg ${isDesktop ? props.size ? props.size : imgSizes[randomImg] : Math.random() > 0.5 ? "item-small" : "item-medium"}`}
        // data-aos={isTabletOrBigger && animations[randomAnimation]}
        title={props.description}
      >
        <div className={`h-full w-full overflow-hidden relative ${Math.random() > 0.8 && "rotate-[180deg]"}`}>
          <img src={"./concerts/" + props.img}
            onError={({ currentTarget }) => {
              currentTarget.onerror = null; // prevents looping
              currentTarget.src = emptyImage;
            }}
            className={`h-full w-full object-cover object-top transition-all duration-1000 ease-in-out hover:invert hover:scale-105 ${Math.random() > 0.5 ? "hover:rotate-1" : "hover:rotate-[-1deg]"}`}
          />
          {props.ytIds &&
            <FaVideo size={"1em"} className="absolute top-2 right-2 text-gir-500" />
          }
        </div>
        <div className={`pt-4 ${Math.random() > 0.8 && "scale-x-[-1]"}`}>
          <div className="uppercase text-gray-900 font-black pb-2">
            {props.id}. {props.title}
          </div>
          <div className="text-xs text-gray-700">
            {location}, {props.year}. {props.date}
          </div>
        </div>
      </Link>
    </>
  )
}

export default ConcertTile;
