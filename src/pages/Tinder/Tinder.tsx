import { useState, useEffect } from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { tinderMembers } from "../../data/tinder";
import Modal from 'react-modal';
import { ITinderProfile } from "../../types";
import { useMediaQuery } from 'react-responsive'
import TinderCard from "../../components/TinderCard/TinderCard";


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

  useEffect(() => {
    if (likedMembers.length + dislikedMembers.length === members.length) {
      const timer = setTimeout(() => {
        setLikedMembers([]);
        setDislikedMembers([]);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [likedMembers, dislikedMembers]);

  function closeModal() {
    setIsOpen(false);
  }

  const renderAboutBlock = (titleText: string, content: string) => {
    return (
      <div>
        <div className="text-gray-900 font-black pb-2">
          {titleText}
        </div>
        <div className="text-xs text-gray-700">
          {content}
        </div>
      </div>
    )
  }

  const renderInterests = (interests: string[]) => {
    return (
      <div>
        <div className="text-gray-900 font-black pb-2">
          Érdeklődés
        </div>
        <div className="flex flex-wrap gap-x-2 gap-y-2">
          {interests.map((interest, index) => {
            return (
              <div className="border border-solid border-[#ff002b] p-2 text-xs text-gir-500 rounded-[0.25rem]" key={index}>
                {interest}
              </div>
            )
          })}
        </div>
      </div>
    )
  }

  return (
    <div className="w-full h-[calc(100vh-80px)] relative">
      {!modalIsOpen && members?.map((member, index) => <TinderCard
        key={index}
        member={member}
        index={index}
        setSelectedMember={setSelectedMember}
        likedMembers={likedMembers}
        dislikedMembers={dislikedMembers}
        setLikedMembers={setLikedMembers}
        setDislikedMembers={setDislikedMembers}
        setIsOpen={setIsOpen}
      />)}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        ariaHideApp={false}
      >
        {selectedMember &&
          <div className="w-full h-full bg-white rounded-[2rem] p-8 relative sm:flex flex-row-reverse justify-between gap-x-4 gap-y-4 overflow-auto sm:overflow-hidden">
            <div className="w-full sm:w-1/3 overflow-auto flex flex-col gap-4 mb-4 sm:mb-0">
              {renderAboutBlock(`${selectedMember.name}, ${new Date().getFullYear() - selectedMember.yearOfBirth}`, selectedMember.shortBio)}
              {renderAboutBlock("Lakhely", selectedMember.location)}
              {selectedMember.interests && renderInterests(selectedMember.interests)}
              {renderAboutBlock("Rólam", selectedMember.longBio)}
            </div>
            <div className="w-full sm:w-2/3 overflow-auto">
              {selectedMember?.images.map((img, index) => {
                return (
                  <div className={`flex mb-8 last:mb-0 flex-col overflow-hidden sm:pr-4`}
                    key={index}
                  >
                    <img src={`/tinder/${selectedMember.id}/${img}`} className="h-full w-full object-cover object-top rounded-[1rem]" />
                  </div>
                )
              })}
            </div>
            <RiCloseCircleLine size={isTabletOrBigger ? "2rem" : "1.5rem"} onClick={() => { closeModal() }} className="absolute top-8 right-8" />
          </div>
        }
      </Modal >
      <audio id="tinderAudio" className="invisible" src="" autoPlay />
    </div >
  )
}


export default Tinder;
