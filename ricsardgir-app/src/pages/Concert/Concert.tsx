import { useState, useEffect } from "react";
import { IConcert } from "../../types";
import { concerts } from "../../data/concerts";

export const Concert: React.FC<IConcert> = () => {

  const [concertId, setConcertId] = useState(0);

  useEffect(() =>  {
    const url = window.location.pathname.split("/");
    setConcertId(+url[2]);
  }, [])


  const concert = concerts?.filter(concert => concertId === concert.id);

  return (
    <>
      <div>
        { concert?.id }
      </div>
    </>
  )
}

export default Concert;
