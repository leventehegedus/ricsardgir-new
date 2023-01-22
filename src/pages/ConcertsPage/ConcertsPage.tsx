import { useState, useEffect } from "react";
import { ConcertYear } from "../../components/ConcertYear/ConcertYear";
import { Map } from "../../components/Map/Map";
import { IConcertYear } from "../../types";
import { concerts } from "../../data/concerts";
import { useMediaQuery } from 'react-responsive'


const allConcerts: IConcertYear[] = [{
  year: 2007,
  content: concerts.filter(concert => concert.year === 2007)
}, {
  year: 2008,
  content: concerts.filter(concert => concert.year === 2008)
}, {
  year: 2009,
  content: concerts.filter(concert => concert.year === 2009)
}, {
  year: 2010,
  content: concerts.filter(concert => concert.year === 2010)
}, {
  year: 2011,
  content: concerts.filter(concert => concert.year === 2011)
}, {
  year: 2012,
  content: concerts.filter(concert => concert.year === 2012)
}, {
  year: 2013,
  content: concerts.filter(concert => concert.year === 2013)
}, {
  year: 2014,
  content: concerts.filter(concert => concert.year === 2014)
},
{
  year: 2015,
  content: concerts.filter(concert => concert.year === 2015)
}, {
  year: 2016,
  content: concerts.filter(concert => concert.year === 2016)
},
{
  year: 2017,
  content: concerts.filter(concert => concert.year === 2017)
},
{
  year: 2018,
  content: concerts.filter(concert => concert.year === 2018)
},
{
  year: 2019,
  content: concerts.filter(concert => concert.year === 2019)
}
]


export const ConcertsPage: React.FC = () => {

  const isTabletOrBigger = useMediaQuery({ minWidth: 768 })

  const [showMap, setShowMap] = useState(false);

  return (
    <div className="pt-20">
      <div className="lg:fixed top-20 w-full z-20 p-4 text-center flex  justify-center">
        <div className="bg-black p-2 flex items-center">
          <span>Térképes nézet: </span>
          <button onClick={() => { setShowMap(!showMap) }} className="border-solid border-white border hover:text-gir-500 hover:font-black p-2 shadow-[2px_2px_0_rgb(255,255,255)] hover:shadow-[0px_0px_0_rgb(255,255,255)] hover:mt-[2px] hover:mb-[-2px] hover:ml-[2px] hover:mr-[-2px]">{showMap ? 'kikapcs' : 'bekapcs'}</button>
          {
            isTabletOrBigger && allConcerts ?.sort((a, b) => b.year - a.year).map((year, index) => {
              return (
                <a key={index} href={`#year${year.year}`} className={`p-2 hover:text-gir-500 hover:font-black ${Math.random() > 0.6 && "rotate-180"}`}>{year.year}</a>
              )
            })}
        </div >
      </div>
      {showMap &&
        <div className="p-8 z-20 w-full grayscale">
          <Map />
        </div>
      }
      {allConcerts ?.sort((a, b) => b.year - a.year).map((year, index) => {
        return (
          <ConcertYear {...year} key={index} />
        )
      })}
    </div>
  )
}


export default ConcertsPage;
