export interface IConcert {
  id: number,
  title: string,
  description: string,
  year: number,
  date: string,
  location: string,
  img: string,
  size: string,
  position: string,
  height: number
}

export interface IConcertYear {
  year: number,
  content: IConcert[]
}
