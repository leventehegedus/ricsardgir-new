import { useState, useEffect } from "react";
import { ConcertYear } from "../../components/ConcertYear/ConcertYear";
import { Map } from "../../components/Map/Map";
import { IConcertYear } from "../../types";
import { concerts } from "../../data/concerts";
import { useMediaQuery } from 'react-responsive'
import { FaRegCheckSquare, FaRegSquare } from "react-icons/fa";
import { useScrollPosition } from "../../hooks/useScrollPosition";


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
},
{
  year: 2020,
  content: concerts.filter(concert => concert.year === 2020)
}, {
  year: 2021,
  content: concerts.filter(concert => concert.year === 2021)
}, {
  year: 2022,
  content: concerts.filter(concert => concert.year === 2022)
}, {
  year: 2023,
  content: concerts.filter(concert => concert.year === 2023)
}]


export const ConcertsPage: React.FC = () => {

  const isTabletOrBigger = useMediaQuery({ minWidth: 768 })

  const [showMap, setShowMap] = useState(true);
  const [videoFilter, setVideoFilter] = useState(false);

  return (
    <div className="pt-20">
      <div className="lg:fixed lg:left-0 top-20 w-full z-20 p-4 text-center flex  justify-center z-[1001]">
        <div className="bg-black p-2">
          <div className="flex gap-8">
            <div className="flex items-center">
              <span>Térképes nézet:</span>
              <button onClick={() => { setShowMap(!showMap) }} className="ml-2">{showMap ? <FaRegCheckSquare size="2em" /> : <FaRegSquare size="2em" />}</button>
            </div>
            <div className="flex items-center">
              <span>Csak videós koncertek:</span>
              <button onClick={() => { setVideoFilter(!videoFilter) }} className="ml-2">{videoFilter ? <FaRegCheckSquare size="2em" /> : <FaRegSquare size="2em" />}</button>
            </div>
          </div>
          <div className="flex flex-wrap">
            {
              isTabletOrBigger && allConcerts?.sort((a, b) => b.year - a.year).map((year, index) => {
                return (
                  <a key={index} href={`#year${year.year}`} className={`p-2 hover:text-gir-500 hover:font-black ${Math.random() > 0.6 && "rotate-180"}`}>{year.year}</a>
                )
              })}
          </div >
        </div>
      </div>
      {showMap &&
        <div className="p-8 z-20 w-full">
          <Map />
        </div>
      }
      {allConcerts?.sort((a, b) => b.year - a.year).map((year, index) => {
        return (
          <ConcertYear {...year} key={index} videoFilter={videoFilter} />
        )
      })}
    </div>
  )
}


export default ConcertsPage;
