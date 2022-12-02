import {useState, useEffect} from "react";
import { IConcert } from "../../types";
import './style.css';
import { Link } from "react-router-dom";
import { animations } from "../../data/animations";
import { locations } from "../../data/locations";
import { useMediaQuery } from 'react-responsive'

const imgSizes: string[] = [
  "item-original",
  "item-small",
  "item-medium",
  "item-rect-left",
  "item-rect-middle",
  "item-rect-right"
]

const emptyImages: string[] = [
  "./concerts/empty.jpg",
  "./concerts/empty_2.jpg",
  "./concerts/empty_3.jpg",
  "./concerts/empty_4.jpg",
  "./concerts/empty_5.jpg",
  "./concerts/empty_6.jpg",
  "./concerts/empty_7.jpg"
]

export const ConcertTile: React.FC<IConcert> = (props) => {
  const isTabletOrBigger = useMediaQuery({ minWidth: 768 })
  const isDesktop = useMediaQuery({ minWidth: 1024 })

  const randomImg = Math.floor(Math.random() * imgSizes.length);
  const randomEmptyImg = Math.floor(Math.random() * emptyImages.length);
  const randomAnimation = Math.floor(Math.random() * animations.length);

  const [location, setLocation] = useState("");

  useEffect(() => {
    let locationObject = locations.filter(loc => loc.id === props.locationId)[0];
    let locationString = locationObject.place ? locationObject.place + ', ' + locationObject.city : locationObject.city
    setLocation(locationString);
  }, [])


  return (
    <>
      <Link to={`/buli/${props.id}`} className={`flex flex-col border border-black overflow-hidden shadow-lg	${isDesktop ? props.size ? props.size : imgSizes[randomImg] : Math.random() > 0.5 ? "item-small" : "item-medium"}`}
        data-aos={isTabletOrBigger && animations[randomAnimation]}
      >
        <div className="h-full w-full overflow-hidden">
          <img src={"./concerts/" + props.img}
            onError={({ currentTarget }) => {
              currentTarget.onerror = null; // prevents looping
              currentTarget.src = emptyImages[randomEmptyImg];
            }}
            className={`h-full w-full object-cover	object-top transition-all duration-1000 ease-in-out hover:invert hover:scale-105 ${Math.random() > 0.5 ? "hover:rotate-1" : "hover:rotate-[-1deg]"}`}
          />
        </div>
        <div className="bg-black text-white p-2 text-xs">
          <div>
            {props.id}. {props.title}
          </div>
          <div>
            {location}, {props.year}. {props.date}
          </div>
        </div>
      </Link>
    </>
  )
}

export default ConcertTile;
