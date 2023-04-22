import { useState, useEffect } from "react";
import { IConcertYear } from "../../types";
import { concerts } from "../../data/concerts";
import { locations } from "../../data/locations";
import { useMediaQuery } from 'react-responsive'
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


export const StatPage: React.FC = () => {

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

  // const topCities = Object.entries(concerts.map(concert => locations.find(location => location.id === concert.locationId).city).reduce((acc, curr) => {
  //   if (curr in acc) {
  //     acc[curr]++;
  //   } else {
  //     acc[curr] = 1;
  //   }
  //   return acc;
  // }, {})).sort((a, b) => b[1] - a[1])
  console.log(concerts, locations)

  return (
    <div className="pt-20">
      <div className="text-white">
        <div>Összes koncert: {concerts.length}</div>
        <ResponsiveContainer width='100%' aspect={4.0 / 2.0}>
          {renderDataChart}
        </ResponsiveContainer>
      </div>
    </div>
  )
}


export default StatPage;
