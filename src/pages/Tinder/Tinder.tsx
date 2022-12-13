import { useState, useEffect } from "react";
import Slider from "react-slick";
import { FaHeart, FaHeartBroken, FaImages } from "react-icons/fa";
import { RiCloseCircleLine } from "react-icons/ri";
import { tinderMembers } from "../../data/tinder";
import Modal from 'react-modal';
import { ITinderProfile } from "../../types";
import { useMediaQuery } from 'react-responsive'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    width: '80%',
    maxWidth: '800px',
    height: '80%',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    zIndex: '100',
    padding: 0,
    borderRadius: 0,
    border: 'none',
    background: 'none'
  },
};
export const Tinder: React.FC = () => {

  const [members, setMembers] = useState<ITinderProfile[]>([])
  const [likedMembers, setLikedMembers] = useState<number[]>([])
  const [dislikedMembers, setDislikedMembers] = useState<number[]>([])
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState<ITinderProfile>()
  const isTabletOrBigger = useMediaQuery({ minWidth: 768 })


  useEffect(() => {
    setMembers(tinderMembers);
  }, [])

  const decideMember = (index: number, isLike: boolean) => {
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

  const isLiked = (index: number) => {
    return likedMembers.includes(index)
  }

  const isDisliked = (index: number) => {
    return dislikedMembers.includes(index)
  }

  const playSound = (member: ITinderProfile, isItLike: boolean) =>  {
    let profileSound: HTMLAudioElement = document.getElementById("tinderAudio") as HTMLAudioElement;
    profileSound.src = `/tinder/${member.id}/hang/${isItLike ? "like" : "dislike"}/01.mp3`;
    profileSound.play();
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

  const renderTinderCard = (member: ITinderProfile, index: number) => {
    return (
      <div key={index} className={`w-[16rem] h-[24rem] md:w-[24rem] md:h-[36rem] m-auto absolute top-0 left-0 right-0 bottom-0 m-auto border border-solid md:border-none border-white bg-black text-white transition-all duration-1000 ${isLiked(index) && "text-gir-500 left-[10000px] rotate-90 transition-all duration-1000 ease-in-out"} ${isDisliked(index) && "text-gir-500 left-[-10000px] rotate-[-90deg] transition-all duration-1000 ease-in-out"}`}>
        <div className="h-[16rem] md:h-[24rem]">
          <Slider {...settings} className="w-full h-full">
            {member.images.map((img: string) => {
              return (
                <img key={img} src={`/tinder/${member.id}/${img}`} className="w-full h-[16rem] md:h-[24rem] object-cover object-top border border-white border-8" />
              )
            })}
          </Slider>
        </div>
        <div className="p-4 h-[8rem] md:h-[12rem]">
          <div className="h-[4rem] md:h-[7rem]">
            <div><b>{member.name}</b>, {new Date().getFullYear() - member.yearOfBirth}, {member.location}</div>
            <div>{member.shortBio}</div>
          </div>
          <div className="flex justify-between h-2rem md:h-[3rem]">
            <div onClick={() => { playSound(member, false); decideMember(index, false) }}><FaHeartBroken size={isTabletOrBigger ? "3rem" : "1.5rem"} color={"#fd8100"} className="hover:rotate-[360deg] cursor-pointer transition-all duration-1000 ease-in-out hover:scale-75" /></div>
            <div onClick={() => { setSelectedMember(member); setIsOpen(true) }}><FaImages size={isTabletOrBigger ? "3rem" : "1.5rem"} className="cursor-pointer transition-all duration-1000 ease-in-out hover:scale-125" /></div>
            <div onClick={() => { playSound(member, true); decideMember(index, true) }}><FaHeart size={isTabletOrBigger ? "3rem" : "1.5rem"} className="hover:rotate-[360deg] cursor-pointer transition-all duration-1000 ease-in-out hover:scale-125" color={"#ff002b"} /></div>
          </div>
        </div>
      </div>
    )
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="w-full h-[calc(100vh-80px)] relative">
      {members ?.map((member, index) => {
        return renderTinderCard(member, index)
      })}

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        ariaHideApp={false}
        contentLabel="Example Modal"
      >
        {selectedMember &&
          <div className="w-full h-full bg-black text-white p-8 overflow-auto relative">
            <div className="mb-4">{selectedMember.name}</div>
            <div className="mb-4">{selectedMember.shortBio}</div>
            <div className="mb-4">{selectedMember.longBio}</div>
            <div className="grid md:grid-cols-2 lg:grid-cols-[repeat(auto-fit,_minmax(240px,_1fr))] overflow-auto auto-rows lg:auto-rows-[160px] grid-flow-row-dense gap-x-8 gap-y-8">
              {selectedMember ?.images.map((img, index) => {
                return (
                  <div className={`flex flex-col border border-black overflow-hidden shadow-lg ${Math.random() > 0.5 ? "item-original" : "item-small"}`}
                    key={index}
                  >
                    <img src={`/tinder/${selectedMember.id}/${img}`} className="h-full w-full object-cover	object-top" />
                  </div>
                )
              })}
            </div>
            <RiCloseCircleLine size={isTabletOrBigger ? "2rem" : "1.5rem"} onClick={() => {closeModal()}} className="absolute top-8 right-8"/>
          </div>
        }
      </Modal>
      <audio id="tinderAudio" className="invisible" src="" autoPlay/>
    </div>
  )
}


export default Tinder;
