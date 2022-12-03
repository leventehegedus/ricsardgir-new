import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const tinderMembers: { name: string, folder: string }[] = [
  {
    name: "Mártondani",
    folder: "martondani"
  }, {
    name: "Laci",
    folder: "laci"
  },
  {
    name: "Alma",
    folder: "alma"
  }, {
    name: "Flóra",
    folder: "flora"
  }, {
    name: "Éva",
    folder: "eva"
  }
]

export const Tinder: React.FC = () => {

  const [members, setMembers] = useState([])
  const [likedMembers, setLikedMembers] = useState([])
  const [dislikedMembers, setDislikedMembers] = useState([])

  useEffect(() =>  {
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
    // let membersArray = [...members];
    // membersArray.unshift(members[index]);
    // setMembers(membersArray);
//    todo
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setLikedMembers([]);
      setDislikedMembers([]);
    }, 1000);
    return () => clearTimeout(timer);
  }, [likedMembers, dislikedMembers]);

  const isLiked = (index) => {
    return likedMembers.includes(index)
  }

  const isDisliked = (index) => {
    return dislikedMembers.includes(index)
  }

  const renderTinderCard = (member, index: number) => {
    return (
      <div key={index} className={`w-[300px] h-[540px] m-auto absolute top-0 left-0 right-0 bottom-0 m-auto border border-white bg-black text-white transition-all duration-1000 ${isLiked(index) && "text-gir-500 left-[10000px] rotate-90 transition-all duration-1000 ease-in-out"} ${isDisliked(index) && "text-gir-500 left-[-10000px] rotate-[-90deg] transition-all duration-1000 ease-in-out"}`}>
        <div className="h-[300px]">
          <img src={`/tinder/${member.folder}/profil/profil.jpg`} className="w-full h-full object-cover object-center" />
        </div>
        <div>
          <div onClick={() => { decideMember(index, false) }}>dislike</div>
          <div>{member.name}</div>
          <div onClick={() => { decideMember(index, true) }}>like</div>
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
