import Slider from "react-slick";
import { FaHeart, FaHeartBroken, FaImages } from "react-icons/fa";
import { useMediaQuery } from 'react-responsive'
import { ITinderProfile } from "../../types";

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
};

interface TinderCardProps {
    member: ITinderProfile;
    index: number;
    setSelectedMember: Function,
    likedMembers: number[],
    dislikedMembers: number[],
    setLikedMembers: Function,
    setDislikedMembers: Function,
    setIsOpen: Function
}

export const TinderCard: React.FC<TinderCardProps> = (props) => {
    const isTabletOrBigger = useMediaQuery({ minWidth: 768 })

    const { member, index, setSelectedMember, likedMembers, dislikedMembers, setLikedMembers, setDislikedMembers, setIsOpen } = props;

    const isLiked = (index: number) => {
        return likedMembers.includes(index)
    }

    const isDisliked = (index: number) => {
        return dislikedMembers.includes(index)
    }

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

    const playSound = (member: ITinderProfile, isItLike: boolean) => {
        let profileSound: HTMLAudioElement = document.getElementById("tinderAudio") as HTMLAudioElement;
        profileSound.src = `/tinder/${member.id}/hang/${isItLike ? "like" : "dislike"}/01.mp3`;
        profileSound.play();
    }

    return (
        <div key={index} className={`w-[16rem] h-[24rem] md:w-[24rem] md:h-[36rem] m-auto absolute top-0 left-0 right-0 bottom-0 m-auto border border-solid border-white bg-black transition-all duration-1000 ${isLiked(index) && "text-gir-500 left-[10000px] rotate-90 transition-all duration-1000 ease-in-out"} ${isDisliked(index) && "text-gir-500 left-[-10000px] rotate-[-90deg] transition-all duration-1000 ease-in-out"}`}>
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

export default TinderCard;
