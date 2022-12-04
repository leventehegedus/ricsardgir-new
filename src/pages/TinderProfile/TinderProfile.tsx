import { useState, useEffect } from "react";
import { ITinderProfile } from "../../types";
import { tinderMembers } from "../../data/tinder";
import { useParams } from 'react-router';
import { ErrorPage } from "../../pages/ErrorPage/ErrorPage";

export const TinderProfile: React.FC = () => {

  const { id } = useParams();
  const [member, setMember] = useState<ITinderProfile>();

  useEffect(() => {
    let member = tinderMembers.filter(member => member.folder === id);
    console.log(member);
    setMember(member[0]);
    window.scroll(0, 0);
  }, [id])


  return (
    <div className="max-w-5xl p-4 pt-8 m-auto text-white">
      {member ? member.name : ErrorPage}
    </div>
  )
}

export default TinderProfile;
