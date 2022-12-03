import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { FaHeart, FaHeartBroken, FaImages } from "react-icons/fa";

const tinderMembers: { name: string, folder: string }[] = [
  {
    name: "Harrison Ford",
    folder: "ford",
    yearOfBirth: 1942,
    location: "Millenium Falcon",
    shortBio: "Vagyok olyan menő, mint én",
    images: [
      "/01.gif",
      "/02.gif",
      "/03.gif"
    ]
  },
  {
    name: "Hegedüs Levente",
    folder: "levi",
    yearOfBirth: 1992,
    location: "Silicon Valley",
    shortBio: "A honlap atya, beugró mindenes",
    images: [
      "/01.jpg",
      "/02.jpg"
    ]
  },
  {
    name: "Pacsika Máté",
    folder: "mate",
    yearOfBirth: 1989,
    location: "Silicon Valley",
    shortBio: "Nem szoktatok látni, de ott vagyok. :(",
    images: [
      "/01.jpg",
      "/02.jpg"
    ]
  },
  {
    name: "Tóth Dóra Lilla",
    folder: "dori",
    yearOfBirth: 1992,
    location: "Nunky Bay Starship",
    shortBio: "A próbákon úgy hívnak a srácok, hogy Tóth :(",
    images: [
      "/01.jpg",
      "/02.jpg",
      "/03.jpg"
    ]
  },
  {
    name: "Palvinbarbi",
    folder: "barbi",
    yearOfBirth: 1993,
    location: "Paris, NY, BDPST",
    shortBio: "Overálban is fázom",
    images: [
      "/01.jpg",
      "/02.jpg",
      "/03.jpg"
    ]
  },
  {
    name: "Mártondani",
    folder: "martondani",
    images: [
      "/01.jpg",
      "/02.jpg",
      "/03.jpg"
    ]
  },
  {
    name: "Laci",
    folder: "laci",
    yearOfBirth: 1991,
    location: "Szentendre",
    shortBio: "Szintis Lacinak hívnak a rajongók",
    images: [
      "/01.jpg",
      "/02.jpg",
      "/03.jpg"
    ]
  },
  {
    name: "Alma",
    folder: "alma",
    images: [
      "/01.jpg",
      "/02.jpg",
      "/03.jpg"
    ]
  }, {
    name: "Flóra",
    folder: "flora",
    images: [
      "/01.jpg",
      "/02.jpg",
      "/03.jpg"
    ]
  }, {
    name: "Éva",
    folder: "eva",
    images: [
      "/01.jpg",
      "/02.jpg",
      "/03.jpg"
    ]
  }
]

export const Tinder: React.FC = () => {

  const [members, setMembers] = useState([])
  const [likedMembers, setLikedMembers] = useState([])
  const [dislikedMembers, setDislikedMembers] = useState([])

  useEffect(() => {
    setMembers(tinderMembers);
  }, [])

  const decideMember = (index, isLike) => {
    if (isLike) {
      if (!likedMembers.includes(index)) {
        setLikedMembers([...likedMembers, index]);
      }
    }
    else {
      if (!dislikedMembers.includes(index)) {
        setDislikedMembers([...dislikedMembers, index]);
      }
    }

    //    todo
  }

  useEffect(() => {
    if (likedMembers.length + dislikedMembers.length === members.length) {
      const timer = setTimeout(() => {
        setLikedMembers([]);
        setDislikedMembers([]);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [likedMembers, dislikedMembers]);

  const isLiked = (index) => {
    return likedMembers.includes(index)
  }

  const isDisliked = (index) => {
    return dislikedMembers.includes(index)
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };

  const renderTinderCard = (member, index: number) => {
    return (
      <div key={index} className={`w-[360px] h-[540px] m-auto absolute top-0 left-0 right-0 bottom-0 m-auto border border-white bg-black text-white transition-all duration-1000 ${isLiked(index) && "text-gir-500 left-[10000px] rotate-90 transition-all duration-1000 ease-in-out"} ${isDisliked(index) && "text-gir-500 left-[-10000px] rotate-[-90deg] transition-all duration-1000 ease-in-out"}`}>
        <div className="h-[360px]">
          <Slider {...settings} className="w-full h-full">
            {member.images.map((img) =>  {
              return (
                <img key={img} src={`/tinder/${member.folder}/${img}`} className="w-full h-[360px] object-cover object-top border border-white border-8" />
              )
            })}
          </Slider>
          {/* <img src={`/tinder/${member.folder}/profil/profil.jpg`} className="w-full h-full object-cover object-center" /> */}
        </div>
        <div className="p-4 h-[180px]">
          <div className="h-[66.66%]">
            <div><b>{member.name}</b>, {new Date().getFullYear() - member.yearOfBirth}, {member.location}</div>
            <div>{member.shortBio}</div>
          </div>
          <div className="flex justify-between h-[33.33%]">
            <div onClick={() => { decideMember(index, false) }}><FaHeartBroken size={"3em"} color={"#fd8100"} className="hover:rotate-[360deg] cursor-pointer transition-all duration-1000 ease-in-out hover:scale-75" /></div>
            <div><FaImages size={"3em"} className="cursor-pointer transition-all duration-1000 ease-in-out hover:scale-125" /></div>
            <div onClick={() => { decideMember(index, true) }}><FaHeart size={"3em"} className="hover:rotate-[360deg] cursor-pointer transition-all duration-1000 ease-in-out hover:scale-125" color={"#ff0700"} /></div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full h-[calc(100vh-80px)] relative">
      {members ?.map((member, index) => {
        return renderTinderCard(member, index)
      })}
    </div>
  )
}


export default Tinder;
