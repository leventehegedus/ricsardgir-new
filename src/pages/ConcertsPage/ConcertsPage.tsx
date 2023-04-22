import { useState, useEffect } from "react";
import { ConcertYear } from "../../components/ConcertYear/ConcertYear";
import { Map } from "../../components/Map/Map";
import { IConcertYear } from "../../types";
import { concerts } from "../../data/concerts";
import { locations } from "../../data/locations";
import { useMediaQuery } from 'react-responsive'
import { FaRegCheckSquare, FaRegSquare } from "react-icons/fa";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area } from 'recharts';

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

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100
  }
];


export const ConcertsPage: React.FC = () => {

  const isTabletOrBigger = useMediaQuery({ minWidth: 768 })

  const [showMap, setShowMap] = useState(false);
  const [videoFilter, setVideoFilter] = useState(false);
  let yearDataForGraph: { year: number, count: number }[] = []
  allConcerts.sort((a, b) => a.year - b.year).forEach(year => yearDataForGraph.push({ year: year.year, count: year.content.length }))

  const renderDataChart = (
    <AreaChart
      width={500}
      height={300}
      data={yearDataForGraph}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="10 10" />
      <XAxis dataKey="year" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Area type="monotone" name="koncertek" dataKey="count" stroke="#ff002b" activeDot={{ r: 8 }} />
    </AreaChart>
  )

  console.log(concerts, locations)


  return (
    <div className="pt-20">
      <div className="text-black">
        <ResponsiveContainer width='100%' aspect={4.0 / 2.0}>
          {renderDataChart}
        </ResponsiveContainer>
      </div>
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
        <div className="p-8 z-20 w-full grayscale-[30%] saturate-[0.5]">
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
