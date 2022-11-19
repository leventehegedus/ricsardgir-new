import { ConcertYear } from "../../components/ConcertYear/ConcertYear";
import { IConcertYear } from "../../types";
import { concerts } from "../../data/concerts";

const allConcerts: IConcertYear[] = [{
  year: 2007,
  content: concerts.filter(concert => concert.year === 2007)
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
      {allConcerts?.sort((a,b) => b.year - a.year).map((year, index) => {
        return (
          <ConcertYear {...year} key={index} />
        )
      })}
    </div>
  )
}


export default ConcertsPage;
