import { useState, useEffect } from "react";
import { ConcertYear } from "../../components/ConcertYear/ConcertYear";
import { IConcertYear } from "../../types";
import { concerts } from "../../data/concerts";


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

  return (
    <div>
      <div className="fixed p-8 z-50 w-full text-center">
        {
          allConcerts ?.sort((a, b) => b.year - a.year).map((year, index) => {
            return (
              <a key={index} href={`#year${year.year}`} className="p-2 bg-black text-white hover:text-gir-500 hover:font-black">{year.year}</a>
            )
          })}
      </div >
      {allConcerts ?.sort((a, b) => b.year - a.year).map((year, index) => {
        return (
          <ConcertYear {...year} key={index} />
        )
      })}
    </div>
  )
}


export default ConcertsPage;
