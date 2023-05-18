import Slider from "react-slick";
import { FaHeart, FaRegTimesCircle, FaImages } from "react-icons/fa";
import { useMediaQuery } from 'react-responsive'
import { ITinderProfile } from "../../types";

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
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
        <div key={index} className={`w-[18rem] h-[30rem] md:w-[24rem] md:h-[40rem] lg:w-[32rem] p-4 rounded-[2rem] m-auto mt-0 absolute top-0 left-0 right-0 bottom-0 bg-white transition-all duration-1000 ${isLiked(index) && "text-gir-500 left-[10000px] rotate-90 transition-all duration-1000 ease-in-out"} ${isDisliked(index) && "text-gir-500 left-[-10000px] rotate-[-90deg] transition-all duration-1000 ease-in-out"}`}>
            <div className="flex justify-center mb-4">
                <img src="./fav.png" className="h-[2rem] align-center" />
            </div>
            <div className="h-[16rem] md:h-[25rem] mb-4">
                <Slider {...settings} className="w-full h-full">
                    {member.images.map((img: string) => {
                        return (
                            <img key={img} src={`/tinder/${member.id}/${img}`} onClick={() => { setSelectedMember(member); setIsOpen(true) }} className="w-full h-[16rem] md:h-[24rem] rounded-3xl object-cover object-center" />
                        )
                    })}
                </Slider>
            </div>
            <div className="mb-4">
                <div className="font-black mb-2 h-[1.5rem] line-clamp-1 text-gray-900 text-center">{member.name}
                    {/* , {new Date().getFullYear() - member.yearOfBirth}, {member.location} */}
                </div>
                {<div className="text-xs text-center line-clamp-2 h-[2rem] text-gray-700">{member.shortBio}</div>}
            </div>
            <div className="flex justify-between md:justify-center md:gap-[4rem] h-2rem md:h-[3rem] items-center md:px-8">
                <div onClick={() => { playSound(member, false); decideMember(index, false) }}><FaRegTimesCircle size={"3rem"} color={"#00D387"} className="hover:rotate-[360deg] cursor-pointer transition-all duration-1000 ease-in-out hover:scale-75" /></div>
                <div onClick={() => { setSelectedMember(member); setIsOpen(true) }}><FaImages size={"2em"} color={"07A6FF"} className="cursor-pointer transition-all duration-1000 ease-in-out hover:scale-125" /></div>
                <div onClick={() => { playSound(member, true); decideMember(index, true) }}><FaHeart size={"3rem"} className="hover:rotate-[360deg] cursor-pointer transition-all duration-1000 ease-in-out hover:scale-125" color={"#ff002b"} /></div>
            </div>
        </div>
    )
}

export default TinderCard;
