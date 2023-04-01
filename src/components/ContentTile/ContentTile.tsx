import { useState, useEffect } from "react";
import { IContent } from "../../types";
import { Link } from "react-router-dom";
import { animations } from "../../data/animations";
import { locations } from "../../data/locations";
import { useMediaQuery } from 'react-responsive'
import { FaVideo } from "react-icons/fa";

const emptyImages: string[] = [
  "/concerts/empty.jpg",
  "/concerts/empty_2.jpg",
  "/concerts/empty_3.jpg",
  "/concerts/empty_4.jpg",
  "/concerts/empty_5.jpg",
  "/concerts/empty_6.jpg",
  "/concerts/empty_7.jpg"
]

export const ContentTile: React.FC<IContent> = (props, id) => {
  const isTabletOrBigger = useMediaQuery({ minWidth: 768 })
  const isDesktop = useMediaQuery({ minWidth: 1024 })

  const randomEmptyImg = Math.floor(Math.random() * emptyImages.length);
  // const randomAnimation = Math.floor(Math.random() * animations.length);

  return (
    <>
      <Link key={id} to={props.url} target={props.url.indexOf("http") > -1 ? "__blank" : ""} className={`relative flex flex-col border border-white item-small overflow-hidden shadow-lg  bg-black p-2 transition-all duration-1000 ease-in-out hover:invert hover:scale-105	${Math.random() > 0.5 ? "hover:rotate-1" : "hover:rotate-[-1deg]"} ${props.title.length > 120 ? Math.random() > 0.5 ? "row-span-2" : "col-span-2" : ""}`}
        // data-aos={isTabletOrBigger && animations[randomAnimation]}
      >
        <img src={props.img || emptyImages[Math.floor(Math.random() * emptyImages.length)]}
          className={`h-full w-full opacity-70 object-cover	object-top transition-all duration-1000 ease-in-out hover:invert hover:scale-105 ${Math.random() > 0.5 ? "hover:rotate-1" : "hover:rotate-[-1deg]"}`}
        />
        <span className="absolute text-white bg-[rgba(0,0,0,0.8)] p-2">{props.title}</span>
      </Link>
    </>
  )
}

export default ContentTile;
