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

  return (
    <div className="w-full h-[calc(100vh-80px)] relative">
      {members ?.map((member, index) => <TinderCard
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
          <div className="w-full h-full bg-black p-8 overflow-auto relative">
            <div className="mb-4">{selectedMember.name}</div>
            <div className="mb-4">{selectedMember.shortBio}</div>
            <div className="mb-4">{selectedMember.longBio}</div>
            <div>
              {selectedMember ?.images.map((img, index) => {
                return (
                  <div className={`flex mb-8 flex-col border border-black overflow-hidden shadow-lg ${Math.random() > 0.5 ? "item-original" : "item-small"}`}
                    key={index}
                  >
                    <img src={`/tinder/${selectedMember.id}/${img}`} className="h-full w-full object-cover	object-top" />
                  </div>
                )
              })}
            </div>
            <RiCloseCircleLine size={isTabletOrBigger ? "2rem" : "1.5rem"} onClick={() => { closeModal() }} className="absolute top-8 right-8" />
          </div>
        }
      </Modal>
      <audio id="tinderAudio" className="invisible" src="" autoPlay />
    </div>
  )
}


export default Tinder;
