import { useState, useEffect } from "react";
import { IContent } from "../../types";
import { Link } from "react-router-dom";
import { animations } from "../../data/animations";
import { locations } from "../../data/locations";
import { useMediaQuery } from 'react-responsive'
import { FaVideo } from "react-icons/fa";
import { useRandomEmptyImage } from '../../hooks/useRandomEmptyImage';

export const ContentTile: React.FC<IContent> = (props) => {
  const isTabletOrBigger = useMediaQuery({ minWidth: 768 })
  const isDesktop = useMediaQuery({ minWidth: 1024 })
  const emptyImage = useRandomEmptyImage();


  return (
    <>
      <a key={props.id} href={props.url} target={props.url.indexOf("http") > -1 ? "__blank" : ""} className={`relative mb-8 md:mb-0 flex flex-col border border-white item-small overflow-hidden shadow-lg  bg-white p-2 transition-all duration-1000 ease-in-out${Math.random() > 0.5 ? "hover:rotate-1" : "hover:rotate-[-1deg]"} ${props.title.length > 70 ? "col-span-2" : ""}`}
        title={props.description}
      // data-aos={isTabletOrBigger && animation}
      >
        <div className={`h-full w-full overflow-hidden relative ${Math.random() > 0.8 && "rotate-180"}`}>
          <img src={props.img || emptyImage}
            className={`h-full w-full object-cover absolute object-top transition-all duration-1000 ease-in-out hover:invert hover:scale-105 ${Math.random() > 0.5 ? "hover:rotate-1" : "hover:rotate-[-1deg]"}`}
          />
          {props.ytIds &&
            <FaVideo size={"1em"} className="absolute top-2 right-2 text-gir-500" />
          }
        </div>
        <div className="text-xs text-black pt-2 pb-2 h-12">
          <div className="font-black line-clamp-2">
            {props.title}
          </div>
        </div>
      </a>
    </>
  )
}

export default ContentTile;
